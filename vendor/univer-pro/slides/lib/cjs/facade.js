Object["defineProperty"](exports, Symbol["toStringTag"], {
  value: "Module"
});
let e = require("@univerjs-pro/engine-shape/facade"),
  t = require("@univerjs-pro/slides"),
  n = require("@univerjs/core/facade"),
  r = require("@univerjs/core"),
  i = require("@univerjs-pro/engine-shape"),
  a = require("@univerjs/protocol");
var o = class extends n["FEnum"] {
  get ["SlidePageTypeEnum"]() {
    return t["PageTypeEnum"];
  }
  get ["SlidePageElementTypeEnum"]() {
    return t["PageElementTypeEnum"];
  }
  get ["SlidePageSizePresetEnum"]() {
    return t["SlidePageSizePresetEnum"];
  }
  get ["SlidePresentationBackgroundGraphicFitEnum"]() {
    return t["SlidePresentationBackgroundGraphicFitEnum"];
  }
  get ["SlidePresentationBackgroundGraphicsTargetEnum"]() {
    return t["SlidePresentationBackgroundGraphicsTargetEnum"];
  }
  get ["SlideTransitionTypeEnum"]() {
    return t["SlideTransitionTypeEnum"];
  }
  get ["SlideTransitionDirectionEnum"]() {
    return t["SlideTransitionDirectionEnum"];
  }
  get ["SlideTransitionSpeedEnum"]() {
    return t["SlideTransitionSpeedEnum"];
  }
  get ["SlideBackgroundTypeEnum"]() {
    return t["SlideBackgroundTypeEnum"];
  }
  get ["SlidePlaceholderTypeEnum"]() {
    return t["PlaceholderTypeEnum"];
  }
};
n["FEnum"]["extend"](o);
var s = class {
    constructor(var_core_value_sig429F, var_core_value_sigF62A, var_core_value_sig8178) {
      this["_unitId"] = var_core_value_sig429F, this["_commandService"] = var_core_value_sigF62A, this["_permissionService"] = var_core_value_sig8178;
    }
    async ["setPoint"](var_core_value_sigE9ED, var_core_value_sigB577) {
      await this["_commandService"]["executeCommand"](t["SetSlidePermissionCommand"]["id"], {
        unitId: this["_unitId"],
        objectId: this["_unitId"],
        action: var_core_value_sigE9ED,
        value: var_core_value_sigB577
      });
    }
    ["getPoint"](var_core_value_sig9572) {
      return (0x0, t["getSlidePermissionValue"])(this["_permissionService"], this["_unitId"], this["_unitId"], var_core_value_sig9572);
    }
    async ["setEditable"](var_core_value_sigD873 = !0x0) {
      await this["_commandService"]["executeCommand"](t["SetSlidePermissionCommand"]["id"], {
        unitId: this["_unitId"],
        objectId: this["_unitId"],
        action: a["UnitAction"]["Edit"],
        value: var_core_value_sigD873
      });
    }
    async ["setReadOnly"]() {
      await this["_commandService"]["executeCommand"](t["SetSlidePermissionCommand"]["id"], {
        unitId: this["_unitId"],
        objectId: this["_unitId"],
        action: a["UnitAction"]["Edit"],
        value: !0x1
      });
    }
    ["canEdit"]() {
      return (0x0, t["getSlidePermissionValue"])(this["_permissionService"], this["_unitId"], this["_unitId"], a["UnitAction"]["Edit"]);
    }
  },
  c = class {
    constructor(var_core_value_sigA12B, var_core_value_sigF230, var_core_value_sig09B8, var_core_value_sig6F91, var_core_value_sigF9C7) {
      this["_unitId"] = var_core_value_sigA12B, this["_objectId"] = var_core_value_sigF230, this["_parentObjectIds"] = var_core_value_sig09B8, this["_commandService"] = var_core_value_sig6F91, this["_permissionService"] = var_core_value_sigF9C7;
    }
    async ["setEditable"](var_core_value_sig8895 = !0x0) {
      await this["_commandService"]["executeCommand"](t["SetSlidePermissionCommand"]["id"], {
        unitId: this["_unitId"],
        objectId: this["_objectId"],
        action: a["UnitAction"]["Edit"],
        value: var_core_value_sig8895
      });
    }
    async ["setReadOnly"]() {
      await this["_commandService"]["executeCommand"](t["SetSlidePermissionCommand"]["id"], {
        unitId: this["_unitId"],
        objectId: this["_objectId"],
        action: a["UnitAction"]["Edit"],
        value: !0x1
      });
    }
    ["canEdit"]() {
      return (0x0, t["canEditSlideTargets"])(this["_permissionService"], this["_unitId"], [...this["_parentObjectIds"], this["_objectId"]]);
    }
  };
function l(var_core_value_sigF639, var_core_value_sigEAE5) {
  return function (var_core_value_sigC80B, var_core_value_sig284F) {
    var_core_value_sigEAE5(var_core_value_sigC80B, var_core_value_sig284F, var_core_value_sigF639);
  };
}
;
function u(var_core_value_sigE94C, var_core_value_sig6D47, var_core_value_sigCB82, var_core_value_sigCF4E) {
  var var_core_value_sig6CAD = arguments["length"],
    var_core_value_sig8CF5 = var_core_value_sig6CAD < 0x3 ? var_core_value_sig6D47 : var_core_value_sigCF4E === null ? var_core_value_sigCF4E = Object[ox18ecff(0x18f)](var_core_value_sig6D47, var_core_value_sigCB82) : var_core_value_sigCF4E,
    var_core_value_sigDDD7;
  if (typeof Reflect == "object" && typeof Reflect[ox18ecff(0x210)] == ox18ecff(0x16d)) var_core_value_sig8CF5 = Reflect[ox18ecff(0x210)](var_core_value_sigE94C, var_core_value_sig6D47, var_core_value_sigCB82, var_core_value_sigCF4E);else {
    for (var var_core_value_sigB2CE = var_core_value_sigE94C[ox18ecff(0x1d8)] - 0x1; var_core_value_sigB2CE >= 0x0; var_core_value_sigB2CE--) (var_core_value_sigDDD7 = var_core_value_sigE94C[var_core_value_sigB2CE]) && (var_core_value_sig8CF5 = (var_core_value_sig6CAD < 0x3 ? var_core_value_sigDDD7(var_core_value_sig8CF5) : var_core_value_sig6CAD > 0x3 ? var_core_value_sigDDD7(var_core_value_sig6D47, var_core_value_sigCB82, var_core_value_sig8CF5) : var_core_value_sigDDD7(var_core_value_sig6D47, var_core_value_sigCB82)) || var_core_value_sig8CF5);
  }
  return var_core_value_sig6CAD > 0x3 && var_core_value_sig8CF5 && Object[ox18ecff(0x1ac)](var_core_value_sig6D47, var_core_value_sigCB82, var_core_value_sig8CF5), var_core_value_sig8CF5;
}
let d = class extends n["FBase"] {
  constructor(var_core_value_sigE154, var_core_value_sig4632, var_core_value_sig12F2, var_core_value_sig2259, var_core_value_sig9E2F, var_core_value_sigD082, var_core_value_sigDBB7) {
    super(), this[ox3c5e66(0x15e)] = var_core_value_sigE154, this[ox3c5e66(0x1ed)] = var_core_value_sig4632, this[ox3c5e66(0x1ba)] = var_core_value_sig12F2, this[ox3c5e66(0x205)] = var_core_value_sig2259, this["_injector"] = var_core_value_sig9E2F, this["_commandService"] = var_core_value_sigD082, this[ox3c5e66(0x1fa)] = var_core_value_sigDBB7;
  }
  ["getId"]() {
    return this[ox345244(0x1ba)];
  }
  ["getPermission"]() {
    return new c(this[ox15dca0(0x15e)], (0x0, t[ox15dca0(0x141)])(t[ox15dca0(0x1f6)][ox15dca0(0x1c8)], this[ox15dca0(0x1ed)], this["elementId"]), [(0x0, t[ox15dca0(0x206)])(this["subUnitId"])], this[ox15dca0(0x1c9)], this[ox15dca0(0x1fa)]);
  }
  ["getType"]() {
    return this[ox3c37bd(0x19e)]()[ox3c37bd(0x1c6)];
  }
  ["getData"]() {
    var var_core_value_sigD0A8;
    let var_core_value_sigF4B9 = (var_core_value_sigD0A8 = this["_slideModel"][ox57875b(0x19c)]()[ox57875b(0x215)][this["subUnitId"]]) == null ? void 0x0 : var_core_value_sigD0A8["elements"][this[ox57875b(0x1ba)]];
    if (!var_core_value_sigF4B9) throw Error(ox57875b(0x1e1) + this[ox57875b(0x1ba)] + "\x22\x20was\x20not\x20found.");
    return var_core_value_sigF4B9;
  }
  ["getRichText"]() {
    let var_core_value_sig5CEE = (0x0, t[ox4a7009(0x1c3)])(this["getData"]());
    return var_core_value_sig5CEE ? r[ox4a7009(0x16c)][ox4a7009(0x1bb)](var_core_value_sig5CEE) : null;
  }
  ["setRichText"](var_core_value_sigE92A) {
    let var_core_value_sig362B = (0x0, t[ox30e5aa(0x1a3)])(this[ox30e5aa(0x19e)](), var_core_value_sigE92A[ox30e5aa(0x19e)]());
    if (!var_core_value_sig362B) throw Error("Slide\x20element\x20\x22" + this[ox30e5aa(0x1ba)] + "\x22\x20does\x20not\x20support\x20rich\x20text.");
    return this[ox30e5aa(0x150)](var_core_value_sig362B);
  }
  ["getTransform"]() {
    return {
      ...this["getData"]()["transform"]
    };
  }
  ["setTransform"](var_core_value_sig5CA5) {
    let var_core_value_sigE90F = this["getData"]();
    return this[ox4a7781(0x150)]({
      ...var_core_value_sigE90F,
      transform: {
        ...var_core_value_sigE90F[ox4a7781(0x21d)],
        ...var_core_value_sig5CA5
      }
    });
  }
  ["setPosition"](var_core_value_sigEFD4, var_core_value_sig861B) {
    return this["setTransform"]({
      left: var_core_value_sigEFD4,
      top: var_core_value_sig861B
    });
  }
  ["setSize"](var_core_value_sig5237, var_core_value_sigBB00) {
    return this[ox1affd4(0x20a)]({
      width: var_core_value_sig5237,
      height: var_core_value_sigBB00
    });
  }
  ["setName"](var_core_value_sig7E54) {
    return this[ox4034aa(0x150)]({
      ...this[ox4034aa(0x19e)](),
      name: var_core_value_sig7E54
    });
  }
  ["setDescription"](var_core_value_sig9A8D) {
    return this[ox3197b0(0x150)]({
      ...this[ox3197b0(0x19e)](),
      description: var_core_value_sig9A8D
    });
  }
  ["setVisible"](var_core_value_sigC259) {
    return this[ox60b98e(0x150)]({
      ...this[ox60b98e(0x19e)](),
      visible: var_core_value_sigC259
    });
  }
  ["setSelectable"](var_core_value_sig9C9F) {
    return this[ox21f522(0x150)]({
      ...this["getData"](),
      selectable: var_core_value_sig9C9F
    });
  }
  ["_updateElement"](var_core_value_sigFDEA) {
    return this[ox3af194(0x1c9)][ox3af194(0x1c5)](t[ox3af194(0x143)]["id"], {
      patches: [{
        unitId: this[ox3af194(0x15e)],
        subUnitId: this["subUnitId"],
        drawingId: this[ox3af194(0x1ba)],
        element: var_core_value_sigFDEA
      }]
    }), this;
  }
};
d = u([l(0x5, r["ICommandService"]), l(0x6, r["IPermissionService"])], d);
let f = class extends d {
  constructor(var_core_value_sig86D0, var_core_value_sig4CD2, var_core_value_sig48CA, var_core_value_sig50AF, var_core_value_sigA942, var_core_value_sigA621, var_core_value_sigBBFF) {
    super(var_core_value_sig86D0, var_core_value_sig4CD2, var_core_value_sig48CA, var_core_value_sig50AF, var_core_value_sigA942, var_core_value_sigA621, var_core_value_sigBBFF);
  }
  ["getChildren"]() {
    return this[ox44191a(0x19e)]()[ox44191a(0x14e)][ox44191a(0x1e8)](var_core_value_sig2AD8 => this[ox44191a(0x1ab)](var_core_value_sig2AD8))[ox44191a(0x155)](Boolean);
  }
  ["ungroup"]() {
    let var_core_value_sig8889 = this[ox1f80d5(0x159)]();
    return this[ox1f80d5(0x1c9)][ox1f80d5(0x1c5)](t[ox1f80d5(0x226)]["id"], {
      unitId: this[ox1f80d5(0x15e)],
      subUnitId: this["subUnitId"],
      drawingIds: [this[ox1f80d5(0x1a9)]()]
    }) ? var_core_value_sig8889 : [];
  }
  ["_createChildElement"](var_core_value_sig32F8) {
    var var_core_value_sig5B67;
    let var_core_value_sig1758 = (var_core_value_sig5B67 = this[ox5f2634(0x205)][ox5f2634(0x19c)]()[ox5f2634(0x215)][this["subUnitId"]]) == null ? void 0x0 : var_core_value_sig5B67[ox5f2634(0x1f3)][var_core_value_sig32F8];
    return var_core_value_sig1758 ? var_core_value_sig1758[ox5f2634(0x1c6)] === t[ox5f2634(0x1fd)][ox5f2634(0x1ec)] || var_core_value_sig1758["type"] === t[ox5f2634(0x1fd)][ox5f2634(0x15b)] && var_core_value_sig1758["shapeData"]["shapeType"] && (0x0, i[ox5f2634(0x1db)])(var_core_value_sig1758[ox5f2634(0x147)][ox5f2634(0x203)]) ? this[ox5f2634(0x22d)][ox5f2634(0x1cf)](e[ox5f2634(0x1f9)], {
      unitId: this["unitId"],
      subUnitId: this[ox5f2634(0x1ed)],
      shapeId: var_core_value_sig32F8,
      hostType: r[ox5f2634(0x1b9)][ox5f2634(0x1af)]
    }, this[ox5f2634(0x22d)]) : var_core_value_sig1758[ox5f2634(0x1c6)] === t["PageElementTypeEnum"][ox5f2634(0x15b)] ? this[ox5f2634(0x22d)][ox5f2634(0x1cf)](e["FShape"], {
      unitId: this["unitId"],
      subUnitId: this[ox5f2634(0x1ed)],
      shapeId: var_core_value_sig32F8,
      hostType: r["UniverInstanceType"]["UNIVER_SLIDE"]
    }, this["_injector"]) : new d(this[ox5f2634(0x15e)], this[ox5f2634(0x1ed)], var_core_value_sig32F8, this[ox5f2634(0x205)], this["_injector"], this[ox5f2634(0x1c9)], this[ox5f2634(0x1fa)]) : null;
  }
};
f = u([l(0x5, r["ICommandService"]), l(0x6, r["IPermissionService"])], f);
function p(var_core_value_sig443C) {
  "@babel/helpers - typeof";

  return p = typeof Symbol == ox360434(0x16d) && typeof Symbol[ox360434(0x14a)] == ox360434(0x22b) ? function (var_core_value_sig4805) {
    return typeof var_core_value_sig4805;
  } : function (var_core_value_sigE67E) {
    const var_core_value_sig2902 = ox360434;
    return var_core_value_sigE67E && typeof Symbol == var_core_value_sig2902(0x16d) && var_core_value_sigE67E[var_core_value_sig2902(0x201)] === Symbol && var_core_value_sigE67E !== Symbol[var_core_value_sig2902(0x1d0)] ? var_core_value_sig2902(0x22b) : typeof var_core_value_sigE67E;
  }, p(var_core_value_sig443C);
}
;
function m(var_core_value_sig39B1, var_core_value_sig210D) {
  if (p(var_core_value_sig39B1) != ox71460f(0x228) || !var_core_value_sig39B1) return var_core_value_sig39B1;
  var var_core_value_sigB4B4 = var_core_value_sig39B1[Symbol[ox71460f(0x145)]];
  if (var_core_value_sigB4B4 !== void 0x0) {
    var var_core_value_sigD407 = var_core_value_sigB4B4[ox71460f(0x21f)](var_core_value_sig39B1, var_core_value_sig210D || ox71460f(0x196));
    if (p(var_core_value_sigD407) != ox71460f(0x228)) return var_core_value_sigD407;
    throw TypeError(ox71460f(0x17b));
  }
  return (var_core_value_sig210D === ox71460f(0x22e) ? String : Number)(var_core_value_sig39B1);
}
;
function h(var_core_value_sig63F3) {
  var var_core_value_sig6A71 = m(var_core_value_sig63F3, ox524a7a(0x22e));
  return p(var_core_value_sig6A71) == "symbol" ? var_core_value_sig6A71 : var_core_value_sig6A71 + "";
}
;
function g(var_core_value_sig3BF6, var_core_value_sig38CE, var_core_value_sig62B7) {
  return (var_core_value_sig38CE = h(var_core_value_sig38CE)) in var_core_value_sig3BF6 ? Object["defineProperty"](var_core_value_sig3BF6, var_core_value_sig38CE, {
    value: var_core_value_sig62B7,
    enumerable: !0x0,
    configurable: !0x0,
    writable: !0x0
  }) : var_core_value_sig3BF6[var_core_value_sig38CE] = var_core_value_sig62B7, var_core_value_sig3BF6;
}
let _ = class extends d {
  constructor(var_core_value_sig9989, var_core_value_sig698E, var_core_value_sig2809, var_core_value_sig2DAB, var_core_value_sig877E, var_core_value_sig20C8, var_core_value_sigE9A7) {
    super(var_core_value_sig9989, var_core_value_sig698E, var_core_value_sig2809, var_core_value_sig2DAB, var_core_value_sig877E, var_core_value_sig20C8, var_core_value_sigE9A7);
  }
  ["getSource"]() {
    return this["getData"]()["source"];
  }
  ["setSource"](var_core_value_sigBECE, var_core_value_sig1B22) {
    return this["_updateElement"]({
      ...this[ox1bd024(0x19e)](),
      source: var_core_value_sigBECE,
      imageSourceType: var_core_value_sig1B22
    });
  }
  ["setCrop"](var_core_value_sig7F72) {
    return this[ox5d161f(0x150)]({
      ...this["getData"](),
      crop: var_core_value_sig7F72
    });
  }
  ["setClipShape"](var_core_value_sig7B2A, var_core_value_sig06CD) {
    return this["_updateElement"]({
      ...this["getData"](),
      prstGeom: var_core_value_sig7B2A,
      adjustValues: var_core_value_sig06CD
    });
  }
  ["setShapeData"](var_core_value_sigA5F1) {
    return this[ox3f4673(0x150)]({
      ...this["getData"](),
      shapeData: var_core_value_sigA5F1
    });
  }
  ["toBuilder"]() {
    return this[ox5de902(0x22d)][ox5de902(0x1cf)](v, this["unitId"], this["subUnitId"], this[ox5de902(0x22d)], this["getData"]());
  }
};
_ = u([l(0x5, r["ICommandService"]), l(0x6, r["IPermissionService"])], _);
var v = class {
  constructor(var_core_value_sig97A2, var_core_value_sig07E9, var_core_value_sig4F59, var_core_value_sigF564) {
    var var_core_value_sig8CFA, var_core_value_sig2E11, var_core_value_sig5B69, var_core_value_sigB098, var_core_value_sigCE71;
    this[ox38ca68(0x22d)] = var_core_value_sig4F59, g(this, ox38ca68(0x15e), void 0x0), g(this, ox38ca68(0x1ed), void 0x0), g(this, ox38ca68(0x1ba), void 0x0), g(this, ox38ca68(0x21d), {}), g(this, ox38ca68(0x1eb), void 0x0), g(this, ox38ca68(0x151), void 0x0), g(this, ox38ca68(0x166), void 0x0), g(this, ox38ca68(0x220), void 0x0), g(this, ox38ca68(0x217), void 0x0), g(this, ox38ca68(0x147), void 0x0), this[ox38ca68(0x15e)] = var_core_value_sig97A2, this[ox38ca68(0x1ed)] = var_core_value_sig07E9, this["elementId"] = (var_core_value_sigF564 == null ? void 0x0 : var_core_value_sigF564["id"]) || (0x0, r[ox38ca68(0x1aa)])(0x6), this["transform"] = {
      ...(var_core_value_sigF564 == null ? void 0x0 : var_core_value_sigF564[ox38ca68(0x21d)]),
      left: (var_core_value_sigF564 == null || (var_core_value_sig8CFA = var_core_value_sigF564[ox38ca68(0x21d)]) == null ? void 0x0 : var_core_value_sig8CFA[ox38ca68(0x180)]) ?? 0x0,
      top: (var_core_value_sigF564 == null || (var_core_value_sig2E11 = var_core_value_sigF564["transform"]) == null ? void 0x0 : var_core_value_sig2E11["top"]) ?? 0x0,
      width: (var_core_value_sigF564 == null || (var_core_value_sig5B69 = var_core_value_sigF564[ox38ca68(0x21d)]) == null ? void 0x0 : var_core_value_sig5B69["width"]) ?? t["SLIDE_INSERT_DEFAULT_SIZE"][ox38ca68(0x1fb)],
      height: (var_core_value_sigF564 == null || (var_core_value_sigB098 = var_core_value_sigF564[ox38ca68(0x21d)]) == null ? void 0x0 : var_core_value_sigB098["height"]) ?? t[ox38ca68(0x1b1)][ox38ca68(0x14b)],
      rotation: (var_core_value_sigF564 == null || (var_core_value_sigCE71 = var_core_value_sigF564[ox38ca68(0x21d)]) == null ? void 0x0 : var_core_value_sigCE71[ox38ca68(0x1c0)]) ?? 0x0
    }, this[ox38ca68(0x1eb)] = var_core_value_sigF564 == null ? void 0x0 : var_core_value_sigF564["source"], this[ox38ca68(0x151)] = var_core_value_sigF564 == null ? void 0x0 : var_core_value_sigF564["imageSourceType"], this[ox38ca68(0x166)] = var_core_value_sigF564 == null ? void 0x0 : var_core_value_sigF564[ox38ca68(0x166)], this[ox38ca68(0x220)] = var_core_value_sigF564 == null ? void 0x0 : var_core_value_sigF564["prstGeom"], this["adjustValues"] = var_core_value_sigF564 == null ? void 0x0 : var_core_value_sigF564["adjustValues"], this[ox38ca68(0x147)] = var_core_value_sigF564 == null ? void 0x0 : var_core_value_sigF564[ox38ca68(0x147)];
  }
  ["setSource"](var_core_value_sig21D8, var_core_value_sig2B65) {
    return this[ox59bc10(0x1eb)] = var_core_value_sig21D8, this["imageSourceType"] = var_core_value_sig2B65, this;
  }
  ["setAbsolutePosition"](var_core_value_sigD7EA, var_core_value_sigB33B) {
    return this[ox2e7fd2(0x21d)][ox2e7fd2(0x180)] = var_core_value_sigD7EA, this[ox2e7fd2(0x21d)][ox2e7fd2(0x15c)] = var_core_value_sigB33B, this;
  }
  ["setSize"](var_core_value_sig24B9, var_core_value_sigE627) {
    return this[ox1b7e7b(0x21d)][ox1b7e7b(0x17f)] = var_core_value_sig24B9, this[ox1b7e7b(0x21d)][ox1b7e7b(0x21c)] = var_core_value_sigE627, this;
  }
  ["setRotation"](var_core_value_sigEF3E) {
    return this[ox3d09dc(0x21d)][ox3d09dc(0x1c0)] = var_core_value_sigEF3E, this;
  }
  ["setCrop"](var_core_value_sig273D) {
    return this[ox31855d(0x166)] = var_core_value_sig273D, this;
  }
  ["setClipShape"](var_core_value_sig9A0D, var_core_value_sigA319) {
    return this["prstGeom"] = var_core_value_sig9A0D, this[ox2b6369(0x217)] = var_core_value_sigA319, this;
  }
  ["setShapeData"](var_core_value_sig2D58) {
    return this[ox5d2830(0x147)] = var_core_value_sig2D58, this;
  }
  ["build"]() {
    if (!this[ox39d7df(0x1eb)]) throw Error(ox39d7df(0x20d));
    return {
      unitId: this[ox39d7df(0x15e)],
      subUnitId: this[ox39d7df(0x1ed)],
      element: {
        id: this[ox39d7df(0x1ba)],
        type: t[ox39d7df(0x1fd)]["Image"],
        source: this["source"],
        imageSourceType: this["imageSourceType"],
        crop: this["crop"],
        prstGeom: this[ox39d7df(0x220)],
        adjustValues: this["adjustValues"],
        shapeData: this["shapeData"],
        transform: this[ox39d7df(0x21d)]
      }
    };
  }
};
let y = class extends n["FBaseInitialable"] {
  constructor(var_core_value_sig223F, var_core_value_sigD749, var_core_value_sigCFFA, var_core_value_sig58C1, var_core_value_sig5090, var_core_value_sigC368) {
    super(var_core_value_sig58C1), this[ox72ecaf(0x177)] = var_core_value_sig223F, this[ox72ecaf(0x205)] = var_core_value_sigD749, this[ox72ecaf(0x16a)] = var_core_value_sigCFFA, this[ox72ecaf(0x22d)] = var_core_value_sig58C1, this["_commandService"] = var_core_value_sig5090, this[ox72ecaf(0x1fa)] = var_core_value_sigC368;
  }
  ["getId"]() {
    return this["_slidePage"]["getId"]();
  }
  ["getPermission"]() {
    return new c(this[ox4f3396(0x205)][ox4f3396(0x15a)](), (0x0, t[ox4f3396(0x206)])(this[ox4f3396(0x1a9)]()), [], this[ox4f3396(0x1c9)], this["_permissionService"]);
  }
  ["getElementPermission"](var_core_value_sigAD56) {
    return new c(this[ox54ad0b(0x205)]["getUnitId"](), (0x0, t[ox54ad0b(0x141)])(t[ox54ad0b(0x1f6)][ox54ad0b(0x1c8)], this[ox54ad0b(0x1a9)](), var_core_value_sigAD56), [(0x0, t[ox54ad0b(0x206)])(this[ox54ad0b(0x1a9)]())], this[ox54ad0b(0x1c9)], this["_permissionService"]);
  }
  ["getName"]() {
    return this[ox44ad56(0x16a)][ox44ad56(0x19e)]()[ox44ad56(0x18c)];
  }
  ["getData"]() {
    return this[oxab9307(0x16a)][oxab9307(0x19e)]();
  }
  ["getSpeakerNotes"]() {
    return this[ox2c4739(0x19e)]()[ox2c4739(0x1a7)];
  }
  ["setSpeakerNotes"](var_core_value_sigDB4A) {
    return this["_commandService"][ox540a4d(0x1c5)](t[ox540a4d(0x1d4)]["id"], {
      unitId: this[ox540a4d(0x205)]["getUnitId"](),
      subUnitId: this[ox540a4d(0x1a9)](),
      speakerNotes: var_core_value_sigDB4A === "" ? void 0x0 : var_core_value_sigDB4A
    }), this;
  }
  ["getTransition"]() {
    return (0x0, t[ox2aa7aa(0x1be)])(this["_slideModel"][ox2aa7aa(0x19c)](), this[ox2aa7aa(0x1a9)]());
  }
  ["setTransition"](var_core_value_sig6418) {
    return this[ox527155(0x1c9)][ox527155(0x1c5)](t[ox527155(0x1c1)]["id"], {
      unitId: this[ox527155(0x205)][ox527155(0x15a)](),
      subUnitIds: [this[ox527155(0x1a9)]()],
      transition: var_core_value_sig6418
    }), this;
  }
  ["getSlide"]() {
    return this[ox2f1117(0x16a)];
  }
  ["getPageSize"]() {
    return this[ox4267f2(0x19e)]()[ox4267f2(0x1e6)] ?? this["_slideModel"]["getSnapshot"]()[ox4267f2(0x216)];
  }
  ["getPageLayout"]() {
    let var_core_value_sig1896 = this[ox1a10b8(0x16a)][ox1a10b8(0x19e)]();
    return {
      pageId: var_core_value_sig1896["id"],
      pageSize: var_core_value_sig1896[ox1a10b8(0x1e6)] ?? this["_slideModel"]["getSnapshot"]()[ox1a10b8(0x216)],
      elements: var_core_value_sig1896[ox1a10b8(0x1ca)]["map"]((var_core_value_sig2AD0, var_core_value_sig3EEE) => ({
        id: var_core_value_sig2AD0,
        orderIndex: var_core_value_sig3EEE,
        bounds: b(var_core_value_sig1896["elements"][var_core_value_sig2AD0])
      }))
    };
  }
  ["setPageSize"](var_core_value_sig0285) {
    return this["_commandService"][ox35aa3e(0x1c5)](t[ox35aa3e(0x184)]["id"], {
      unitId: this[ox35aa3e(0x205)][ox35aa3e(0x15a)](),
      pageId: this[ox35aa3e(0x1a9)](),
      pageSize: var_core_value_sig0285
    }), this;
  }
  ["getBackground"]() {
    return this["getData"]()[ox2b7328(0x1e4)];
  }
  ["setBackground"](var_core_value_sig777D) {
    return this[ox13be77(0x1c9)]["syncExecuteCommand"](t[ox13be77(0x22a)]["id"], {
      patches: [{
        unitId: this["_slideModel"][ox13be77(0x15a)](),
        pageId: this[ox13be77(0x1a9)](),
        background: var_core_value_sig777D
      }]
    }), this;
  }
  ["setShowMasterBackground"](var_core_value_sig3F4C) {
    return this[ox4e1925(0x1c9)][ox4e1925(0x1c5)](t[ox4e1925(0x22a)]["id"], {
      patches: [{
        unitId: this[ox4e1925(0x205)]["getUnitId"](),
        pageId: this[ox4e1925(0x1a9)](),
        showMasterSp: var_core_value_sig3F4C
      }]
    }), this;
  }
  ["getElements"]() {
    return this[ox33e292(0x19e)]()["elementOrder"]["map"](var_core_value_sigBC46 => this["getElementById"](var_core_value_sigBC46))["filter"](Boolean);
  }
  ["getElementById"](var_core_value_sigD65A) {
    let var_core_value_sig5A13 = this[ox251573(0x19e)]()["elements"][var_core_value_sigD65A];
    if (!var_core_value_sig5A13) return null;
    let var_core_value_sigF593 = this["_slideModel"][ox251573(0x15a)](),
      var_core_value_sig3607 = this["getId"]();
    return var_core_value_sig5A13["type"] === t[ox251573(0x1fd)][ox251573(0x1ec)] || var_core_value_sig5A13["type"] === t[ox251573(0x1fd)][ox251573(0x15b)] && var_core_value_sig5A13["shapeData"][ox251573(0x203)] && (0x0, i["isConnectorShape"])(var_core_value_sig5A13[ox251573(0x147)][ox251573(0x203)]) ? this[ox251573(0x22d)]["createInstance"](e[ox251573(0x1f9)], {
      unitId: var_core_value_sigF593,
      subUnitId: var_core_value_sig3607,
      shapeId: var_core_value_sigD65A,
      hostType: r[ox251573(0x1b9)]["UNIVER_SLIDE"]
    }, this[ox251573(0x22d)]) : var_core_value_sig5A13[ox251573(0x1c6)] === t[ox251573(0x1fd)][ox251573(0x15b)] ? this[ox251573(0x22d)][ox251573(0x1cf)](e["FShape"], {
      unitId: var_core_value_sigF593,
      subUnitId: var_core_value_sig3607,
      shapeId: var_core_value_sigD65A,
      hostType: r["UniverInstanceType"][ox251573(0x1af)]
    }, this[ox251573(0x22d)]) : var_core_value_sig5A13[ox251573(0x1c6)] === t[ox251573(0x1fd)][ox251573(0x225)] ? this[ox251573(0x22d)][ox251573(0x1cf)](_, var_core_value_sigF593, var_core_value_sig3607, var_core_value_sigD65A, this["_slideModel"], this[ox251573(0x22d)]) : var_core_value_sig5A13["type"] === t[ox251573(0x1fd)][ox251573(0x18b)] ? this[ox251573(0x22d)][ox251573(0x1cf)](f, var_core_value_sigF593, var_core_value_sig3607, var_core_value_sigD65A, this["_slideModel"], this[ox251573(0x22d)]) : new d(var_core_value_sigF593, var_core_value_sig3607, var_core_value_sigD65A, this["_slideModel"], this[ox251573(0x22d)], this[ox251573(0x1c9)], this[ox251573(0x1fa)]);
  }
  ["insertElement"](var_core_value_sigB512, var_core_value_sigF2E6) {
    return this[ox5cfd6e(0x1c9)][ox5cfd6e(0x1c5)](t[ox5cfd6e(0x1ce)]["id"], {
      unitId: this[ox5cfd6e(0x205)][ox5cfd6e(0x15a)](),
      subUnitId: this[ox5cfd6e(0x1a9)](),
      element: var_core_value_sigB512,
      insertIndex: var_core_value_sigF2E6
    }), this["getElementById"](var_core_value_sigB512["id"]);
  }
  ["deleteElement"](var_core_value_sig34C8) {
    return this[ox1fa7bf(0x1c9)]["syncExecuteCommand"](t[ox1fa7bf(0x1e2)]["id"], {
      unitId: this[ox1fa7bf(0x205)][ox1fa7bf(0x15a)](),
      subUnitId: this[ox1fa7bf(0x1a9)](),
      drawingIds: [var_core_value_sig34C8["getId"]()]
    });
  }
  ["insertShape"](var_core_value_sigB744) {
    let var_core_value_sigEAE2 = this[ox3ac426(0x163)]();
    if (!var_core_value_sigEAE2) return null;
    try {
      let var_core_value_sig3D7D = var_core_value_sigEAE2[ox3ac426(0x181)](this[ox3ac426(0x148)](), var_core_value_sigB744);
      return var_core_value_sig3D7D ? this["_createShapeHandle"](var_core_value_sig3D7D) : (console[ox3ac426(0x1a4)](ox3ac426(0x1e7)), null);
    } catch (var_core_value_sig27E5) {
      return console[ox3ac426(0x1a4)](ox3ac426(0x1e7), var_core_value_sig27E5), null;
    }
  }
  ["insertSmartArt"](var_core_value_sigE68A, var_core_value_sig3E68) {
    let var_core_value_sigF4C5 = (0x0, i["createSmartArtDataFromLayout"])(var_core_value_sigE68A),
      var_core_value_sig5410 = this["_getShapeAdapter"]();
    if (!var_core_value_sigF4C5 || !var_core_value_sig5410) return null;
    let var_core_value_sig492F = Object[ox56cf2a(0x212)](var_core_value_sigF4C5[ox56cf2a(0x218)]),
      var_core_value_sig8EA0 = Math[ox56cf2a(0x1fe)](...var_core_value_sig492F[ox56cf2a(0x1e8)](var_core_value_sig8061 => var_core_value_sig8061["transform"][ox56cf2a(0x180)] + var_core_value_sig8061["transform"]["width"])),
      var_core_value_sigA6F6 = Math[ox56cf2a(0x1fe)](...var_core_value_sig492F[ox56cf2a(0x1e8)](var_core_value_sig4D4C => var_core_value_sig4D4C[ox56cf2a(0x21d)][ox56cf2a(0x15c)] + var_core_value_sig4D4C[ox56cf2a(0x21d)][ox56cf2a(0x21c)]));
    try {
      let var_core_value_sigC9E0 = var_core_value_sig5410[ox56cf2a(0x181)](this["_getShapeScope"](), {
        shapeType: i[ox56cf2a(0x17a)][ox56cf2a(0x16e)],
        transform: {
          left: 0x50,
          top: 0x50,
          width: var_core_value_sig8EA0,
          height: var_core_value_sigA6F6,
          ...var_core_value_sig3E68
        },
        shapeData: {
          shapeType: i[ox56cf2a(0x17a)][ox56cf2a(0x16e)],
          smartArt: var_core_value_sigF4C5
        },
        name: ox56cf2a(0x16e)
      });
      return var_core_value_sigC9E0 ? this["_createShapeHandle"](var_core_value_sigC9E0) : null;
    } catch (var_core_value_sig76BA) {
      return console["warn"](ox56cf2a(0x14c), var_core_value_sig76BA), null;
    }
  }
  ["getShape"](var_core_value_sigCDDA) {
    let var_core_value_sigE243 = this["_getShapeAdapter"]();
    if (!var_core_value_sigE243) return null;
    try {
      let var_core_value_sigFBFA = var_core_value_sigE243["getShape"]({
        ...this[ox4c445f(0x148)](),
        shapeId: var_core_value_sigCDDA
      });
      return var_core_value_sigFBFA ? this[ox4c445f(0x207)](var_core_value_sigFBFA) : (console["warn"](ox4c445f(0x1bc) + var_core_value_sigCDDA + "\x22\x20was\x20not\x20found."), null);
    } catch (var_core_value_sigF602) {
      return console[ox4c445f(0x1a4)]("[Slide\x20Shape\x20Facade]:\x20Failed\x20to\x20read\x20Shape\x20\x22" + var_core_value_sigCDDA + "\x22.", var_core_value_sigF602), null;
    }
  }
  ["getShapes"]() {
    let var_core_value_sig74A8 = this["_getShapeAdapter"]();
    if (!var_core_value_sig74A8) return [];
    try {
      return var_core_value_sig74A8[ox4ebdfd(0x1cd)](this[ox4ebdfd(0x148)]())[ox4ebdfd(0x1e8)](var_core_value_sig7524 => this[ox4ebdfd(0x207)](var_core_value_sig7524));
    } catch (var_core_value_sig1BBD) {
      return console[ox4ebdfd(0x1a4)]("[Slide\x20Shape\x20Facade]:\x20Failed\x20to\x20list\x20Shapes.", var_core_value_sig1BBD), [];
    }
  }
  ["newImage"](var_core_value_sig21B2) {
    let var_core_value_sigDE08 = this["_slideModel"][oxd2d70f(0x15a)](),
      var_core_value_sigACCB = this[oxd2d70f(0x1a9)]();
    return var_core_value_sig21B2 ? typeof var_core_value_sig21B2 == oxd2d70f(0x22e) ? this[oxd2d70f(0x22d)][oxd2d70f(0x1cf)](v, var_core_value_sigDE08, var_core_value_sigACCB, this[oxd2d70f(0x22d)], {
      id: var_core_value_sig21B2
    }) : var_core_value_sig21B2[oxd2d70f(0x178)]() : this["_injector"]["createInstance"](v, var_core_value_sigDE08, var_core_value_sigACCB, this[oxd2d70f(0x22d)]);
  }
  ["insertImage"](var_core_value_sig7F33, var_core_value_sig0C53) {
    return this[ox4a9c8b(0x209)](var_core_value_sig7F33[ox4a9c8b(0x223)], var_core_value_sig0C53);
  }
  async ["insertImageAsync"](var_core_value_sigEA04, var_core_value_sig7A62 = {}) {
    let var_core_value_sig8109 = this[ox181838(0x1bd)](var_core_value_sig7A62["id"]);
    if (typeof var_core_value_sigEA04 == "string") var_core_value_sig8109[ox181838(0x16b)](var_core_value_sigEA04, var_core_value_sig7A62["imageSourceType"]);else {
      let var_core_value_sigF704 = var_core_value_sigEA04[ox181838(0x1d3)]();
      var_core_value_sig8109["setSource"](await var_core_value_sigF704["getDataAsString"](), var_core_value_sig7A62[ox181838(0x151)]);
    }
    return (var_core_value_sig7A62[ox181838(0x180)] !== void 0x0 || var_core_value_sig7A62[ox181838(0x15c)] !== void 0x0) && var_core_value_sig8109[ox181838(0x153)](var_core_value_sig7A62[ox181838(0x180)] ?? 0x0, var_core_value_sig7A62[ox181838(0x15c)] ?? 0x0), (var_core_value_sig7A62[ox181838(0x17f)] !== void 0x0 || var_core_value_sig7A62[ox181838(0x21c)] !== void 0x0) && var_core_value_sig8109[ox181838(0x1f5)](var_core_value_sig7A62[ox181838(0x17f)] ?? t[ox181838(0x1b1)][ox181838(0x1fb)], var_core_value_sig7A62[ox181838(0x21c)] ?? t[ox181838(0x1b1)]["fallbackImageHeight"]), var_core_value_sig7A62[ox181838(0x1c0)] !== void 0x0 && var_core_value_sig8109[ox181838(0x158)](var_core_value_sig7A62["rotation"]), var_core_value_sig7A62[ox181838(0x166)] && var_core_value_sig8109["setCrop"](var_core_value_sig7A62[ox181838(0x166)]), var_core_value_sig7A62["prstGeom"] && var_core_value_sig8109[ox181838(0x213)](var_core_value_sig7A62[ox181838(0x220)], var_core_value_sig7A62["adjustValues"]), var_core_value_sig7A62[ox181838(0x147)] && var_core_value_sig8109[ox181838(0x193)](var_core_value_sig7A62["shapeData"]), this[ox181838(0x1ea)](var_core_value_sig8109[ox181838(0x144)](), var_core_value_sig7A62["index"]);
  }
  ["updateImage"](var_core_value_sig7565) {
    let {
        id: var_core_value_sigD4FB,
        transform: var_core_value_sig3E71,
        source: var_core_value_sig01B3,
        imageSourceType: var_core_value_sig7442,
        crop: var_core_value_sigDF87,
        prstGeom: var_core_value_sig9EE0,
        adjustValues: var_core_value_sigF051
      } = var_core_value_sig7565[ox3dcb44(0x223)],
      var_core_value_sig0B45 = this[ox3dcb44(0x183)](var_core_value_sigD4FB);
    if (!var_core_value_sig0B45) throw Error(ox3dcb44(0x222) + var_core_value_sigD4FB + ox3dcb44(0x161));
    return var_core_value_sig0B45[ox3dcb44(0x20a)](var_core_value_sig3E71), var_core_value_sig0B45["setSource"](var_core_value_sig01B3, var_core_value_sig7442), var_core_value_sig0B45[ox3dcb44(0x1e5)](var_core_value_sigDF87), var_core_value_sig9EE0 && var_core_value_sig0B45[ox3dcb44(0x213)](var_core_value_sig9EE0, var_core_value_sigF051), var_core_value_sig0B45;
  }
  ["getImages"]() {
    let {
      elementOrder: var_core_value_sig36F8,
      elements: var_core_value_sig03E1
    } = this[ox2cc953(0x19e)]();
    return var_core_value_sig36F8["map"](var_core_value_sig2BCF => var_core_value_sig03E1[var_core_value_sig2BCF])[ox2cc953(0x155)](var_core_value_sig0D69 => var_core_value_sig0D69["type"] === t["PageElementTypeEnum"][ox2cc953(0x225)])[ox2cc953(0x1e8)](var_core_value_sig480E => this["_injector"]["createInstance"](_, this[ox2cc953(0x205)][ox2cc953(0x15a)](), this[ox2cc953(0x1a9)](), var_core_value_sig480E["id"], this["_slideModel"], this[ox2cc953(0x22d)]));
  }
  ["removeImage"](var_core_value_sigBB57) {
    return this["deleteElement"](var_core_value_sigBB57);
  }
  ["getGroups"]() {
    let {
      elementOrder: var_core_value_sig7C4A,
      elements: var_core_value_sigE799
    } = this[ox1a5280(0x19e)]();
    return var_core_value_sig7C4A[ox1a5280(0x1e8)](var_core_value_sig26DB => var_core_value_sigE799[var_core_value_sig26DB])[ox1a5280(0x155)](var_core_value_sigF0F9 => var_core_value_sigF0F9[ox1a5280(0x1c6)] === t[ox1a5280(0x1fd)][ox1a5280(0x18b)])[ox1a5280(0x1e8)](var_core_value_sig1A0F => this[ox1a5280(0x22d)][ox1a5280(0x1cf)](f, this[ox1a5280(0x205)][ox1a5280(0x15a)](), this["getId"](), var_core_value_sig1A0F["id"], this[ox1a5280(0x205)], this[ox1a5280(0x22d)]));
  }
  ["group"](var_core_value_sigB601) {
    let var_core_value_sig8B71 = var_core_value_sigB601["map"](var_core_value_sigFBA4 => var_core_value_sigFBA4["getId"]()),
      var_core_value_sigAEFB = (0x0, r[ox595688(0x1aa)])(0x6);
    if (!this[ox595688(0x1c9)][ox595688(0x1c5)](t["SetSlideGroupMutation"]["id"], {
      unitId: this[ox595688(0x205)][ox595688(0x15a)](),
      subUnitId: this[ox595688(0x1a9)](),
      drawingIds: var_core_value_sig8B71,
      groupId: var_core_value_sigAEFB
    })) throw Error(ox595688(0x1b5));
    let var_core_value_sig826B = this["getElementById"](var_core_value_sigAEFB);
    if (!var_core_value_sig826B || !(ox595688(0x149) in var_core_value_sig826B) || var_core_value_sig826B["getType"]() !== t["PageElementTypeEnum"][ox595688(0x18b)]) throw Error("Slide\x20group\x20\x22" + var_core_value_sigAEFB + ox595688(0x161));
    return var_core_value_sig826B;
  }
  ["ungroup"](var_core_value_sigCF89) {
    return var_core_value_sigCF89[ox433440(0x1d2)]();
  }
  ["_getShapeScope"]() {
    return {
      hostType: r["UniverInstanceType"][ox1a9277(0x1af)],
      unitId: this[ox1a9277(0x205)]["getUnitId"](),
      subUnitId: this[ox1a9277(0x1a9)]()
    };
  }
  ["_getShapeAdapter"]() {
    return this[ox1dac85(0x22d)][ox1dac85(0x15d)](i[ox1dac85(0x195)])[ox1dac85(0x15d)](r[ox1dac85(0x1b9)][ox1dac85(0x1af)]);
  }
  ["_createShapeHandle"](var_core_value_sig00CB) {
    let {
        unitId: var_core_value_sig77EE,
        subUnitId: var_core_value_sig9F76,
        shapeId: var_core_value_sigB008,
        shapeType: var_core_value_sig8721
      } = var_core_value_sig00CB,
      var_core_value_sig08BA = {
        unitId: var_core_value_sig77EE,
        subUnitId: var_core_value_sig9F76,
        shapeId: var_core_value_sigB008,
        hostType: r[ox40d516(0x1b9)][ox40d516(0x1af)]
      };
    return (0x0, i[ox40d516(0x1db)])(var_core_value_sig8721) ? this[ox40d516(0x22d)][ox40d516(0x1cf)](e[ox40d516(0x1f9)], var_core_value_sig08BA, this[ox40d516(0x22d)]) : this[ox40d516(0x22d)][ox40d516(0x1cf)](e[ox40d516(0x1ef)], var_core_value_sig08BA, this["_injector"]);
  }
};
y = u([l(0x3, (0x0, r["Inject"])(r["Injector"])), l(0x4, r["ICommandService"]), l(0x5, r["IPermissionService"])], y);
function b(var_core_value_sig37A8) {
  let {
    left: var_core_value_sigA90D,
    top: var_core_value_sig7A3C,
    width: var_core_value_sig0511,
    height: var_core_value_sig1F44
  } = (var_core_value_sig37A8 == null ? void 0x0 : var_core_value_sig37A8[oxf78c6a(0x21d)]) ?? {};
  return var_core_value_sigA90D == null || var_core_value_sig7A3C == null || var_core_value_sig0511 == null || var_core_value_sig1F44 == null || ![var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sig0511, var_core_value_sig1F44][oxf78c6a(0x1b7)](Number[oxf78c6a(0x1f4)]) || var_core_value_sig0511 <= 0x0 || var_core_value_sig1F44 <= 0x0 ? null : {
    left: var_core_value_sigA90D,
    top: var_core_value_sig7A3C,
    width: var_core_value_sig0511,
    height: var_core_value_sig1F44
  };
}
let x = class extends n["FBaseInitialable"] {
  constructor(var_core_value_sigDBB5, var_core_value_sigCFAC, var_core_value_sig237B, var_core_value_sigFEAB, var_core_value_sigE347) {
    super(var_core_value_sigCFAC), this[ox5b86d9(0x205)] = var_core_value_sigDBB5, this["_injector"] = var_core_value_sigCFAC, this[ox5b86d9(0x152)] = var_core_value_sig237B, this[ox5b86d9(0x1c9)] = var_core_value_sigFEAB, this[ox5b86d9(0x1fa)] = var_core_value_sigE347, g(this, "id", void 0x0), this["id"] = this[ox5b86d9(0x205)]["getUnitId"]();
  }
  ["getId"]() {
    return this["id"];
  }
  ["getPermission"]() {
    return new s(this["id"], this["_commandService"], this[ox28410b(0x1fa)]);
  }
  ["getMasterViewPermission"]() {
    return new c(this["id"], t["SLIDE_MASTER_VIEW_PERMISSION_OBJECT_ID"], [], this[ox488258(0x1c9)], this[ox488258(0x1fa)]);
  }
  ["getMasterElementPermission"](var_core_value_sig3C5B, var_core_value_sig200B, var_core_value_sig3863) {
    return new c(this["id"], (0x0, t[ox98f12c(0x141)])(var_core_value_sig3C5B, var_core_value_sig200B, var_core_value_sig3863), [t[ox98f12c(0x17d)]], this["_commandService"], this[ox98f12c(0x1fa)]);
  }
  ["getName"]() {
    return this[ox3cc3ec(0x205)]["getSnapshot"]()[ox3cc3ec(0x18c)];
  }
  ["setName"](var_core_value_sigC97C) {
    return this[ox1d5849(0x1c9)][ox1d5849(0x1c5)](t[ox1d5849(0x14f)]["id"], {
      unitId: this["id"],
      name: var_core_value_sigC97C
    }), this;
  }
  ["getPresentation"]() {
    return this[ox5d811b(0x205)];
  }
  ["save"]() {
    return this["_resourceLoaderService"][ox5cf46d(0x172)](this["id"]) ?? r["Tools"][ox5cf46d(0x179)](this[ox5cf46d(0x205)][ox5cf46d(0x19c)]());
  }
  ["getPageSize"]() {
    return this["_slideModel"]["getSnapshot"]()[ox58e753(0x216)];
  }
  ["setPageSize"](var_core_value_sigC4B1) {
    return this["_commandService"][ox275d6b(0x1c5)](t[ox275d6b(0x184)]["id"], {
      unitId: this["id"],
      pageId: void 0x0,
      pageSize: var_core_value_sigC4B1
    }), this;
  }
  ["getPresentationBackgroundGraphics"](var_core_value_sig1BD9) {
    var var_core_value_sigE43E, var_core_value_sigA937;
    let var_core_value_sigCAD5 = this[ox3f19e4(0x205)][ox3f19e4(0x19c)](),
      var_core_value_sigE503 = var_core_value_sig1BD9 ?? (0x0, t["resolvePresentationBackgroundTargetMasterIds"])(var_core_value_sigCAD5, t[ox3f19e4(0x160)][ox3f19e4(0x1d5)])[0x0] ?? ((var_core_value_sigE43E = var_core_value_sigCAD5["masterPageOrder"]) == null ? void 0x0 : var_core_value_sigE43E[ox3f19e4(0x1b4)](var_core_value_sig4383 => {
        const var_core_value_sig186C = ox3f19e4;
        var var_core_value_sigD955;
        return !!((var_core_value_sigD955 = var_core_value_sigCAD5[var_core_value_sig186C(0x1a5)]) != null && var_core_value_sigD955[var_core_value_sig4383]);
      })) ?? Object[ox3f19e4(0x165)](var_core_value_sigCAD5[ox3f19e4(0x1a5)] ?? {})[0x0],
      var_core_value_sig48DD = var_core_value_sigE503 ? (var_core_value_sigA937 = var_core_value_sigCAD5[ox3f19e4(0x1a5)]) == null ? void 0x0 : var_core_value_sigA937[var_core_value_sigE503] : void 0x0;
    return var_core_value_sig48DD ? (0x0, t[ox3f19e4(0x1de)])(var_core_value_sig48DD) : [];
  }
  ["setPresentationBackgroundGraphics"](var_core_value_sig5E6A, var_core_value_sigB7FC = {}) {
    return this["_commandService"]["syncExecuteCommand"](t[ox194882(0x1a0)]["id"], {
      unitId: this["id"],
      target: var_core_value_sigB7FC[ox194882(0x1f7)] ?? t[ox194882(0x160)][ox194882(0x185)],
      masterPageIds: var_core_value_sigB7FC[ox194882(0x197)],
      graphics: var_core_value_sig5E6A
    }), this;
  }
  ["clearPresentationBackgroundGraphics"](var_core_value_sig9CD9) {
    return this[ox4a8537(0x1ad)]([], var_core_value_sig9CD9);
  }
  ["applyTransitionToAll"](var_core_value_sigFD0C) {
    return this[ox2822ec(0x1c9)][ox2822ec(0x1c5)](t["SetSlideTransitionCommand"]["id"], {
      unitId: this["id"],
      applyToAll: !0x0,
      transition: var_core_value_sigFD0C
    }), this;
  }
  ["getSlides"]() {
    return this[ox41c4ba(0x205)][ox41c4ba(0x169)][ox41c4ba(0x17c)]()["map"](var_core_value_sig48BD => this[ox41c4ba(0x22d)]["createInstance"](y, this, this[ox41c4ba(0x205)], var_core_value_sig48BD));
  }
  ["getSlideById"](var_core_value_sig849B) {
    let var_core_value_sig5F1A = this[ox84a42c(0x205)][ox84a42c(0x169)]["getSlide"](var_core_value_sig849B);
    return var_core_value_sig5F1A ? this[ox84a42c(0x22d)][ox84a42c(0x1cf)](y, this, this[ox84a42c(0x205)], var_core_value_sig5F1A) : null;
  }
  ["getSlideByIndex"](var_core_value_sigB455) {
    return this[oxa7c043(0x17c)]()[var_core_value_sigB455] ?? null;
  }
  ["getActiveSlide"]() {
    let var_core_value_sig5241 = this["_slideModel"]["pageManager"][ox1edac5(0x20b)]();
    return var_core_value_sig5241 ? this[ox1edac5(0x22d)][ox1edac5(0x1cf)](y, this, this["_slideModel"], var_core_value_sig5241) : null;
  }
  ["setActiveSlide"](var_core_value_sigC6E5) {
    return this[ox410d9e(0x1c9)]["syncExecuteCommand"](t[ox410d9e(0x1ff)]["id"], {
      unitId: this["id"],
      subUnitId: var_core_value_sigC6E5[ox410d9e(0x1a9)]()
    }), this;
  }
  ["appendSlide"](var_core_value_sigCEFB = {}) {
    return this["insertSlide"](this["getSlides"]()[ox252501(0x1d8)], var_core_value_sigCEFB);
  }
  ["insertSlide"](var_core_value_sig1537, var_core_value_sigE4C6 = {}) {
    let var_core_value_sig4313 = this[ox2412ca(0x1a2)](var_core_value_sigE4C6);
    if (!this[ox2412ca(0x1c9)][ox2412ca(0x1c5)](t[ox2412ca(0x170)]["id"], {
      unitId: this["id"],
      slide: var_core_value_sig4313,
      insertIndex: var_core_value_sig1537,
      setActive: !0x0
    })) throw Error(ox2412ca(0x188));
    let var_core_value_sigFC87 = this[ox2412ca(0x214)](var_core_value_sig4313["id"]);
    if (!var_core_value_sigFC87) throw Error(ox2412ca(0x221));
    return var_core_value_sigFC87;
  }
  ["moveSlide"](var_core_value_sig156F, var_core_value_sigDD51) {
    return this[ox1f1a01(0x1c9)][ox1f1a01(0x1c5)](t[ox1f1a01(0x1a6)]["id"], {
      unitId: this["id"],
      subUnitId: var_core_value_sig156F[ox1f1a01(0x1a9)](),
      toIndex: var_core_value_sigDD51
    });
  }
  ["deleteSlide"](var_core_value_sigF057) {
    return this[ox10d4bd(0x1c9)][ox10d4bd(0x1c5)](t[ox10d4bd(0x192)]["id"], {
      unitId: this["id"],
      subUnitId: var_core_value_sigF057[ox10d4bd(0x1a9)]()
    });
  }
  ["_createSlideData"](var_core_value_sig72F6) {
    let var_core_value_sig9FBA = this[oxbac6d7(0x205)][oxbac6d7(0x19c)]()[oxbac6d7(0x1dc)];
    return {
      id: var_core_value_sig72F6["id"] ?? (0x0, r[oxbac6d7(0x1aa)])(0x6),
      pageType: t["PageTypeEnum"]["Slide"],
      name: var_core_value_sig72F6[oxbac6d7(0x18c)] ?? "Slide\x20" + (var_core_value_sig9FBA[oxbac6d7(0x1d8)] + 0x1),
      elementOrder: var_core_value_sig72F6[oxbac6d7(0x1ca)] ?? [],
      elements: var_core_value_sig72F6[oxbac6d7(0x1f3)] ?? {},
      showMasterSp: var_core_value_sig72F6[oxbac6d7(0x175)] ?? !0x0,
      ...var_core_value_sig72F6
    };
  }
};
x = u([l(0x1, (0x0, r["Inject"])(r["Injector"])), l(0x2, r["IResourceLoaderService"]), l(0x3, r["ICommandService"]), l(0x4, r["IPermissionService"])], x);
var S = class extends n["FUniver"] {
  ["createPresentation"](var_core_value_sigFE01 = {}, var_core_value_sigA2CE) {
    let var_core_value_sig1975 = this[ox81c6e1(0x22d)][ox81c6e1(0x15d)](r["IUniverInstanceService"])["createUnit"](r["UniverInstanceType"]["UNIVER_SLIDE"], var_core_value_sigFE01, var_core_value_sigA2CE);
    return this[ox81c6e1(0x22d)]["createInstance"](x, var_core_value_sig1975);
  }
  ["getActivePresentation"]() {
    let var_core_value_sig6EA1 = this[ox2925a3(0x22d)][ox2925a3(0x15d)](r[ox2925a3(0x1cb)])[ox2925a3(0x200)](r[ox2925a3(0x1b9)]["UNIVER_SLIDE"]);
    return var_core_value_sig6EA1 ? this[ox2925a3(0x22d)][ox2925a3(0x1cf)](x, var_core_value_sig6EA1) : null;
  }
  ["getPresentation"](var_core_value_sig029F) {
    let var_core_value_sig3767 = this["_injector"][ox52ec25(0x15d)](r["IUniverInstanceService"])[ox52ec25(0x1bf)](var_core_value_sig029F, r[ox52ec25(0x1b9)][ox52ec25(0x1af)]);
    return var_core_value_sig3767 ? this[ox52ec25(0x22d)][ox52ec25(0x1cf)](x, var_core_value_sig3767) : null;
  }
  ["getSlideCommandTarget"](var_core_value_sig670B = {}) {
    let {
        unitId: var_core_value_sig6912,
        subUnitId: var_core_value_sigE235,
        slideId: var_core_value_sig7664
      } = var_core_value_sig670B,
      var_core_value_sig2281 = var_core_value_sig6912 ? this[ox2795f0(0x19b)](var_core_value_sig6912) : this[ox2795f0(0x173)]();
    if (!var_core_value_sig2281) return null;
    let var_core_value_sig5E86 = var_core_value_sigE235 || var_core_value_sig7664,
      var_core_value_sig6998 = var_core_value_sig5E86 ? var_core_value_sig2281[ox2795f0(0x214)](var_core_value_sig5E86) : var_core_value_sig2281[ox2795f0(0x20b)]();
    return var_core_value_sig6998 ? {
      presentation: var_core_value_sig2281,
      slide: var_core_value_sig6998,
      unitId: var_core_value_sig2281["getId"](),
      subUnitId: var_core_value_sig6998[ox2795f0(0x1a9)]()
    } : null;
  }
};
n["FUniver"]["extend"](S), Object["defineProperty"](exports, "FGroup", {
  enumerable: !0x0,
  get: function () {
    return f;
  }
}), Object["defineProperty"](exports, "FImage", {
  enumerable: !0x0,
  get: function () {
    return _;
  }
}), exports["FImageBuilder"] = v, Object["defineProperty"](exports, "FPageElement", {
  enumerable: !0x0,
  get: function () {
    return d;
  }
}), Object["defineProperty"](exports, "FPresentation", {
  enumerable: !0x0,
  get: function () {
    return x;
  }
}), exports["FPresentationPermission"] = s, Object["defineProperty"](exports, "FSlide", {
  enumerable: !0x0,
  get: function () {
    return y;
  }
}), exports["FSlideObjectPermission"] = c;
