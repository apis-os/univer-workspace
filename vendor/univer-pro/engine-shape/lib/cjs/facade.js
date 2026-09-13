Object["defineProperty"](exports, Symbol["toStringTag"], {
  value: "Module"
});
let e = require("@univerjs-pro/engine-shape"),
  t = require("@univerjs/core/facade"),
  n = require("@univerjs/core");
var r = class extends t["FEnum"] {
  get ["ShapeTypeEnum"]() {
    return e["ShapeTypeEnum"];
  }
  get ["ShapeFillEnum"]() {
    return e[ox453e1c(0x1ac)];
  }
  get ["ShapeGradientTypeEnum"]() {
    return e[ox3c8776(0x198)];
  }
  get ["ShapeImageFillModeEnum"]() {
    return e[ox2c4373(0xe0)];
  }
  get ["ShapeImageSourceTypeEnum"]() {
    return e[ox1828d0(0x155)];
  }
  get ["ShapeLineTypeEnum"]() {
    return e[ox1b33c0(0x16d)];
  }
  get ["ShapeLineDashEnum"]() {
    return e["ShapeLineDashEnum"];
  }
  get ["ShapeLineCapEnum"]() {
    return e["ShapeLineCapEnum"];
  }
  get ["ShapeLineJoinEnum"]() {
    return e[ox506098(0x130)];
  }
  get ["ShapeOperatorEnum"]() {
    return e[ox29c2d7(0x11f)];
  }
  get ["ShapeArrowTypeEnum"]() {
    return e[ox52081e(0xe9)];
  }
  get ["ShapeArrowSizeEnum"]() {
    return e[ox230b4e(0xe3)];
  }
  get ["ShapeTextAutoFitType"]() {
    return e[ox3e557f(0xc0)];
  }
  get ["ShapeTextDirection"]() {
    return e[ox2008c4(0x180)];
  }
  get ["ShapeTextWrapType"]() {
    return e[ox52c0b8(0x191)];
  }
};
t["FEnum"]["extend"](r);
function i(var_core_value_sig6A71) {
  switch (var_core_value_sig6A71) {
    case e[ox1b9b53(0x198)][ox1b9b53(0x107)]:
      return "radial";
    case e[ox1b9b53(0x198)]["Angular"]:
      return ox1b9b53(0x121);
    case e[ox1b9b53(0x198)]["Diamond"]:
      return ox1b9b53(0xab);
    case e["ShapeGradientTypeEnum"]["Linear"]:
    default:
      return ox1b9b53(0x16f);
  }
}
;
function a(var_core_value_sig3BF6) {
  return var_core_value_sig3BF6 === e["ImageFillModeEnum"][ox5594b1(0x195)] ? "tile" : ox5594b1(0xad);
}
var o = class {
  constructor(var_core_value_sigE67E, var_core_value_sig2902) {
    this[ox56d80e(0xec)] = var_core_value_sigE67E, this[ox56d80e(0x11b)] = var_core_value_sig2902;
  }
  ["getRichText"]() {
    var var_core_value_sig9989;
    return (0x0, e[ox4b1fab(0x115)])((var_core_value_sig9989 = this[ox4b1fab(0x118)]()) == null ? void 0x0 : var_core_value_sig9989[ox4b1fab(0xe1)]);
  }
  ["getPlainText"]() {
    var var_core_value_sig698E;
    return ((var_core_value_sig698E = this[oxaacb84(0x1a8)]()) == null ? void 0x0 : var_core_value_sig698E[oxaacb84(0xaa)]()) ?? null;
  }
  ["setRichText"](var_core_value_sig2809) {
    return this["_updateShapeData"](var_core_value_sigBC46 => ({
      ...var_core_value_sigBC46,
      shapeText: (0x0, e[ox231e0a(0x181)])(var_core_value_sigBC46[ox231e0a(0xe1)], var_core_value_sig2809)
    })), this;
  }
  ["setText"](var_core_value_sig2DAB) {
    return this["_updateShapeData"](var_core_value_sig3D7D => ({
      ...var_core_value_sig3D7D,
      shapeText: (0x0, e[ox60006f(0x120)])(var_core_value_sig3D7D[ox60006f(0xe1)], var_core_value_sig2DAB)
    })), this;
  }
  ["setTextStyle"](var_core_value_sig877E) {
    return this[ox140f14(0xef)](var_core_value_sig27E5 => ({
      ...var_core_value_sig27E5,
      shapeText: (0x0, e[ox140f14(0x13e)])(var_core_value_sig27E5[ox140f14(0xe1)], var_core_value_sig877E)
    })), this;
  }
  ["setColor"](var_core_value_sig20C8, var_core_value_sigE9A7) {
    return this[ox409e14(0x151)]({
      cl: {
        rgb: var_core_value_sig20C8
      },
      textFill: {
        type: ox409e14(0x1b1),
        color: var_core_value_sig20C8,
        opacity: var_core_value_sigE9A7
      }
    });
  }
  ["setNoneFill"]() {
    return this[ox144600(0x151)]({
      cl: {
        rgb: ox144600(0x124)
      },
      textFill: {
        type: ox144600(0x16a)
      }
    });
  }
  ["setGradientFill"](var_core_value_sigBECE, var_core_value_sig1B22, var_core_value_sig7F72) {
    return var_core_value_sig1B22[ox538a0(0xee)] < 0x2 ? (console[ox538a0(0x108)](ox538a0(0x15d)), this) : this[ox538a0(0x151)]({
      cl: {
        rgb: var_core_value_sig1B22[0x0][ox538a0(0xfd)]
      },
      textFill: {
        type: ox538a0(0x148),
        gradient: {
          type: i(var_core_value_sigBECE),
          angle: var_core_value_sig7F72,
          stops: var_core_value_sig1B22["map"](({
            position: var_core_value_sig8061,
            color: var_core_value_sig4D4C,
            opacity: var_core_value_sigC9E0
          }) => ({
            offset: var_core_value_sig8061,
            color: var_core_value_sig4D4C,
            opacity: var_core_value_sigC9E0
          }))
        }
      }
    });
  }
  ["setImageFill"](var_core_value_sig7B2A, var_core_value_sig06CD = e["ImageSourceTypeEnum"]["URL"], var_core_value_sigA5F1 = {}) {
    return this[oxad352f(0x151)]({
      textFill: {
        type: oxad352f(0xf9),
        picture: {
          source: var_core_value_sig7B2A,
          sourceType: var_core_value_sig06CD,
          opacity: var_core_value_sigA5F1[oxad352f(0x15e)],
          mode: a(var_core_value_sigA5F1[oxad352f(0xd4)]),
          scaleX: var_core_value_sigA5F1[oxad352f(0x113)],
          scaleY: var_core_value_sigA5F1[oxad352f(0x13d)],
          offsetX: var_core_value_sigA5F1[oxad352f(0x188)],
          offsetY: var_core_value_sigA5F1[oxad352f(0x18c)]
        }
      }
    });
  }
  ["setFontSize"](var_core_value_sig97A2) {
    return this["setTextStyle"]({
      fs: var_core_value_sig97A2
    });
  }
  ["setFontFamily"](var_core_value_sig07E9) {
    return this[ox56b734(0x151)]({
      ff: var_core_value_sig07E9
    });
  }
  ["setBold"](var_core_value_sig4F59) {
    return this[ox1ee857(0x151)]({
      bl: var_core_value_sig4F59 ? n[ox1ee857(0x15c)]["TRUE"] : n[ox1ee857(0x15c)][ox1ee857(0x10b)]
    });
  }
  ["setItalic"](var_core_value_sigF564) {
    return this[ox27cb8d(0x151)]({
      it: var_core_value_sigF564 ? n[ox27cb8d(0x15c)][ox27cb8d(0x179)] : n[ox27cb8d(0x15c)]["FALSE"]
    });
  }
  ["setUnderline"](var_core_value_sig8CFA) {
    return this[oxc03632(0x151)]({
      ul: {
        s: var_core_value_sig8CFA ? n[oxc03632(0x15c)][oxc03632(0x179)] : n[oxc03632(0x15c)][oxc03632(0x10b)]
      }
    });
  }
  ["setStrikethrough"](var_core_value_sig2E11) {
    return this["setTextStyle"]({
      st: {
        s: var_core_value_sig2E11 ? n[oxae1933(0x15c)][oxae1933(0x179)] : n[oxae1933(0x15c)][oxae1933(0x10b)]
      }
    });
  }
  ["setHorizontalAlign"](var_core_value_sig5B69) {
    return this[ox4802d0(0xef)](var_core_value_sig76BA => (0x0, e[ox4802d0(0x192)])(var_core_value_sig76BA, {
      horizontalAlign: var_core_value_sig5B69
    })), this;
  }
  ["setVerticalAlign"](var_core_value_sigB098) {
    return this[ox5b181e(0xef)](var_core_value_sigFBFA => (0x0, e["applyShapeTextAlignment"])(var_core_value_sigFBFA, {
      verticalAlign: var_core_value_sigB098
    })), this;
  }
  ["getTextBoxOptions"]() {
    let var_core_value_sigCE71 = this[ox3e60cf(0x118)]();
    return var_core_value_sigCE71 ? (0x0, e[ox3e60cf(0xb7)])(var_core_value_sigCE71) : null;
  }
  ["setTextBoxOptions"](var_core_value_sig21D8) {
    return this[ox18127b(0xef)](var_core_value_sigF602 => (0x0, e["applyShapeTextBoxOptions"])(var_core_value_sigF602, var_core_value_sig21D8)), this;
  }
  ["_getAdapter"]() {
    return this[ox2c530e(0x11b)][ox2c530e(0x1b7)](e[ox2c530e(0xb9)])["get"](this[ox2c530e(0xec)][ox2c530e(0x1b5)]);
  }
  ["_getShapeData"]() {
    let var_core_value_sig2B65 = this["_getAdapter"]();
    if (!var_core_value_sig2B65) return null;
    try {
      var var_core_value_sigD7EA;
      return ((var_core_value_sigD7EA = var_core_value_sig2B65[ox5a1fcd(0xd6)](this[ox5a1fcd(0xec)])) == null ? void 0x0 : var_core_value_sigD7EA[ox5a1fcd(0x18b)]) || (console[ox5a1fcd(0x108)](ox5a1fcd(0x178) + this[ox5a1fcd(0xec)][ox5a1fcd(0x1ad)] + ox5a1fcd(0x150)), null);
    } catch (var_core_value_sig1BBD) {
      return console[ox5a1fcd(0x108)](ox5a1fcd(0x1a6) + this[ox5a1fcd(0xec)][ox5a1fcd(0x1ad)] + ox5a1fcd(0x174), var_core_value_sig1BBD), null;
    }
  }
  ["_updateShapeData"](var_core_value_sigB33B) {
    let var_core_value_sig24B9 = this["_getAdapter"]();
    if (!var_core_value_sig24B9) return !0x1;
    try {
      var var_core_value_sigE627;
      let var_core_value_sigF704 = (var_core_value_sigE627 = var_core_value_sig24B9[ox739334(0xd6)](this[ox739334(0xec)])) == null ? void 0x0 : var_core_value_sigE627[ox739334(0x18b)];
      if (!var_core_value_sigF704) return console[ox739334(0x108)](ox739334(0x178) + this[ox739334(0xec)][ox739334(0x1ad)] + "\x22\x20was\x20not\x20found."), !0x1;
      let var_core_value_sig2BCF = var_core_value_sig24B9[ox739334(0x19f)](this[ox739334(0xec)], {
        shapeData: var_core_value_sigB33B(var_core_value_sigF704)
      });
      return var_core_value_sig2BCF || console[ox739334(0x108)](ox739334(0x1a0) + this[ox739334(0xec)][ox739334(0x1ad)] + ox739334(0x174)), var_core_value_sig2BCF;
    } catch (var_core_value_sig0D69) {
      return console["warn"](ox739334(0x1a0) + this[ox739334(0xec)]["shapeId"] + ox739334(0x174), var_core_value_sig0D69), !0x1;
    }
  }
};
function s(var_core_value_sig38CE, var_core_value_sig62B7) {
  return function (var_core_value_sigEF3E, var_core_value_sig273D) {
    var_core_value_sig62B7(var_core_value_sigEF3E, var_core_value_sig273D, var_core_value_sig38CE);
  };
}
;
function c(var_core_value_sig37A8, var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sig0511) {
  var var_core_value_sig1F44 = arguments[ox1ae3a(0xee)],
    var_core_value_sigCB04 = var_core_value_sig1F44 < 0x3 ? var_core_value_sigA90D : var_core_value_sig0511 === null ? var_core_value_sig0511 = Object[ox1ae3a(0xf8)](var_core_value_sigA90D, var_core_value_sig7A3C) : var_core_value_sig0511,
    var_core_value_sig947E;
  if (typeof Reflect == ox1ae3a(0x12b) && typeof Reflect["decorate"] == ox1ae3a(0x1a9)) var_core_value_sigCB04 = Reflect[ox1ae3a(0x145)](var_core_value_sig37A8, var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sig0511);else {
    for (var var_core_value_sig4545 = var_core_value_sig37A8[ox1ae3a(0xee)] - 0x1; var_core_value_sig4545 >= 0x0; var_core_value_sig4545--) (var_core_value_sig947E = var_core_value_sig37A8[var_core_value_sig4545]) && (var_core_value_sigCB04 = (var_core_value_sig1F44 < 0x3 ? var_core_value_sig947E(var_core_value_sigCB04) : var_core_value_sig1F44 > 0x3 ? var_core_value_sig947E(var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sigCB04) : var_core_value_sig947E(var_core_value_sigA90D, var_core_value_sig7A3C)) || var_core_value_sigCB04);
  }
  return var_core_value_sig1F44 > 0x3 && var_core_value_sigCB04 && Object[ox1ae3a(0xed)](var_core_value_sigA90D, var_core_value_sig7A3C, var_core_value_sigCB04), var_core_value_sigCB04;
}
var l;
function u(var_core_value_sigF39A) {
  let var_core_value_sigF79C = n[ox5976a9(0xe6)][ox5976a9(0xfe)](var_core_value_sigF39A);
  return var_core_value_sigF79C[ox5976a9(0x134)] &&= var_core_value_sigF79C["pathLst"][ox5976a9(0x123)](var_core_value_sig9A0D => {
    const var_core_value_sigA319 = ox5976a9;
    var var_core_value_sig2D58;
    if ((var_core_value_sig2D58 = var_core_value_sig9A0D[var_core_value_sigA319(0x103)]) != null && var_core_value_sig2D58[var_core_value_sigA319(0xee)]) {
      let {
        data: var_core_value_sig480E,
        ...var_core_value_sig26DB
      } = var_core_value_sig9A0D;
      return var_core_value_sig26DB;
    }
    if (var_core_value_sig9A0D["data"] === void 0x0) return var_core_value_sig9A0D;
    let var_core_value_sig223F = (0x0, e[var_core_value_sigA319(0xa4)])(var_core_value_sig9A0D[var_core_value_sigA319(0x190)]),
      {
        data: var_core_value_sigD749,
        ...var_core_value_sigCFFA
      } = var_core_value_sig9A0D;
    return {
      ...var_core_value_sigCFFA,
      dataArray: var_core_value_sig223F
    };
  }), var_core_value_sigF79C;
}
let d = l = class extends t["FBase"] {
  constructor(var_core_value_sig58C1, var_core_value_sig5090, var_core_value_sigC368, var_core_value_sigAD56) {
    super(), this[ox35c835(0xec)] = var_core_value_sig58C1, this["_injector"] = var_core_value_sig5090, this[ox35c835(0x1a3)] = var_core_value_sigC368, this[ox35c835(0x160)] = var_core_value_sigAD56;
  }
  ["isConnectorShape"]() {
    return !0x1;
  }
  ["getId"]() {
    return this[ox27bbfe(0xec)]["shapeId"];
  }
  ["getName"]() {
    var var_core_value_sigDB4A;
    return (var_core_value_sigDB4A = this[ox586978(0xcf)]()) == null ? void 0x0 : var_core_value_sigDB4A[ox586978(0x14e)];
  }
  ["setName"](var_core_value_sig6418) {
    return this[oxab0613(0x10c)]({
      name: var_core_value_sig6418
    });
  }
  ["getDescription"]() {
    var var_core_value_sig1896;
    return (var_core_value_sig1896 = this[ox1dbb8f(0xcf)]()) == null ? void 0x0 : var_core_value_sig1896[ox1dbb8f(0x139)];
  }
  ["setDescription"](var_core_value_sig0285) {
    return this[ox3db337(0x10c)]({
      description: var_core_value_sig0285
    });
  }
  ["getHostType"]() {
    return this[ox57b343(0xec)]["hostType"];
  }
  ["getShapeType"]() {
    var var_core_value_sig777D;
    return ((var_core_value_sig777D = this["_getSnapshot"]()) == null ? void 0x0 : var_core_value_sig777D[ox140cc9(0xe8)]) ?? null;
  }
  ["getShapeData"]() {
    let var_core_value_sig3F4C = this[ox102ba4(0xcf)]();
    return var_core_value_sig3F4C ? n[ox102ba4(0xe6)][ox102ba4(0xfe)](var_core_value_sig3F4C[ox102ba4(0x18b)]) : null;
  }
  ["isSmartArt"]() {
    var var_core_value_sigD65A;
    let var_core_value_sig5A13 = (var_core_value_sigD65A = this["_getSnapshot"]()) == null ? void 0x0 : var_core_value_sigD65A["shapeData"];
    return !!var_core_value_sig5A13 && (0x0, e[ox2e2b2a(0x112)])(var_core_value_sig5A13);
  }
  ["getSmartArtData"]() {
    var var_core_value_sigF593;
    let var_core_value_sig3607 = (var_core_value_sigF593 = this[ox598b55(0xcf)]()) == null ? void 0x0 : var_core_value_sigF593[ox598b55(0x18b)];
    return var_core_value_sig3607 && (0x0, e["isSmartArtShapeData"])(var_core_value_sig3607) ? n[ox598b55(0xe6)][ox598b55(0xfe)](var_core_value_sig3607["smartArt"]) : null;
  }
  ["setSmartArtData"](var_core_value_sigB512) {
    return this[ox13f4a1(0xf1)]({
      type: e["SmartArtOperationTypeEnum"][ox13f4a1(0x175)],
      data: n[ox13f4a1(0xe6)]["deepClone"](var_core_value_sigB512)
    });
  }
  ["insertSmartArtNode"](var_core_value_sigF2E6) {
    return this[ox3928b6(0xf1)]({
      type: e[ox3928b6(0x176)][ox3928b6(0x16e)],
      nodeId: var_core_value_sigF2E6["node"]["id"],
      node: n[ox3928b6(0xe6)]["deepClone"](var_core_value_sigF2E6[ox3928b6(0xf2)]),
      targetNodeId: var_core_value_sigF2E6[ox3928b6(0xc3)],
      position: var_core_value_sigF2E6[ox3928b6(0xcc)]
    });
  }
  ["deleteSmartArtNode"](var_core_value_sig34C8) {
    return this["_updateSmartArt"]({
      type: e[oxa8508d(0x176)]["DeleteNode"],
      nodeId: var_core_value_sig34C8
    });
  }
  ["moveSmartArtNode"](var_core_value_sigB744) {
    return this[ox2841f0(0xf1)]({
      type: e[ox2841f0(0x176)][ox2841f0(0x15f)],
      ...var_core_value_sigB744
    });
  }
  ["promoteSmartArtNode"](var_core_value_sigEAE2) {
    return this[ox6b7e9b(0xf1)]({
      type: e[ox6b7e9b(0x176)][ox6b7e9b(0x162)],
      nodeId: var_core_value_sigEAE2
    });
  }
  ["demoteSmartArtNode"](var_core_value_sigE68A) {
    return this["_updateSmartArt"]({
      type: e[ox54a0ab(0x176)]["DemoteNode"],
      nodeId: var_core_value_sigE68A
    });
  }
  ["updateSmartArtNode"](var_core_value_sig3E68, var_core_value_sigF4C5) {
    return this[ox4f7a14(0xf1)]({
      type: e[ox4f7a14(0x176)][ox4f7a14(0x168)],
      nodeId: var_core_value_sig3E68,
      update: n[ox4f7a14(0xe6)][ox4f7a14(0xfe)](var_core_value_sigF4C5)
    });
  }
  ["setSmartArtDirection"](var_core_value_sig5410) {
    return this[oxeac4b7(0xf1)]({
      type: e[oxeac4b7(0x176)][oxeac4b7(0x11a)],
      direction: var_core_value_sig5410
    });
  }
  ["setSmartArtLayout"](var_core_value_sig492F, var_core_value_sig8EA0) {
    return this[ox536fbc(0xf1)]({
      type: e["SmartArtOperationTypeEnum"][ox536fbc(0x182)],
      layoutId: var_core_value_sig492F,
      category: var_core_value_sig8EA0
    });
  }
  ["updateSmartArtPresentationShape"](var_core_value_sigA6F6, var_core_value_sigCDDA) {
    return this[oxb0c973(0xf1)]({
      type: e[oxb0c973(0x176)][oxb0c973(0xba)],
      presentationShapeId: var_core_value_sigA6F6,
      update: n[oxb0c973(0xe6)][oxb0c973(0xfe)](var_core_value_sigCDDA)
    });
  }
  ["convertSmartArtToShapes"]() {
    let var_core_value_sigE243 = this[ox419484(0x166)]();
    if (!(var_core_value_sigE243 != null && var_core_value_sigE243[ox419484(0x187)])) return console[ox419484(0x108)](ox419484(0xa9) + this[ox419484(0xec)][ox419484(0x1ad)] + "\x22."), [];
    try {
      let var_core_value_sigF0F9 = var_core_value_sigE243["convertSmartArtToShapes"](this[ox419484(0xec)]);
      return var_core_value_sigF0F9 ? var_core_value_sigF0F9[ox419484(0x123)](var_core_value_sig7524 => this[ox419484(0x11b)][ox419484(0x138)](l, {
        hostType: var_core_value_sig7524[ox419484(0x1b5)],
        unitId: var_core_value_sig7524["unitId"],
        subUnitId: var_core_value_sig7524[ox419484(0x101)],
        shapeId: var_core_value_sig7524["shapeId"]
      }, this["_injector"])) : (console[ox419484(0x108)]("[Shape\x20Facade]:\x20Failed\x20to\x20convert\x20SmartArt\x20Shape\x20\x22" + this[ox419484(0xec)][ox419484(0x1ad)] + "\x22."), []);
    } catch (var_core_value_sig1A0F) {
      return console[ox419484(0x108)]("[Shape\x20Facade]:\x20Failed\x20to\x20convert\x20SmartArt\x20Shape\x20\x22" + this[ox419484(0xec)]["shapeId"] + "\x22.", var_core_value_sig1A0F), [];
    }
  }
  ["getSnapshot"]() {
    let var_core_value_sig74A8 = this[ox2c74d4(0xcf)]();
    return var_core_value_sig74A8 ? n[ox2c74d4(0xe6)][ox2c74d4(0xfe)](var_core_value_sig74A8) : null;
  }
  ["getTransform"]() {
    let var_core_value_sig21B2 = this[ox22ed23(0xcf)]();
    return var_core_value_sig21B2 ? {
      ...var_core_value_sig21B2["transform"]
    } : null;
  }
  ["isVisible"]() {
    var var_core_value_sigDE08;
    return ((var_core_value_sigDE08 = this[ox2968f7(0xcf)]()) == null ? void 0x0 : var_core_value_sigDE08["visible"]) ?? !0x1;
  }
  ["setVisible"](var_core_value_sigACCB) {
    return this[ox498f58(0x10c)]({
      visible: var_core_value_sigACCB
    });
  }
  ["isSelectable"]() {
    var var_core_value_sig7F33;
    return ((var_core_value_sig7F33 = this[ox9f724d(0xcf)]()) == null ? void 0x0 : var_core_value_sig7F33[ox9f724d(0x153)]) ?? !0x1;
  }
  ["setSelectable"](var_core_value_sig0C53) {
    return this[ox13a4c2(0x10c)]({
      selectable: var_core_value_sig0C53
    });
  }
  ["getText"]() {
    return this["_injector"][ox3cd50c(0x138)](o, this[ox3cd50c(0xec)], this[ox3cd50c(0x11b)]);
  }
  ["isCustomShape"]() {
    let var_core_value_sigEA04 = this[ox369eeb(0xbd)]();
    return (var_core_value_sigEA04 == null ? void 0x0 : var_core_value_sigEA04[ox369eeb(0xfb)]) === !0x0 && !!var_core_value_sigEA04[ox369eeb(0xc8)];
  }
  ["getCustomGeometry"]() {
    var var_core_value_sig7A62;
    return ((var_core_value_sig7A62 = this[ox368d9c(0xbd)]()) == null ? void 0x0 : var_core_value_sig7A62[ox368d9c(0xc8)]) ?? null;
  }
  ["setShapeType"](var_core_value_sig8109) {
    return this[ox3ae758(0xb1)](var_core_value_sigFBA4 => ({
      ...var_core_value_sigFBA4,
      shapeType: var_core_value_sig8109
    }), var_core_value_sig8109);
  }
  ["setShapeData"](var_core_value_sig7565) {
    let var_core_value_sigD4FB = n[ox2e975b(0xe6)]["deepClone"](var_core_value_sig7565);
    return this[ox2e975b(0x10c)]({
      shapeType: var_core_value_sigD4FB[ox2e975b(0xe8)],
      shapeData: var_core_value_sigD4FB
    });
  }
  ["setTransform"](var_core_value_sig3E71) {
    return this[ox4f77ad(0x10c)]({
      transform: var_core_value_sig3E71
    });
  }
  ["setSize"](var_core_value_sig01B3, var_core_value_sig7442) {
    return this[ox16c1d2(0x146)]({
      width: var_core_value_sig01B3,
      height: var_core_value_sig7442
    });
  }
  ["setRotation"](var_core_value_sigDF87) {
    return this["setTransform"]({
      rotation: var_core_value_sigDF87
    });
  }
  ["setAbsolutePosition"](var_core_value_sig9EE0, var_core_value_sigF051) {
    return this[ox35a306(0x146)]({
      left: var_core_value_sig9EE0,
      top: var_core_value_sigF051
    });
  }
  ["setCustomGeometry"](var_core_value_sig0B45) {
    var var_core_value_sig36F8, var_core_value_sig03E1;
    let var_core_value_sigBB57 = ((var_core_value_sig36F8 = var_core_value_sig0B45[oxe3bdf3(0x110)]) == null ? void 0x0 : var_core_value_sig36F8["findIndex"](({
      x: var_core_value_sig4383,
      y: var_core_value_sig186C
    }) => var_core_value_sig4383 === void 0x0 || var_core_value_sig186C === void 0x0)) ?? -0x1;
    if (var_core_value_sigBB57 >= 0x0) return console[oxe3bdf3(0x108)]("[Shape\x20Facade]:\x20Custom\x20geometry\x20connection\x20site\x20" + var_core_value_sigBB57 + "\x20requires\x20both\x20\x22x\x22\x20and\x20\x22y\x22."), this;
    let var_core_value_sig7C4A = u(var_core_value_sig0B45);
    if ((var_core_value_sig03E1 = var_core_value_sig7C4A[oxe3bdf3(0x110)]) != null && var_core_value_sig03E1["length"]) {
      let var_core_value_sigD955 = this[oxe3bdf3(0xcf)]();
      if (!var_core_value_sigD955) return this;
      try {
        let var_core_value_sig2AD8 = new e[oxe3bdf3(0x167)](var_core_value_sigD955[oxe3bdf3(0xe8)], var_core_value_sigD955["shapeId"], {
          ...var_core_value_sigD955[oxe3bdf3(0x18b)],
          isCustom: !0x0,
          customGeometry: var_core_value_sig7C4A
        });
        var_core_value_sig2AD8[oxe3bdf3(0xa8)]({
          width: var_core_value_sigD955["transform"][oxe3bdf3(0x177)],
          height: var_core_value_sigD955[oxe3bdf3(0xcd)]["height"]
        }), var_core_value_sig2AD8["getConnectionSiteList"]();
      } catch {
        return console[oxe3bdf3(0x108)](oxe3bdf3(0xff)), this;
      }
    }
    return this[oxe3bdf3(0xb1)](var_core_value_sig48BD => ({
      ...var_core_value_sig48BD,
      isCustom: !0x0,
      customGeometry: var_core_value_sig7C4A
    }));
  }
  ["setCustomGeometryFromSvgPath"](var_core_value_sigE799) {
    return this[ox34ec0e(0xf6)]({
      rect: {
        l: 0x0,
        t: 0x0,
        r: "r",
        b: "b"
      },
      pathLst: [{
        w: var_core_value_sigE799[ox34ec0e(0x177)],
        h: var_core_value_sigE799[ox34ec0e(0xf3)],
        fill: var_core_value_sigE799[ox34ec0e(0x11d)],
        stroke: var_core_value_sigE799["stroke"],
        data: var_core_value_sigE799["pathData"]
      }]
    });
  }
  ["getConnectionSites"]() {
    var var_core_value_sigB601;
    return ((var_core_value_sigB601 = this["_getGeometryModel"]()) == null ? void 0x0 : var_core_value_sigB601[ox2b2863(0x169)]()["map"](var_core_value_sig429F => ({
      ...var_core_value_sig429F
    }))) ?? [];
  }
  ["getStartConnectInfo"]() {
    var var_core_value_sig8B71;
    let var_core_value_sigAEFB = (var_core_value_sig8B71 = this[ox214ab5(0x17d)]()) == null ? void 0x0 : var_core_value_sig8B71[ox214ab5(0x1b6)]();
    return var_core_value_sigAEFB ? {
      ...var_core_value_sigAEFB
    } : null;
  }
  ["getEndConnectInfo"]() {
    var var_core_value_sig826B;
    let var_core_value_sigCF89 = (var_core_value_sig826B = this[ox5c732d(0x17d)]()) == null ? void 0x0 : var_core_value_sig826B["getEndConnectInfo"]();
    return var_core_value_sigCF89 ? {
      ...var_core_value_sigCF89
    } : null;
  }
  ["getAdjustHandles"]() {
    var var_core_value_sig00CB;
    let var_core_value_sig77EE = this[ox2d764b(0x17d)](),
      var_core_value_sig9F76 = (var_core_value_sig77EE == null || (var_core_value_sig00CB = var_core_value_sig77EE[ox2d764b(0x183)]()["ahLst"]) == null ? void 0x0 : var_core_value_sig00CB[ox2d764b(0xee)]) ?? 0x0;
    return !var_core_value_sig77EE || var_core_value_sig9F76 === 0x0 ? [] : Array["from"]({
      length: var_core_value_sig9F76
    }, (var_core_value_sigF62A, var_core_value_sig8178) => var_core_value_sig77EE[ox2d764b(0x13b)](var_core_value_sig8178))[ox2d764b(0x13f)](var_core_value_sigE9ED => var_core_value_sigE9ED !== void 0x0)["map"](var_core_value_sigB577 => n[ox2d764b(0xe6)][ox2d764b(0xfe)](var_core_value_sigB577));
  }
  ["setAdjustValues"](var_core_value_sigB008) {
    let var_core_value_sig8721 = Object[ox4be9d6(0x125)](var_core_value_sigB008);
    if (var_core_value_sig8721[ox4be9d6(0xee)] === 0x0) return this;
    let var_core_value_sig08BA = this[ox4be9d6(0x17d)]();
    if (!var_core_value_sig08BA) return this;
    let var_core_value_sigDBB5 = new Set(var_core_value_sig08BA[ox4be9d6(0x18e)]());
    for (let [var_core_value_sig9572, var_core_value_sigD873] of var_core_value_sig8721) {
      if (!var_core_value_sigDBB5[ox4be9d6(0x17b)](var_core_value_sig9572)) return console[ox4be9d6(0x108)](ox4be9d6(0x154) + var_core_value_sig9572 + "\x22\x20does\x20not\x20exist."), this;
      if (!Number[ox4be9d6(0x119)](var_core_value_sigD873)) return console["warn"](ox4be9d6(0x154) + var_core_value_sig9572 + ox4be9d6(0x13c)), this;
    }
    let var_core_value_sigCFAC = Object[ox4be9d6(0x1ab)](var_core_value_sig8721[ox4be9d6(0x123)](([var_core_value_sigA12B, var_core_value_sigF230]) => [var_core_value_sigA12B, var_core_value_sig08BA[ox4be9d6(0x170)](var_core_value_sigA12B, var_core_value_sigF230)]));
    return this[ox4be9d6(0xb1)](var_core_value_sig09B8 => ({
      ...var_core_value_sig09B8,
      adjustValues: {
        ...var_core_value_sig09B8[ox4be9d6(0xde)],
        ...var_core_value_sigCFAC
      }
    }));
  }
  ["resetAdjustValues"]() {
    let var_core_value_sig237B = this["getShapeData"]();
    return var_core_value_sig237B != null && var_core_value_sig237B[ox123cd(0xde)] ? (delete var_core_value_sig237B[ox123cd(0xde)], this[ox123cd(0x10c)]({
      shapeData: var_core_value_sig237B
    })) : this;
  }
  ["setSolidFill"](var_core_value_sigFEAB, var_core_value_sigE347) {
    return this[oxa129f8(0xb1)](var_core_value_sig6F91 => ({
      ...var_core_value_sig6F91,
      fill: {
        fillType: e["ShapeFillEnum"][oxa129f8(0x1b0)],
        color: var_core_value_sigFEAB,
        opacity: var_core_value_sigE347
      }
    }));
  }
  ["setGradientFill"](var_core_value_sig3C5B, var_core_value_sig200B, var_core_value_sig3863) {
    return var_core_value_sig200B[ox418940(0xee)] < 0x2 ? (console[ox418940(0x108)](ox418940(0x11e)), this) : this[ox418940(0xb1)](var_core_value_sigF9C7 => ({
      ...var_core_value_sigF9C7,
      fill: {
        fillType: e[ox418940(0x1ac)][ox418940(0xc1)],
        gradientType: var_core_value_sig3C5B,
        gradientStops: n[ox418940(0xe6)][ox418940(0xfe)](var_core_value_sig200B),
        gradientAngle: var_core_value_sig3863
      }
    }));
  }
  ["setImageFill"](var_core_value_sigC97C, var_core_value_sigC4B1, var_core_value_sig1BD9 = {}) {
    return this["_patchShapeData"](var_core_value_sig8895 => ({
      ...var_core_value_sig8895,
      fill: {
        ...n["Tools"][ox5cfa08(0xfe)](var_core_value_sig1BD9),
        fillType: e[ox5cfa08(0x1ac)][ox5cfa08(0x12d)],
        fillImageSource: var_core_value_sigC97C,
        fillImageSourceType: var_core_value_sigC4B1
      }
    }));
  }
  ["setNoneFill"]() {
    return this[ox4477c7(0xb1)](var_core_value_sigC80B => ({
      ...var_core_value_sigC80B,
      fill: {
        fillType: e[ox4477c7(0x1ac)]["NoFill"]
      }
    }));
  }
  ["setStroke"](var_core_value_sigE43E) {
    return this[ox482d92(0xb1)](var_core_value_sig284F => ({
      ...var_core_value_sig284F,
      stroke: n[ox482d92(0xe6)][ox482d92(0xfe)](var_core_value_sigE43E)
    }));
  }
  ["setStrokeColor"](var_core_value_sigA937) {
    return this[ox4078f6(0xd0)](var_core_value_sigE154 => ({
      ...var_core_value_sigE154,
      color: var_core_value_sigA937,
      lineStrokeType: var_core_value_sigE154["lineStrokeType"] === e[ox4078f6(0x16d)][ox4078f6(0x14a)] ? e["ShapeLineTypeEnum"][ox4078f6(0x104)] : var_core_value_sigE154[ox4078f6(0xf0)]
    }));
  }
  ["setStrokeWidth"](var_core_value_sigCAD5) {
    return this[ox5281ef(0xd0)](var_core_value_sig4632 => ({
      ...var_core_value_sig4632,
      width: var_core_value_sigCAD5,
      lineStrokeType: var_core_value_sig4632[ox5281ef(0xf0)] === e[ox5281ef(0x16d)][ox5281ef(0x14a)] ? e[ox5281ef(0x16d)][ox5281ef(0x104)] : var_core_value_sig4632[ox5281ef(0xf0)]
    }));
  }
  ["setStrokeOpacity"](var_core_value_sigE503) {
    return this[oxd29e0d(0xd0)](var_core_value_sig12F2 => ({
      ...var_core_value_sig12F2,
      opacity: var_core_value_sigE503
    }));
  }
  ["setStrokeLineDashType"](var_core_value_sig48DD) {
    return this["_patchStroke"](var_core_value_sig2259 => ({
      ...var_core_value_sig2259,
      dashType: var_core_value_sig48DD
    }));
  }
  ["setStrokeLineJoinType"](var_core_value_sig5E6A) {
    return this[ox13e955(0xd0)](var_core_value_sig9E2F => ({
      ...var_core_value_sig9E2F,
      lineJoinType: var_core_value_sig5E6A
    }));
  }
  ["setStrokeLineCapType"](var_core_value_sigB7FC) {
    return this[ox26ad8c(0xd0)](var_core_value_sigD082 => ({
      ...var_core_value_sigD082,
      capType: var_core_value_sigB7FC
    }));
  }
  ["setStrokeLineType"](var_core_value_sig9CD9) {
    return this[ox206ea8(0xd0)](var_core_value_sigDBB7 => ({
      ...var_core_value_sigDBB7,
      lineStrokeType: var_core_value_sig9CD9
    }));
  }
  ["update"](var_core_value_sigFD0C) {
    var var_core_value_sig849B;
    let var_core_value_sig5F1A = var_core_value_sigFD0C[ox448a75(0x18b)],
      var_core_value_sigB455 = var_core_value_sig5F1A && (ox448a75(0x10d) in var_core_value_sig5F1A || ox448a75(0xd9) in var_core_value_sig5F1A) ? this[ox448a75(0x186)]() : null,
      var_core_value_sig5241 = var_core_value_sigFD0C[ox448a75(0xe8)] ?? ((var_core_value_sig849B = var_core_value_sigFD0C["shapeData"]) == null ? void 0x0 : var_core_value_sig849B["shapeType"]) ?? var_core_value_sigB455,
      var_core_value_sigC6E5 = f(var_core_value_sigFD0C, var_core_value_sig5241 !== null && (0x0, e["isConnectorShape"])(var_core_value_sig5241));
    return var_core_value_sigC6E5 ? (console[ox448a75(0x108)](ox448a75(0xc5) + var_core_value_sigC6E5), this) : (this[ox448a75(0xae)](ox448a75(0x10c), var_core_value_sigD0A8 => var_core_value_sigD0A8[ox448a75(0x19f)](this[ox448a75(0xec)], var_core_value_sigFD0C)), this);
  }
  ["remove"]() {
    return this[ox3424dc(0xae)](ox3424dc(0xe7), var_core_value_sigF4B9 => var_core_value_sigF4B9["removeShape"](this[ox3424dc(0xec)]));
  }
  ["bringToFront"]() {
    return this[ox3393cf(0xae)](ox3393cf(0xc2), var_core_value_sig5CEE => var_core_value_sig5CEE["bringToFront"](this[ox3393cf(0xec)])), this;
  }
  ["bringForward"]() {
    return this[ox5ca483(0xae)](ox5ca483(0x142), var_core_value_sigE92A => var_core_value_sigE92A[ox5ca483(0x1a7)](this[ox5ca483(0xec)])), this;
  }
  ["sendBackward"]() {
    return this["_mutate"](ox47bf4c(0x159), var_core_value_sig362B => var_core_value_sig362B[ox47bf4c(0xe5)](this[ox47bf4c(0xec)])), this;
  }
  ["sendToBack"]() {
    return this[ox3c2e0a(0xae)](ox3c2e0a(0x184), var_core_value_sig5CA5 => var_core_value_sig5CA5["sendToBack"](this[ox3c2e0a(0xec)])), this;
  }
  ["setZOrder"](var_core_value_sigCEFB) {
    return this[ox102a08(0xae)]("set\x20z-order", var_core_value_sigE90F => var_core_value_sigE90F[ox102a08(0xd1)](this[ox102a08(0xec)], var_core_value_sigCEFB)), this;
  }
  ["_getAdapter"]() {
    return this["_shapeHostAdapterRegistry"][ox3e22c4(0x1b7)](this[ox3e22c4(0xec)][ox3e22c4(0x1b5)]);
  }
  ["_patchShapeData"](var_core_value_sig1537, var_core_value_sigE4C6) {
    let var_core_value_sig4313 = this["getShapeData"]();
    return var_core_value_sig4313 ? this[ox5b3798(0x10c)]({
      shapeType: var_core_value_sigE4C6,
      shapeData: var_core_value_sig1537(var_core_value_sig4313)
    }) : this;
  }
  ["_updateSmartArt"](...var_core_value_sigFC87) {
    let var_core_value_sig156F = this[ox17189f(0x166)]();
    return !var_core_value_sig156F || !this["isSmartArt"]() ? (console[ox17189f(0x108)](ox17189f(0x137) + this[ox17189f(0xec)][ox17189f(0x1ad)] + "\x22\x20is\x20not\x20SmartArt."), this) : (var_core_value_sig156F[ox17189f(0x19f)](this[ox17189f(0xec)], {
      smartArtOperations: var_core_value_sigFC87
    }) || console["warn"](ox17189f(0xcb) + this[ox17189f(0xec)]["shapeId"] + "\x22."), this);
  }
  ["_patchStroke"](var_core_value_sigDD51) {
    return this[ox29145a(0xb1)](var_core_value_sigEFD4 => ({
      ...var_core_value_sigEFD4,
      stroke: var_core_value_sigDD51(var_core_value_sigEFD4[ox29145a(0x13a)] ?? {})
    }));
  }
  ["_getSnapshot"]() {
    let var_core_value_sigF057 = this["_getAdapter"]();
    if (!var_core_value_sigF057) return null;
    try {
      return var_core_value_sigF057[ox5e89ef(0xd6)](this[ox5e89ef(0xec)]) || (console[ox5e89ef(0x108)](ox5e89ef(0x137) + this[ox5e89ef(0xec)]["shapeId"] + ox5e89ef(0x150)), null);
    } catch (var_core_value_sig861B) {
      return console["warn"]("[Shape\x20Facade]:\x20Failed\x20to\x20read\x20Shape\x20\x22" + this["_shapeRef"][ox5e89ef(0x1ad)] + "\x22.", var_core_value_sig861B), null;
    }
  }
  ["_getGeometryModel"]() {
    let var_core_value_sig72F6 = this[ox5132e6(0xcf)]();
    if (!var_core_value_sig72F6) return null;
    try {
      let var_core_value_sig5237 = new e[ox5132e6(0x167)](var_core_value_sig72F6[ox5132e6(0xe8)], var_core_value_sig72F6[ox5132e6(0x1ad)], n[ox5132e6(0xe6)][ox5132e6(0xfe)](var_core_value_sig72F6[ox5132e6(0x18b)]));
      return var_core_value_sig5237[ox5132e6(0xa8)]({
        width: var_core_value_sig72F6[ox5132e6(0xcd)]["width"],
        height: var_core_value_sig72F6[ox5132e6(0xcd)]["height"]
      }), var_core_value_sig5237;
    } catch (var_core_value_sigBB00) {
      return console[ox5132e6(0x108)](ox5132e6(0xb4) + this[ox5132e6(0xec)][ox5132e6(0x1ad)] + "\x22.", var_core_value_sigBB00), null;
    }
  }
  ["_mutate"](var_core_value_sig9FBA, var_core_value_sigFE01) {
    let var_core_value_sigA2CE = this[ox4ebfdf(0x166)]();
    if (!var_core_value_sigA2CE) return !0x1;
    try {
      let var_core_value_sig7E54 = var_core_value_sigFE01(var_core_value_sigA2CE);
      return var_core_value_sig7E54 || console["warn"](ox4ebfdf(0x18d) + var_core_value_sig9FBA + ox4ebfdf(0x16b) + this[ox4ebfdf(0xec)]["shapeId"] + "\x22."), var_core_value_sig7E54;
    } catch (var_core_value_sig9A8D) {
      return console["warn"](ox4ebfdf(0x18d) + var_core_value_sig9FBA + ox4ebfdf(0x16b) + this[ox4ebfdf(0xec)][ox4ebfdf(0x1ad)] + "\x22.", var_core_value_sig9A8D), !0x1;
    }
  }
};
d = l = c([s(0x2, e["IShapeHostAdapterRegistry"]), s(0x3, n["ICommandService"])], d);
function f(var_core_value_sig2E54, var_core_value_sig7658 = !0x1) {
  for (let var_core_value_sig1975 of [ox2fa970(0xda), "selectable"]) {
    let var_core_value_sigC259 = var_core_value_sig2E54[var_core_value_sig1975];
    if (var_core_value_sigC259 !== void 0x0 && typeof var_core_value_sigC259 != "boolean") return ox2fa970(0xe2) + var_core_value_sig1975 + ox2fa970(0x17a);
  }
  let var_core_value_sigDCF5 = var_core_value_sig2E54["transform"];
  if (var_core_value_sigDCF5) {
    for (let var_core_value_sig9C9F of [ox2fa970(0xb6), "top", ox2fa970(0x177), ox2fa970(0xf3), ox2fa970(0xd5)]) {
      let var_core_value_sig2AD0 = var_core_value_sigDCF5[var_core_value_sig9C9F];
      if (var_core_value_sig2AD0 !== void 0x0 && !Number[ox2fa970(0x119)](var_core_value_sig2AD0)) return ox2fa970(0xe4) + var_core_value_sig9C9F + ox2fa970(0x13c);
    }
    if (var_core_value_sigDCF5[ox2fa970(0x177)] !== void 0x0 && var_core_value_sigDCF5[ox2fa970(0x177)] <= 0x0) return ox2fa970(0x143);
    if (var_core_value_sigDCF5[ox2fa970(0xf3)] !== void 0x0 && var_core_value_sigDCF5[ox2fa970(0xf3)] <= 0x0) return "Shape\x20height\x20must\x20be\x20greater\x20than\x20zero.";
    for (let var_core_value_sigFDEA of [ox2fa970(0xd7), ox2fa970(0x197)]) {
      let var_core_value_sig3EEE = var_core_value_sigDCF5[var_core_value_sigFDEA];
      if (var_core_value_sig3EEE !== void 0x0 && typeof var_core_value_sig3EEE != "boolean") return ox2fa970(0xe4) + var_core_value_sigFDEA + "\x22\x20must\x20be\x20boolean.";
    }
  }
  let var_core_value_sigC786 = var_core_value_sig2E54[ox2fa970(0x18b)];
  return !var_core_value_sig7658 && var_core_value_sigC786 && (ox2fa970(0x10d) in var_core_value_sigC786 || ox2fa970(0xd9) in var_core_value_sigC786) ? ox2fa970(0x149) : null;
}
var p = class extends d {
  ["isConnectorShape"]() {
    return !0x0;
  }
  ["getStartEndpoint"]() {
    let var_core_value_sig6EA1 = this[ox4d43b1(0x116)]();
    return var_core_value_sig6EA1 ? n[ox4d43b1(0xe6)]["deepClone"](var_core_value_sig6EA1[ox4d43b1(0x156)]) : null;
  }
  ["getEndEndpoint"]() {
    let var_core_value_sig029F = this[ox5c9a4a(0x116)]();
    return var_core_value_sig029F ? n[ox5c9a4a(0xe6)][ox5c9a4a(0xfe)](var_core_value_sig029F["end"]) : null;
  }
  ["getRoutePoints"]() {
    let var_core_value_sig3767 = this["_getConnectorSnapshot"]();
    return var_core_value_sig3767 ? n["Tools"]["deepClone"](var_core_value_sig3767[ox57ac37(0x158)]) : null;
  }
  ["getStartArrow"]() {
    let var_core_value_sig670B = this["_getConnectorSnapshot"]();
    return var_core_value_sig670B ? n["Tools"][ox4965db(0xfe)](var_core_value_sig670B[ox4965db(0x193)]) : null;
  }
  ["getEndArrow"]() {
    let var_core_value_sig6912 = this[ox12340b(0x116)]();
    return var_core_value_sig6912 ? n[ox12340b(0xe6)][ox12340b(0xfe)](var_core_value_sig6912["endArrow"]) : null;
  }
  ["setShapeType"](var_core_value_sigE235) {
    return (0x0, e["isConnectorShape"])(var_core_value_sigE235) ? super[ox1d79a2(0xd8)](var_core_value_sigE235) : (console[ox1d79a2(0x108)]("[Shape\x20Facade]:\x20Connector\x20Shape\x20\x22" + this[ox1d79a2(0xec)][ox1d79a2(0x1ad)] + ox1d79a2(0x10f)), this);
  }
  ["setShapeData"](var_core_value_sig7664) {
    return var_core_value_sig7664["shapeType"] !== void 0x0 && !(0x0, e[ox1f33cb(0x196)])(var_core_value_sig7664[ox1f33cb(0xe8)]) ? (console[ox1f33cb(0x108)]("[Shape\x20Facade]:\x20Connector\x20Shape\x20\x22" + this[ox1f33cb(0xec)]["shapeId"] + "\x22\x20requires\x20Connector\x20Shape\x20data."), this) : super[ox1f33cb(0xc7)](var_core_value_sig7664);
  }
  ["bindStart"](var_core_value_sig2281, var_core_value_sig5E86) {
    return this[ox14f6ba(0xd2)](ox14f6ba(0x156), var_core_value_sig2281, var_core_value_sig5E86), this;
  }
  ["bindEnd"](var_core_value_sig6998, var_core_value_sigF639) {
    return this[oxa648ed(0xd2)](oxa648ed(0x19e), var_core_value_sig6998, var_core_value_sigF639), this;
  }
  ["unbindStart"]() {
    return this[ox16193e(0x100)]("unbind\x20start", var_core_value_sig86D0 => var_core_value_sig86D0["unbindStart"](this[ox16193e(0xec)])), this;
  }
  ["unbindEnd"]() {
    return this[ox3e311d(0x100)](ox3e311d(0xc9), var_core_value_sig4CD2 => var_core_value_sig4CD2[ox3e311d(0xdc)](this[ox3e311d(0xec)])), this;
  }
  ["setStartPoint"](var_core_value_sigEAE5) {
    return m(var_core_value_sigEAE5, this[ox308da4(0xec)][ox308da4(0x1ad)]) && this["_mutateConnector"]("set\x20start\x20point", var_core_value_sig48CA => var_core_value_sig48CA[ox308da4(0xa3)](this[ox308da4(0xec)], var_core_value_sigEAE5)), this;
  }
  ["setEndPoint"](var_core_value_sigE94C) {
    return m(var_core_value_sigE94C, this[ox56fe0c(0xec)]["shapeId"]) && this["_mutateConnector"](ox56fe0c(0xa6), var_core_value_sig50AF => var_core_value_sig50AF[ox56fe0c(0x152)](this[ox56fe0c(0xec)], var_core_value_sigE94C)), this;
  }
  ["setRoutePoints"](var_core_value_sig6D47) {
    return var_core_value_sig6D47[ox125257(0xc6)](var_core_value_sigA942 => m(var_core_value_sigA942, this[ox125257(0xec)][ox125257(0x1ad)])) && this[ox125257(0x100)](ox125257(0xa5), var_core_value_sigA621 => var_core_value_sigA621[ox125257(0x19c)](this["_shapeRef"], var_core_value_sig6D47)), this;
  }
  ["setStartArrow"](var_core_value_sigCB82, var_core_value_sigCF4E) {
    return this[ox52d8a0(0x100)]("set\x20start\x20arrow", var_core_value_sigBBFF => var_core_value_sigBBFF[ox52d8a0(0xb0)](this[ox52d8a0(0xec)], var_core_value_sigCB82, var_core_value_sigCF4E)), this;
  }
  ["setEndArrow"](var_core_value_sig6CAD, var_core_value_sig8CF5) {
    return this[ox275fc7(0x100)]("set\x20end\x20arrow", var_core_value_sig8889 => var_core_value_sig8889["setEndArrow"](this[ox275fc7(0xec)], var_core_value_sig6CAD, var_core_value_sig8CF5)), this;
  }
  ["_getConnectorAdapter"]() {
    return this[ox16eaca(0x11b)][ox16eaca(0x1b7)](e["IConnectorShapeHostAdapter"]);
  }
  ["_getConnectorSnapshot"]() {
    let var_core_value_sigDDD7 = this[ox2e8e9c(0x1a4)]();
    if (!var_core_value_sigDDD7) return null;
    try {
      return var_core_value_sigDDD7[ox2e8e9c(0x11c)](this[ox2e8e9c(0xec)]) || (console[ox2e8e9c(0x108)](ox2e8e9c(0x164) + this[ox2e8e9c(0xec)][ox2e8e9c(0x1ad)] + ox2e8e9c(0x150)), null);
    } catch (var_core_value_sig32F8) {
      return console[ox2e8e9c(0x108)]("[Shape\x20Facade]:\x20Failed\x20to\x20read\x20Connector\x20Shape\x20\x22" + this["_shapeRef"]["shapeId"] + "\x22.", var_core_value_sig32F8), null;
    }
  }
  ["_bind"](var_core_value_sigB2CE, var_core_value_sig443C, var_core_value_sig39B1) {
    if (!var_core_value_sig443C || !Number[ox25cab0(0x129)](var_core_value_sig39B1) || var_core_value_sig39B1 < 0x0) return console[ox25cab0(0x108)](ox25cab0(0x165) + this[ox25cab0(0xec)][ox25cab0(0x1ad)] + ox25cab0(0x105)), !0x1;
    let var_core_value_sig210D = {
      shapeId: var_core_value_sig443C,
      cxnIndex: var_core_value_sig39B1
    };
    return this[ox25cab0(0x100)](ox25cab0(0x171) + var_core_value_sigB2CE, var_core_value_sig5B67 => var_core_value_sigB2CE === ox25cab0(0x156) ? var_core_value_sig5B67[ox25cab0(0x163)](this["_shapeRef"], var_core_value_sig210D) : var_core_value_sig5B67["bindEnd"](this[ox25cab0(0xec)], var_core_value_sig210D));
  }
  ["_mutateConnector"](var_core_value_sigB4B4, var_core_value_sigD407) {
    let var_core_value_sig63F3 = this["_getConnectorAdapter"]();
    if (!var_core_value_sig63F3) return !0x1;
    try {
      let var_core_value_sig1758 = var_core_value_sigD407(var_core_value_sig63F3);
      return var_core_value_sig1758 || console[ox33728a(0x108)](ox33728a(0x18d) + var_core_value_sigB4B4 + ox33728a(0x157) + this[ox33728a(0xec)][ox33728a(0x1ad)] + "\x22."), var_core_value_sig1758;
    } catch (var_core_value_sig4805) {
      return console[ox33728a(0x108)](ox33728a(0x18d) + var_core_value_sigB4B4 + "\x20Connector\x20Shape\x20\x22" + this[ox33728a(0xec)]["shapeId"] + "\x22.", var_core_value_sig4805), !0x1;
    }
  }
};
function m(var_core_value_sigC0D9, var_core_value_sigF0511) {
  return !Number[ox39cddb(0x119)](var_core_value_sigC0D9["x"]) || !Number[ox39cddb(0x119)](var_core_value_sigC0D9["y"]) ? (console[ox39cddb(0x108)]("[Shape\x20Facade]:\x20Connector\x20\x22" + var_core_value_sigF0511 + ox39cddb(0x131)), !0x1) : !0x0;
}
exports["FConnectorShape"] = p, Object["defineProperty"](exports, "FShape", {
  enumerable: !0x0,
  get: function () {
    return d;
  }
}), exports["FShapeText"] = o;
