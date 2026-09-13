Object["defineProperty"](exports, Symbol["toStringTag"], {
  value: "Module"
});
var e = Object["create"],
  t = Object["defineProperty"],
  n = Object["getOwnPropertyDescriptor"],
  r = Object["getOwnPropertyNames"],
  i = Object["getPrototypeOf"],
  a = Object["prototype"]["hasOwnProperty"],
  o = (var_core_value_sig84C4, var_core_value_sigB6F7, var_core_value_sigB495, var_core_value_sig70D0) => {
    if (var_core_value_sigB6F7 && typeof var_core_value_sigB6F7 == "object" || typeof var_core_value_sigB6F7 == "function") {
      for (var var_core_value_sig2A8A = r(var_core_value_sigB6F7), var_core_value_sig3782 = 0x0, var_core_value_sigD22E = var_core_value_sig2A8A["length"], var_core_value_sig3455; var_core_value_sig3782 < var_core_value_sigD22E; var_core_value_sig3782++) var_core_value_sig3455 = var_core_value_sig2A8A[var_core_value_sig3782], !a["call"](var_core_value_sig84C4, var_core_value_sig3455) && var_core_value_sig3455 !== var_core_value_sigB495 && t(var_core_value_sig84C4, var_core_value_sig3455, {
        get: (var_core_value_sig9572 => var_core_value_sigB6F7[var_core_value_sig9572])["bind"](null, var_core_value_sig3455),
        enumerable: !(var_core_value_sig70D0 = n(var_core_value_sigB6F7, var_core_value_sig3455)) || var_core_value_sig70D0["enumerable"]
      });
    }
    return var_core_value_sig84C4;
  },
  s = (var_core_value_sig5CEF, var_core_value_sig43D5, var_core_value_sig1395) => (var_core_value_sig1395 = var_core_value_sig5CEF == null ? {} : e(i(var_core_value_sig5CEF)), o(var_core_value_sig43D5 || !var_core_value_sig5CEF || !var_core_value_sig5CEF["__esModule"] ? t(var_core_value_sig1395, "default", {
    value: var_core_value_sig5CEF,
    enumerable: !0x0
  }) : var_core_value_sig1395, var_core_value_sig5CEF));
let c = require("@univerjs-pro/bases"),
  l = require("@univerjs/core"),
  u = require("@univerjs/core/facade");
u = s(u);
let d = require("@univerjs/protocol"),
  f = require("@univerjs-pro/engine-formula");
var p = class {
    constructor(var_core_value_sig39B1, var_core_value_sig210D, var_core_value_sigB4B4) {
      this["_unitId"] = var_core_value_sig39B1, this["_commandService"] = var_core_value_sig210D, this["_permissionService"] = var_core_value_sigB4B4;
    }
    async ["setPoint"](var_core_value_sigD407, var_core_value_sig63F3) {
      await this["_commandService"]["executeCommand"](c["SetBasePermissionCommand"]["id"], {
        unitId: this["_unitId"],
        objectId: this["_unitId"],
        action: var_core_value_sigD407,
        value: var_core_value_sig63F3
      });
    }
    ["getPoint"](var_core_value_sig6A71) {
      return (0x0, c["getBasePermissionValue"])(this["_permissionService"], this["_unitId"], this["_unitId"], var_core_value_sig6A71);
    }
    async ["setEditable"](var_core_value_sig3BF6 = !0x0) {
      await this["_commandService"]["executeCommand"](c["SetBasePermissionCommand"]["id"], {
        unitId: this["_unitId"],
        objectId: this["_unitId"],
        action: d["UnitAction"]["Edit"],
        value: var_core_value_sig3BF6
      });
    }
    async ["setReadOnly"]() {
      await this["_commandService"]["executeCommand"](c["SetBasePermissionCommand"]["id"], {
        unitId: this["_unitId"],
        objectId: this["_unitId"],
        action: d["UnitAction"]["Edit"],
        value: !0x1
      });
    }
    ["canEdit"]() {
      return (0x0, c["getBasePermissionValue"])(this["_permissionService"], this["_unitId"], this["_unitId"], d["UnitAction"]["Edit"]);
    }
  },
  m = class {
    constructor(var_core_value_sig38CE, var_core_value_sig62B7, var_core_value_sig37A8, var_core_value_sigA90D, var_core_value_sig7A3C) {
      this["_unitId"] = var_core_value_sig38CE, this["_objectId"] = var_core_value_sig62B7, this["_parentObjectIds"] = var_core_value_sig37A8, this["_commandService"] = var_core_value_sigA90D, this["_permissionService"] = var_core_value_sig7A3C;
    }
    async ["setEditable"](var_core_value_sig0511 = !0x0) {
      await this["_commandService"]["executeCommand"](c["SetBasePermissionCommand"]["id"], {
        unitId: this["_unitId"],
        objectId: this["_objectId"],
        action: d["UnitAction"]["Edit"],
        value: var_core_value_sig0511
      });
    }
    async ["setReadOnly"]() {
      await this["_commandService"]["executeCommand"](c["SetBasePermissionCommand"]["id"], {
        unitId: this["_unitId"],
        objectId: this["_objectId"],
        action: d["UnitAction"]["Edit"],
        value: !0x1
      });
    }
    ["canEdit"]() {
      return (0x0, c["canEditBaseTargets"])(this["_permissionService"], this["_unitId"], [...this["_parentObjectIds"], this["_objectId"]]);
    }
  };
function h(var_core_value_sig9FA0, var_core_value_sig055E) {
  return function (var_core_value_sig1F44, var_core_value_sigCB04) {
    var_core_value_sig055E(var_core_value_sig1F44, var_core_value_sigCB04, var_core_value_sig9FA0);
  };
}
;
function g(var_core_value_sig7C77, var_core_value_sig9578, var_core_value_sigA2D3, var_core_value_sigC218) {
  var var_core_value_sigADEC = arguments[ox343148(0x12e)],
    var_core_value_sig3D8E = var_core_value_sigADEC < 0x3 ? var_core_value_sig9578 : var_core_value_sigC218 === null ? var_core_value_sigC218 = Object[ox343148(0x1ce)](var_core_value_sig9578, var_core_value_sigA2D3) : var_core_value_sigC218,
    var_core_value_sig37E5;
  if (typeof Reflect == "object" && typeof Reflect[ox343148(0x130)] == ox343148(0x1bc)) var_core_value_sig3D8E = Reflect["decorate"](var_core_value_sig7C77, var_core_value_sig9578, var_core_value_sigA2D3, var_core_value_sigC218);else {
    for (var var_core_value_sigF079 = var_core_value_sig7C77[ox343148(0x12e)] - 0x1; var_core_value_sigF079 >= 0x0; var_core_value_sigF079--) (var_core_value_sig37E5 = var_core_value_sig7C77[var_core_value_sigF079]) && (var_core_value_sig3D8E = (var_core_value_sigADEC < 0x3 ? var_core_value_sig37E5(var_core_value_sig3D8E) : var_core_value_sigADEC > 0x3 ? var_core_value_sig37E5(var_core_value_sig9578, var_core_value_sigA2D3, var_core_value_sig3D8E) : var_core_value_sig37E5(var_core_value_sig9578, var_core_value_sigA2D3)) || var_core_value_sig3D8E);
  }
  return var_core_value_sigADEC > 0x3 && var_core_value_sig3D8E && Object[ox343148(0x23c)](var_core_value_sig9578, var_core_value_sigA2D3, var_core_value_sig3D8E), var_core_value_sig3D8E;
}
let _ = class {
  constructor(var_core_value_sig947E, var_core_value_sig4545, var_core_value_sigF39A, var_core_value_sigF79C, var_core_value_sig2E54) {
    this[ox38ee0d(0x223)] = var_core_value_sig947E, this["_table"] = var_core_value_sig4545, this[ox38ee0d(0x24b)] = var_core_value_sigF39A, this["_commandService"] = var_core_value_sigF79C, this[ox38ee0d(0x27d)] = var_core_value_sig2E54;
  }
  ["getId"]() {
    return this[ox2ec752(0x24b)];
  }
  ["getPermission"]() {
    let var_core_value_sig7658 = this["_table"][ox5dabe6(0x24e)]();
    return new m(this[ox5dabe6(0x223)]["getId"](), (0x0, c[ox5dabe6(0x1b9)])(var_core_value_sig7658, this[ox5dabe6(0x24b)]), [(0x0, c["getBaseTablePermissionObjectId"])(var_core_value_sig7658)], this["_commandService"], this["_permissionService"]);
  }
  ["getField"]() {
    return this["_getField"]();
  }
  ["getName"]() {
    return this["_getField"]()[ox560ac6(0x162)];
  }
  ["getType"]() {
    return this[ox4d2a12(0x147)]()[ox4d2a12(0x222)];
  }
  ["getConfig"]() {
    return this[ox18907(0x147)]()[ox18907(0xff)];
  }
  ["getDefaultValue"]() {
    return this[oxef4ae9(0x147)]()[oxef4ae9(0x1e8)];
  }
  ["getDescription"]() {
    return this[ox10c566(0x147)]()["description"];
  }
  ["isReadonly"]() {
    return !!this[ox1021cf(0x147)]()[ox1021cf(0x104)];
  }
  ["setName"](var_core_value_sigDCF5) {
    return this["update"]({
      name: var_core_value_sigDCF5
    });
  }
  ["setConfig"](var_core_value_sigC786, var_core_value_sigC0D9) {
    return this[ox12e6ec(0x273)]({
      config: var_core_value_sigC786
    }, var_core_value_sigC0D9);
  }
  ["setDefaultValue"](var_core_value_sigF051) {
    return this["update"]({
      defaultValue: var_core_value_sigF051
    });
  }
  ["update"](var_core_value_sig5825, var_core_value_sig4EB7) {
    let var_core_value_sig73AF = this[ox278343(0x147)]()[ox278343(0x222)];
    return (var_core_value_sig5825["type"] ?? var_core_value_sig73AF) === l[ox278343(0x1f6)][ox278343(0x21c)] && (Object["prototype"]["hasOwnProperty"]["call"](var_core_value_sig5825, "config") || var_core_value_sig5825[ox278343(0x222)] === l[ox278343(0x1f6)]["Formula"]) && !this["_writeFormulaExternalReferences"](var_core_value_sig4EB7) ? !0x1 : this["_commandService"][ox278343(0x226)](c["UpdateBaseFieldCommand"]["id"], {
      unitId: this[ox278343(0x223)][ox278343(0x24e)](),
      tableId: this[ox278343(0x1c2)][ox278343(0x24e)](),
      fieldId: this["_fieldId"],
      patch: var_core_value_sig5825
    });
  }
  ["changeType"](var_core_value_sig548A, var_core_value_sigE026 = {}, var_core_value_sig339E) {
    return var_core_value_sig548A === l[ox217e98(0x1f6)][ox217e98(0x21c)] && !this[ox217e98(0x17c)](var_core_value_sig339E) ? !0x1 : this[ox217e98(0x110)][ox217e98(0x226)](c["ChangeBaseFieldTypeCommand"]["id"], {
      unitId: this[ox217e98(0x223)][ox217e98(0x24e)](),
      tableId: this[ox217e98(0x1c2)]["getId"](),
      fieldId: this[ox217e98(0x24b)],
      input: {
        type: var_core_value_sig548A,
        config: var_core_value_sigE026
      }
    });
  }
  ["delete"]() {
    return this["_commandService"][ox2e8cb3(0x226)](c[ox2e8cb3(0x281)]["id"], {
      unitId: this[ox2e8cb3(0x223)][ox2e8cb3(0x24e)](),
      tableId: this[ox2e8cb3(0x1c2)][ox2e8cb3(0x24e)](),
      fieldId: this[ox2e8cb3(0x24b)]
    });
  }
  ["move"](var_core_value_sig7550) {
    return this[ox4d9fae(0x110)][ox4d9fae(0x226)](c[ox4d9fae(0x1ed)]["id"], {
      unitId: this["_base"][ox4d9fae(0x24e)](),
      tableId: this["_table"]["getId"](),
      fieldId: this[ox4d9fae(0x24b)],
      target: var_core_value_sig7550
    });
  }
  ["_getField"]() {
    let var_core_value_sig2983 = this[ox1fdf11(0x1c2)][ox1fdf11(0x235)]()[ox1fdf11(0xeb)][this[ox1fdf11(0x24b)]];
    if (!var_core_value_sig2983) throw Error("[FField]:\x20field\x20\x22" + this["_fieldId"] + "\x22\x20does\x20not\x20exist.");
    return var_core_value_sig2983;
  }
  ["_writeFormulaExternalReferences"](var_core_value_sigE1B0) {
    if (!var_core_value_sigE1B0 || !Array[ox51f357(0x276)](var_core_value_sigE1B0["externalReferences"])) return console[ox51f357(0xde)](ox51f357(0x1c4)), !0x1;
    if (var_core_value_sigE1B0[ox51f357(0x17a)]["length"] === 0x0) return !0x0;
    let var_core_value_sigD4FF = this["_commandService"][ox51f357(0x226)](f[ox51f357(0x160)]["id"], {
      unitId: this["_base"][ox51f357(0x24e)](),
      references: var_core_value_sigE1B0[ox51f357(0x17a)]
    });
    return var_core_value_sigD4FF || console[ox51f357(0xde)]("[Base\x20Field\x20Facade]:\x20Failed\x20to\x20bind\x20External\x20References."), var_core_value_sigD4FF;
  }
};
_ = g([h(0x3, l["ICommandService"]), h(0x4, l["IPermissionService"])], _);
let v = function (var_core_value_sigFCA0) {
  return var_core_value_sigFCA0["Id"] = "id", var_core_value_sigFCA0[oxeb01e2(0x268)] = "name", var_core_value_sigFCA0[oxeb01e2(0xd2)] = oxeb01e2(0x151), var_core_value_sigFCA0;
}({});
function y(var_core_value_sigC84D) {
  return !!(var_core_value_sigC84D && var_core_value_sigC84D[ox5edc02(0x1f3)] !== !0x0 && var_core_value_sigC84D[ox5edc02(0x222)] !== l[ox5edc02(0x1f6)]["RecordId"]);
}
;
function b(var_core_value_sigF2BC, var_core_value_sigD37B, var_core_value_sigFA28 = "id") {
  if (!var_core_value_sigD37B) return {};
  let var_core_value_sig93BE = {};
  return Object[ox5cbf22(0x16b)](var_core_value_sigD37B)[ox5cbf22(0x282)](([var_core_value_sig1E5B, var_core_value_sigB680]) => {
    const var_core_value_sig1F64 = ox5cbf22;
    let var_core_value_sigDD1C = S(var_core_value_sigF2BC, var_core_value_sig1E5B, var_core_value_sigFA28);
    var_core_value_sig93BE[var_core_value_sigDD1C] = x(var_core_value_sigF2BC[var_core_value_sig1F64(0xeb)][var_core_value_sigDD1C], var_core_value_sigB680);
  }), var_core_value_sig93BE;
}
;
function x(var_core_value_sigABEC, var_core_value_sig2712) {
  if ((var_core_value_sigABEC == null ? void 0x0 : var_core_value_sigABEC[ox284a29(0x222)]) !== l[ox284a29(0x1f6)]["Attachment"] || var_core_value_sig2712 == null) return var_core_value_sig2712;
  if (!Array["isArray"](var_core_value_sig2712)) throw TypeError(ox284a29(0x247) + var_core_value_sigABEC[ox284a29(0x162)] + ox284a29(0x252));
  return var_core_value_sig2712[ox284a29(0x255)]((var_core_value_sig2C39, var_core_value_sigB7D1) => C(var_core_value_sigABEC, var_core_value_sig2C39, var_core_value_sigB7D1));
}
;
function S(var_core_value_sig0B9E, var_core_value_sigC545, var_core_value_sig12A7) {
  if (var_core_value_sig12A7 === "id" || var_core_value_sig12A7 === ox598ccf(0x151) && var_core_value_sig0B9E[ox598ccf(0xeb)][var_core_value_sigC545]) return var_core_value_sigC545;
  let var_core_value_sig6F4E = Object["values"](var_core_value_sig0B9E[ox598ccf(0xeb)])[ox598ccf(0xe9)](var_core_value_sig64F0 => var_core_value_sig64F0[ox598ccf(0x162)] === var_core_value_sigC545);
  if (var_core_value_sig6F4E[ox598ccf(0x12e)] === 0x1) return var_core_value_sig6F4E[0x0]["id"];
  throw var_core_value_sig6F4E[ox598ccf(0x12e)] > 0x1 ? Error("Duplicate\x20Base\x20field\x20name:\x20" + var_core_value_sigC545) : Error(ox598ccf(0x142) + var_core_value_sigC545);
}
;
function C(var_core_value_sigA021, var_core_value_sig49D9, var_core_value_sig320C) {
  let var_core_value_sigE7F0 = ox196d81(0x16f) + var_core_value_sig320C + "\x20for\x20field\x20\x22" + var_core_value_sigA021[ox196d81(0x162)] + "\x22";
  if (!O(var_core_value_sig49D9)) throw TypeError(var_core_value_sigE7F0 + ox196d81(0x280));
  if ("url" in var_core_value_sig49D9) throw TypeError(var_core_value_sigE7F0 + ox196d81(0x254));
  if (ox196d81(0x222) in var_core_value_sig49D9) throw TypeError(var_core_value_sigE7F0 + ox196d81(0x1c9));
  let var_core_value_sigE837 = T(var_core_value_sig49D9["id"], var_core_value_sigE7F0, "id"),
    var_core_value_sig34F4 = T(var_core_value_sig49D9["name"], var_core_value_sigE7F0, "name"),
    var_core_value_sigA45D = T(var_core_value_sig49D9[ox196d81(0x1e5)], var_core_value_sigE7F0, ox196d81(0x1e5));
  return {
    id: var_core_value_sigE837,
    name: var_core_value_sig34F4,
    source: var_core_value_sigA45D,
    sourceType: w(var_core_value_sig49D9[ox196d81(0x239)], var_core_value_sigA45D, var_core_value_sigE7F0),
    ...E(var_core_value_sig49D9, "mimeType", var_core_value_sigE7F0),
    ...D(var_core_value_sig49D9, "size", var_core_value_sigE7F0),
    ...D(var_core_value_sig49D9, "width", var_core_value_sigE7F0),
    ...D(var_core_value_sig49D9, ox196d81(0x24d), var_core_value_sigE7F0),
    ...E(var_core_value_sig49D9, "thumbnail", var_core_value_sigE7F0)
  };
}
;
function w(var_core_value_sig1BC7, var_core_value_sig4956, var_core_value_sigCC9E) {
  if (var_core_value_sig1BC7 == null) return var_core_value_sig4956[ox4c8d26(0x120)](ox4c8d26(0x123)) ? l[ox4c8d26(0x267)]["BASE64"] : l[ox4c8d26(0x267)][ox4c8d26(0x1fc)];
  if (var_core_value_sig1BC7 === l[ox4c8d26(0x267)]["URL"] || var_core_value_sig1BC7 === l[ox4c8d26(0x267)][ox4c8d26(0x107)] || var_core_value_sig1BC7 === l[ox4c8d26(0x267)]["BASE64"]) return var_core_value_sig1BC7;
  throw TypeError(var_core_value_sigCC9E + ox4c8d26(0x219));
}
;
function T(var_core_value_sig444C, var_core_value_sigE42E, var_core_value_sigF039) {
  if (typeof var_core_value_sig444C != ox59798a(0x275) || !var_core_value_sig444C[ox59798a(0xf1)]()) throw TypeError(var_core_value_sigE42E + ox59798a(0x199) + var_core_value_sigF039 + ox59798a(0x148));
  return var_core_value_sig444C;
}
;
function E(var_core_value_sigA321, var_core_value_sigBF4C, var_core_value_sig3457) {
  let var_core_value_sig4A08 = var_core_value_sigA321[var_core_value_sigBF4C];
  if (var_core_value_sig4A08 == null) return {};
  if (typeof var_core_value_sig4A08 != ox28683e(0x275) || !var_core_value_sig4A08[ox28683e(0xf1)]()) throw TypeError(var_core_value_sig3457 + ox28683e(0x199) + var_core_value_sigBF4C + ox28683e(0x19b));
  return {
    [var_core_value_sigBF4C]: var_core_value_sig4A08
  };
}
;
function D(var_core_value_sig1BC4, var_core_value_sig9EAB, var_core_value_sigA5C3) {
  let var_core_value_sig3A1E = var_core_value_sig1BC4[var_core_value_sig9EAB];
  if (var_core_value_sig3A1E == null) return {};
  if (typeof var_core_value_sig3A1E != ox375eea(0xd8) || !Number[ox375eea(0x209)](var_core_value_sig3A1E) || var_core_value_sig3A1E < 0x0) throw TypeError(var_core_value_sigA5C3 + ox375eea(0x199) + var_core_value_sig9EAB + ox375eea(0x200));
  return {
    [var_core_value_sig9EAB]: var_core_value_sig3A1E
  };
}
;
function O(var_core_value_sigDC92) {
  return typeof var_core_value_sigDC92 == ox562e4a(0x23b) && !!var_core_value_sigDC92 && !Array[ox562e4a(0x276)](var_core_value_sigDC92);
}
var k;
let A = k = class {
  constructor(var_core_value_sig85B1, var_core_value_sig3141, var_core_value_sig2162, var_core_value_sig2EAD, var_core_value_sig6774) {
    this["_base"] = var_core_value_sig85B1, this[ox4953fe(0x1c2)] = var_core_value_sig3141, this[ox4953fe(0xed)] = var_core_value_sig2162, this[ox4953fe(0x1e4)] = var_core_value_sig2EAD, this[ox4953fe(0x110)] = var_core_value_sig6774, this["_assertInBounds"]();
  }
  ["getBaseId"]() {
    return this["_base"][ox121d49(0x24e)]();
  }
  ["getTableId"]() {
    return this[ox3b94d7(0x1c2)][ox3b94d7(0x24e)]();
  }
  ["getRange"]() {
    return {
      ...this["_range"]
    };
  }
  ["getRow"]() {
    return this[ox1fea4f(0xed)]["startRow"];
  }
  ["getColumn"]() {
    return this[ox4b3e7c(0xed)][ox4b3e7c(0x144)];
  }
  ["getNumRows"]() {
    return this[ox49a504(0xed)][ox49a504(0xee)] - this[ox49a504(0xed)][ox49a504(0x218)] + 0x1;
  }
  ["getNumColumns"]() {
    return this[ox324a7c(0xed)][ox324a7c(0x10e)] - this[ox324a7c(0xed)][ox324a7c(0x144)] + 0x1;
  }
  ["getValues"]() {
    let var_core_value_sig340D = this[ox58299e(0x1f2)](),
      var_core_value_sig82D4 = this["_getFieldIds"](var_core_value_sig340D),
      var_core_value_sigBDE4 = [];
    for (let var_core_value_sigDF87 = this[ox58299e(0xed)][ox58299e(0x218)]; var_core_value_sigDF87 <= this["_range"][ox58299e(0xee)]; var_core_value_sigDF87++) {
      var var_core_value_sig7DF1;
      let var_core_value_sigD873 = (var_core_value_sig7DF1 = var_core_value_sig340D[ox58299e(0x172)]) == null ? void 0x0 : var_core_value_sig7DF1[var_core_value_sigDF87],
        var_core_value_sigA12B = [];
      for (let var_core_value_sig2AD8 = this[ox58299e(0xed)][ox58299e(0x144)]; var_core_value_sig2AD8 <= this["_range"][ox58299e(0x10e)]; var_core_value_sig2AD8++) {
        let var_core_value_sig7524 = var_core_value_sig82D4[var_core_value_sig2AD8];
        var_core_value_sigA12B[ox58299e(0xe0)](var_core_value_sigD873 && var_core_value_sig7524 ? (0x0, c[ox58299e(0x284)])(var_core_value_sig340D, var_core_value_sigD873, var_core_value_sig7524) : null);
      }
      var_core_value_sigBDE4[ox58299e(0xe0)](var_core_value_sigA12B);
    }
    return var_core_value_sigBDE4;
  }
  ["getValue"]() {
    var var_core_value_sigDC86;
    return ((var_core_value_sigDC86 = this[ox71b2e3(0x1db)]()[0x0]) == null ? void 0x0 : var_core_value_sigDC86[0x0]) ?? null;
  }
  ["setValue"](var_core_value_sig0B0C) {
    return this[ox5a6389(0x25e)]([[var_core_value_sig0B0C]]);
  }
  ["setValues"](var_core_value_sigA39E) {
    let var_core_value_sigBBEE = this[ox14694b(0x24c)](),
      var_core_value_sig011D = this[ox14694b(0x137)]();
    if (var_core_value_sigA39E[ox14694b(0x12e)] > var_core_value_sigBBEE || var_core_value_sigA39E["some"](var_core_value_sig9EE0 => var_core_value_sig9EE0[ox14694b(0x12e)] > var_core_value_sig011D)) {
      var var_core_value_sig6167;
      throw Error(ox14694b(0x179) + var_core_value_sigA39E[ox14694b(0x12e)] + "x" + (((var_core_value_sig6167 = var_core_value_sigA39E[0x0]) == null ? void 0x0 : var_core_value_sig6167[ox14694b(0x12e)]) ?? 0x0) + ox14694b(0x27e) + var_core_value_sigBBEE + "x" + var_core_value_sig011D + ".");
    }
    let var_core_value_sig65A1 = this["_getTable"](),
      var_core_value_sig7F19 = this["_getFieldIds"](var_core_value_sig65A1),
      var_core_value_sig7827 = var_core_value_sigA39E[ox14694b(0x153)]((var_core_value_sigF0511, var_core_value_sig0B45) => var_core_value_sigF0511["map"]((var_core_value_sigF230, var_core_value_sig09B8) => {
        const var_core_value_sig6F91 = ox14694b;
        var var_core_value_sigF9C7;
        let var_core_value_sig8895 = this[var_core_value_sig6F91(0xed)][var_core_value_sig6F91(0x218)] + var_core_value_sig0B45,
          var_core_value_sigC80B = var_core_value_sig7F19[this[var_core_value_sig6F91(0xed)][var_core_value_sig6F91(0x144)] + var_core_value_sig09B8],
          var_core_value_sig284F = (var_core_value_sigF9C7 = var_core_value_sig65A1[var_core_value_sig6F91(0x172)]) == null ? void 0x0 : var_core_value_sigF9C7[var_core_value_sig8895];
        if (!var_core_value_sigC80B || !var_core_value_sig284F) throw Error(var_core_value_sig6F91(0x22e));
        return {
          recordId: var_core_value_sig284F,
          fieldId: var_core_value_sigC80B,
          value: var_core_value_sigF230
        };
      }));
    return this[ox14694b(0x110)][ox14694b(0x226)](c[ox14694b(0x19f)]["id"], {
      unitId: this[ox14694b(0x223)]["getId"](),
      tableId: this[ox14694b(0x1c2)][ox14694b(0x24e)](),
      patches: var_core_value_sig7827,
      source: c[ox14694b(0x20a)][ox14694b(0xe5)]
    });
  }
  ["clear"]() {
    return this[oxf04a96(0x25e)](Array["from"]({
      length: this[oxf04a96(0x24c)]()
    }, () => Array[oxf04a96(0xf0)]({
      length: this["getNumColumns"]()
    }, () => null)));
  }
  ["offset"](var_core_value_sig652C, var_core_value_sig7E32, var_core_value_sig4C07 = this["getNumRows"](), var_core_value_sig79AB = this["getNumColumns"]()) {
    return this[ox4443a2(0x1e4)][ox4443a2(0x1e6)](k, this[ox4443a2(0x223)], this["_table"], {
      startRow: this[ox4443a2(0xed)][ox4443a2(0x218)] + var_core_value_sig652C,
      startColumn: this[ox4443a2(0xed)]["startColumn"] + var_core_value_sig7E32,
      endRow: this[ox4443a2(0xed)][ox4443a2(0x218)] + var_core_value_sig652C + var_core_value_sig4C07 - 0x1,
      endColumn: this[ox4443a2(0xed)][ox4443a2(0x144)] + var_core_value_sig7E32 + var_core_value_sig79AB - 0x1
    }, this[ox4443a2(0x1e4)]);
  }
  ["_getTable"]() {
    let var_core_value_sig8E74 = this[oxce78d8(0x1c2)][oxce78d8(0x235)]();
    if (!var_core_value_sig8E74) throw Error(oxce78d8(0x258));
    return (0x0, c[oxce78d8(0x191)])(var_core_value_sig8E74);
  }
  ["_assertInBounds"]() {
    var var_core_value_sig104C;
    let var_core_value_sig841D = this[ox2b7861(0x1f2)](),
      var_core_value_sig90CB = ((var_core_value_sig104C = var_core_value_sig841D[ox2b7861(0x1c8)]) == null ? void 0x0 : var_core_value_sig104C[ox2b7861(0x12e)]) ?? 0x0,
      var_core_value_sigBDF5 = this[ox2b7861(0x126)](var_core_value_sig841D)[ox2b7861(0x12e)];
    if (this[ox2b7861(0xed)][ox2b7861(0x218)] < 0x0 || this[ox2b7861(0xed)]["startColumn"] < 0x0 || this[ox2b7861(0xed)][ox2b7861(0xee)] < this[ox2b7861(0xed)][ox2b7861(0x218)] || this[ox2b7861(0xed)][ox2b7861(0x10e)] < this[ox2b7861(0xed)][ox2b7861(0x144)] || this["_range"]["endRow"] >= Math[ox2b7861(0x166)](var_core_value_sig90CB, 0x1) || this[ox2b7861(0xed)][ox2b7861(0x10e)] >= Math[ox2b7861(0x166)](var_core_value_sigBDF5, 0x1)) throw Error("[FBaseRange]:\x20range\x20is\x20out\x20of\x20bounds.\x20Max\x20rows:\x20" + var_core_value_sig90CB + ox2b7861(0x165) + var_core_value_sigBDF5 + ox2b7861(0xd7) + JSON[ox2b7861(0xf7)](this["_range"]) + ".");
  }
  ["_getFieldIds"](var_core_value_sigACC6) {
    return var_core_value_sigACC6["fieldOrder"][ox325ae2(0xe9)](var_core_value_sig36F8 => y(var_core_value_sigACC6["fields"][var_core_value_sig36F8]));
  }
};
A = k = g([h(0x4, l["ICommandService"])], A);
function j(var_core_value_sig3515) {
  "@babel/helpers - typeof";

  return j = typeof Symbol == "function" && typeof Symbol[ox5b4e9b(0x125)] == "symbol" ? function (var_core_value_sig1614) {
    return typeof var_core_value_sig1614;
  } : function (var_core_value_sig85C3) {
    const var_core_value_sigB996 = ox5b4e9b;
    return var_core_value_sig85C3 && typeof Symbol == var_core_value_sigB996(0x1bc) && var_core_value_sig85C3[var_core_value_sigB996(0x1b2)] === Symbol && var_core_value_sig85C3 !== Symbol["prototype"] ? var_core_value_sigB996(0xd9) : typeof var_core_value_sig85C3;
  }, j(var_core_value_sig3515);
}
;
function M(var_core_value_sigC2A0, var_core_value_sig7C65) {
  if (j(var_core_value_sigC2A0) != ox1362f4(0x23b) || !var_core_value_sigC2A0) return var_core_value_sigC2A0;
  var var_core_value_sig7F05 = var_core_value_sigC2A0[Symbol[ox1362f4(0x1e1)]];
  if (var_core_value_sig7F05 !== void 0x0) {
    var var_core_value_sig41F3 = var_core_value_sig7F05["call"](var_core_value_sigC2A0, var_core_value_sig7C65 || ox1362f4(0x261));
    if (j(var_core_value_sig41F3) != ox1362f4(0x23b)) return var_core_value_sig41F3;
    throw TypeError(ox1362f4(0xe8));
  }
  return (var_core_value_sig7C65 === ox1362f4(0x275) ? String : Number)(var_core_value_sigC2A0);
}
;
function N(var_core_value_sigF455) {
  var var_core_value_sig6E78 = M(var_core_value_sigF455, oxe5cde6(0x275));
  return j(var_core_value_sig6E78) == oxe5cde6(0xd9) ? var_core_value_sig6E78 : var_core_value_sig6E78 + "";
}
;
function P(var_core_value_sigB3EE, var_core_value_sigC50A, var_core_value_sig11D0) {
  return (var_core_value_sigC50A = N(var_core_value_sigC50A)) in var_core_value_sigB3EE ? Object["defineProperty"](var_core_value_sigB3EE, var_core_value_sigC50A, {
    value: var_core_value_sig11D0,
    enumerable: !0x0,
    configurable: !0x0,
    writable: !0x0
  }) : var_core_value_sigB3EE[var_core_value_sigC50A] = var_core_value_sig11D0, var_core_value_sigB3EE;
}
var F;
let I = F = class extends u["FBaseInitialable"] {
  constructor(var_core_value_sig4BBA, var_core_value_sig6201, var_core_value_sig5151, var_core_value_sigB542, var_core_value_sigBB6C, var_core_value_sigE2BF) {
    super(var_core_value_sigB542), this[ox18f888(0x223)] = var_core_value_sig4BBA, this[ox18f888(0x1c2)] = var_core_value_sig6201, this[ox18f888(0x16d)] = var_core_value_sig5151, this[ox18f888(0x260)] = var_core_value_sigB542, this[ox18f888(0x110)] = var_core_value_sigBB6C, this[ox18f888(0x27d)] = var_core_value_sigE2BF, P(this, ox18f888(0xfe), void 0x0), P(this, ox18f888(0x14b), void 0x0), this[ox18f888(0xfe)] = var_core_value_sig4BBA[ox18f888(0x24e)](), this[ox18f888(0x14b)] = var_core_value_sig6201["getId"]();
  }
  ["getBaseFacade"]() {
    return this[ox383bd5(0x223)];
  }
  ["getTableFacade"]() {
    return this[ox14ebb4(0x1c2)];
  }
  ["getId"]() {
    return this[ox35f07d(0x16d)];
  }
  ["getPermission"]() {
    let var_core_value_sigB8C7 = this[oxc2fbce(0x1c2)][oxc2fbce(0x24e)]();
    return new m(this[oxc2fbce(0x223)][oxc2fbce(0x24e)](), (0x0, c[oxc2fbce(0x271)])(var_core_value_sigB8C7, this[oxc2fbce(0x16d)]), [(0x0, c[oxc2fbce(0x112)])(var_core_value_sigB8C7)], this[oxc2fbce(0x110)], this[oxc2fbce(0x27d)]);
  }
  ["getRecord"]() {
    return {
      ...this[ox2b0763(0x246)](),
      values: this[ox2b0763(0x1db)]()
    };
  }
  ["getValue"](var_core_value_sigA56E) {
    return y(this[oxc3a057(0x1c2)]["getTable"]()["fields"][var_core_value_sigA56E]) ? this[oxc3a057(0x246)]()[oxc3a057(0x1f5)][var_core_value_sigA56E] ?? null : null;
  }
  ["getValues"]() {
    let var_core_value_sig1998 = this[ox3326f0(0x1c2)][ox3326f0(0x235)]();
    return Object[ox3326f0(0x118)](Object[ox3326f0(0x16b)](this["_getRecord"]()[ox3326f0(0x1f5)])["filter"](([var_core_value_sig03E1]) => y(var_core_value_sig1998[ox3326f0(0xeb)][var_core_value_sig03E1])));
  }
  ["setValue"](var_core_value_sigFF19, var_core_value_sig43B8) {
    let var_core_value_sigD98F = this["_table"][ox1a2dea(0x235)]()[ox1a2dea(0xeb)][var_core_value_sigFF19];
    return this["_commandService"][ox1a2dea(0x226)](c[ox1a2dea(0x1d7)]["id"], {
      unitId: this[ox1a2dea(0x223)][ox1a2dea(0x24e)](),
      tableId: this[ox1a2dea(0x1c2)][ox1a2dea(0x24e)](),
      recordId: this[ox1a2dea(0x16d)],
      fieldId: var_core_value_sigFF19,
      value: x(var_core_value_sigD98F, var_core_value_sig43B8),
      source: c[ox1a2dea(0x20a)]["Facade"]
    });
  }
  ["setAttachments"](var_core_value_sig66C0, var_core_value_sig9D15) {
    return this[ox2456da(0x1b7)](var_core_value_sig66C0, var_core_value_sig9D15[ox2456da(0x255)](var_core_value_sigBB57 => ({
      ...var_core_value_sigBB57
    })));
  }
  ["getAttachments"](var_core_value_sigB785) {
    this[ox170356(0x1ef)](var_core_value_sigB785);
    let var_core_value_sig130F = this["getValue"](var_core_value_sigB785);
    return Array["isArray"](var_core_value_sig130F) ? var_core_value_sig130F[ox170356(0x255)]((var_core_value_sig7C4A, var_core_value_sigE799) => R(var_core_value_sig7C4A, var_core_value_sigB785, var_core_value_sigE799)) : [];
  }
  ["deleteAttachments"](var_core_value_sigC0E3, var_core_value_sig52F7) {
    this["_getAttachmentField"](var_core_value_sigC0E3);
    let var_core_value_sig866F = new Set(var_core_value_sig52F7[ox2d0cf0(0x255)](var_core_value_sigB601 => var_core_value_sigB601["id"]));
    if (!var_core_value_sig866F[ox2d0cf0(0xf4)]) return !0x0;
    let var_core_value_sigDE3D = this[ox2d0cf0(0x18f)](var_core_value_sigC0E3),
      var_core_value_sigF175 = var_core_value_sigDE3D[ox2d0cf0(0xe9)](var_core_value_sig8B71 => !var_core_value_sig866F["has"](var_core_value_sig8B71["id"]));
    return var_core_value_sigF175["length"] === var_core_value_sigDE3D["length"] || this["setAttachments"](var_core_value_sigC0E3, var_core_value_sigF175);
  }
  ["setValues"](var_core_value_sig6A18, var_core_value_sig4E3D = "id") {
    let var_core_value_sig49B0 = this["_table"][ox2c11f9(0x235)](),
      var_core_value_sig2547 = [{
        recordId: this[ox2c11f9(0x16d)],
        values: b(var_core_value_sig49B0, var_core_value_sig6A18, var_core_value_sig4E3D)
      }];
    return this["_commandService"][ox2c11f9(0x226)](c["SetBaseRecordValuesCommand"]["id"], {
      unitId: this[ox2c11f9(0x223)]["getId"](),
      tableId: this["_table"][ox2c11f9(0x24e)](),
      patches: var_core_value_sig2547,
      source: c[ox2c11f9(0x20a)][ox2c11f9(0xe5)]
    });
  }
  ["delete"]() {
    return this[ox335b6f(0x110)][ox335b6f(0x226)](c["DeleteBaseRecordCommand"]["id"], {
      unitId: this["_base"][ox335b6f(0x24e)](),
      tableId: this[ox335b6f(0x1c2)][ox335b6f(0x24e)](),
      recordId: this[ox335b6f(0x16d)],
      source: c["BaseEventSource"]["Facade"]
    });
  }
  ["duplicate"](var_core_value_sigBCA9) {
    let var_core_value_sig4CDF = {
      ...this[ox150c38(0x246)](),
      ...var_core_value_sigBCA9,
      id: (0x0, l[ox150c38(0x108)])(0x6)
    };
    var_core_value_sig4CDF[ox150c38(0x1f5)] = {
      ...var_core_value_sig4CDF[ox150c38(0x1f5)],
      ...(var_core_value_sigBCA9 == null ? void 0x0 : var_core_value_sigBCA9[ox150c38(0x1f5)])
    }, Reflect[ox150c38(0x184)](var_core_value_sig4CDF[ox150c38(0x1f5)], l[ox150c38(0xfd)]);
    let var_core_value_sig3F79 = Date["now"]();
    if (var_core_value_sig4CDF[ox150c38(0x1c3)] ||= "" + var_core_value_sig3F79, var_core_value_sig4CDF[ox150c38(0x263)] ||= var_core_value_sig3F79, var_core_value_sig4CDF[ox150c38(0x26a)] ||= var_core_value_sig3F79, !this["_commandService"]["syncExecuteCommand"](c[ox150c38(0xfb)]["id"], {
      unitId: this["_base"][ox150c38(0x24e)](),
      tableId: this[ox150c38(0x1c2)][ox150c38(0x24e)](),
      sourceRecordId: this[ox150c38(0x16d)],
      record: var_core_value_sig4CDF,
      source: c[ox150c38(0x20a)]["Facade"]
    })) throw Error(ox150c38(0x1a0) + this[ox150c38(0x16d)] + "\x22.");
    return this["_injector"]["createInstance"](F, this["_base"], this[ox150c38(0x1c2)], var_core_value_sig4CDF["id"], this["_injector"]);
  }
  ["setOrderKey"](var_core_value_sig880E) {
    return this[ox23aa64(0x110)][ox23aa64(0x226)](c[ox23aa64(0x193)]["id"], {
      unitId: this["_base"]["getId"](),
      tableId: this["_table"]["getId"](),
      recordId: this["_recordId"],
      orderKey: var_core_value_sig880E
    });
  }
  ["getLinkedRecordIds"](var_core_value_sigC9ED) {
    let var_core_value_sigB57B = this["_getRecordLinkField"](var_core_value_sigC9ED);
    return (0x0, c[ox4b345b(0x1f8)])(this["getValue"](var_core_value_sigB57B["id"]));
  }
  ["setLinkedRecordIds"](var_core_value_sig780B, var_core_value_sig7D1B) {
    let var_core_value_sig7BE0 = this["_getRecordLinkField"](var_core_value_sig780B),
      var_core_value_sig7D40 = (0x0, c[ox5ce944(0xdb)])(var_core_value_sig7D1B),
      var_core_value_sig6C7E = (0x0, c[ox5ce944(0x14e)])(this[ox5ce944(0x223)][ox5ce944(0xf8)]()[ox5ce944(0x178)](), var_core_value_sig7BE0, var_core_value_sig7D40);
    if (!var_core_value_sig6C7E["valid"]) throw Error(var_core_value_sig6C7E[ox5ce944(0x115)] ?? "[FRecord]:\x20invalid\x20RecordLink\x20value.");
    return this[ox5ce944(0x110)][ox5ce944(0x226)](c["UpdateBaseCellCommand"]["id"], {
      unitId: this[ox5ce944(0x223)]["getId"](),
      tableId: this[ox5ce944(0x1c2)][ox5ce944(0x24e)](),
      recordId: this[ox5ce944(0x16d)],
      fieldId: var_core_value_sig780B,
      value: var_core_value_sig7D40,
      source: c[ox5ce944(0x20a)]["Facade"]
    });
  }
  ["addLinkedRecord"](var_core_value_sig68BE, var_core_value_sig04C6) {
    let var_core_value_sigCA05 = (0x0, c[ox51a221(0x15b)])(this[ox51a221(0x1fa)](var_core_value_sig68BE));
    if (!var_core_value_sigCA05) throw Error("[FRecord]:\x20RecordLink\x20field\x20\x22" + var_core_value_sig68BE + "\x22\x20has\x20invalid\x20config.");
    let var_core_value_sig2F2B = this[ox51a221(0x256)](var_core_value_sig68BE);
    return var_core_value_sigCA05["multiple"] && var_core_value_sig2F2B[ox51a221(0x15a)](var_core_value_sig04C6) ? !0x0 : this[ox51a221(0x1b0)](var_core_value_sig68BE, var_core_value_sigCA05[ox51a221(0x168)] ? [...var_core_value_sig2F2B, var_core_value_sig04C6] : [var_core_value_sig04C6]);
  }
  ["removeLinkedRecord"](var_core_value_sig70AF, var_core_value_sigD04E) {
    let var_core_value_sigB99B = this["getLinkedRecordIds"](var_core_value_sig70AF);
    return !var_core_value_sigB99B[ox1407c9(0x15a)](var_core_value_sigD04E) || this[ox1407c9(0x1b0)](var_core_value_sig70AF, var_core_value_sigB99B["filter"](var_core_value_sigAEFB => var_core_value_sigAEFB !== var_core_value_sigD04E));
  }
  ["getParent"](var_core_value_sig5A75) {
    let var_core_value_sig7BAF = this[ox43b207(0x197)](var_core_value_sig5A75)[ox43b207(0x25b)][ox43b207(0xfc)](this["_recordId"]) ?? null;
    return var_core_value_sig7BAF ? this["_table"][ox43b207(0x1a2)](var_core_value_sig7BAF) : null;
  }
  ["getChildren"](var_core_value_sig8F69) {
    return (this[ox2db795(0x197)](var_core_value_sig8F69)[ox2db795(0x1b6)][ox2db795(0xfc)](this[ox2db795(0x16d)]) ?? [])["flatMap"](var_core_value_sig826B => {
      let var_core_value_sigCF89 = this["_table"]["getRecordById"](var_core_value_sig826B);
      return var_core_value_sigCF89 ? [var_core_value_sigCF89] : [];
    });
  }
  ["getAncestors"](var_core_value_sig6884) {
    let var_core_value_sig066E = this[ox1db080(0x197)](var_core_value_sig6884),
      var_core_value_sig9B0D = [],
      var_core_value_sig3D2C = var_core_value_sig066E[ox1db080(0x25b)]["get"](this[ox1db080(0x16d)]) ?? null;
    for (; var_core_value_sig3D2C;) {
      let var_core_value_sigE154 = this[ox1db080(0x1c2)][ox1db080(0x1a2)](var_core_value_sig3D2C);
      var_core_value_sigE154 && var_core_value_sig9B0D[ox1db080(0xe0)](var_core_value_sigE154), var_core_value_sig3D2C = var_core_value_sig066E["parentByRecordId"][ox1db080(0xfc)](var_core_value_sig3D2C) ?? null;
    }
    return var_core_value_sig9B0D;
  }
  ["getDescendants"](var_core_value_sigC56D) {
    let var_core_value_sig3A17 = this[ox39d8b8(0x197)](var_core_value_sigC56D),
      var_core_value_sig938F = var_core_value_sig3A17[ox39d8b8(0x12c)][ox39d8b8(0x257)](this[ox39d8b8(0x16d)]),
      var_core_value_sigD948 = var_core_value_sig3A17[ox39d8b8(0x25f)][ox39d8b8(0x12d)](this[ox39d8b8(0x16d)]) ? this[ox39d8b8(0x1bd)](var_core_value_sig3A17[ox39d8b8(0x1b6)], this["_recordId"]) : [];
    return var_core_value_sig938F < 0x0 ? [] : var_core_value_sigD948[ox39d8b8(0x153)](var_core_value_sig00CB => {
      const var_core_value_sig77EE = ox39d8b8;
      let var_core_value_sig9F76 = this[var_core_value_sig77EE(0x1c2)][var_core_value_sig77EE(0x1a2)](var_core_value_sig00CB);
      return var_core_value_sig9F76 ? [var_core_value_sig9F76] : [];
    });
  }
  ["setParent"](var_core_value_sigBE5E, var_core_value_sig0281, var_core_value_sigED71) {
    return this[ox3c8a3d(0x110)][ox3c8a3d(0x226)](c["MoveBaseHierarchyRecordCommand"]["id"], {
      unitId: this[ox3c8a3d(0x223)][ox3c8a3d(0x24e)](),
      tableId: this[ox3c8a3d(0x1c2)]["getId"](),
      fieldId: var_core_value_sigBE5E,
      recordId: this[ox3c8a3d(0x16d)],
      parentRecordId: var_core_value_sig0281,
      orderKey: var_core_value_sigED71,
      source: c[ox3c8a3d(0x20a)][ox3c8a3d(0xe5)]
    });
  }
  ["addChild"](var_core_value_sig281C, var_core_value_sig3C92, var_core_value_sigB16B = "id", var_core_value_sig585D) {
    let var_core_value_sigE722 = this[ox1a7eea(0x1c2)][ox1a7eea(0x235)](),
      var_core_value_sig062A = Date[ox1a7eea(0x204)](),
      var_core_value_sig050A = {
        ...var_core_value_sig585D,
        id: (0x0, l[ox1a7eea(0x108)])(0x6),
        values: b(var_core_value_sigE722, var_core_value_sig3C92, var_core_value_sigB16B),
        orderKey: (var_core_value_sig585D == null ? void 0x0 : var_core_value_sig585D[ox1a7eea(0x1c3)]) || "" + var_core_value_sig062A,
        createdAt: (var_core_value_sig585D == null ? void 0x0 : var_core_value_sig585D[ox1a7eea(0x263)]) || var_core_value_sig062A,
        updatedAt: (var_core_value_sig585D == null ? void 0x0 : var_core_value_sig585D[ox1a7eea(0x26a)]) || var_core_value_sig062A
      };
    if (!this[ox1a7eea(0x110)][ox1a7eea(0x226)](c["CreateBaseChildRecordCommand"]["id"], {
      unitId: this[ox1a7eea(0x223)][ox1a7eea(0x24e)](),
      tableId: this["_table"][ox1a7eea(0x24e)](),
      fieldId: var_core_value_sig281C,
      parentRecordId: this["_recordId"],
      record: var_core_value_sig050A,
      source: c[ox1a7eea(0x20a)][ox1a7eea(0xe5)]
    })) throw Error(ox1a7eea(0x21f) + this[ox1a7eea(0x16d)] + "\x22.");
    return this[ox1a7eea(0x260)]["createInstance"](F, this["_base"], this[ox1a7eea(0x1c2)], var_core_value_sig050A["id"], this["_injector"]);
  }
  ["_getHierarchyIndex"](var_core_value_sig8B32) {
    return (0x0, c[ox26b2c2(0x272)])(this[ox26b2c2(0x1c2)][ox26b2c2(0x235)](), var_core_value_sig8B32);
  }
  ["_collectDescendantIds"](var_core_value_sig870F, var_core_value_sigB683) {
    let var_core_value_sig26EC = [],
      var_core_value_sigEEDB = var_core_value_sigB008 => {
        for (let var_core_value_sig4632 of var_core_value_sig870F[ox4d7595(0xfc)](var_core_value_sigB008) ?? []) var_core_value_sig26EC[ox4d7595(0xe0)](var_core_value_sig4632), var_core_value_sigEEDB(var_core_value_sig4632);
      };
    return var_core_value_sigEEDB(var_core_value_sigB683), var_core_value_sig26EC;
  }
  ["_getRecord"]() {
    let var_core_value_sig36E7 = this["_table"][ox4118c5(0x235)]()[ox4118c5(0x132)][this[ox4118c5(0x16d)]];
    if (!var_core_value_sig36E7) throw Error(ox4118c5(0x16c) + this[ox4118c5(0x16d)] + ox4118c5(0x164));
    return var_core_value_sig36E7;
  }
  ["_getRecordLinkField"](var_core_value_sig6A78) {
    let var_core_value_sigF7EF = this["_table"][ox3ea636(0x235)]()["fields"][var_core_value_sig6A78];
    if (!var_core_value_sigF7EF || var_core_value_sigF7EF[ox3ea636(0x222)] !== l["BaseFieldType"][ox3ea636(0x283)]) throw Error(ox3ea636(0x1d0) + var_core_value_sig6A78 + ox3ea636(0x227));
    return var_core_value_sigF7EF;
  }
  ["_getAttachmentField"](var_core_value_sig27F9) {
    let var_core_value_sig393E = this[ox1a7e2a(0x1c2)][ox1a7e2a(0x235)]()[ox1a7e2a(0xeb)][var_core_value_sig27F9];
    if (!var_core_value_sig393E || var_core_value_sig393E[ox1a7e2a(0x222)] !== l["BaseFieldType"][ox1a7e2a(0x286)]) throw Error(ox1a7e2a(0x1d0) + var_core_value_sig27F9 + ox1a7e2a(0xd5));
    return var_core_value_sig393E;
  }
};
I = F = g([h(0x4, l["ICommandService"]), h(0x5, l["IPermissionService"])], I);
function L(var_core_value_sigB8ED) {
  return !!(var_core_value_sigB8ED && typeof var_core_value_sigB8ED == ox1554a6(0x23b) && "id" in var_core_value_sigB8ED && typeof var_core_value_sigB8ED["id"] == ox1554a6(0x275) && ox1554a6(0x162) in var_core_value_sigB8ED && typeof var_core_value_sigB8ED["name"] == ox1554a6(0x275));
}
;
function R(var_core_value_sig8EAE, var_core_value_sig1CDD, var_core_value_sig0DB1) {
  if (!L(var_core_value_sig8EAE)) throw Error("[FRecord]:\x20attachment\x20at\x20index\x20" + var_core_value_sig0DB1 + ox1182bc(0x26f) + var_core_value_sig1CDD + ox1182bc(0x101));
  return {
    ...var_core_value_sig8EAE
  };
}
let z = class {
  constructor(var_core_value_sigB609, var_core_value_sig390D, var_core_value_sigC928, var_core_value_sig39B7, var_core_value_sig18E0, var_core_value_sigE161, var_core_value_sigBDEE) {
    this["_base"] = var_core_value_sigB609, this[ox43f826(0x1c2)] = var_core_value_sig390D, this["_viewId"] = var_core_value_sigC928, this[ox43f826(0x260)] = var_core_value_sig39B7, this[ox43f826(0x110)] = var_core_value_sig18E0, this[ox43f826(0x27d)] = var_core_value_sigE161, this[ox43f826(0x167)] = var_core_value_sigBDEE;
  }
  ["getId"]() {
    return this["_viewId"];
  }
  ["getPermission"]() {
    let var_core_value_sig1F40 = this["_table"]["getId"]();
    return new m(this[ox2eaafa(0x223)]["getId"](), (0x0, c[ox2eaafa(0x250)])(var_core_value_sig1F40, this[ox2eaafa(0x149)]), [(0x0, c[ox2eaafa(0x112)])(var_core_value_sig1F40)], this["_commandService"], this[ox2eaafa(0x27d)]);
  }
  ["getView"]() {
    return this[ox29d3e1(0x208)]();
  }
  ["getName"]() {
    return this[ox21adeb(0x208)]()[ox21adeb(0x162)];
  }
  ["getType"]() {
    return this[ox4cbd2c(0x208)]()[ox4cbd2c(0x222)];
  }
  ["setName"](var_core_value_sig3FC7) {
    return this[ox34ccb0(0x110)][ox34ccb0(0x226)](c[ox34ccb0(0x17e)]["id"], {
      unitId: this["_base"][ox34ccb0(0x24e)](),
      tableId: this["_table"][ox34ccb0(0x24e)](),
      viewId: this[ox34ccb0(0x149)],
      name: var_core_value_sig3FC7
    });
  }
  ["getConfig"]() {
    let var_core_value_sig1E1B = this[ox12aad6(0x111)](),
      var_core_value_sig3B10 = this[ox12aad6(0x208)]()["config"];
    switch (var_core_value_sig1E1B) {
      case l["BaseViewType"][ox12aad6(0x1eb)]:
        return var_core_value_sig3B10;
      case l[ox12aad6(0x171)][ox12aad6(0x158)]:
        return var_core_value_sig3B10;
      case l["BaseViewType"]["Calendar"]:
        return var_core_value_sig3B10;
      case l[ox12aad6(0x171)][ox12aad6(0x143)]:
        return var_core_value_sig3B10;
      case l["BaseViewType"][ox12aad6(0x249)]:
        return var_core_value_sig3B10;
      default:
        return var_core_value_sig3B10;
    }
  }
  ["updateConfig"](var_core_value_sig89E6) {
    return this["_commandService"][ox45d57e(0x226)](c[ox45d57e(0x1b4)]["id"], {
      unitId: this[ox45d57e(0x223)][ox45d57e(0x24e)](),
      tableId: this["_table"][ox45d57e(0x24e)](),
      viewId: this["_viewId"],
      patch: var_core_value_sig89E6
    });
  }
  ["getConditionalColorRules"]() {
    var var_core_value_sig4743;
    return l[ox305d74(0x119)][ox305d74(0x1f1)](((var_core_value_sig4743 = this[ox305d74(0x208)]()["config"][ox305d74(0x10d)]) == null ? void 0x0 : var_core_value_sig4743[ox305d74(0x1c0)]) ?? []);
  }
  ["setConditionalColorRules"](var_core_value_sigEB6A) {
    return this["_commandService"][ox1a8324(0x226)](c[ox1a8324(0x129)]["id"], {
      unitId: this["_base"][ox1a8324(0x24e)](),
      tableId: this[ox1a8324(0x1c2)][ox1a8324(0x24e)](),
      viewId: this["_viewId"],
      type: c[ox1a8324(0x1ab)][ox1a8324(0x1ff)],
      rules: var_core_value_sigEB6A
    });
  }
  ["addConditionalColorRule"](var_core_value_sig3D46) {
    return this[ox50e64b(0x110)][ox50e64b(0x226)](c[ox50e64b(0x129)]["id"], {
      unitId: this[ox50e64b(0x223)]["getId"](),
      tableId: this[ox50e64b(0x1c2)][ox50e64b(0x24e)](),
      viewId: this[ox50e64b(0x149)],
      type: c[ox50e64b(0x1ab)][ox50e64b(0x20f)],
      rule: var_core_value_sig3D46
    });
  }
  ["deleteConditionalColorRule"](var_core_value_sigCC93) {
    return this[ox416808(0x110)][ox416808(0x226)](c["UpdateBaseViewConditionalColorRulesCommand"]["id"], {
      unitId: this[ox416808(0x223)][ox416808(0x24e)](),
      tableId: this["_table"]["getId"](),
      viewId: this[ox416808(0x149)],
      type: c[ox416808(0x1ab)][ox416808(0x20c)],
      ruleId: var_core_value_sigCC93
    });
  }
  ["clearConditionalColorRules"]() {
    return this[ox2b99ad(0x110)][ox2b99ad(0x226)](c[ox2b99ad(0x129)]["id"], {
      unitId: this[ox2b99ad(0x223)]["getId"](),
      tableId: this["_table"][ox2b99ad(0x24e)](),
      viewId: this[ox2b99ad(0x149)],
      type: c[ox2b99ad(0x1ab)][ox2b99ad(0x181)]
    });
  }
  ["getFilter"]() {
    return this["_getView"]()[ox44ea7e(0xe9)] ?? null;
  }
  ["setFilter"](var_core_value_sig5964) {
    return this[ox6991f0(0x110)][ox6991f0(0x226)](c[ox6991f0(0x1d4)]["id"], {
      unitId: this[ox6991f0(0x223)][ox6991f0(0x24e)](),
      tableId: this[ox6991f0(0x1c2)]["getId"](),
      viewId: this[ox6991f0(0x149)],
      filter: var_core_value_sig5964
    });
  }
  ["getSort"]() {
    return this[ox2f6c38(0x208)]()[ox2f6c38(0x1fb)] ?? [];
  }
  ["setSort"](var_core_value_sig808B) {
    return this[ox500d54(0x110)]["syncExecuteCommand"](c[ox500d54(0x1a1)]["id"], {
      unitId: this["_base"][ox500d54(0x24e)](),
      tableId: this[ox500d54(0x1c2)][ox500d54(0x24e)](),
      viewId: this[ox500d54(0x149)],
      sort: var_core_value_sig808B
    });
  }
  ["getGroup"]() {
    return this["_getView"]()["group"] ?? [];
  }
  ["setGroup"](var_core_value_sig2A26) {
    return this[ox412d7e(0x110)][ox412d7e(0x226)](c[ox412d7e(0x188)]["id"], {
      unitId: this["_base"]["getId"](),
      tableId: this[ox412d7e(0x1c2)][ox412d7e(0x24e)](),
      viewId: this[ox412d7e(0x149)],
      group: var_core_value_sig2A26
    });
  }
  ["getFieldSettings"](var_core_value_sig1179) {
    var var_core_value_sigEA92;
    return y(this[ox4a916c(0x1c2)][ox4a916c(0x235)]()[ox4a916c(0xeb)][var_core_value_sig1179]) ? ((var_core_value_sigEA92 = this[ox4a916c(0x208)]()["fieldSettings"]) == null ? void 0x0 : var_core_value_sigEA92[var_core_value_sig1179]) ?? {} : {};
  }
  ["getVisibleFields"]() {
    let var_core_value_sig8FD9 = this[ox40bf8e(0x1c2)]["getTable"](),
      var_core_value_sig1AE5 = this["_getView"]();
    return (var_core_value_sig1AE5[ox40bf8e(0x27f)] ?? var_core_value_sig8FD9[ox40bf8e(0x27f)])["filter"](var_core_value_sig8721 => {
      const var_core_value_sig08BA = ox40bf8e;
      var var_core_value_sigDBB5;
      let var_core_value_sigCFAC = var_core_value_sig8FD9[var_core_value_sig08BA(0xeb)][var_core_value_sig8721];
      return y(var_core_value_sigCFAC) && !((var_core_value_sigDBB5 = var_core_value_sig1AE5[var_core_value_sig08BA(0x182)]) != null && (var_core_value_sigDBB5 = var_core_value_sigDBB5[var_core_value_sig8721]) != null && var_core_value_sigDBB5[var_core_value_sig08BA(0x1b1)]);
    })[ox40bf8e(0x255)](var_core_value_sig237B => this[ox40bf8e(0x260)][ox40bf8e(0x1e6)](_, this["_base"], this["_table"], var_core_value_sig237B));
  }
  ["setFieldVisible"](var_core_value_sig7100, var_core_value_sigA19A) {
    return y(this[oxddca8(0x1c2)][oxddca8(0x235)]()[oxddca8(0xeb)][var_core_value_sig7100]) ? this[oxddca8(0x110)][oxddca8(0x226)](c["SetBaseViewFieldVisibleCommand"]["id"], {
      unitId: this[oxddca8(0x223)][oxddca8(0x24e)](),
      tableId: this[oxddca8(0x1c2)]["getId"](),
      viewId: this[oxddca8(0x149)],
      fieldId: var_core_value_sig7100,
      visible: var_core_value_sigA19A
    }) : !0x1;
  }
  ["setFieldWidth"](var_core_value_sigD3F5, var_core_value_sig3082) {
    return y(this[ox66b96b(0x1c2)]["getTable"]()[ox66b96b(0xeb)][var_core_value_sigD3F5]) ? this[ox66b96b(0x110)][ox66b96b(0x226)](c["SetBaseViewFieldWidthCommand"]["id"], {
      unitId: this[ox66b96b(0x223)][ox66b96b(0x24e)](),
      tableId: this[ox66b96b(0x1c2)][ox66b96b(0x24e)](),
      viewId: this[ox66b96b(0x149)],
      fieldId: var_core_value_sigD3F5,
      width: var_core_value_sig3082
    }) : !0x1;
  }
  ["moveField"](var_core_value_sigF5D1, var_core_value_sig8775) {
    let var_core_value_sig481B = this["_table"][ox3a25a7(0x235)](),
      var_core_value_sig13D7 = var_core_value_sig8775[ox3a25a7(0xe6)] ?? var_core_value_sig8775[ox3a25a7(0x146)];
    return !y(var_core_value_sig481B["fields"][var_core_value_sigF5D1]) || !var_core_value_sig13D7 || !y(var_core_value_sig481B["fields"][var_core_value_sig13D7]) ? !0x1 : this[ox3a25a7(0x110)][ox3a25a7(0x226)](c[ox3a25a7(0x27b)]["id"], {
      unitId: this["_base"][ox3a25a7(0x24e)](),
      tableId: this[ox3a25a7(0x1c2)][ox3a25a7(0x24e)](),
      viewId: this[ox3a25a7(0x149)],
      fieldId: var_core_value_sigF5D1,
      target: var_core_value_sig8775
    });
  }
  ["move"](var_core_value_sig90C0) {
    return this[ox1aea35(0x110)]["syncExecuteCommand"](c[ox1aea35(0x1c1)]["id"], {
      unitId: this[ox1aea35(0x223)][ox1aea35(0x24e)](),
      tableId: this[ox1aea35(0x1c2)]["getId"](),
      viewId: this["_viewId"],
      target: var_core_value_sig90C0
    });
  }
  ["delete"]() {
    return this["_commandService"][ox20179f(0x226)](c["DeleteBaseViewCommand"]["id"], {
      unitId: this[ox20179f(0x223)][ox20179f(0x24e)](),
      tableId: this[ox20179f(0x1c2)]["getId"](),
      viewId: this["_viewId"]
    });
  }
  ["getProjection"]() {
    return this[ox532f0b(0x167)][ox532f0b(0x1a7)](this[ox532f0b(0x223)][ox532f0b(0xf8)]()[ox532f0b(0x178)](), this[ox532f0b(0x1c2)]["getId"](), this[ox532f0b(0x149)]);
  }
  ["_getView"]() {
    let var_core_value_sigF1B2 = this[ox55b89d(0x1c2)][ox55b89d(0x235)]()[ox55b89d(0x106)][this["_viewId"]];
    if (!var_core_value_sigF1B2) throw Error("[FView]:\x20view\x20\x22" + this[ox55b89d(0x149)] + "\x22\x20does\x20not\x20exist.");
    return var_core_value_sigF1B2;
  }
};
z = g([h(0x4, l["ICommandService"]), h(0x5, l["IPermissionService"]), h(0x6, c["IBaseProjectionService"])], z);
let B = class {
  constructor(var_core_value_sigC2BB, var_core_value_sigD9DB, var_core_value_sigA363, var_core_value_sigFBA5, var_core_value_sigAC47, var_core_value_sigA06F) {
    this[ox4382b7(0x223)] = var_core_value_sigC2BB, this["_tableId"] = var_core_value_sigD9DB, this[ox4382b7(0x260)] = var_core_value_sigA363, this[ox4382b7(0x110)] = var_core_value_sigFBA5, this[ox4382b7(0x27d)] = var_core_value_sigAC47, this[ox4382b7(0x167)] = var_core_value_sigA06F;
  }
  ["getBase"]() {
    return this[ox39b06f(0x223)][ox39b06f(0xf8)]();
  }
  ["getTable"]() {
    return this[ox204adb(0x1f2)]();
  }
  ["getId"]() {
    return this[ox2f5fa2(0x17d)];
  }
  ["getPermission"]() {
    return new m(this[ox165aa9(0xf8)]()["getUnitId"](), (0x0, c[ox165aa9(0x112)])(this["_tableId"]), [], this[ox165aa9(0x110)], this[ox165aa9(0x27d)]);
  }
  ["getHierarchyFieldId"]() {
    return (0x0, c[ox433cdd(0x22a)])(this[ox433cdd(0x1f2)]());
  }
  ["setHierarchyField"](var_core_value_sig770E) {
    return this[ox75c49e(0x110)]["syncExecuteCommand"](c[ox75c49e(0x14d)]["id"], {
      unitId: this[ox75c49e(0x223)][ox75c49e(0x24e)](),
      tableId: this["_tableId"],
      fieldId: var_core_value_sig770E
    });
  }
  ["getName"]() {
    return this["_getTable"]()[ox2bab6c(0x162)];
  }
  ["getFormulaName"]() {
    let var_core_value_sig4654 = this[ox98167f(0x223)][ox98167f(0xf8)]()[ox98167f(0x178)]();
    return (0x0, c[ox98167f(0x141)])(this["_getTable"](), var_core_value_sig4654);
  }
  ["setName"](var_core_value_sigB26B) {
    let var_core_value_sig019B = (0x0, c[ox2e2335(0x14c)])(this[ox2e2335(0x223)]["getBase"]()[ox2e2335(0x178)](), var_core_value_sigB26B, this[ox2e2335(0x17d)]);
    if (!var_core_value_sig019B[ox2e2335(0x216)]) throw Error("[FBaseTable]:\x20invalid\x20table\x20name\x20\x22" + var_core_value_sigB26B + ox2e2335(0x1b8) + c[ox2e2335(0x1af)] + "\x20" + var_core_value_sig019B[ox2e2335(0x115)]);
    return this[ox2e2335(0x110)][ox2e2335(0x226)](c[ox2e2335(0x1e9)]["id"], {
      unitId: this[ox2e2335(0x223)]["getId"](),
      tableId: this["_tableId"],
      name: var_core_value_sigB26B
    });
  }
  ["search"](var_core_value_sigC6BC, var_core_value_sig8EC2) {
    let var_core_value_sigA8C3 = this[ox3a4e67(0x223)]["getBase"]()[ox3a4e67(0x178)](),
      var_core_value_sig5276 = this[ox3a4e67(0x1f2)]();
    if (var_core_value_sig8EC2) {
      let var_core_value_sigFEAB = this[ox3a4e67(0x167)][ox3a4e67(0x1a7)](var_core_value_sigA8C3, this["_tableId"], var_core_value_sig8EC2),
        var_core_value_sigE347 = var_core_value_sig5276[ox3a4e67(0x106)][var_core_value_sig8EC2],
        var_core_value_sig3C5B = var_core_value_sigC6BC[ox3a4e67(0x1a8)] ?? J(var_core_value_sig5276, var_core_value_sigE347, var_core_value_sigFEAB),
        var_core_value_sig200B = ox3a4e67(0x170) in var_core_value_sigFEAB && Array[ox3a4e67(0x276)](var_core_value_sigFEAB[ox3a4e67(0x170)]) ? var_core_value_sigFEAB[ox3a4e67(0x170)] : [];
      return (0x0, c[ox3a4e67(0x230)])({
        ...var_core_value_sigC6BC,
        table: var_core_value_sig5276,
        fieldIds: var_core_value_sig3C5B,
        rows: var_core_value_sig200B
      });
    }
    let var_core_value_sig031B = (var_core_value_sig5276[ox3a4e67(0x1c8)] ? var_core_value_sig5276[ox3a4e67(0x1c8)][ox3a4e67(0x255)](var_core_value_sig3863 => var_core_value_sig5276[ox3a4e67(0x132)][var_core_value_sig3863]) : Object["values"](var_core_value_sig5276[ox3a4e67(0x132)])[ox3a4e67(0x1fb)]((var_core_value_sigC97C, var_core_value_sigC4B1) => var_core_value_sigC97C[ox3a4e67(0x1c3)][ox3a4e67(0x213)](var_core_value_sigC4B1[ox3a4e67(0x1c3)])))["filter"](var_core_value_sig1BD9 => var_core_value_sig1BD9)[ox3a4e67(0x255)](var_core_value_sigE43E => ({
        recordId: var_core_value_sigE43E["id"],
        values: var_core_value_sigE43E[ox3a4e67(0x1f5)]
      })),
      var_core_value_sig9DC0 = var_core_value_sigC6BC[ox3a4e67(0x1a8)] ?? var_core_value_sig5276[ox3a4e67(0x27f)][ox3a4e67(0xe9)](var_core_value_sigA937 => y(var_core_value_sig5276[ox3a4e67(0xeb)][var_core_value_sigA937]));
    return (0x0, c[ox3a4e67(0x230)])({
      ...var_core_value_sigC6BC,
      table: var_core_value_sig5276,
      fieldIds: var_core_value_sig9DC0,
      rows: var_core_value_sig031B
    });
  }
  ["getPrimaryFieldId"]() {
    return this["_getTable"]()["primaryFieldId"];
  }
  ["getFields"]() {
    let var_core_value_sig95F0 = this["_getTable"]();
    return var_core_value_sig95F0[ox4653c8(0x27f)][ox4653c8(0x255)](var_core_value_sigCAD5 => var_core_value_sig95F0[ox4653c8(0xeb)][var_core_value_sigCAD5])[ox4653c8(0xe9)](y)[ox4653c8(0x255)](var_core_value_sigE503 => this["_injector"][ox4653c8(0x1e6)](_, this["_base"], this, var_core_value_sigE503["id"]));
  }
  ["getFieldById"](var_core_value_sig9CCB) {
    let var_core_value_sigE718 = this["_getTable"]()[ox447ad0(0xeb)][var_core_value_sig9CCB];
    return y(var_core_value_sigE718) ? this[ox447ad0(0x260)][ox447ad0(0x1e6)](_, this[ox447ad0(0x223)], this, var_core_value_sigE718["id"]) : null;
  }
  ["getFieldByName"](var_core_value_sigAEC8) {
    let var_core_value_sigB977 = this["_getTable"]()[oxc10d72(0xeb)],
      var_core_value_sig2949 = Object[oxc10d72(0x1f5)](var_core_value_sigB977)[oxc10d72(0x13b)](var_core_value_sig48DD => y(var_core_value_sig48DD) && var_core_value_sig48DD[oxc10d72(0x162)] === var_core_value_sigAEC8);
    return var_core_value_sig2949 ? this[oxc10d72(0x260)][oxc10d72(0x1e6)](_, this["_base"], this, var_core_value_sig2949["id"]) : null;
  }
  ["getPrimaryField"]() {
    let var_core_value_sig308A = this[ox272b8b(0x1f2)]()[ox272b8b(0xea)];
    return this["_injector"]["createInstance"](_, this["_base"], this, var_core_value_sig308A);
  }
  ["addField"](var_core_value_sig528D, var_core_value_sigA309, var_core_value_sig9E20) {
    var var_core_value_sig26BB, var_core_value_sig19B4;
    if (!Object[ox5bb3ca(0x1f5)](l[ox5bb3ca(0x1f6)])["some"](var_core_value_sig5E6A => var_core_value_sig5E6A === var_core_value_sigA309)) throw Error(ox5bb3ca(0x161) + String(var_core_value_sigA309) + "\x22.");
    if (var_core_value_sigA309 === l["BaseFieldType"][ox5bb3ca(0x21c)] && this["_prepareFormulaFieldReferences"](var_core_value_sig528D, var_core_value_sig9E20), var_core_value_sigA309 === l[ox5bb3ca(0x1f6)][ox5bb3ca(0x283)] && (typeof (var_core_value_sig9E20 == null || (var_core_value_sig26BB = var_core_value_sig9E20[ox5bb3ca(0x13d)]) == null || (var_core_value_sig26BB = var_core_value_sig26BB[ox5bb3ca(0xff)]) == null ? void 0x0 : var_core_value_sig26BB[ox5bb3ca(0x279)]) != ox5bb3ca(0x275) || typeof var_core_value_sig9E20[ox5bb3ca(0x13d)][ox5bb3ca(0xff)][ox5bb3ca(0x168)] != ox5bb3ca(0xd4))) throw Error(ox5bb3ca(0x1aa));
    let var_core_value_sig218A = {
      ...(var_core_value_sig9E20 == null ? void 0x0 : var_core_value_sig9E20[ox5bb3ca(0x13d)]),
      id: (0x0, l["generateRandomId"])(0x6),
      name: var_core_value_sig528D,
      type: var_core_value_sigA309,
      config: (var_core_value_sig9E20 == null || (var_core_value_sig19B4 = var_core_value_sig9E20["field"]) == null ? void 0x0 : var_core_value_sig19B4[ox5bb3ca(0xff)]) ?? {}
    };
    if (!this[ox5bb3ca(0x110)]["syncExecuteCommand"](c[ox5bb3ca(0x19c)]["id"], {
      unitId: this[ox5bb3ca(0x223)][ox5bb3ca(0x24e)](),
      tableId: this[ox5bb3ca(0x17d)],
      field: var_core_value_sig218A,
      index: var_core_value_sig9E20 == null ? void 0x0 : var_core_value_sig9E20[ox5bb3ca(0x134)]
    })) throw Error("Failed\x20to\x20add\x20field\x20\x22" + var_core_value_sig528D + "\x22");
    return this["_injector"][ox5bb3ca(0x1e6)](_, this[ox5bb3ca(0x223)], this, var_core_value_sig218A["id"]);
  }
  ["_prepareFormulaFieldReferences"](var_core_value_sig14CB, var_core_value_sigFDEE) {
    var var_core_value_sigA676;
    if (!var_core_value_sigFDEE || !(ox16e429(0x17a) in var_core_value_sigFDEE) || !Array["isArray"](var_core_value_sigFDEE[ox16e429(0x17a)])) throw Error(ox16e429(0x1fe));
    let var_core_value_sigC27E = this[ox16e429(0x110)][ox16e429(0x226)](c["ValidateBaseFormulaCommand"]["id"], {
      unitId: this[ox16e429(0x223)][ox16e429(0x24e)](),
      tableId: this[ox16e429(0x17d)],
      formula: String(((var_core_value_sigA676 = var_core_value_sigFDEE[ox16e429(0x13d)]) == null || (var_core_value_sigA676 = var_core_value_sigA676["config"]) == null ? void 0x0 : var_core_value_sigA676[ox16e429(0x228)]) ?? "")
    });
    if (!var_core_value_sigC27E["valid"]) throw Error(var_core_value_sigC27E[ox16e429(0x115)] ?? ox16e429(0x1da));
    if (var_core_value_sigFDEE[ox16e429(0x17a)][ox16e429(0x12e)] > 0x0 && !this[ox16e429(0x110)]["syncExecuteCommand"](f[ox16e429(0x160)]["id"], {
      unitId: this[ox16e429(0x223)][ox16e429(0x24e)](),
      references: var_core_value_sigFDEE["externalReferences"]
    })) throw Error(ox16e429(0x22d) + var_core_value_sig14CB + "\x22");
  }
  ["getRecords"]() {
    return this[ox40056d(0x15e)]()[ox40056d(0x255)](var_core_value_sigB7FC => this[ox40056d(0x260)][ox40056d(0x1e6)](I, this["_base"], this, var_core_value_sigB7FC, this[ox40056d(0x260)]));
  }
  ["getRecordById"](var_core_value_sigA70D) {
    return this[ox556843(0x1f2)]()[ox556843(0x132)][var_core_value_sigA70D] ? this["_injector"][ox556843(0x1e6)](I, this["_base"], this, var_core_value_sigA70D, this[ox556843(0x260)]) : null;
  }
  ["queryRecords"](var_core_value_sigCE10 = {}) {
    let var_core_value_sigA386 = this[ox1bc71f(0x1f2)](),
      var_core_value_sigCD82 = this[ox1bc71f(0x15e)](var_core_value_sigCE10),
      var_core_value_sig44DD = Math[ox1bc71f(0x166)](0x0, var_core_value_sigCE10[ox1bc71f(0x220)] ?? 0x0),
      var_core_value_sig96FA = var_core_value_sigCE10[ox1bc71f(0x242)] == null ? null : Math[ox1bc71f(0x166)](0x0, var_core_value_sigCE10[ox1bc71f(0x242)]),
      var_core_value_sigAB68 = H(var_core_value_sigCD82["map"](var_core_value_sig9CD9 => var_core_value_sigA386[ox1bc71f(0x132)][var_core_value_sig9CD9])["filter"](var_core_value_sigFD0C => W(var_core_value_sigFD0C, var_core_value_sigA386, var_core_value_sigCE10[ox1bc71f(0xe9)])), var_core_value_sigA386, var_core_value_sigCE10[ox1bc71f(0x1fb)]);
    return {
      records: V(var_core_value_sigAB68, var_core_value_sigCE10)["map"](var_core_value_sig849B => this[ox1bc71f(0x260)][ox1bc71f(0x1e6)](I, this["_base"], this, var_core_value_sig849B["id"], this[ox1bc71f(0x260)])),
      total: var_core_value_sigAB68[ox1bc71f(0x12e)],
      offset: var_core_value_sig44DD,
      limit: var_core_value_sig96FA,
      hasMore: var_core_value_sig96FA != null && var_core_value_sig44DD + var_core_value_sig96FA < var_core_value_sigAB68[ox1bc71f(0x12e)]
    };
  }
  ["addRecord"](var_core_value_sig040A, var_core_value_sig2AE0 = "id", var_core_value_sigC349) {
    let var_core_value_sig9D96 = this[ox32042f(0x1f2)](),
      var_core_value_sig2776 = Date[ox32042f(0x204)](),
      var_core_value_sig6FB2 = {
        ...var_core_value_sigC349,
        id: (0x0, l[ox32042f(0x108)])(0x6),
        values: b(var_core_value_sig9D96, var_core_value_sig040A, var_core_value_sig2AE0),
        orderKey: (var_core_value_sigC349 == null ? void 0x0 : var_core_value_sigC349[ox32042f(0x1c3)]) || "" + var_core_value_sig2776,
        createdAt: (var_core_value_sigC349 == null ? void 0x0 : var_core_value_sigC349[ox32042f(0x263)]) || var_core_value_sig2776,
        updatedAt: (var_core_value_sigC349 == null ? void 0x0 : var_core_value_sigC349["updatedAt"]) || var_core_value_sig2776
      };
    if (!this[ox32042f(0x110)]["syncExecuteCommand"](c[ox32042f(0xdd)]["id"], {
      unitId: this[ox32042f(0x223)][ox32042f(0x24e)](),
      tableId: this[ox32042f(0x17d)],
      record: var_core_value_sig6FB2,
      source: c[ox32042f(0x20a)][ox32042f(0xe5)]
    })) throw Error(ox32042f(0x22f) + var_core_value_sig6FB2["id"] + "\x22");
    return this[ox32042f(0x260)][ox32042f(0x1e6)](I, this[ox32042f(0x223)], this, var_core_value_sig6FB2["id"], this[ox32042f(0x260)]);
  }
  ["addRecords"](var_core_value_sigEB43) {
    if (!var_core_value_sigEB43["length"]) return [];
    let var_core_value_sig4186 = this[ox4aa8f6(0x1f2)](),
      var_core_value_sigF963 = Date[ox4aa8f6(0x204)](),
      var_core_value_sigB608 = var_core_value_sigEB43[ox4aa8f6(0x255)]((var_core_value_sig5F1A, var_core_value_sigB455) => {
        const var_core_value_sig5241 = ox4aa8f6;
        var var_core_value_sigC6E5, var_core_value_sigCEFB, var_core_value_sig1537;
        return {
          ...var_core_value_sig5F1A[var_core_value_sig5241(0x210)],
          id: (0x0, l["generateRandomId"])(0x6),
          values: b(var_core_value_sig4186, var_core_value_sig5F1A["values"], var_core_value_sig5F1A[var_core_value_sig5241(0x1be)] ?? "id"),
          orderKey: ((var_core_value_sigC6E5 = var_core_value_sig5F1A["record"]) == null ? void 0x0 : var_core_value_sigC6E5[var_core_value_sig5241(0x1c3)]) || "" + (var_core_value_sigF963 + var_core_value_sigB455),
          createdAt: ((var_core_value_sigCEFB = var_core_value_sig5F1A[var_core_value_sig5241(0x210)]) == null ? void 0x0 : var_core_value_sigCEFB[var_core_value_sig5241(0x263)]) || var_core_value_sigF963,
          updatedAt: ((var_core_value_sig1537 = var_core_value_sig5F1A[var_core_value_sig5241(0x210)]) == null ? void 0x0 : var_core_value_sig1537[var_core_value_sig5241(0x26a)]) || var_core_value_sigF963
        };
      });
    if (!this[ox4aa8f6(0x110)][ox4aa8f6(0x226)](c[ox4aa8f6(0x139)]["id"], {
      unitId: this[ox4aa8f6(0x223)][ox4aa8f6(0x24e)](),
      tableId: this[ox4aa8f6(0x17d)],
      records: var_core_value_sigB608,
      source: c[ox4aa8f6(0x20a)]["Facade"]
    })) throw Error(ox4aa8f6(0x163));
    return var_core_value_sigB608[ox4aa8f6(0x255)](var_core_value_sigE4C6 => this[ox4aa8f6(0x260)][ox4aa8f6(0x1e6)](I, this[ox4aa8f6(0x223)], this, var_core_value_sigE4C6["id"], this[ox4aa8f6(0x260)]));
  }
  ["deleteRecords"](var_core_value_sigF866) {
    return !var_core_value_sigF866[ox18e5ef(0x12e)] || this["_commandService"]["syncExecuteCommand"](c[ox18e5ef(0x155)]["id"], {
      unitId: this[ox18e5ef(0x223)][ox18e5ef(0x24e)](),
      tableId: this[ox18e5ef(0x17d)],
      recordIds: var_core_value_sigF866,
      source: c[ox18e5ef(0x20a)][ox18e5ef(0xe5)]
    });
  }
  ["getRange"](var_core_value_sig5EFB, var_core_value_sig3A85, var_core_value_sig2682 = 0x1, var_core_value_sig4BB5 = 0x1) {
    return this[ox129e92(0x260)][ox129e92(0x1e6)](A, this["_base"], this, {
      startRow: var_core_value_sig5EFB,
      endRow: var_core_value_sig5EFB + var_core_value_sig2682 - 0x1,
      startColumn: var_core_value_sig3A85,
      endColumn: var_core_value_sig3A85 + var_core_value_sig4BB5 - 0x1
    }, this["_injector"]);
  }
  ["getDataRange"]() {
    var var_core_value_sig6709;
    let var_core_value_sig52CA = (0x0, c[ox559605(0x191)])(this[ox559605(0x1f2)]()),
      var_core_value_sigC030 = ((var_core_value_sig6709 = var_core_value_sig52CA["recordOrder"]) == null ? void 0x0 : var_core_value_sig6709["length"]) ?? 0x0,
      var_core_value_sig88F6 = var_core_value_sig52CA[ox559605(0x27f)][ox559605(0xe9)](var_core_value_sig4313 => y(var_core_value_sig52CA["fields"][var_core_value_sig4313]))["length"];
    return this[ox559605(0x20e)](0x0, 0x0, Math[ox559605(0x166)](var_core_value_sigC030, 0x1), Math[ox559605(0x166)](var_core_value_sig88F6, 0x1));
  }
  ["getViews"]() {
    let var_core_value_sig37DB = this[ox4b6040(0x1f2)]();
    return var_core_value_sig37DB[ox4b6040(0x113)][ox4b6040(0xe9)](var_core_value_sigFC87 => var_core_value_sig37DB[ox4b6040(0x106)][var_core_value_sigFC87])[ox4b6040(0x255)](var_core_value_sig156F => this[ox4b6040(0x260)]["createInstance"](z, this[ox4b6040(0x223)], this, var_core_value_sig156F, this[ox4b6040(0x260)]));
  }
  ["getViewById"](var_core_value_sig5542) {
    return this[ox455c93(0x1f2)]()[ox455c93(0x106)][var_core_value_sig5542] ? this[ox455c93(0x260)][ox455c93(0x1e6)](z, this["_base"], this, var_core_value_sig5542, this["_injector"]) : null;
  }
  ["getViewByName"](var_core_value_sigE0A9) {
    let var_core_value_sigA73E = this["_getTable"](),
      var_core_value_sig7620 = Object[ox4bc204(0x1f5)](var_core_value_sigA73E[ox4bc204(0x106)])["find"](var_core_value_sigDD51 => var_core_value_sigDD51[ox4bc204(0x162)] === var_core_value_sigE0A9);
    return var_core_value_sig7620 ? this[ox4bc204(0x260)][ox4bc204(0x1e6)](z, this[ox4bc204(0x223)], this, var_core_value_sig7620["id"], this[ox4bc204(0x260)]) : null;
  }
  ["createView"](var_core_value_sigB9FC, var_core_value_sig5055, var_core_value_sig3801) {
    var var_core_value_sig45F0, var_core_value_sigBC91, var_core_value_sigCB88, var_core_value_sig8D65;
    let var_core_value_sig8122 = this[ox23bb35(0x1f2)](),
      var_core_value_sigEDC6 = [l[ox23bb35(0xfd)], ...((var_core_value_sig3801 == null || (var_core_value_sig45F0 = var_core_value_sig3801[ox23bb35(0x114)]) == null ? void 0x0 : var_core_value_sig45F0[ox23bb35(0x27f)]) ?? var_core_value_sig8122[ox23bb35(0x27f)])[ox23bb35(0xe9)](var_core_value_sigF057 => y(var_core_value_sig8122[ox23bb35(0xeb)][var_core_value_sigF057]))],
      var_core_value_sig611A = {
        ...(var_core_value_sig3801 == null ? void 0x0 : var_core_value_sig3801[ox23bb35(0x114)]),
        id: (0x0, l[ox23bb35(0x108)])(0x6),
        name: var_core_value_sigB9FC,
        type: var_core_value_sig5055,
        tableId: this[ox23bb35(0x17d)],
        config: (var_core_value_sig3801 == null || (var_core_value_sigBC91 = var_core_value_sig3801[ox23bb35(0x114)]) == null ? void 0x0 : var_core_value_sigBC91[ox23bb35(0xff)]) ?? {},
        fieldOrder: var_core_value_sigEDC6,
        fieldSettings: {
          ...(var_core_value_sig3801 == null || (var_core_value_sigCB88 = var_core_value_sig3801[ox23bb35(0x114)]) == null ? void 0x0 : var_core_value_sigCB88[ox23bb35(0x182)]),
          [l[ox23bb35(0xfd)]]: {
            ...(var_core_value_sig3801 == null || (var_core_value_sig8D65 = var_core_value_sig3801["view"]) == null || (var_core_value_sig8D65 = var_core_value_sig8D65["fieldSettings"]) == null ? void 0x0 : var_core_value_sig8D65[l[ox23bb35(0xfd)]]),
            hidden: !0x0
          }
        }
      };
    if (!this[ox23bb35(0x110)][ox23bb35(0x226)](c["CreateBaseViewCommand"]["id"], {
      unitId: this[ox23bb35(0x223)][ox23bb35(0x24e)](),
      tableId: this[ox23bb35(0x17d)],
      view: var_core_value_sig611A,
      index: var_core_value_sig3801 == null ? void 0x0 : var_core_value_sig3801["index"]
    })) throw Error("Failed\x20to\x20create\x20view\x20\x22" + var_core_value_sigB9FC + "\x22");
    return this["_injector"][ox23bb35(0x1e6)](z, this[ox23bb35(0x223)], this, var_core_value_sig611A["id"], this[ox23bb35(0x260)]);
  }
  ["getSchema"]() {
    let var_core_value_sig6BD9 = this[ox1bb1e3(0x1f2)](),
      var_core_value_sig7E56 = var_core_value_sig6BD9[ox1bb1e3(0x27f)][ox1bb1e3(0xe9)](var_core_value_sig72F6 => y(var_core_value_sig6BD9[ox1bb1e3(0xeb)][var_core_value_sig72F6])),
      var_core_value_sig4161 = var_core_value_sig6BD9["viewOrder"][ox1bb1e3(0xe9)](var_core_value_sig9FBA => var_core_value_sig6BD9["views"][var_core_value_sig9FBA]);
    return {
      id: var_core_value_sig6BD9["id"],
      name: var_core_value_sig6BD9[ox1bb1e3(0x162)],
      formulaName: this[ox1bb1e3(0x11b)](),
      primaryFieldId: var_core_value_sig6BD9[ox1bb1e3(0xea)],
      fieldIds: var_core_value_sig7E56,
      viewIds: var_core_value_sig4161,
      recordCount: this[ox1bb1e3(0x15e)]()["length"],
      fields: var_core_value_sig7E56["map"](var_core_value_sigFE01 => {
        const var_core_value_sigA2CE = ox1bb1e3;
        let var_core_value_sig1975 = var_core_value_sig6BD9[var_core_value_sigA2CE(0xeb)][var_core_value_sigFE01];
        return {
          id: var_core_value_sig1975["id"],
          name: var_core_value_sig1975[var_core_value_sigA2CE(0x162)],
          type: var_core_value_sig1975[var_core_value_sigA2CE(0x222)],
          config: var_core_value_sig1975[var_core_value_sigA2CE(0xff)],
          readonly: var_core_value_sig1975[var_core_value_sigA2CE(0x104)],
          description: var_core_value_sig1975[var_core_value_sigA2CE(0x1df)]
        };
      }),
      views: var_core_value_sig4161["map"](var_core_value_sig6EA1 => {
        const var_core_value_sig029F = ox1bb1e3;
        let var_core_value_sig3767 = var_core_value_sig6BD9["views"][var_core_value_sig6EA1];
        return {
          id: var_core_value_sig3767["id"],
          name: var_core_value_sig3767[var_core_value_sig029F(0x162)],
          type: var_core_value_sig3767["type"]
        };
      })
    };
  }
  ["_getTable"]() {
    let var_core_value_sig7580 = this[ox327baa(0x223)][ox327baa(0xf8)]()[ox327baa(0x178)]()[ox327baa(0x131)][this["_tableId"]];
    if (!var_core_value_sig7580) throw Error("[FTable]:\x20table\x20\x22" + this["_tableId"] + ox327baa(0x164));
    return var_core_value_sig7580;
  }
  ["_resolveRecordIds"](var_core_value_sig1F18 = {}) {
    let var_core_value_sigD5A0 = this[ox1a19aa(0x223)][ox1a19aa(0xf8)]()[ox1a19aa(0x178)](),
      var_core_value_sig81B2 = this[ox1a19aa(0x1f2)]();
    if (var_core_value_sig1F18["viewId"]) {
      let var_core_value_sig670B = this[ox1a19aa(0x167)][ox1a19aa(0x1a7)](var_core_value_sigD5A0, this["_tableId"], var_core_value_sig1F18[ox1a19aa(0x21b)]);
      if (ox1a19aa(0x170) in var_core_value_sig670B && Array[ox1a19aa(0x276)](var_core_value_sig670B[ox1a19aa(0x170)])) return var_core_value_sig670B[ox1a19aa(0x170)][ox1a19aa(0x255)](var_core_value_sig12F2 => var_core_value_sig12F2[ox1a19aa(0x1d5)]);
    }
    return (var_core_value_sig81B2[ox1a19aa(0x1c8)] ? var_core_value_sig81B2[ox1a19aa(0x1c8)][ox1a19aa(0x255)](var_core_value_sig6912 => var_core_value_sig81B2[ox1a19aa(0x132)][var_core_value_sig6912]) : Object[ox1a19aa(0x1f5)](var_core_value_sig81B2[ox1a19aa(0x132)])["sort"]((var_core_value_sigE235, var_core_value_sig7664) => var_core_value_sigE235["orderKey"][ox1a19aa(0x213)](var_core_value_sig7664["orderKey"])))["filter"](var_core_value_sig2281 => var_core_value_sig2281)[ox1a19aa(0x255)](var_core_value_sig5E86 => var_core_value_sig5E86["id"]);
  }
};
B = g([h(0x3, l["ICommandService"]), h(0x4, l["IPermissionService"]), h(0x5, c["IBaseProjectionService"])], B);
function V(var_core_value_sig68A2, var_core_value_sigCC17) {
  let var_core_value_sig32AE = Math["max"](0x0, var_core_value_sigCC17[ox493532(0x220)] ?? 0x0);
  return var_core_value_sigCC17[ox493532(0x242)] == null ? var_core_value_sig68A2["slice"](var_core_value_sig32AE) : var_core_value_sig68A2["slice"](var_core_value_sig32AE, var_core_value_sig32AE + Math[ox493532(0x166)](0x0, var_core_value_sigCC17[ox493532(0x242)]));
}
;
function H(var_core_value_sigC753, var_core_value_sigFFD1, var_core_value_sig81AE = []) {
  return var_core_value_sig81AE[ox23a68d(0x12e)] ? [...var_core_value_sigC753][ox23a68d(0x1fb)]((var_core_value_sigA0A5, var_core_value_sig10AA) => {
    const var_core_value_sigE6D0 = ox23a68d;
    for (let var_core_value_sig6998 of var_core_value_sig81AE) {
      var var_core_value_sig8E91;
      let var_core_value_sig2259 = var_core_value_sig6998["direction"] === l["BaseSortDirection"]["DESC"] ? -0x1 : 0x1,
        var_core_value_sig9E2F = U(var_core_value_sigA0A5[var_core_value_sigE6D0(0x1f5)][var_core_value_sig6998[var_core_value_sigE6D0(0x1d3)]], var_core_value_sig10AA[var_core_value_sigE6D0(0x1f5)][var_core_value_sig6998["fieldId"]], (var_core_value_sig8E91 = var_core_value_sigFFD1[var_core_value_sigE6D0(0xeb)][var_core_value_sig6998[var_core_value_sigE6D0(0x1d3)]]) == null ? void 0x0 : var_core_value_sig8E91[var_core_value_sigE6D0(0x222)]);
      if (var_core_value_sig9E2F !== 0x0) return var_core_value_sig9E2F * var_core_value_sig2259;
    }
    return String(var_core_value_sigA0A5[var_core_value_sigE6D0(0x1c3)] ?? var_core_value_sigA0A5["id"])[var_core_value_sigE6D0(0x213)](String(var_core_value_sig10AA["orderKey"] ?? var_core_value_sig10AA["id"]));
  }) : var_core_value_sigC753;
}
;
function U(var_core_value_sigF79F, var_core_value_sig0E54, var_core_value_sig3B17) {
  return var_core_value_sigF79F == null && var_core_value_sig0E54 == null ? 0x0 : var_core_value_sigF79F == null ? -0x1 : var_core_value_sig0E54 == null ? 0x1 : typeof var_core_value_sigF79F == "number" && typeof var_core_value_sig0E54 == "number" ? var_core_value_sigF79F - var_core_value_sig0E54 : var_core_value_sig3B17 === l[ox2bc68a(0x1f6)][ox2bc68a(0x285)] ? Number(var_core_value_sigF79F) - Number(var_core_value_sig0E54) : String(var_core_value_sigF79F)[ox2bc68a(0x213)](String(var_core_value_sig0E54));
}
;
function W(var_core_value_sig6C4A, var_core_value_sig73D9, var_core_value_sigEAF8) {
  var var_core_value_sig0455;
  if (!var_core_value_sigEAF8 || !((var_core_value_sig0455 = var_core_value_sigEAF8["conditions"]) != null && var_core_value_sig0455[ox32b071(0x12e)])) return !0x0;
  let {
    conjunction: var_core_value_sig5AF5 = l[ox32b071(0x26e)]["OR"],
    conditions: var_core_value_sig737C
  } = var_core_value_sigEAF8;
  return var_core_value_sig5AF5 === l[ox32b071(0x26e)][ox32b071(0x269)] && var_core_value_sig737C[ox32b071(0x12e)] > 0x1 ? var_core_value_sig737C[ox32b071(0x13e)](var_core_value_sig00BE => G(var_core_value_sig6C4A, var_core_value_sig73D9, var_core_value_sig00BE)) : var_core_value_sig737C[ox32b071(0x157)](var_core_value_sig7BB5 => G(var_core_value_sig6C4A, var_core_value_sig73D9, var_core_value_sig7BB5));
}
;
function G(var_core_value_sig9DE4, var_core_value_sig77FA, var_core_value_sigA4A7) {
  let var_core_value_sigA4DF = var_core_value_sig9DE4[ox46ee79(0x1f5)][var_core_value_sigA4A7[ox46ee79(0x1d3)]],
    var_core_value_sigCC9D = var_core_value_sig77FA[ox46ee79(0xeb)][var_core_value_sigA4A7[ox46ee79(0x1d3)]];
  if (K(var_core_value_sigA4A7)) {
    let var_core_value_sig6AAD = q(var_core_value_sigA4A7)["test"](String(var_core_value_sigA4DF ?? ""));
    return var_core_value_sigA4A7[ox46ee79(0x177)] === ox46ee79(0x1c5) ? var_core_value_sig6AAD : !var_core_value_sig6AAD;
  }
  return !var_core_value_sigCC9D || (0x0, c[ox46ee79(0x1b3)])(var_core_value_sigA4DF, var_core_value_sigA4A7[ox46ee79(0x177)], var_core_value_sigA4A7[ox46ee79(0x173)], var_core_value_sigCC9D);
}
;
function K(var_core_value_sig90F5) {
  return var_core_value_sig90F5[ox42c856(0x177)] === ox42c856(0x1c5) || var_core_value_sig90F5[ox42c856(0x177)] === ox42c856(0x11d);
}
;
function q(var_core_value_sigD2BA) {
  let var_core_value_sigCD3A = String(var_core_value_sigD2BA[ox122bcf(0x173)] ?? "");
  if (var_core_value_sigCD3A["length"] > 0x200) throw Error(ox122bcf(0x212));
  try {
    return new RegExp(var_core_value_sigCD3A, var_core_value_sigD2BA[ox122bcf(0x234)] ? void 0x0 : "i");
  } catch (var_core_value_sig1157) {
    throw Error(ox122bcf(0x14f) + var_core_value_sigCD3A + ".\x20" + (var_core_value_sig1157 instanceof Error ? var_core_value_sig1157[ox122bcf(0x1e7)] : String(var_core_value_sig1157)));
  }
}
;
function J(var_core_value_sig519D, var_core_value_sigC7E7, var_core_value_sig6E1C) {
  if (var_core_value_sig6E1C[ox556b6c(0x222)] !== ox556b6c(0x102) && var_core_value_sig6E1C[ox556b6c(0x222)] !== "custom") {
    var var_core_value_sigFABC;
    if (var_core_value_sig6E1C[ox556b6c(0x222)] === l[ox556b6c(0x171)][ox556b6c(0x158)]) {
      var var_core_value_sig413D;
      let var_core_value_sigF639 = [((var_core_value_sig413D = var_core_value_sig6E1C["fields"]) == null || (var_core_value_sig413D = var_core_value_sig413D[0x0]) == null ? void 0x0 : var_core_value_sig413D["id"]) ?? var_core_value_sig519D[ox556b6c(0xea)], ...(var_core_value_sig6E1C[ox556b6c(0x174)] ?? [])];
      return Array["from"](new Set(var_core_value_sigF639[ox556b6c(0xe9)](var_core_value_sigD082 => !!var_core_value_sig519D["fields"][var_core_value_sigD082])));
    }
    if ((var_core_value_sigFABC = var_core_value_sig6E1C[ox556b6c(0xeb)]) != null && var_core_value_sigFABC[ox556b6c(0x12e)]) return var_core_value_sig6E1C["fields"][ox556b6c(0x255)](var_core_value_sigEAE5 => var_core_value_sigEAE5["id"])["filter"](var_core_value_sigE94C => {
      const var_core_value_sig6D47 = ox556b6c;
      var var_core_value_sigCB82;
      return !!(var_core_value_sig519D["fields"][var_core_value_sigE94C] && !(var_core_value_sigC7E7 != null && (var_core_value_sigCB82 = var_core_value_sigC7E7[var_core_value_sig6D47(0x182)]) != null && (var_core_value_sigCB82 = var_core_value_sigCB82[var_core_value_sigE94C]) != null && var_core_value_sigCB82[var_core_value_sig6D47(0x1b1)]));
    });
  }
  return var_core_value_sig519D[ox556b6c(0x27f)]["filter"](var_core_value_sigA694 => {
    const var_core_value_sig18E01 = ox556b6c;
    var var_core_value_sig0428;
    return !!(var_core_value_sig519D[var_core_value_sig18E01(0xeb)][var_core_value_sigA694] && !(var_core_value_sigC7E7 != null && (var_core_value_sig0428 = var_core_value_sigC7E7[var_core_value_sig18E01(0x182)]) != null && (var_core_value_sig0428 = var_core_value_sig0428[var_core_value_sigA694]) != null && var_core_value_sig0428[var_core_value_sig18E01(0x1b1)]));
  });
}
let Y = class extends u["FBase"] {
  constructor(var_core_value_sigBE07, var_core_value_sig555F, var_core_value_sig3D6F, var_core_value_sig336C, var_core_value_sig6E68) {
    super(), this[ox214889(0x223)] = var_core_value_sigBE07, this[ox214889(0x260)] = var_core_value_sig555F, this[ox214889(0x1cb)] = var_core_value_sig3D6F, this[ox214889(0x110)] = var_core_value_sig336C, this["_permissionService"] = var_core_value_sig6E68;
  }
  ["getBase"]() {
    return this[ox389216(0x223)];
  }
  ["getId"]() {
    return this["_base"]["getUnitId"]();
  }
  ["getPermission"]() {
    return new p(this[ox1ece0b(0x24e)](), this[ox1ece0b(0x110)], this[ox1ece0b(0x27d)]);
  }
  ["save"]() {
    return this["_resourceLoaderService"][ox2d3ba5(0x192)](this["getId"]()) ?? l["Tools"][ox2d3ba5(0x1f1)](this[ox2d3ba5(0x223)][ox2d3ba5(0x178)]());
  }
  ["getName"]() {
    return this[ox362c6d(0x223)][ox362c6d(0x178)]()[ox362c6d(0x162)];
  }
  ["setName"](var_core_value_sig8DFE) {
    this[ox5c7250(0x110)][ox5c7250(0x226)](c[ox5c7250(0x169)]["id"], {
      unitId: this["getId"](),
      name: var_core_value_sig8DFE
    });
  }
  ["getTables"]() {
    let var_core_value_sig48EA = this[ox53e5bb(0x223)][ox53e5bb(0x178)]();
    return var_core_value_sig48EA[ox53e5bb(0x23e)][ox53e5bb(0x255)](var_core_value_sigCF4E => var_core_value_sig48EA["tables"][var_core_value_sigCF4E])[ox53e5bb(0xe9)](var_core_value_sig6CAD => var_core_value_sig6CAD)[ox53e5bb(0x255)](var_core_value_sig8CF5 => this["_injector"][ox53e5bb(0x1e6)](B, this, var_core_value_sig8CF5["id"], this[ox53e5bb(0x260)]));
  }
  ["getTableById"](var_core_value_sig5E16) {
    let var_core_value_sig09F3 = this[ox360064(0x223)][ox360064(0x178)]()[ox360064(0x131)][var_core_value_sig5E16];
    return var_core_value_sig09F3 ? this[ox360064(0x260)]["createInstance"](B, this, var_core_value_sig09F3["id"], this[ox360064(0x260)]) : null;
  }
  ["getTableByName"](var_core_value_sig4592) {
    let var_core_value_sigC5C4 = this["_base"][ox57068e(0x178)](),
      var_core_value_sig1617 = Object[ox57068e(0x1f5)](var_core_value_sigC5C4["tables"])[ox57068e(0x13b)](var_core_value_sigDDD7 => var_core_value_sigDDD7[ox57068e(0x162)] === var_core_value_sig4592);
    return var_core_value_sig1617 ? this[ox57068e(0x260)][ox57068e(0x1e6)](B, this, var_core_value_sig1617["id"], this[ox57068e(0x260)]) : null;
  }
  ["insertTable"](var_core_value_sig4169, var_core_value_sig6D19) {
    let var_core_value_sig279C = (0x0, l["createDefaultBaseTableSnapshot"])({
        id: (0x0, l[ox24e831(0x108)])(),
        name: var_core_value_sig4169,
        ...(var_core_value_sig6D19 == null ? void 0x0 : var_core_value_sig6D19[ox24e831(0x12a)]),
        primaryFieldName: var_core_value_sig6D19 == null ? void 0x0 : var_core_value_sig6D19["primaryFieldName"]
      }),
      var_core_value_sigAC51 = l[ox24e831(0x119)]["commonExtend"](var_core_value_sig279C, (var_core_value_sig6D19 == null ? void 0x0 : var_core_value_sig6D19[ox24e831(0x12a)]) ?? {}),
      var_core_value_sig8986 = (0x0, c[ox24e831(0x14c)])(this[ox24e831(0x223)][ox24e831(0x178)](), var_core_value_sigAC51[ox24e831(0x162)]);
    if (!var_core_value_sig8986[ox24e831(0x216)]) throw Error(ox24e831(0x117) + var_core_value_sigAC51[ox24e831(0x162)] + ox24e831(0x1b8) + c[ox24e831(0x1af)] + "\x20" + var_core_value_sig8986[ox24e831(0x115)]);
    if (!this[ox24e831(0x110)][ox24e831(0x226)](c[ox24e831(0xd1)]["id"], {
      unitId: this[ox24e831(0x223)][ox24e831(0x233)](),
      table: var_core_value_sigAC51,
      index: var_core_value_sig6D19 == null ? void 0x0 : var_core_value_sig6D19["index"]
    })) throw Error(ox24e831(0x229) + var_core_value_sig4169 + "\x22.");
    return this[ox24e831(0x260)][ox24e831(0x1e6)](B, this, var_core_value_sigAC51["id"], this["_injector"]);
  }
  ["deleteTable"](var_core_value_sigCAF7) {
    let var_core_value_sigED1C = typeof var_core_value_sigCAF7 == ox3f53c5(0x275) ? var_core_value_sigCAF7 : var_core_value_sigCAF7[ox3f53c5(0x24e)]();
    if (!this[ox3f53c5(0x110)][ox3f53c5(0x226)](c[ox3f53c5(0x20d)]["id"], {
      unitId: this["_base"]["getUnitId"](),
      tableId: var_core_value_sigED1C
    })) throw Error(ox3f53c5(0x288) + var_core_value_sigED1C + "\x22.");
    return !0x0;
  }
  ["duplicateTable"](var_core_value_sig726E, var_core_value_sig2CD3) {
    let var_core_value_sig038E = this[ox47e5f3(0x223)][ox47e5f3(0x178)](),
      var_core_value_sigAA1E = typeof var_core_value_sig726E == ox47e5f3(0x275) ? var_core_value_sig726E : var_core_value_sig726E[ox47e5f3(0x24e)](),
      var_core_value_sigC9F5 = var_core_value_sig038E[ox47e5f3(0x131)][var_core_value_sigAA1E];
    if (!var_core_value_sigC9F5) throw Error(ox47e5f3(0x243) + var_core_value_sigAA1E + ox47e5f3(0x164));
    let var_core_value_sig7EEA = var_core_value_sig038E["tableOrder"][ox47e5f3(0x257)](var_core_value_sigAA1E) + 0x1,
      var_core_value_sig59CE = (0x0, c[ox47e5f3(0x176)])(var_core_value_sigC9F5, {
        id: (0x0, l[ox47e5f3(0x108)])(),
        name: (0x0, c[ox47e5f3(0x116)])(var_core_value_sig038E, var_core_value_sigC9F5[ox47e5f3(0x162)] + "\x20Copy"),
        includeRecords: (var_core_value_sig2CD3 == null ? void 0x0 : var_core_value_sig2CD3[ox47e5f3(0x183)]) ?? !0x1,
        regenerateViewIds: (var_core_value_sig2CD3 == null ? void 0x0 : var_core_value_sig2CD3[ox47e5f3(0x1bb)]) ?? !0x1
      });
    if (!this["_commandService"][ox47e5f3(0x226)](c["CreateBaseTableCommand"]["id"], {
      unitId: this["_base"][ox47e5f3(0x233)](),
      table: var_core_value_sig59CE,
      index: var_core_value_sig7EEA
    })) throw Error(ox47e5f3(0x1ba) + var_core_value_sigAA1E + "\x22.");
    return this[ox47e5f3(0x260)][ox47e5f3(0x1e6)](B, this, var_core_value_sig59CE["id"], this[ox47e5f3(0x260)]);
  }
  ["getSchema"]() {
    let var_core_value_sig33C8 = this[ox1aa297(0x223)]["getSnapshot"]();
    return {
      id: var_core_value_sig33C8["id"],
      name: var_core_value_sig33C8["name"],
      tables: this["getTables"]()["map"](var_core_value_sigB2CE => var_core_value_sigB2CE[ox1aa297(0x23a)]())
    };
  }
};
Y = g([h(0x1, (0x0, l["Inject"])(l["Injector"])), h(0x2, l["IResourceLoaderService"]), h(0x3, l["ICommandService"]), h(0x4, l["IPermissionService"])], Y);
var X = class extends u["FUniver"] {
  ["_initialize"]() {
    this[ox2cf1dd(0x190)](), this["_initBaseAfterEvents"]();
  }
  ["createBase"](var_core_value_sig957F = {}, var_core_value_sig803B) {
    let var_core_value_sig5830 = this[ox3b5db2(0x185)][ox3b5db2(0x17f)](l[ox3b5db2(0x217)]["UNIVER_BASE"], var_core_value_sig957F, var_core_value_sig803B);
    return this[ox3b5db2(0x260)][ox3b5db2(0x1e6)](Y, var_core_value_sig5830);
  }
  ["getActiveBase"]() {
    let var_core_value_sig4A7C = this[ox16fb1d(0x185)][ox16fb1d(0x1bf)](l["UniverInstanceType"][ox16fb1d(0x14a)]);
    return var_core_value_sig4A7C ? this[ox16fb1d(0x260)]["createInstance"](Y, var_core_value_sig4A7C) : null;
  }
  ["getBase"](var_core_value_sigF975) {
    let var_core_value_sigCDAF = this[ox3404c9(0x185)]["getUnit"](var_core_value_sigF975, l["UniverInstanceType"][ox3404c9(0x14a)]);
    return var_core_value_sigCDAF ? this[ox3404c9(0x260)][ox3404c9(0x1e6)](Y, var_core_value_sigCDAF) : null;
  }
  ["getBases"]() {
    return this[ox55813c(0x185)][ox55813c(0x203)](l[ox55813c(0x217)][ox55813c(0x14a)])[ox55813c(0x255)](var_core_value_sig443C => this["_injector"][ox55813c(0x1e6)](Y, var_core_value_sig443C));
  }
  ["_initBaseAfterEvents"]() {
    this[ox5422d2(0x194)](this["registerEventHandler"](this["Event"][ox5422d2(0x19e)], () => this[ox5422d2(0x110)][ox5422d2(0xe7)]((var_core_value_sigDBB7, var_core_value_sigD0A8) => {
      const var_core_value_sigF4B9 = ox5422d2;
      var var_core_value_sig5CEE;
      if (!Z(var_core_value_sigDBB7, c[var_core_value_sigF4B9(0x15f)])) return;
      let var_core_value_sigE92A = var_core_value_sigDBB7[var_core_value_sigF4B9(0x211)];
      if (!((var_core_value_sig5CEE = var_core_value_sigE92A[var_core_value_sigF4B9(0x180)]) != null && var_core_value_sig5CEE[var_core_value_sigF4B9(0x12e)])) return;
      let var_core_value_sig362B = this[var_core_value_sigF4B9(0xf8)](var_core_value_sigE92A[var_core_value_sigF4B9(0x251)]),
        var_core_value_sig5CA5 = var_core_value_sig362B == null ? void 0x0 : var_core_value_sig362B[var_core_value_sigF4B9(0x1ca)](var_core_value_sigE92A["hierarchyChanges"][0x0]["tableId"]);
      if (!var_core_value_sig362B || !var_core_value_sig5CA5) return;
      let var_core_value_sigE90F = {
        base: var_core_value_sig362B,
        table: var_core_value_sig5CA5,
        changes: var_core_value_sigE92A[var_core_value_sigF4B9(0x180)],
        source: var_core_value_sigD0A8 != null && var_core_value_sigD0A8[var_core_value_sigF4B9(0x231)] ? c[var_core_value_sigF4B9(0x20a)][var_core_value_sigF4B9(0x225)] : var_core_value_sigE92A[var_core_value_sigF4B9(0x1e5)] ?? c["BaseEventSource"]["UI"]
      };
      this["fireEvent"](this[var_core_value_sigF4B9(0x1d6)][var_core_value_sigF4B9(0x19e)], var_core_value_sigE90F);
    }))), this["disposeWithMe"](this["registerEventHandler"](this[ox5422d2(0x1d6)]["BaseTableCreated"], () => this[ox5422d2(0x110)][ox5422d2(0xe7)](var_core_value_sigEFD4 => {
      const var_core_value_sig861B = ox5422d2;
      if (var_core_value_sigEFD4["id"] !== c[var_core_value_sig861B(0xd1)]["id"]) return;
      let {
          unitId: var_core_value_sig5237,
          table: var_core_value_sigBB00,
          index: var_core_value_sig7E54
        } = var_core_value_sigEFD4[var_core_value_sig861B(0x211)],
        var_core_value_sig9A8D = this["getBase"](var_core_value_sig5237);
      if (!var_core_value_sig9A8D) return;
      let var_core_value_sigC259 = {
        base: var_core_value_sig9A8D,
        table: var_core_value_sigBB00,
        index: var_core_value_sig7E54
      };
      this[var_core_value_sig861B(0x1a4)](this["Event"][var_core_value_sig861B(0x16a)], var_core_value_sigC259);
    }))), this[ox5422d2(0x194)](this[ox5422d2(0x18d)](this["Event"]["BaseTableFieldCreated"], () => this[ox5422d2(0x110)][ox5422d2(0xe7)](var_core_value_sig9C9F => {
      const var_core_value_sigFDEA = ox5422d2;
      if (var_core_value_sig9C9F["id"] !== c[var_core_value_sigFDEA(0x19c)]["id"]) return;
      let {
          unitId: var_core_value_sig86D0,
          tableId: var_core_value_sig4CD2,
          field: var_core_value_sig48CA,
          index: var_core_value_sig50AF,
          viewIndexes: var_core_value_sigA942
        } = var_core_value_sig9C9F["params"],
        var_core_value_sigA621 = this[var_core_value_sigFDEA(0xf8)](var_core_value_sig86D0);
      if (!var_core_value_sigA621) return;
      let var_core_value_sigBBFF = var_core_value_sigA621[var_core_value_sigFDEA(0x1ca)](var_core_value_sig4CD2);
      if (!var_core_value_sigBBFF) return;
      let var_core_value_sig8889 = {
        base: var_core_value_sigA621,
        table: var_core_value_sigBBFF,
        field: var_core_value_sig48CA,
        index: var_core_value_sig50AF,
        viewIndexes: var_core_value_sigA942
      };
      this[var_core_value_sigFDEA(0x1a4)](this[var_core_value_sigFDEA(0x1d6)][var_core_value_sigFDEA(0x265)], var_core_value_sig8889);
    }))), this["disposeWithMe"](this[ox5422d2(0x18d)](this[ox5422d2(0x1d6)]["BaseTableRecordCreated"], () => this["_commandService"][ox5422d2(0xe7)](var_core_value_sig32F8 => {
      const var_core_value_sig5B67 = ox5422d2;
      if (var_core_value_sig32F8["id"] !== c[var_core_value_sig5B67(0xdd)]["id"] && var_core_value_sig32F8["id"] !== c[var_core_value_sig5B67(0x139)]["id"]) return;
      let var_core_value_sig1758 = var_core_value_sig32F8[var_core_value_sig5B67(0x211)],
        {
          unitId: var_core_value_sig4805,
          tableId: var_core_value_sigE67E
        } = var_core_value_sig1758,
        var_core_value_sig2902 = var_core_value_sig1758[var_core_value_sig5B67(0x132)] ?? [var_core_value_sig1758["record"]],
        var_core_value_sig9989 = this["getBase"](var_core_value_sig4805);
      if (!var_core_value_sig9989) return;
      let var_core_value_sig698E = var_core_value_sig9989["getTableById"](var_core_value_sigE67E);
      if (!var_core_value_sig698E) return;
      let var_core_value_sig2809 = {
        base: var_core_value_sig9989,
        table: var_core_value_sig698E,
        records: var_core_value_sig2902
      };
      this[var_core_value_sig5B67(0x1a4)](this["Event"][var_core_value_sig5B67(0x21e)], var_core_value_sig2809);
    }))), this[ox5422d2(0x194)](this["registerEventHandler"](this[ox5422d2(0x1d6)][ox5422d2(0x262)], () => this[ox5422d2(0x110)]["onCommandExecuted"](var_core_value_sig2DAB => {
      const var_core_value_sig877E = ox5422d2;
      if (var_core_value_sig2DAB["id"] !== c[var_core_value_sig877E(0x121)]["id"]) return;
      let {
          unitId: var_core_value_sig20C8,
          tableId: var_core_value_sigE9A7,
          view: var_core_value_sigBECE,
          index: var_core_value_sig1B22
        } = var_core_value_sig2DAB["params"],
        var_core_value_sig7F72 = this[var_core_value_sig877E(0xf8)](var_core_value_sig20C8);
      if (!var_core_value_sig7F72) return;
      let var_core_value_sig7B2A = var_core_value_sig7F72[var_core_value_sig877E(0x1ca)](var_core_value_sigE9A7);
      if (!var_core_value_sig7B2A) return;
      let var_core_value_sig06CD = {
        base: var_core_value_sig7F72,
        table: var_core_value_sig7B2A,
        view: var_core_value_sigBECE,
        index: var_core_value_sig1B22
      };
      this["fireEvent"](this["Event"][var_core_value_sig877E(0x262)], var_core_value_sig06CD);
    }))), this[ox5422d2(0x194)](this["registerEventHandler"](this["Event"]["BaseTableCellValueChanged"], () => this[ox5422d2(0x110)][ox5422d2(0xe7)](var_core_value_sigA5F1 => {
      const var_core_value_sig97A2 = ox5422d2;
      if (var_core_value_sigA5F1["id"] !== c[var_core_value_sig97A2(0x1d7)]["id"]) return;
      let {
          unitId: var_core_value_sig07E9,
          tableId: var_core_value_sig4F59,
          recordId: var_core_value_sigF564,
          fieldId: var_core_value_sig8CFA,
          value: var_core_value_sig2E11
        } = var_core_value_sigA5F1["params"],
        var_core_value_sig5B69 = this[var_core_value_sig97A2(0xf8)](var_core_value_sig07E9);
      if (!var_core_value_sig5B69) return;
      let var_core_value_sigB098 = var_core_value_sig5B69["getTableById"](var_core_value_sig4F59);
      if (!var_core_value_sigB098) return;
      let var_core_value_sigCE71 = var_core_value_sigB098["getFieldById"](var_core_value_sig8CFA);
      if (!var_core_value_sigCE71) return;
      let var_core_value_sig21D8 = var_core_value_sigB098[var_core_value_sig97A2(0x1a2)](var_core_value_sigF564);
      if (!var_core_value_sig21D8) return;
      let var_core_value_sig2B65 = {
        base: var_core_value_sig5B69,
        table: var_core_value_sigB098,
        field: var_core_value_sigCE71,
        record: var_core_value_sig21D8,
        value: var_core_value_sig2E11
      };
      this["fireEvent"](this["Event"][var_core_value_sig97A2(0x195)], var_core_value_sig2B65);
    })));
  }
  ["_initBaseBeforeEvents"]() {
    this[ox4f5a3a(0x194)](this["registerEventHandler"](this[ox4f5a3a(0x1d6)][ox4f5a3a(0x105)], () => this[ox4f5a3a(0x110)][ox4f5a3a(0x25a)](var_core_value_sigD7EA => {
      const var_core_value_sigB33B = ox4f5a3a;
      if (Z(var_core_value_sigD7EA, c[var_core_value_sigB33B(0x127)])) {
        let {
            unitId: var_core_value_sig2AD0,
            tableId: var_core_value_sig3EEE,
            patches: var_core_value_sigBC46,
            source: var_core_value_sig3D7D = c[var_core_value_sigB33B(0x20a)]["UI"]
          } = var_core_value_sigD7EA[var_core_value_sigB33B(0x211)],
          var_core_value_sig27E5 = this[var_core_value_sigB33B(0x23f)](var_core_value_sig2AD0, var_core_value_sig3EEE);
        if (!var_core_value_sig27E5) return;
        this[var_core_value_sigB33B(0x109)](var_core_value_sig27E5[var_core_value_sigB33B(0x221)], var_core_value_sig27E5[var_core_value_sigB33B(0x12a)], (0x0, c[var_core_value_sigB33B(0x17b)])(var_core_value_sig27E5[var_core_value_sigB33B(0x12a)]["getTable"](), var_core_value_sigBC46), var_core_value_sig3D7D);
        return;
      }
      if (Z(var_core_value_sigD7EA, c[var_core_value_sigB33B(0x19f)])) {
        let {
            unitId: var_core_value_sig8061,
            tableId: var_core_value_sig4D4C,
            patches: var_core_value_sigC9E0,
            source: var_core_value_sig76BA = c[var_core_value_sigB33B(0x20a)]["UI"]
          } = var_core_value_sigD7EA[var_core_value_sigB33B(0x211)],
          var_core_value_sigFBFA = this[var_core_value_sigB33B(0x23f)](var_core_value_sig8061, var_core_value_sig4D4C);
        if (!var_core_value_sigFBFA) return;
        let var_core_value_sigF602 = var_core_value_sigFBFA[var_core_value_sigB33B(0x12a)][var_core_value_sigB33B(0x235)]();
        this[var_core_value_sigB33B(0x109)](var_core_value_sigFBFA[var_core_value_sigB33B(0x221)], var_core_value_sigFBFA[var_core_value_sigB33B(0x12a)], (0x0, c[var_core_value_sigB33B(0x17b)])(var_core_value_sigF602, (0x0, c[var_core_value_sigB33B(0x1e3)])(var_core_value_sigF602, var_core_value_sigC9E0)), var_core_value_sig76BA);
        return;
      }
      if (Z(var_core_value_sigD7EA, c[var_core_value_sigB33B(0xdd)])) {
        let var_core_value_sig1BBD = var_core_value_sigD7EA["params"],
          var_core_value_sigF704 = this[var_core_value_sigB33B(0x23f)](var_core_value_sig1BBD[var_core_value_sigB33B(0x251)], var_core_value_sig1BBD["tableId"]);
        if (!var_core_value_sigF704) return;
        this[var_core_value_sigB33B(0x109)](var_core_value_sigF704["base"], var_core_value_sigF704[var_core_value_sigB33B(0x12a)], (0x0, c[var_core_value_sigB33B(0x1a3)])(var_core_value_sigF704["table"]["getTable"](), [var_core_value_sig1BBD[var_core_value_sigB33B(0x210)]]), var_core_value_sig1BBD[var_core_value_sigB33B(0x1e5)] ?? c["BaseEventSource"]["UI"]);
        return;
      }
      if (Z(var_core_value_sigD7EA, c["BatchCreateBaseRecordsCommand"])) {
        let var_core_value_sig2BCF = var_core_value_sigD7EA["params"],
          var_core_value_sig0D69 = this[var_core_value_sigB33B(0x23f)](var_core_value_sig2BCF[var_core_value_sigB33B(0x251)], var_core_value_sig2BCF[var_core_value_sigB33B(0x154)]);
        if (!var_core_value_sig0D69) return;
        this[var_core_value_sigB33B(0x109)](var_core_value_sig0D69[var_core_value_sigB33B(0x221)], var_core_value_sig0D69[var_core_value_sigB33B(0x12a)], (0x0, c[var_core_value_sigB33B(0x1a3)])(var_core_value_sig0D69[var_core_value_sigB33B(0x12a)][var_core_value_sigB33B(0x235)](), var_core_value_sig2BCF["records"]), var_core_value_sig2BCF[var_core_value_sigB33B(0x1e5)] ?? c[var_core_value_sigB33B(0x20a)]["UI"]);
        return;
      }
      if (Z(var_core_value_sigD7EA, c[var_core_value_sigB33B(0xfb)])) {
        let var_core_value_sig480E = var_core_value_sigD7EA[var_core_value_sigB33B(0x211)],
          var_core_value_sig26DB = this[var_core_value_sigB33B(0x23f)](var_core_value_sig480E[var_core_value_sigB33B(0x251)], var_core_value_sig480E["tableId"]);
        if (!var_core_value_sig26DB) return;
        this[var_core_value_sigB33B(0x109)](var_core_value_sig26DB[var_core_value_sigB33B(0x221)], var_core_value_sig26DB[var_core_value_sigB33B(0x12a)], (0x0, c["validateBaseHierarchyRecordCreations"])(var_core_value_sig26DB["table"]["getTable"](), [var_core_value_sig480E["record"]]), var_core_value_sig480E[var_core_value_sigB33B(0x1e5)] ?? c[var_core_value_sigB33B(0x20a)]["UI"]);
        return;
      }
      if (Z(var_core_value_sigD7EA, c[var_core_value_sigB33B(0x278)])) {
        let var_core_value_sigF0F9 = var_core_value_sigD7EA["params"],
          var_core_value_sig1A0F = this[var_core_value_sigB33B(0x23f)](var_core_value_sigF0F9[var_core_value_sigB33B(0x251)], var_core_value_sigF0F9[var_core_value_sigB33B(0x154)]);
        if (!var_core_value_sig1A0F) return;
        let var_core_value_sigFBA4 = var_core_value_sig1A0F[var_core_value_sigB33B(0x12a)][var_core_value_sigB33B(0x235)](),
          var_core_value_sig4383 = var_core_value_sigF0F9[var_core_value_sigB33B(0x1d3)] ?? (0x0, c[var_core_value_sigB33B(0x22a)])(var_core_value_sigFBA4),
          var_core_value_sig186C = (0x0, c[var_core_value_sigB33B(0x272)])(var_core_value_sigFBA4, var_core_value_sig4383)[var_core_value_sigB33B(0x25b)]["get"](var_core_value_sigF0F9["recordId"]) ?? null;
        this[var_core_value_sigB33B(0x109)](var_core_value_sig1A0F[var_core_value_sigB33B(0x221)], var_core_value_sig1A0F[var_core_value_sigB33B(0x12a)], [{
          tableId: var_core_value_sigF0F9[var_core_value_sigB33B(0x154)],
          fieldId: var_core_value_sig4383,
          recordId: var_core_value_sigF0F9[var_core_value_sigB33B(0x1d5)],
          oldParentRecordId: var_core_value_sig186C,
          parentRecordId: var_core_value_sigF0F9[var_core_value_sigB33B(0xef)]
        }], var_core_value_sigF0F9["source"] ?? c[var_core_value_sigB33B(0x20a)]["UI"]);
        return;
      }
      if (Z(var_core_value_sigD7EA, c[var_core_value_sigB33B(0x150)])) {
        let var_core_value_sigD955 = var_core_value_sigD7EA["params"],
          var_core_value_sig48BD = this[var_core_value_sigB33B(0x23f)](var_core_value_sigD955[var_core_value_sigB33B(0x251)], var_core_value_sigD955["tableId"]);
        if (!var_core_value_sig48BD) return;
        let var_core_value_sig429F = var_core_value_sigD955[var_core_value_sigB33B(0x1d3)] ?? (0x0, c[var_core_value_sigB33B(0x22a)])(var_core_value_sig48BD["table"][var_core_value_sigB33B(0x235)]());
        this["_fireBeforeHierarchyChange"](var_core_value_sig48BD[var_core_value_sigB33B(0x221)], var_core_value_sig48BD["table"], [{
          tableId: var_core_value_sigD955["tableId"],
          fieldId: var_core_value_sig429F,
          recordId: var_core_value_sigD955["record"]["id"],
          oldParentRecordId: null,
          parentRecordId: var_core_value_sigD955["parentRecordId"]
        }], var_core_value_sigD955[var_core_value_sigB33B(0x1e5)] ?? c["BaseEventSource"]["UI"]);
        return;
      }
      if (Z(var_core_value_sigD7EA, c[var_core_value_sigB33B(0x1f4)])) {
        let var_core_value_sigF62A = var_core_value_sigD7EA["params"],
          var_core_value_sig8178 = this[var_core_value_sigB33B(0x23f)](var_core_value_sigF62A["unitId"], var_core_value_sigF62A["tableId"]);
        if (!var_core_value_sig8178) return;
        this[var_core_value_sigB33B(0x109)](var_core_value_sig8178["base"], var_core_value_sig8178[var_core_value_sigB33B(0x12a)], (0x0, c[var_core_value_sigB33B(0x1dd)])(var_core_value_sig8178[var_core_value_sigB33B(0x12a)][var_core_value_sigB33B(0x235)](), [var_core_value_sigF62A[var_core_value_sigB33B(0x1d5)]]), var_core_value_sigF62A[var_core_value_sigB33B(0x1e5)] ?? c[var_core_value_sigB33B(0x20a)]["UI"]);
        return;
      }
      if (Z(var_core_value_sigD7EA, c["BatchDeleteBaseRecordsCommand"])) {
        let var_core_value_sigE9ED = var_core_value_sigD7EA[var_core_value_sigB33B(0x211)],
          var_core_value_sigB577 = this["_getHierarchyEventContext"](var_core_value_sigE9ED[var_core_value_sigB33B(0x251)], var_core_value_sigE9ED[var_core_value_sigB33B(0x154)]);
        if (!var_core_value_sigB577) return;
        this[var_core_value_sigB33B(0x109)](var_core_value_sigB577["base"], var_core_value_sigB577[var_core_value_sigB33B(0x12a)], (0x0, c[var_core_value_sigB33B(0x1dd)])(var_core_value_sigB577[var_core_value_sigB33B(0x12a)]["getTable"](), var_core_value_sigE9ED[var_core_value_sigB33B(0x133)]), var_core_value_sigE9ED[var_core_value_sigB33B(0x1e5)] ?? c["BaseEventSource"]["UI"]);
        return;
      }
      if (!Z(var_core_value_sigD7EA, c[var_core_value_sigB33B(0x1d7)])) return;
      let var_core_value_sig24B9 = var_core_value_sigD7EA[var_core_value_sigB33B(0x211)],
        var_core_value_sigE627 = this[var_core_value_sigB33B(0x23f)](var_core_value_sig24B9[var_core_value_sigB33B(0x251)], var_core_value_sig24B9[var_core_value_sigB33B(0x154)]);
      if (!var_core_value_sigE627) return;
      let var_core_value_sigEF3E = var_core_value_sigE627[var_core_value_sigB33B(0x12a)][var_core_value_sigB33B(0x235)]();
      if (!(0x0, c[var_core_value_sigB33B(0x12b)])(var_core_value_sigEF3E)["includes"](var_core_value_sig24B9[var_core_value_sigB33B(0x1d3)])) return;
      let var_core_value_sig273D = (0x0, c[var_core_value_sigB33B(0x272)])(var_core_value_sigEF3E, var_core_value_sig24B9[var_core_value_sigB33B(0x1d3)])[var_core_value_sigB33B(0x25b)]["get"](var_core_value_sig24B9[var_core_value_sigB33B(0x1d5)]) ?? null,
        var_core_value_sig9A0D = (0x0, c["parseRecordLinkIds"])(var_core_value_sig24B9[var_core_value_sigB33B(0x173)])[0x0] ?? null;
      var_core_value_sig273D !== var_core_value_sig9A0D && this[var_core_value_sigB33B(0x109)](var_core_value_sigE627[var_core_value_sigB33B(0x221)], var_core_value_sigE627[var_core_value_sigB33B(0x12a)], [{
        tableId: var_core_value_sig24B9[var_core_value_sigB33B(0x154)],
        fieldId: var_core_value_sig24B9[var_core_value_sigB33B(0x1d3)],
        recordId: var_core_value_sig24B9[var_core_value_sigB33B(0x1d5)],
        oldParentRecordId: var_core_value_sig273D,
        parentRecordId: var_core_value_sig9A0D
      }], var_core_value_sig24B9["source"] ?? c[var_core_value_sigB33B(0x20a)]["UI"]);
    }))), this[ox4f5a3a(0x194)](this[ox4f5a3a(0x18d)](this["Event"]["BeforeBaseTableCreate"], () => this["_commandService"][ox4f5a3a(0x25a)](var_core_value_sigA319 => {
      const var_core_value_sig2D58 = ox4f5a3a;
      if (var_core_value_sigA319["id"] !== c[var_core_value_sig2D58(0xd1)]["id"]) return;
      let {
          unitId: var_core_value_sig223F,
          table: var_core_value_sigD749,
          index: var_core_value_sigCFFA
        } = var_core_value_sigA319[var_core_value_sig2D58(0x211)],
        var_core_value_sig58C1 = this[var_core_value_sig2D58(0xf8)](var_core_value_sig223F);
      if (!var_core_value_sig58C1) return;
      let var_core_value_sig5090 = {
        base: var_core_value_sig58C1,
        table: var_core_value_sigD749,
        index: var_core_value_sigCFFA
      };
      if (this["fireEvent"](this[var_core_value_sig2D58(0x1d6)][var_core_value_sig2D58(0x26b)], var_core_value_sig5090), var_core_value_sig5090["cancel"]) throw new l["CanceledError"]();
    }))), this["disposeWithMe"](this["registerEventHandler"](this["Event"][ox4f5a3a(0x1d9)], () => this[ox4f5a3a(0x110)]["beforeCommandExecuted"](var_core_value_sigC368 => {
      const var_core_value_sigAD56 = ox4f5a3a;
      if (var_core_value_sigC368["id"] !== c[var_core_value_sigAD56(0x19c)]["id"]) return;
      let {
          unitId: var_core_value_sigDB4A,
          tableId: var_core_value_sig6418,
          field: var_core_value_sig1896,
          index: var_core_value_sig0285,
          viewIndexes: var_core_value_sig777D
        } = var_core_value_sigC368[var_core_value_sigAD56(0x211)],
        var_core_value_sig3F4C = this[var_core_value_sigAD56(0xf8)](var_core_value_sigDB4A);
      if (!var_core_value_sig3F4C) return;
      let var_core_value_sigD65A = var_core_value_sig3F4C["getTableById"](var_core_value_sig6418);
      if (!var_core_value_sigD65A) return;
      let var_core_value_sig5A13 = {
        base: var_core_value_sig3F4C,
        table: var_core_value_sigD65A,
        field: var_core_value_sig1896,
        index: var_core_value_sig0285,
        viewIndexes: var_core_value_sig777D
      };
      if (this[var_core_value_sigAD56(0x1a4)](this[var_core_value_sigAD56(0x1d6)]["BeforeBaseTableFieldCreate"], var_core_value_sig5A13), var_core_value_sig5A13[var_core_value_sigAD56(0x100)]) throw new l[var_core_value_sigAD56(0x196)]();
    }))), this["disposeWithMe"](this[ox4f5a3a(0x18d)](this[ox4f5a3a(0x1d6)]["BeforeBaseTableRecordCreate"], () => this["_commandService"]["beforeCommandExecuted"](var_core_value_sigF593 => {
      const var_core_value_sig3607 = ox4f5a3a;
      if (var_core_value_sigF593["id"] !== c[var_core_value_sig3607(0xdd)]["id"] && var_core_value_sigF593["id"] !== c[var_core_value_sig3607(0x139)]["id"]) return;
      let var_core_value_sigB512 = var_core_value_sigF593[var_core_value_sig3607(0x211)],
        {
          unitId: var_core_value_sigF2E6,
          tableId: var_core_value_sig34C8
        } = var_core_value_sigB512,
        var_core_value_sigB744 = var_core_value_sigB512[var_core_value_sig3607(0x132)] ?? [var_core_value_sigB512[var_core_value_sig3607(0x210)]],
        var_core_value_sigEAE2 = this[var_core_value_sig3607(0xf8)](var_core_value_sigF2E6);
      if (!var_core_value_sigEAE2) return;
      let var_core_value_sigE68A = var_core_value_sigEAE2["getTableById"](var_core_value_sig34C8);
      if (!var_core_value_sigE68A) return;
      let var_core_value_sig3E68 = {
        base: var_core_value_sigEAE2,
        table: var_core_value_sigE68A,
        records: var_core_value_sigB744
      };
      if (this[var_core_value_sig3607(0x1a4)](this["Event"][var_core_value_sig3607(0x287)], var_core_value_sig3E68), var_core_value_sig3E68[var_core_value_sig3607(0x100)]) throw new l[var_core_value_sig3607(0x196)]();
    }))), this[ox4f5a3a(0x194)](this[ox4f5a3a(0x18d)](this["Event"][ox4f5a3a(0x236)], () => this[ox4f5a3a(0x110)][ox4f5a3a(0x25a)](var_core_value_sigF4C5 => {
      const var_core_value_sig5410 = ox4f5a3a;
      if (var_core_value_sigF4C5["id"] !== c[var_core_value_sig5410(0x121)]["id"]) return;
      let {
          unitId: var_core_value_sig492F,
          tableId: var_core_value_sig8EA0,
          view: var_core_value_sigA6F6,
          index: var_core_value_sigCDDA
        } = var_core_value_sigF4C5[var_core_value_sig5410(0x211)],
        var_core_value_sigE243 = this["getBase"](var_core_value_sig492F);
      if (!var_core_value_sigE243) return;
      let var_core_value_sig74A8 = var_core_value_sigE243[var_core_value_sig5410(0x1ca)](var_core_value_sig8EA0);
      if (!var_core_value_sig74A8) return;
      let var_core_value_sig21B2 = {
        base: var_core_value_sigE243,
        table: var_core_value_sig74A8,
        view: var_core_value_sigA6F6,
        index: var_core_value_sigCDDA
      };
      if (this["fireEvent"](this["Event"]["BeforeBaseTableViewCreate"], var_core_value_sig21B2), var_core_value_sig21B2[var_core_value_sig5410(0x100)]) throw new l[var_core_value_sig5410(0x196)]();
    }))), this["disposeWithMe"](this[ox4f5a3a(0x18d)](this[ox4f5a3a(0x1d6)][ox4f5a3a(0x10c)], () => this[ox4f5a3a(0x110)][ox4f5a3a(0x25a)](var_core_value_sigDE08 => {
      const var_core_value_sigACCB = ox4f5a3a;
      if (var_core_value_sigDE08["id"] !== c[var_core_value_sigACCB(0x1d7)]["id"]) return;
      let {
          unitId: var_core_value_sig7F33,
          tableId: var_core_value_sig0C53,
          recordId: var_core_value_sigEA04,
          fieldId: var_core_value_sig7A62,
          value: var_core_value_sig8109
        } = var_core_value_sigDE08[var_core_value_sigACCB(0x211)],
        var_core_value_sig7565 = this[var_core_value_sigACCB(0xf8)](var_core_value_sig7F33);
      if (!var_core_value_sig7565) return;
      let var_core_value_sigD4FB = var_core_value_sig7565[var_core_value_sigACCB(0x1ca)](var_core_value_sig0C53);
      if (!var_core_value_sigD4FB) return;
      let var_core_value_sig3E71 = var_core_value_sigD4FB[var_core_value_sigACCB(0x152)](var_core_value_sig7A62);
      if (!var_core_value_sig3E71) return;
      let var_core_value_sig01B3 = var_core_value_sigD4FB[var_core_value_sigACCB(0x1a2)](var_core_value_sigEA04);
      if (!var_core_value_sig01B3) return;
      let var_core_value_sig7442 = {
        base: var_core_value_sig7565,
        table: var_core_value_sigD4FB,
        field: var_core_value_sig3E71,
        record: var_core_value_sig01B3,
        value: var_core_value_sig8109
      };
      if (this["fireEvent"](this["Event"][var_core_value_sigACCB(0x10c)], var_core_value_sig7442), var_core_value_sig7442[var_core_value_sigACCB(0x100)]) throw new l["CanceledError"]();
    })));
  }
  ["_getHierarchyEventContext"](var_core_value_sigA298, var_core_value_sig0B40) {
    let var_core_value_sig330B = this[ox1bbfdf(0xf8)](var_core_value_sigA298),
      var_core_value_sig3625 = var_core_value_sig330B == null ? void 0x0 : var_core_value_sig330B[ox1bbfdf(0x1ca)](var_core_value_sig0B40);
    return var_core_value_sig330B && var_core_value_sig3625 ? {
      base: var_core_value_sig330B,
      table: var_core_value_sig3625
    } : null;
  }
  ["_fireBeforeHierarchyChange"](var_core_value_sig0B4E, var_core_value_sig0E9F, var_core_value_sigE5BA, var_core_value_sig4A83) {
    if (!var_core_value_sigE5BA["length"]) return;
    let var_core_value_sig58AA = {
      base: var_core_value_sig0B4E,
      table: var_core_value_sig0E9F,
      changes: var_core_value_sigE5BA,
      source: var_core_value_sig4A83
    };
    if (this[ox3d0b21(0x1a4)](this[ox3d0b21(0x1d6)][ox3d0b21(0x105)], var_core_value_sig58AA), var_core_value_sig58AA[ox3d0b21(0x100)]) throw new l[ox3d0b21(0x196)]();
  }
};
function Z(var_core_value_sig5BCE, var_core_value_sig8EF0) {
  return var_core_value_sig5BCE["id"] === var_core_value_sig8EF0["id"] && var_core_value_sig5BCE[ox39c220(0x211)] !== void 0x0;
}
u["FUniver"]["extend"](X);
var Q = class extends u["FEnum"] {
  get ["BaseFieldType"]() {
    return l[ox2bab6e(0x1f6)];
  }
  get ["BaseFilterConjunction"]() {
    return l[ox2f235b(0x26e)];
  }
  get ["BaseFilterOperator"]() {
    return l[ox4c5311(0x1a6)];
  }
  get ["BaseFieldKeyEnum"]() {
    return v;
  }
  get ["BaseViewType"]() {
    return l[ox537c00(0x171)];
  }
  get ["BaseConditionalColorTarget"]() {
    return l["BaseConditionalColorTarget"];
  }
  get ["BaseConditionalColorOperator"]() {
    return l[ox1c47c4(0x1d1)];
  }
  get ["BaseConditionalDateMode"]() {
    return l[ox33c2ce(0x1d2)];
  }
  get ["BaseSortDirection"]() {
    return l[ox7cf2f6(0x10a)];
  }
  get ["BaseEventSource"]() {
    return c[ox5a95d8(0x20a)];
  }
  get ["BaseHierarchyErrorCode"]() {
    return c[ox3bb24f(0x240)];
  }
  get ["BaseHierarchyInvalidReason"]() {
    return l[oxbb506f(0x215)];
  }
  get ["BaseRecordLinkRole"]() {
    return l[ox5e4cc8(0xe2)];
  }
};
u["FEnum"]["extend"](Q);
var $ = class extends u["FEventName"] {
  get ["BaseTableCreated"]() {
    return "BaseTableCreated";
  }
  get ["BeforeBaseTableCreate"]() {
    return ox2b2047(0x26b);
  }
  get ["BaseTableFieldCreated"]() {
    return ox7f2037(0x265);
  }
  get ["BeforeBaseTableFieldCreate"]() {
    return ox1f1e8f(0x1d9);
  }
  get ["BaseTableRecordCreated"]() {
    return "BaseTableRecordCreated";
  }
  get ["BeforeBaseTableRecordCreate"]() {
    return ox134077(0x287);
  }
  get ["BaseTableViewCreated"]() {
    return ox1d869c(0x262);
  }
  get ["BeforeBaseTableViewCreate"]() {
    return "BeforeBaseTableViewCreate";
  }
  get ["BaseTableCellValueChanged"]() {
    return "BaseTableCellValueChanged";
  }
  get ["BeforeBaseTableCellValueChange"]() {
    return ox24f9c2(0x10c);
  }
  get ["BaseHierarchyChanged"]() {
    return ox4ff434(0x19e);
  }
  get ["BeforeBaseHierarchyChange"]() {
    return ox5f1cac(0x105);
  }
};
u["FEventName"]["extend"]($), exports["BaseFieldKeyEnum"] = v, Object["defineProperty"](exports, "FBase", {
  enumerable: !0x0,
  get: function () {
    return Y;
  }
}), exports["FBaseObjectPermission"] = m, exports["FBasePermission"] = p, Object["defineProperty"](exports, "FBaseTable", {
  enumerable: !0x0,
  get: function () {
    return B;
  }
}), Object["defineProperty"](exports, "FBaseTableField", {
  enumerable: !0x0,
  get: function () {
    return _;
  }
}), Object["defineProperty"](exports, "FBaseTableRange", {
  enumerable: !0x0,
  get: function () {
    return A;
  }
}), Object["defineProperty"](exports, "FBaseTableRecord", {
  enumerable: !0x0,
  get: function () {
    return I;
  }
}), Object["defineProperty"](exports, "FBaseTableView", {
  enumerable: !0x0,
  get: function () {
    return z;
  }
}), exports["FBasesEventNameMixin"] = $, exports["resolveBaseFieldKey"] = S, exports["resolveBaseFieldValues"] = b;
