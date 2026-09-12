Object["defineProperty"](exports, Symbol["toStringTag"], { value: "Module" });
let e = require("@univerjs-pro/engine-shape"),
  t = require("@univerjs/core/facade"),
  n = require("@univerjs/core");
var r = class extends t["FEnum"] {
  get ["ShapeTypeEnum"]() {
    return e["ShapeTypeEnum"];
  }
  get ["ShapeFillEnum"]() {
    return e[_0x453e1c(0x1ac)];
  }
  get ["ShapeGradientTypeEnum"]() {
    return e[_0x3c8776(0x198)];
  }
  get ["ShapeImageFillModeEnum"]() {
    return e[_0x2c4373(0xe0)];
  }
  get ["ShapeImageSourceTypeEnum"]() {
    return e[_0x1828d0(0x155)];
  }
  get ["ShapeLineTypeEnum"]() {
    return e[_0x1b33c0(0x16d)];
  }
  get ["ShapeLineDashEnum"]() {
    return e["ShapeLineDashEnum"];
  }
  get ["ShapeLineCapEnum"]() {
    return e["ShapeLineCapEnum"];
  }
  get ["ShapeLineJoinEnum"]() {
    return e[_0x506098(0x130)];
  }
  get ["ShapeOperatorEnum"]() {
    return e[_0x29c2d7(0x11f)];
  }
  get ["ShapeArrowTypeEnum"]() {
    return e[_0x52081e(0xe9)];
  }
  get ["ShapeArrowSizeEnum"]() {
    return e[_0x230b4e(0xe3)];
  }
  get ["ShapeTextAutoFitType"]() {
    return e[_0x3e557f(0xc0)];
  }
  get ["ShapeTextDirection"]() {
    return e[_0x2008c4(0x180)];
  }
  get ["ShapeTextWrapType"]() {
    return e[_0x52c0b8(0x191)];
  }
};
t["FEnum"]["extend"](r);
function i(_0x18204c) {
  switch (_0x18204c) {
    case e[_0x1b9b53(0x198)][_0x1b9b53(0x107)]:
      return "radial";
    case e[_0x1b9b53(0x198)]["Angular"]:
      return _0x1b9b53(0x121);
    case e[_0x1b9b53(0x198)]["Diamond"]:
      return _0x1b9b53(0xab);
    case e["ShapeGradientTypeEnum"]["Linear"]:
    default:
      return _0x1b9b53(0x16f);
  }
}
function a(_0xf8334) {
  return _0xf8334 === e["ImageFillModeEnum"][_0x5594b1(0x195)]
    ? "tile"
    : _0x5594b1(0xad);
}
var o = class {
  constructor(_0x41f29a, _0x40c5c9) {
    ((this[_0x56d80e(0xec)] = _0x41f29a), (this[_0x56d80e(0x11b)] = _0x40c5c9));
  }
  ["getRichText"]() {
    var _0x5b13ec;
    return (0x0, e[_0x4b1fab(0x115)])(
      (_0x5b13ec = this[_0x4b1fab(0x118)]()) == null
        ? void 0x0
        : _0x5b13ec[_0x4b1fab(0xe1)],
    );
  }
  ["getPlainText"]() {
    var _0x5580d0;
    return (
      ((_0x5580d0 = this[_0xaacb84(0x1a8)]()) == null
        ? void 0x0
        : _0x5580d0[_0xaacb84(0xaa)]()) ?? null
    );
  }
  ["setRichText"](_0x2e9c8c) {
    return (
      this["_updateShapeData"]((_0x34e75f) => ({
        ..._0x34e75f,
        shapeText: (0x0, e[_0x231e0a(0x181)])(
          _0x34e75f[_0x231e0a(0xe1)],
          _0x2e9c8c,
        ),
      })),
      this
    );
  }
  ["setText"](_0x191945) {
    return (
      this["_updateShapeData"]((_0x1a96dd) => ({
        ..._0x1a96dd,
        shapeText: (0x0, e[_0x60006f(0x120)])(
          _0x1a96dd[_0x60006f(0xe1)],
          _0x191945,
        ),
      })),
      this
    );
  }
  ["setTextStyle"](_0x163d5e) {
    return (
      this[_0x140f14(0xef)]((_0x5021ca) => ({
        ..._0x5021ca,
        shapeText: (0x0, e[_0x140f14(0x13e)])(
          _0x5021ca[_0x140f14(0xe1)],
          _0x163d5e,
        ),
      })),
      this
    );
  }
  ["setColor"](_0x221e40, _0x313d3d) {
    return this[_0x409e14(0x151)]({
      cl: { rgb: _0x221e40 },
      textFill: {
        type: _0x409e14(0x1b1),
        color: _0x221e40,
        opacity: _0x313d3d,
      },
    });
  }
  ["setNoneFill"]() {
    return this[_0x144600(0x151)]({
      cl: { rgb: _0x144600(0x124) },
      textFill: { type: _0x144600(0x16a) },
    });
  }
  ["setGradientFill"](_0xecde96, _0x2fe770, _0x51fc27) {
    return _0x2fe770[_0x538a0(0xee)] < 0x2
      ? (console[_0x538a0(0x108)](_0x538a0(0x15d)), this)
      : this[_0x538a0(0x151)]({
          cl: { rgb: _0x2fe770[0x0][_0x538a0(0xfd)] },
          textFill: {
            type: _0x538a0(0x148),
            gradient: {
              type: i(_0xecde96),
              angle: _0x51fc27,
              stops: _0x2fe770["map"](
                ({
                  position: _0x30f1ed,
                  color: _0x10bff6,
                  opacity: _0x292084,
                }) => ({
                  offset: _0x30f1ed,
                  color: _0x10bff6,
                  opacity: _0x292084,
                }),
              ),
            },
          },
        });
  }
  ["setImageFill"](
    _0x4c4732,
    _0x5031cc = e["ImageSourceTypeEnum"]["URL"],
    _0xafeb6 = {},
  ) {
    return this[_0xad352f(0x151)]({
      textFill: {
        type: _0xad352f(0xf9),
        picture: {
          source: _0x4c4732,
          sourceType: _0x5031cc,
          opacity: _0xafeb6[_0xad352f(0x15e)],
          mode: a(_0xafeb6[_0xad352f(0xd4)]),
          scaleX: _0xafeb6[_0xad352f(0x113)],
          scaleY: _0xafeb6[_0xad352f(0x13d)],
          offsetX: _0xafeb6[_0xad352f(0x188)],
          offsetY: _0xafeb6[_0xad352f(0x18c)],
        },
      },
    });
  }
  ["setFontSize"](_0x148d95) {
    return this["setTextStyle"]({ fs: _0x148d95 });
  }
  ["setFontFamily"](_0x2f9653) {
    return this[_0x56b734(0x151)]({ ff: _0x2f9653 });
  }
  ["setBold"](_0x531035) {
    return this[_0x1ee857(0x151)]({
      bl: _0x531035
        ? n[_0x1ee857(0x15c)]["TRUE"]
        : n[_0x1ee857(0x15c)][_0x1ee857(0x10b)],
    });
  }
  ["setItalic"](_0xae51a3) {
    return this[_0x27cb8d(0x151)]({
      it: _0xae51a3
        ? n[_0x27cb8d(0x15c)][_0x27cb8d(0x179)]
        : n[_0x27cb8d(0x15c)]["FALSE"],
    });
  }
  ["setUnderline"](_0x3fe5cf) {
    return this[_0xc03632(0x151)]({
      ul: {
        s: _0x3fe5cf
          ? n[_0xc03632(0x15c)][_0xc03632(0x179)]
          : n[_0xc03632(0x15c)][_0xc03632(0x10b)],
      },
    });
  }
  ["setStrikethrough"](_0x15a232) {
    return this["setTextStyle"]({
      st: {
        s: _0x15a232
          ? n[_0xae1933(0x15c)][_0xae1933(0x179)]
          : n[_0xae1933(0x15c)][_0xae1933(0x10b)],
      },
    });
  }
  ["setHorizontalAlign"](_0x3120f7) {
    return (
      this[_0x4802d0(0xef)]((_0x400f25) =>
        (0x0, e[_0x4802d0(0x192)])(_0x400f25, { horizontalAlign: _0x3120f7 }),
      ),
      this
    );
  }
  ["setVerticalAlign"](_0xc25b08) {
    return (
      this[_0x5b181e(0xef)]((_0x15a5fb) =>
        (0x0, e["applyShapeTextAlignment"])(_0x15a5fb, {
          verticalAlign: _0xc25b08,
        }),
      ),
      this
    );
  }
  ["getTextBoxOptions"]() {
    let _0x5015ef = this[_0x3e60cf(0x118)]();
    return _0x5015ef ? (0x0, e[_0x3e60cf(0xb7)])(_0x5015ef) : null;
  }
  ["setTextBoxOptions"](_0x318656) {
    return (
      this[_0x18127b(0xef)]((_0x2b2f80) =>
        (0x0, e["applyShapeTextBoxOptions"])(_0x2b2f80, _0x318656),
      ),
      this
    );
  }
  ["_getAdapter"]() {
    return this[_0x2c530e(0x11b)]
      [_0x2c530e(0x1b7)](e[_0x2c530e(0xb9)])
      ["get"](this[_0x2c530e(0xec)][_0x2c530e(0x1b5)]);
  }
  ["_getShapeData"]() {
    let _0x37a322 = this["_getAdapter"]();
    if (!_0x37a322) return null;
    try {
      var _0xe50c38;
      return (
        ((_0xe50c38 = _0x37a322[_0x5a1fcd(0xd6)](this[_0x5a1fcd(0xec)])) == null
          ? void 0x0
          : _0xe50c38[_0x5a1fcd(0x18b)]) ||
        (console[_0x5a1fcd(0x108)](
          _0x5a1fcd(0x178) +
            this[_0x5a1fcd(0xec)][_0x5a1fcd(0x1ad)] +
            _0x5a1fcd(0x150),
        ),
        null)
      );
    } catch (_0x46732f) {
      return (
        console[_0x5a1fcd(0x108)](
          _0x5a1fcd(0x1a6) +
            this[_0x5a1fcd(0xec)][_0x5a1fcd(0x1ad)] +
            _0x5a1fcd(0x174),
          _0x46732f,
        ),
        null
      );
    }
  }
  ["_updateShapeData"](_0x2f9b31) {
    let _0x5e8a30 = this["_getAdapter"]();
    if (!_0x5e8a30) return !0x1;
    try {
      var _0x4b02b3;
      let _0x2fb481 =
        (_0x4b02b3 = _0x5e8a30[_0x739334(0xd6)](this[_0x739334(0xec)])) == null
          ? void 0x0
          : _0x4b02b3[_0x739334(0x18b)];
      if (!_0x2fb481)
        return (
          console[_0x739334(0x108)](
            _0x739334(0x178) +
              this[_0x739334(0xec)][_0x739334(0x1ad)] +
              "\x22\x20was\x20not\x20found.",
          ),
          !0x1
        );
      let _0x42798e = _0x5e8a30[_0x739334(0x19f)](this[_0x739334(0xec)], {
        shapeData: _0x2f9b31(_0x2fb481),
      });
      return (
        _0x42798e ||
          console[_0x739334(0x108)](
            _0x739334(0x1a0) +
              this[_0x739334(0xec)][_0x739334(0x1ad)] +
              _0x739334(0x174),
          ),
        _0x42798e
      );
    } catch (_0x24457d) {
      return (
        console["warn"](
          _0x739334(0x1a0) +
            this[_0x739334(0xec)]["shapeId"] +
            _0x739334(0x174),
          _0x24457d,
        ),
        !0x1
      );
    }
  }
};
function s(_0xc9886a, _0x475abd) {
  return function (_0x223563, _0x254137) {
    _0x475abd(_0x223563, _0x254137, _0xc9886a);
  };
}
function c(_0x22c404, _0x44c718, _0x5f4f91, _0x4c20f4) {
  var _0x1631de = arguments[_0x1ae3a(0xee)],
    _0x3892e8 =
      _0x1631de < 0x3
        ? _0x44c718
        : _0x4c20f4 === null
          ? (_0x4c20f4 = Object[_0x1ae3a(0xf8)](_0x44c718, _0x5f4f91))
          : _0x4c20f4,
    _0x4c017f;
  if (
    typeof Reflect == _0x1ae3a(0x12b) &&
    typeof Reflect["decorate"] == _0x1ae3a(0x1a9)
  )
    _0x3892e8 = Reflect[_0x1ae3a(0x145)](
      _0x22c404,
      _0x44c718,
      _0x5f4f91,
      _0x4c20f4,
    );
  else {
    for (
      var _0x1f7a30 = _0x22c404[_0x1ae3a(0xee)] - 0x1;
      _0x1f7a30 >= 0x0;
      _0x1f7a30--
    )
      (_0x4c017f = _0x22c404[_0x1f7a30]) &&
        (_0x3892e8 =
          (_0x1631de < 0x3
            ? _0x4c017f(_0x3892e8)
            : _0x1631de > 0x3
              ? _0x4c017f(_0x44c718, _0x5f4f91, _0x3892e8)
              : _0x4c017f(_0x44c718, _0x5f4f91)) || _0x3892e8);
  }
  return (
    _0x1631de > 0x3 &&
      _0x3892e8 &&
      Object[_0x1ae3a(0xed)](_0x44c718, _0x5f4f91, _0x3892e8),
    _0x3892e8
  );
}
var l;
function u(_0x519eb3) {
  let _0x4f255f = n[_0x5976a9(0xe6)][_0x5976a9(0xfe)](_0x519eb3);
  return (
    (_0x4f255f[_0x5976a9(0x134)] &&= _0x4f255f["pathLst"][_0x5976a9(0x123)](
      (_0x34fc2a) => {
        const _0x5067c5 = _0x5976a9;
        var _0x3a0629;
        if (
          (_0x3a0629 = _0x34fc2a[_0x5067c5(0x103)]) != null &&
          _0x3a0629[_0x5067c5(0xee)]
        ) {
          let { data: _0x362ba7, ..._0x3be4af } = _0x34fc2a;
          return _0x3be4af;
        }
        if (_0x34fc2a["data"] === void 0x0) return _0x34fc2a;
        let _0x133e03 = (0x0, e[_0x5067c5(0xa4)])(_0x34fc2a[_0x5067c5(0x190)]),
          { data: _0x360998, ..._0x356326 } = _0x34fc2a;
        return { ..._0x356326, dataArray: _0x133e03 };
      },
    )),
    _0x4f255f
  );
}
let d = (l = class extends t["FBase"] {
  constructor(_0x136a4b, _0x3264f8, _0x3bcba7, _0x1682e1) {
    (super(),
      (this[_0x35c835(0xec)] = _0x136a4b),
      (this["_injector"] = _0x3264f8),
      (this[_0x35c835(0x1a3)] = _0x3bcba7),
      (this[_0x35c835(0x160)] = _0x1682e1));
  }
  ["isConnectorShape"]() {
    return !0x1;
  }
  ["getId"]() {
    return this[_0x27bbfe(0xec)]["shapeId"];
  }
  ["getName"]() {
    var _0x21a261;
    return (_0x21a261 = this[_0x586978(0xcf)]()) == null
      ? void 0x0
      : _0x21a261[_0x586978(0x14e)];
  }
  ["setName"](_0x281cf6) {
    return this[_0xab0613(0x10c)]({ name: _0x281cf6 });
  }
  ["getDescription"]() {
    var _0xea4794;
    return (_0xea4794 = this[_0x1dbb8f(0xcf)]()) == null
      ? void 0x0
      : _0xea4794[_0x1dbb8f(0x139)];
  }
  ["setDescription"](_0x3b94a5) {
    return this[_0x3db337(0x10c)]({ description: _0x3b94a5 });
  }
  ["getHostType"]() {
    return this[_0x57b343(0xec)]["hostType"];
  }
  ["getShapeType"]() {
    var _0x4243fd;
    return (
      ((_0x4243fd = this["_getSnapshot"]()) == null
        ? void 0x0
        : _0x4243fd[_0x140cc9(0xe8)]) ?? null
    );
  }
  ["getShapeData"]() {
    let _0x519d0a = this[_0x102ba4(0xcf)]();
    return _0x519d0a
      ? n[_0x102ba4(0xe6)][_0x102ba4(0xfe)](_0x519d0a[_0x102ba4(0x18b)])
      : null;
  }
  ["isSmartArt"]() {
    var _0x46a421;
    let _0x3e5748 =
      (_0x46a421 = this["_getSnapshot"]()) == null
        ? void 0x0
        : _0x46a421["shapeData"];
    return !!_0x3e5748 && (0x0, e[_0x2e2b2a(0x112)])(_0x3e5748);
  }
  ["getSmartArtData"]() {
    var _0x29649f;
    let _0x13933e =
      (_0x29649f = this[_0x598b55(0xcf)]()) == null
        ? void 0x0
        : _0x29649f[_0x598b55(0x18b)];
    return _0x13933e && (0x0, e["isSmartArtShapeData"])(_0x13933e)
      ? n[_0x598b55(0xe6)][_0x598b55(0xfe)](_0x13933e["smartArt"])
      : null;
  }
  ["setSmartArtData"](_0x4fa1cf) {
    return this[_0x13f4a1(0xf1)]({
      type: e["SmartArtOperationTypeEnum"][_0x13f4a1(0x175)],
      data: n[_0x13f4a1(0xe6)]["deepClone"](_0x4fa1cf),
    });
  }
  ["insertSmartArtNode"](_0x5b1d55) {
    return this[_0x3928b6(0xf1)]({
      type: e[_0x3928b6(0x176)][_0x3928b6(0x16e)],
      nodeId: _0x5b1d55["node"]["id"],
      node: n[_0x3928b6(0xe6)]["deepClone"](_0x5b1d55[_0x3928b6(0xf2)]),
      targetNodeId: _0x5b1d55[_0x3928b6(0xc3)],
      position: _0x5b1d55[_0x3928b6(0xcc)],
    });
  }
  ["deleteSmartArtNode"](_0x17de19) {
    return this["_updateSmartArt"]({
      type: e[_0xa8508d(0x176)]["DeleteNode"],
      nodeId: _0x17de19,
    });
  }
  ["moveSmartArtNode"](_0x50c7d5) {
    return this[_0x2841f0(0xf1)]({
      type: e[_0x2841f0(0x176)][_0x2841f0(0x15f)],
      ..._0x50c7d5,
    });
  }
  ["promoteSmartArtNode"](_0x38cc96) {
    return this[_0x6b7e9b(0xf1)]({
      type: e[_0x6b7e9b(0x176)][_0x6b7e9b(0x162)],
      nodeId: _0x38cc96,
    });
  }
  ["demoteSmartArtNode"](_0x25416e) {
    return this["_updateSmartArt"]({
      type: e[_0x54a0ab(0x176)]["DemoteNode"],
      nodeId: _0x25416e,
    });
  }
  ["updateSmartArtNode"](_0x5c1bf6, _0x197e17) {
    return this[_0x4f7a14(0xf1)]({
      type: e[_0x4f7a14(0x176)][_0x4f7a14(0x168)],
      nodeId: _0x5c1bf6,
      update: n[_0x4f7a14(0xe6)][_0x4f7a14(0xfe)](_0x197e17),
    });
  }
  ["setSmartArtDirection"](_0x2576eb) {
    return this[_0xeac4b7(0xf1)]({
      type: e[_0xeac4b7(0x176)][_0xeac4b7(0x11a)],
      direction: _0x2576eb,
    });
  }
  ["setSmartArtLayout"](_0x37fbe7, _0x4c1a7a) {
    return this[_0x536fbc(0xf1)]({
      type: e["SmartArtOperationTypeEnum"][_0x536fbc(0x182)],
      layoutId: _0x37fbe7,
      category: _0x4c1a7a,
    });
  }
  ["updateSmartArtPresentationShape"](_0x2189c1, _0x2d4284) {
    return this[_0xb0c973(0xf1)]({
      type: e[_0xb0c973(0x176)][_0xb0c973(0xba)],
      presentationShapeId: _0x2189c1,
      update: n[_0xb0c973(0xe6)][_0xb0c973(0xfe)](_0x2d4284),
    });
  }
  ["convertSmartArtToShapes"]() {
    let _0x278f4c = this[_0x419484(0x166)]();
    if (!(_0x278f4c != null && _0x278f4c[_0x419484(0x187)]))
      return (
        console[_0x419484(0x108)](
          _0x419484(0xa9) + this[_0x419484(0xec)][_0x419484(0x1ad)] + "\x22.",
        ),
        []
      );
    try {
      let _0x430dbc = _0x278f4c["convertSmartArtToShapes"](
        this[_0x419484(0xec)],
      );
      return _0x430dbc
        ? _0x430dbc[_0x419484(0x123)]((_0x28c334) =>
            this[_0x419484(0x11b)][_0x419484(0x138)](
              l,
              {
                hostType: _0x28c334[_0x419484(0x1b5)],
                unitId: _0x28c334["unitId"],
                subUnitId: _0x28c334[_0x419484(0x101)],
                shapeId: _0x28c334["shapeId"],
              },
              this["_injector"],
            ),
          )
        : (console[_0x419484(0x108)](
            "[Shape\x20Facade]:\x20Failed\x20to\x20convert\x20SmartArt\x20Shape\x20\x22" +
              this[_0x419484(0xec)][_0x419484(0x1ad)] +
              "\x22.",
          ),
          []);
    } catch (_0x476d92) {
      return (
        console[_0x419484(0x108)](
          "[Shape\x20Facade]:\x20Failed\x20to\x20convert\x20SmartArt\x20Shape\x20\x22" +
            this[_0x419484(0xec)]["shapeId"] +
            "\x22.",
          _0x476d92,
        ),
        []
      );
    }
  }
  ["getSnapshot"]() {
    let _0x2e9ba9 = this[_0x2c74d4(0xcf)]();
    return _0x2e9ba9 ? n[_0x2c74d4(0xe6)][_0x2c74d4(0xfe)](_0x2e9ba9) : null;
  }
  ["getTransform"]() {
    let _0xbf0bef = this[_0x22ed23(0xcf)]();
    return _0xbf0bef ? { ..._0xbf0bef["transform"] } : null;
  }
  ["isVisible"]() {
    var _0x5009b2;
    return (
      ((_0x5009b2 = this[_0x2968f7(0xcf)]()) == null
        ? void 0x0
        : _0x5009b2["visible"]) ?? !0x1
    );
  }
  ["setVisible"](_0x112495) {
    return this[_0x498f58(0x10c)]({ visible: _0x112495 });
  }
  ["isSelectable"]() {
    var _0x5f5227;
    return (
      ((_0x5f5227 = this[_0x9f724d(0xcf)]()) == null
        ? void 0x0
        : _0x5f5227[_0x9f724d(0x153)]) ?? !0x1
    );
  }
  ["setSelectable"](_0x275911) {
    return this[_0x13a4c2(0x10c)]({ selectable: _0x275911 });
  }
  ["getText"]() {
    return this["_injector"][_0x3cd50c(0x138)](
      o,
      this[_0x3cd50c(0xec)],
      this[_0x3cd50c(0x11b)],
    );
  }
  ["isCustomShape"]() {
    let _0x46fb75 = this[_0x369eeb(0xbd)]();
    return (
      (_0x46fb75 == null ? void 0x0 : _0x46fb75[_0x369eeb(0xfb)]) === !0x0 &&
      !!_0x46fb75[_0x369eeb(0xc8)]
    );
  }
  ["getCustomGeometry"]() {
    var _0x1e5e8f;
    return (
      ((_0x1e5e8f = this[_0x368d9c(0xbd)]()) == null
        ? void 0x0
        : _0x1e5e8f[_0x368d9c(0xc8)]) ?? null
    );
  }
  ["setShapeType"](_0x4256d1) {
    return this[_0x3ae758(0xb1)](
      (_0x3629d8) => ({ ..._0x3629d8, shapeType: _0x4256d1 }),
      _0x4256d1,
    );
  }
  ["setShapeData"](_0x43eb08) {
    let _0x15b391 = n[_0x2e975b(0xe6)]["deepClone"](_0x43eb08);
    return this[_0x2e975b(0x10c)]({
      shapeType: _0x15b391[_0x2e975b(0xe8)],
      shapeData: _0x15b391,
    });
  }
  ["setTransform"](_0x38a979) {
    return this[_0x4f77ad(0x10c)]({ transform: _0x38a979 });
  }
  ["setSize"](_0x23265e, _0x20b0c3) {
    return this[_0x16c1d2(0x146)]({ width: _0x23265e, height: _0x20b0c3 });
  }
  ["setRotation"](_0x8ed08b) {
    return this["setTransform"]({ rotation: _0x8ed08b });
  }
  ["setAbsolutePosition"](_0x331044, _0x71781) {
    return this[_0x35a306(0x146)]({ left: _0x331044, top: _0x71781 });
  }
  ["setCustomGeometry"](_0x5f2bac) {
    var _0x49861e, _0x2eb553;
    let _0x3536b7 =
      ((_0x49861e = _0x5f2bac[_0xe3bdf3(0x110)]) == null
        ? void 0x0
        : _0x49861e["findIndex"](
            ({ x: _0x2a912c, y: _0x513eb0 }) =>
              _0x2a912c === void 0x0 || _0x513eb0 === void 0x0,
          )) ?? -0x1;
    if (_0x3536b7 >= 0x0)
      return (
        console[_0xe3bdf3(0x108)](
          "[Shape\x20Facade]:\x20Custom\x20geometry\x20connection\x20site\x20" +
            _0x3536b7 +
            "\x20requires\x20both\x20\x22x\x22\x20and\x20\x22y\x22.",
        ),
        this
      );
    let _0xcbf282 = u(_0x5f2bac);
    if (
      (_0x2eb553 = _0xcbf282[_0xe3bdf3(0x110)]) != null &&
      _0x2eb553["length"]
    ) {
      let _0x473a38 = this[_0xe3bdf3(0xcf)]();
      if (!_0x473a38) return this;
      try {
        let _0x1b407a = new e[_0xe3bdf3(0x167)](
          _0x473a38[_0xe3bdf3(0xe8)],
          _0x473a38["shapeId"],
          {
            ..._0x473a38[_0xe3bdf3(0x18b)],
            isCustom: !0x0,
            customGeometry: _0xcbf282,
          },
        );
        (_0x1b407a[_0xe3bdf3(0xa8)]({
          width: _0x473a38["transform"][_0xe3bdf3(0x177)],
          height: _0x473a38[_0xe3bdf3(0xcd)]["height"],
        }),
          _0x1b407a["getConnectionSiteList"]());
      } catch {
        return (console[_0xe3bdf3(0x108)](_0xe3bdf3(0xff)), this);
      }
    }
    return this[_0xe3bdf3(0xb1)]((_0x2285af) => ({
      ..._0x2285af,
      isCustom: !0x0,
      customGeometry: _0xcbf282,
    }));
  }
  ["setCustomGeometryFromSvgPath"](_0x3373b9) {
    return this[_0x34ec0e(0xf6)]({
      rect: { l: 0x0, t: 0x0, r: "r", b: "b" },
      pathLst: [
        {
          w: _0x3373b9[_0x34ec0e(0x177)],
          h: _0x3373b9[_0x34ec0e(0xf3)],
          fill: _0x3373b9[_0x34ec0e(0x11d)],
          stroke: _0x3373b9["stroke"],
          data: _0x3373b9["pathData"],
        },
      ],
    });
  }
  ["getConnectionSites"]() {
    var _0x58f2ad;
    return (
      ((_0x58f2ad = this["_getGeometryModel"]()) == null
        ? void 0x0
        : _0x58f2ad[_0x2b2863(0x169)]()["map"]((_0x630ef1) => ({
            ..._0x630ef1,
          }))) ?? []
    );
  }
  ["getStartConnectInfo"]() {
    var _0x370bb0;
    let _0x41f40d =
      (_0x370bb0 = this[_0x214ab5(0x17d)]()) == null
        ? void 0x0
        : _0x370bb0[_0x214ab5(0x1b6)]();
    return _0x41f40d ? { ..._0x41f40d } : null;
  }
  ["getEndConnectInfo"]() {
    var _0x1d66fa;
    let _0xa93e1b =
      (_0x1d66fa = this[_0x5c732d(0x17d)]()) == null
        ? void 0x0
        : _0x1d66fa["getEndConnectInfo"]();
    return _0xa93e1b ? { ..._0xa93e1b } : null;
  }
  ["getAdjustHandles"]() {
    var _0x4b35d8;
    let _0x5192f1 = this[_0x2d764b(0x17d)](),
      _0x47c964 =
        (_0x5192f1 == null ||
        (_0x4b35d8 = _0x5192f1[_0x2d764b(0x183)]()["ahLst"]) == null
          ? void 0x0
          : _0x4b35d8[_0x2d764b(0xee)]) ?? 0x0;
    return !_0x5192f1 || _0x47c964 === 0x0
      ? []
      : Array["from"]({ length: _0x47c964 }, (_0x1c4a1a, _0x2facff) =>
          _0x5192f1[_0x2d764b(0x13b)](_0x2facff),
        )
          [_0x2d764b(0x13f)]((_0x134b3c) => _0x134b3c !== void 0x0)
          ["map"]((_0x5fd536) =>
            n[_0x2d764b(0xe6)][_0x2d764b(0xfe)](_0x5fd536),
          );
  }
  ["setAdjustValues"](_0x295a79) {
    let _0x3b764d = Object[_0x4be9d6(0x125)](_0x295a79);
    if (_0x3b764d[_0x4be9d6(0xee)] === 0x0) return this;
    let _0x2dc047 = this[_0x4be9d6(0x17d)]();
    if (!_0x2dc047) return this;
    let _0xbf0745 = new Set(_0x2dc047[_0x4be9d6(0x18e)]());
    for (let [_0x2ce7d9, _0x486802] of _0x3b764d) {
      if (!_0xbf0745[_0x4be9d6(0x17b)](_0x2ce7d9))
        return (
          console[_0x4be9d6(0x108)](
            _0x4be9d6(0x154) + _0x2ce7d9 + "\x22\x20does\x20not\x20exist.",
          ),
          this
        );
      if (!Number[_0x4be9d6(0x119)](_0x486802))
        return (
          console["warn"](_0x4be9d6(0x154) + _0x2ce7d9 + _0x4be9d6(0x13c)),
          this
        );
    }
    let _0x2f48b9 = Object[_0x4be9d6(0x1ab)](
      _0x3b764d[_0x4be9d6(0x123)](([_0x432c64, _0x402591]) => [
        _0x432c64,
        _0x2dc047[_0x4be9d6(0x170)](_0x432c64, _0x402591),
      ]),
    );
    return this[_0x4be9d6(0xb1)]((_0x131743) => ({
      ..._0x131743,
      adjustValues: { ..._0x131743[_0x4be9d6(0xde)], ..._0x2f48b9 },
    }));
  }
  ["resetAdjustValues"]() {
    let _0x250914 = this["getShapeData"]();
    return _0x250914 != null && _0x250914[_0x123cd(0xde)]
      ? (delete _0x250914[_0x123cd(0xde)],
        this[_0x123cd(0x10c)]({ shapeData: _0x250914 }))
      : this;
  }
  ["setSolidFill"](_0x4dc5ce, _0x46c3e6) {
    return this[_0xa129f8(0xb1)]((_0x5499e3) => ({
      ..._0x5499e3,
      fill: {
        fillType: e["ShapeFillEnum"][_0xa129f8(0x1b0)],
        color: _0x4dc5ce,
        opacity: _0x46c3e6,
      },
    }));
  }
  ["setGradientFill"](_0x22a711, _0x2253c9, _0x48f888) {
    return _0x2253c9[_0x418940(0xee)] < 0x2
      ? (console[_0x418940(0x108)](_0x418940(0x11e)), this)
      : this[_0x418940(0xb1)]((_0x2c8b70) => ({
          ..._0x2c8b70,
          fill: {
            fillType: e[_0x418940(0x1ac)][_0x418940(0xc1)],
            gradientType: _0x22a711,
            gradientStops: n[_0x418940(0xe6)][_0x418940(0xfe)](_0x2253c9),
            gradientAngle: _0x48f888,
          },
        }));
  }
  ["setImageFill"](_0x274394, _0x90fe07, _0x53825d = {}) {
    return this["_patchShapeData"]((_0x3e41ce) => ({
      ..._0x3e41ce,
      fill: {
        ...n["Tools"][_0x5cfa08(0xfe)](_0x53825d),
        fillType: e[_0x5cfa08(0x1ac)][_0x5cfa08(0x12d)],
        fillImageSource: _0x274394,
        fillImageSourceType: _0x90fe07,
      },
    }));
  }
  ["setNoneFill"]() {
    return this[_0x4477c7(0xb1)]((_0x248fd7) => ({
      ..._0x248fd7,
      fill: { fillType: e[_0x4477c7(0x1ac)]["NoFill"] },
    }));
  }
  ["setStroke"](_0x400f8a) {
    return this[_0x482d92(0xb1)]((_0xa65f45) => ({
      ..._0xa65f45,
      stroke: n[_0x482d92(0xe6)][_0x482d92(0xfe)](_0x400f8a),
    }));
  }
  ["setStrokeColor"](_0x48219e) {
    return this[_0x4078f6(0xd0)]((_0x335953) => ({
      ..._0x335953,
      color: _0x48219e,
      lineStrokeType:
        _0x335953["lineStrokeType"] === e[_0x4078f6(0x16d)][_0x4078f6(0x14a)]
          ? e["ShapeLineTypeEnum"][_0x4078f6(0x104)]
          : _0x335953[_0x4078f6(0xf0)],
    }));
  }
  ["setStrokeWidth"](_0x41290c) {
    return this[_0x5281ef(0xd0)]((_0x5ca01f) => ({
      ..._0x5ca01f,
      width: _0x41290c,
      lineStrokeType:
        _0x5ca01f[_0x5281ef(0xf0)] === e[_0x5281ef(0x16d)][_0x5281ef(0x14a)]
          ? e[_0x5281ef(0x16d)][_0x5281ef(0x104)]
          : _0x5ca01f[_0x5281ef(0xf0)],
    }));
  }
  ["setStrokeOpacity"](_0x266fde) {
    return this[_0xd29e0d(0xd0)]((_0x1712dd) => ({
      ..._0x1712dd,
      opacity: _0x266fde,
    }));
  }
  ["setStrokeLineDashType"](_0x40b580) {
    return this["_patchStroke"]((_0x2600ac) => ({
      ..._0x2600ac,
      dashType: _0x40b580,
    }));
  }
  ["setStrokeLineJoinType"](_0x1f4ca8) {
    return this[_0x13e955(0xd0)]((_0x335f57) => ({
      ..._0x335f57,
      lineJoinType: _0x1f4ca8,
    }));
  }
  ["setStrokeLineCapType"](_0x12564b) {
    return this[_0x26ad8c(0xd0)]((_0x681961) => ({
      ..._0x681961,
      capType: _0x12564b,
    }));
  }
  ["setStrokeLineType"](_0xd0e2d4) {
    return this[_0x206ea8(0xd0)]((_0x4a9a07) => ({
      ..._0x4a9a07,
      lineStrokeType: _0xd0e2d4,
    }));
  }
  ["update"](_0x3f7916) {
    var _0x1d552a;
    let _0x287324 = _0x3f7916[_0x448a75(0x18b)],
      _0x47cd77 =
        _0x287324 &&
        (_0x448a75(0x10d) in _0x287324 || _0x448a75(0xd9) in _0x287324)
          ? this[_0x448a75(0x186)]()
          : null,
      _0x4269ef =
        _0x3f7916[_0x448a75(0xe8)] ??
        ((_0x1d552a = _0x3f7916["shapeData"]) == null
          ? void 0x0
          : _0x1d552a["shapeType"]) ??
        _0x47cd77,
      _0x773b26 = f(
        _0x3f7916,
        _0x4269ef !== null && (0x0, e["isConnectorShape"])(_0x4269ef),
      );
    return _0x773b26
      ? (console[_0x448a75(0x108)](_0x448a75(0xc5) + _0x773b26), this)
      : (this[_0x448a75(0xae)](_0x448a75(0x10c), (_0x25fce4) =>
          _0x25fce4[_0x448a75(0x19f)](this[_0x448a75(0xec)], _0x3f7916),
        ),
        this);
  }
  ["remove"]() {
    return this[_0x3424dc(0xae)](_0x3424dc(0xe7), (_0x11e72a) =>
      _0x11e72a["removeShape"](this[_0x3424dc(0xec)]),
    );
  }
  ["bringToFront"]() {
    return (
      this[_0x3393cf(0xae)](_0x3393cf(0xc2), (_0x481b04) =>
        _0x481b04["bringToFront"](this[_0x3393cf(0xec)]),
      ),
      this
    );
  }
  ["bringForward"]() {
    return (
      this[_0x5ca483(0xae)](_0x5ca483(0x142), (_0x3d80f2) =>
        _0x3d80f2[_0x5ca483(0x1a7)](this[_0x5ca483(0xec)]),
      ),
      this
    );
  }
  ["sendBackward"]() {
    return (
      this["_mutate"](_0x47bf4c(0x159), (_0x33b802) =>
        _0x33b802[_0x47bf4c(0xe5)](this[_0x47bf4c(0xec)]),
      ),
      this
    );
  }
  ["sendToBack"]() {
    return (
      this[_0x3c2e0a(0xae)](_0x3c2e0a(0x184), (_0x38f4de) =>
        _0x38f4de["sendToBack"](this[_0x3c2e0a(0xec)]),
      ),
      this
    );
  }
  ["setZOrder"](_0x327701) {
    return (
      this[_0x102a08(0xae)]("set\x20z-order", (_0x17a50d) =>
        _0x17a50d[_0x102a08(0xd1)](this[_0x102a08(0xec)], _0x327701),
      ),
      this
    );
  }
  ["_getAdapter"]() {
    return this["_shapeHostAdapterRegistry"][_0x3e22c4(0x1b7)](
      this[_0x3e22c4(0xec)][_0x3e22c4(0x1b5)],
    );
  }
  ["_patchShapeData"](_0x2a5001, _0x588a05) {
    let _0x5dc026 = this["getShapeData"]();
    return _0x5dc026
      ? this[_0x5b3798(0x10c)]({
          shapeType: _0x588a05,
          shapeData: _0x2a5001(_0x5dc026),
        })
      : this;
  }
  ["_updateSmartArt"](..._0x3894dc) {
    let _0x43b09a = this[_0x17189f(0x166)]();
    return !_0x43b09a || !this["isSmartArt"]()
      ? (console[_0x17189f(0x108)](
          _0x17189f(0x137) +
            this[_0x17189f(0xec)][_0x17189f(0x1ad)] +
            "\x22\x20is\x20not\x20SmartArt.",
        ),
        this)
      : (_0x43b09a[_0x17189f(0x19f)](this[_0x17189f(0xec)], {
          smartArtOperations: _0x3894dc,
        }) ||
          console["warn"](
            _0x17189f(0xcb) + this[_0x17189f(0xec)]["shapeId"] + "\x22.",
          ),
        this);
  }
  ["_patchStroke"](_0x2f835e) {
    return this[_0x29145a(0xb1)]((_0xbc89d5) => ({
      ..._0xbc89d5,
      stroke: _0x2f835e(_0xbc89d5[_0x29145a(0x13a)] ?? {}),
    }));
  }
  ["_getSnapshot"]() {
    let _0x543f84 = this["_getAdapter"]();
    if (!_0x543f84) return null;
    try {
      return (
        _0x543f84[_0x5e89ef(0xd6)](this[_0x5e89ef(0xec)]) ||
        (console[_0x5e89ef(0x108)](
          _0x5e89ef(0x137) +
            this[_0x5e89ef(0xec)]["shapeId"] +
            _0x5e89ef(0x150),
        ),
        null)
      );
    } catch (_0x57dcd6) {
      return (
        console["warn"](
          "[Shape\x20Facade]:\x20Failed\x20to\x20read\x20Shape\x20\x22" +
            this["_shapeRef"][_0x5e89ef(0x1ad)] +
            "\x22.",
          _0x57dcd6,
        ),
        null
      );
    }
  }
  ["_getGeometryModel"]() {
    let _0x23aa9c = this[_0x5132e6(0xcf)]();
    if (!_0x23aa9c) return null;
    try {
      let _0x3783a7 = new e[_0x5132e6(0x167)](
        _0x23aa9c[_0x5132e6(0xe8)],
        _0x23aa9c[_0x5132e6(0x1ad)],
        n[_0x5132e6(0xe6)][_0x5132e6(0xfe)](_0x23aa9c[_0x5132e6(0x18b)]),
      );
      return (
        _0x3783a7[_0x5132e6(0xa8)]({
          width: _0x23aa9c[_0x5132e6(0xcd)]["width"],
          height: _0x23aa9c[_0x5132e6(0xcd)]["height"],
        }),
        _0x3783a7
      );
    } catch (_0x37fd38) {
      return (
        console[_0x5132e6(0x108)](
          _0x5132e6(0xb4) + this[_0x5132e6(0xec)][_0x5132e6(0x1ad)] + "\x22.",
          _0x37fd38,
        ),
        null
      );
    }
  }
  ["_mutate"](_0x1faebb, _0x386221) {
    let _0x387bac = this[_0x4ebfdf(0x166)]();
    if (!_0x387bac) return !0x1;
    try {
      let _0x52a103 = _0x386221(_0x387bac);
      return (
        _0x52a103 ||
          console["warn"](
            _0x4ebfdf(0x18d) +
              _0x1faebb +
              _0x4ebfdf(0x16b) +
              this[_0x4ebfdf(0xec)]["shapeId"] +
              "\x22.",
          ),
        _0x52a103
      );
    } catch (_0x8c1443) {
      return (
        console["warn"](
          _0x4ebfdf(0x18d) +
            _0x1faebb +
            _0x4ebfdf(0x16b) +
            this[_0x4ebfdf(0xec)][_0x4ebfdf(0x1ad)] +
            "\x22.",
          _0x8c1443,
        ),
        !0x1
      );
    }
  }
});
d = l = c(
  [s(0x2, e["IShapeHostAdapterRegistry"]), s(0x3, n["ICommandService"])],
  d,
);
function f(_0x7ef9ff, _0x5e7f3c = !0x1) {
  for (let _0x283ff5 of [_0x2fa970(0xda), "selectable"]) {
    let _0x19244f = _0x7ef9ff[_0x283ff5];
    if (_0x19244f !== void 0x0 && typeof _0x19244f != "boolean")
      return _0x2fa970(0xe2) + _0x283ff5 + _0x2fa970(0x17a);
  }
  let _0x3e51f0 = _0x7ef9ff["transform"];
  if (_0x3e51f0) {
    for (let _0x130c92 of [
      _0x2fa970(0xb6),
      "top",
      _0x2fa970(0x177),
      _0x2fa970(0xf3),
      _0x2fa970(0xd5),
    ]) {
      let _0x44b332 = _0x3e51f0[_0x130c92];
      if (_0x44b332 !== void 0x0 && !Number[_0x2fa970(0x119)](_0x44b332))
        return _0x2fa970(0xe4) + _0x130c92 + _0x2fa970(0x13c);
    }
    if (
      _0x3e51f0[_0x2fa970(0x177)] !== void 0x0 &&
      _0x3e51f0[_0x2fa970(0x177)] <= 0x0
    )
      return _0x2fa970(0x143);
    if (
      _0x3e51f0[_0x2fa970(0xf3)] !== void 0x0 &&
      _0x3e51f0[_0x2fa970(0xf3)] <= 0x0
    )
      return "Shape\x20height\x20must\x20be\x20greater\x20than\x20zero.";
    for (let _0x1d4842 of [_0x2fa970(0xd7), _0x2fa970(0x197)]) {
      let _0x54fa70 = _0x3e51f0[_0x1d4842];
      if (_0x54fa70 !== void 0x0 && typeof _0x54fa70 != "boolean")
        return _0x2fa970(0xe4) + _0x1d4842 + "\x22\x20must\x20be\x20boolean.";
    }
  }
  let _0x259d49 = _0x7ef9ff[_0x2fa970(0x18b)];
  return !_0x5e7f3c &&
    _0x259d49 &&
    (_0x2fa970(0x10d) in _0x259d49 || _0x2fa970(0xd9) in _0x259d49)
    ? _0x2fa970(0x149)
    : null;
}
var p = class extends d {
  ["isConnectorShape"]() {
    return !0x0;
  }
  ["getStartEndpoint"]() {
    let _0x52ef11 = this[_0x4d43b1(0x116)]();
    return _0x52ef11
      ? n[_0x4d43b1(0xe6)]["deepClone"](_0x52ef11[_0x4d43b1(0x156)])
      : null;
  }
  ["getEndEndpoint"]() {
    let _0x511475 = this[_0x5c9a4a(0x116)]();
    return _0x511475
      ? n[_0x5c9a4a(0xe6)][_0x5c9a4a(0xfe)](_0x511475["end"])
      : null;
  }
  ["getRoutePoints"]() {
    let _0x4b6984 = this["_getConnectorSnapshot"]();
    return _0x4b6984
      ? n["Tools"]["deepClone"](_0x4b6984[_0x57ac37(0x158)])
      : null;
  }
  ["getStartArrow"]() {
    let _0x1464ab = this["_getConnectorSnapshot"]();
    return _0x1464ab
      ? n["Tools"][_0x4965db(0xfe)](_0x1464ab[_0x4965db(0x193)])
      : null;
  }
  ["getEndArrow"]() {
    let _0x1ef7b1 = this[_0x12340b(0x116)]();
    return _0x1ef7b1
      ? n[_0x12340b(0xe6)][_0x12340b(0xfe)](_0x1ef7b1["endArrow"])
      : null;
  }
  ["setShapeType"](_0x204622) {
    return (0x0, e["isConnectorShape"])(_0x204622)
      ? super[_0x1d79a2(0xd8)](_0x204622)
      : (console[_0x1d79a2(0x108)](
          "[Shape\x20Facade]:\x20Connector\x20Shape\x20\x22" +
            this[_0x1d79a2(0xec)][_0x1d79a2(0x1ad)] +
            _0x1d79a2(0x10f),
        ),
        this);
  }
  ["setShapeData"](_0xc8f5b6) {
    return _0xc8f5b6["shapeType"] !== void 0x0 &&
      !(0x0, e[_0x1f33cb(0x196)])(_0xc8f5b6[_0x1f33cb(0xe8)])
      ? (console[_0x1f33cb(0x108)](
          "[Shape\x20Facade]:\x20Connector\x20Shape\x20\x22" +
            this[_0x1f33cb(0xec)]["shapeId"] +
            "\x22\x20requires\x20Connector\x20Shape\x20data.",
        ),
        this)
      : super[_0x1f33cb(0xc7)](_0xc8f5b6);
  }
  ["bindStart"](_0x40b5c4, _0x2c7ea0) {
    return (
      this[_0x14f6ba(0xd2)](_0x14f6ba(0x156), _0x40b5c4, _0x2c7ea0),
      this
    );
  }
  ["bindEnd"](_0x51f155, _0x174384) {
    return (
      this[_0xa648ed(0xd2)](_0xa648ed(0x19e), _0x51f155, _0x174384),
      this
    );
  }
  ["unbindStart"]() {
    return (
      this[_0x16193e(0x100)]("unbind\x20start", (_0x2eba00) =>
        _0x2eba00["unbindStart"](this[_0x16193e(0xec)]),
      ),
      this
    );
  }
  ["unbindEnd"]() {
    return (
      this[_0x3e311d(0x100)](_0x3e311d(0xc9), (_0x112921) =>
        _0x112921[_0x3e311d(0xdc)](this[_0x3e311d(0xec)]),
      ),
      this
    );
  }
  ["setStartPoint"](_0x328922) {
    return (
      m(_0x328922, this[_0x308da4(0xec)][_0x308da4(0x1ad)]) &&
        this["_mutateConnector"]("set\x20start\x20point", (_0xbcc856) =>
          _0xbcc856[_0x308da4(0xa3)](this[_0x308da4(0xec)], _0x328922),
        ),
      this
    );
  }
  ["setEndPoint"](_0x58b267) {
    return (
      m(_0x58b267, this[_0x56fe0c(0xec)]["shapeId"]) &&
        this["_mutateConnector"](_0x56fe0c(0xa6), (_0x2eac05) =>
          _0x2eac05[_0x56fe0c(0x152)](this[_0x56fe0c(0xec)], _0x58b267),
        ),
      this
    );
  }
  ["setRoutePoints"](_0x53b7a5) {
    return (
      _0x53b7a5[_0x125257(0xc6)]((_0x44e050) =>
        m(_0x44e050, this[_0x125257(0xec)][_0x125257(0x1ad)]),
      ) &&
        this[_0x125257(0x100)](_0x125257(0xa5), (_0x1f42d8) =>
          _0x1f42d8[_0x125257(0x19c)](this["_shapeRef"], _0x53b7a5),
        ),
      this
    );
  }
  ["setStartArrow"](_0x5da9ab, _0x24d284) {
    return (
      this[_0x52d8a0(0x100)]("set\x20start\x20arrow", (_0x5e4a2c) =>
        _0x5e4a2c[_0x52d8a0(0xb0)](this[_0x52d8a0(0xec)], _0x5da9ab, _0x24d284),
      ),
      this
    );
  }
  ["setEndArrow"](_0x1d9a06, _0x521e0d) {
    return (
      this[_0x275fc7(0x100)]("set\x20end\x20arrow", (_0x27b48b) =>
        _0x27b48b["setEndArrow"](this[_0x275fc7(0xec)], _0x1d9a06, _0x521e0d),
      ),
      this
    );
  }
  ["_getConnectorAdapter"]() {
    return this[_0x16eaca(0x11b)][_0x16eaca(0x1b7)](
      e["IConnectorShapeHostAdapter"],
    );
  }
  ["_getConnectorSnapshot"]() {
    let _0x54070c = this[_0x2e8e9c(0x1a4)]();
    if (!_0x54070c) return null;
    try {
      return (
        _0x54070c[_0x2e8e9c(0x11c)](this[_0x2e8e9c(0xec)]) ||
        (console[_0x2e8e9c(0x108)](
          _0x2e8e9c(0x164) +
            this[_0x2e8e9c(0xec)][_0x2e8e9c(0x1ad)] +
            _0x2e8e9c(0x150),
        ),
        null)
      );
    } catch (_0x43b86b) {
      return (
        console[_0x2e8e9c(0x108)](
          "[Shape\x20Facade]:\x20Failed\x20to\x20read\x20Connector\x20Shape\x20\x22" +
            this["_shapeRef"]["shapeId"] +
            "\x22.",
          _0x43b86b,
        ),
        null
      );
    }
  }
  ["_bind"](_0x53dfc2, _0x2ed16b, _0x44f2e3) {
    if (!_0x2ed16b || !Number[_0x25cab0(0x129)](_0x44f2e3) || _0x44f2e3 < 0x0)
      return (
        console[_0x25cab0(0x108)](
          _0x25cab0(0x165) +
            this[_0x25cab0(0xec)][_0x25cab0(0x1ad)] +
            _0x25cab0(0x105),
        ),
        !0x1
      );
    let _0x2c0110 = { shapeId: _0x2ed16b, cxnIndex: _0x44f2e3 };
    return this[_0x25cab0(0x100)](_0x25cab0(0x171) + _0x53dfc2, (_0x36eec0) =>
      _0x53dfc2 === _0x25cab0(0x156)
        ? _0x36eec0[_0x25cab0(0x163)](this["_shapeRef"], _0x2c0110)
        : _0x36eec0["bindEnd"](this[_0x25cab0(0xec)], _0x2c0110),
    );
  }
  ["_mutateConnector"](_0x41e78f, _0x453ad4) {
    let _0x38697e = this["_getConnectorAdapter"]();
    if (!_0x38697e) return !0x1;
    try {
      let _0x3c3dc3 = _0x453ad4(_0x38697e);
      return (
        _0x3c3dc3 ||
          console[_0x33728a(0x108)](
            _0x33728a(0x18d) +
              _0x41e78f +
              _0x33728a(0x157) +
              this[_0x33728a(0xec)][_0x33728a(0x1ad)] +
              "\x22.",
          ),
        _0x3c3dc3
      );
    } catch (_0x2868e9) {
      return (
        console[_0x33728a(0x108)](
          _0x33728a(0x18d) +
            _0x41e78f +
            "\x20Connector\x20Shape\x20\x22" +
            this[_0x33728a(0xec)]["shapeId"] +
            "\x22.",
          _0x2868e9,
        ),
        !0x1
      );
    }
  }
};
function m(_0x3cf934, _0x53d2d0) {
  return !Number[_0x39cddb(0x119)](_0x3cf934["x"]) ||
    !Number[_0x39cddb(0x119)](_0x3cf934["y"])
    ? (console[_0x39cddb(0x108)](
        "[Shape\x20Facade]:\x20Connector\x20\x22" +
          _0x53d2d0 +
          _0x39cddb(0x131),
      ),
      !0x1)
    : !0x0;
}
((exports["FConnectorShape"] = p),
  Object["defineProperty"](exports, "FShape", {
    enumerable: !0x0,
    get: function () {
      return d;
    },
  }),
  (exports["FShapeText"] = o));
