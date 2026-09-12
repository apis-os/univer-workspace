Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/boards"),
  t = require("@univerjs/core/facade"),
  n = require("@univerjs/core"),
  r = require("@univerjs-pro/engine-shape"),
  i = require("@univerjs-pro/engine-shape/facade"),
  a = require("@univerjs/protocol");
const o = {
    Straight: "straight",
    Orthogonal: "orthogonal",
    Curve: "curve",
    FreePolyline: "freePolyline",
  },
  s = { Auto: "auto", Manual: "manual", Mixed: "mixed" },
  c = {
    Association: "association",
    DirectedAssociation: "directedAssociation",
    Aggregation: "aggregation",
    Composition: "composition",
    Generalization: "generalization",
    Realization: "realization",
    Dependency: "dependency",
  },
  l = { Identifying: "identifying", NonIdentifying: "nonIdentifying" },
  u = {
    One: "one",
    ZeroOrOne: "zeroOrOne",
    OneOrMany: "oneOrMany",
    ZeroOrMany: "zeroOrMany",
  },
  d = {
    Synchronous: "synchronous",
    Asynchronous: "asynchronous",
    Reply: "reply",
    Create: "create",
    Destroy: "destroy",
    Self: "self",
  },
  f = {
    Front: "front",
    Forward: "forward",
    Backward: "backward",
    Back: "back",
  },
  p = { Horizontal: "horizontal", Vertical: "vertical" },
  m = {
    Generic: "generic",
    Swimlane: "swimlane",
    UMLPackage: "uml-package",
    SystemBoundary: "system-boundary",
  },
  h = { Right: "right", Below: "below" },
  g = {
    Left: "left",
    Center: "center",
    Right: "right",
    Top: "top",
    Middle: "middle",
    Bottom: "bottom",
  },
  _ = { Horizontal: "horizontal", Vertical: "vertical" },
  ee = { Vertical: "vertical", Horizontal: "horizontal" },
  te = { Start: "start", Center: "center", End: "end" },
  ne = { Complete: "complete", Pairwise: "pairwise", Fan: "fan" };
var re = class extends t.FEnum {
  get BoardBackgroundType() {
    return e.BoardBackgroundType;
  }
  get BoardElementType() {
    return e.BoardElementType;
  }
  get BoardToolType() {
    return e.BoardToolType;
  }
  get BoardSequenceShapeType() {
    return e.BoardSequenceShapeType;
  }
  get BoardCustomShapeType() {
    return e.BoardCustomShapeType;
  }
  get BoardContainerKind() {
    return m;
  }
  get BoardConnectorRouting() {
    return o;
  }
  get BoardConnectorRoutingMode() {
    return s;
  }
  get BoardConnectorLabelAnchor() {
    return e.BoardConnectorLabelAnchor;
  }
  get BoardConnectorLabelOffsetSpace() {
    return e.BoardConnectorLabelOffsetSpace;
  }
  get BoardConnectorLabelSide() {
    return e.BoardConnectorLabelSide;
  }
  get BoardConnectorLabelOrientation() {
    return e.BoardConnectorLabelOrientation;
  }
  get BoardConnectorLabelSizing() {
    return e.BoardConnectorLabelSizing;
  }
  get BoardUMLClassRelationType() {
    return c;
  }
  get BoardERDRelationType() {
    return l;
  }
  get BoardERDCardinality() {
    return u;
  }
  get BoardSequenceMessageType() {
    return d;
  }
  get BoardConnectorSite() {
    return e.BoardConnectorSite;
  }
  get BoardElementOrderPlacement() {
    return f;
  }
  get BoardSwimlaneOrientation() {
    return p;
  }
  get BoardFacadeNextAvailableBoundsPlacement() {
    return h;
  }
  get BoardFacadeElementAlignment() {
    return g;
  }
  get BoardFacadeElementDistribution() {
    return _;
  }
  get BoardFacadeLayeredLayoutDirection() {
    return ee;
  }
  get BoardFacadeLayeredLayoutAlignment() {
    return te;
  }
  get BoardFacadeLayeredConnectionMode() {
    return ne;
  }
};
t.FEnum["extend"](re);
function v(_0x560b6d) {
  return typeof _0x560b6d == "string"
    ? { isRichText: false, text: _0x560b6d }
    : {
        documentData: n.Tools["deepClone"](_0x560b6d.getData()),
        isRichText: true,
        text: _0x560b6d.toPlainText(),
      };
}
function y(_0x8f5840) {
  return _0x8f5840
    ? n.RichTextValue["create"](n.Tools["deepClone"](_0x8f5840))
    : null;
}
var ie = class {
    constructor(_0x32e1a3, _0x157540, _0xd4d943) {
      ((this._unitId = _0x32e1a3),
        (this._commandService = _0x157540),
        (this._permissionService = _0xd4d943));
    }
    async setPoint(_0xe55896, _0x1a876d) {
      await this._commandService["executeCommand"](
        e.SetBoardPermissionCommand["id"],
        {
          unitId: this._unitId,
          objectId: this._unitId,
          action: _0xe55896,
          value: _0x1a876d,
        },
      );
    }
    getPoint(_0x24428d) {
      return (0, e.getBoardPermissionValue)(
        this._permissionService,
        this._unitId,
        this._unitId,
        _0x24428d,
      );
    }
    async setEditable(_0x22392f = true) {
      await this._commandService["executeCommand"](
        e.SetBoardPermissionCommand["id"],
        {
          unitId: this._unitId,
          objectId: this._unitId,
          action: a.UnitAction["Edit"],
          value: _0x22392f,
        },
      );
    }
    async setReadOnly() {
      await this._commandService["executeCommand"](
        e.SetBoardPermissionCommand["id"],
        {
          unitId: this._unitId,
          objectId: this._unitId,
          action: a.UnitAction["Edit"],
          value: false,
        },
      );
    }
    canEdit() {
      return (0, e.getBoardPermissionValue)(
        this._permissionService,
        this._unitId,
        this._unitId,
        a.UnitAction["Edit"],
      );
    }
  },
  ae = class {
    constructor(_0x5510f7, _0x512a0c, _0x191368, _0x24ba37) {
      ((this._unitId = _0x5510f7),
        (this._objectId = _0x512a0c),
        (this._commandService = _0x191368),
        (this._permissionService = _0x24ba37));
    }
    async setEditable(_0x21d52c = true) {
      await this._commandService["executeCommand"](
        e.SetBoardPermissionCommand["id"],
        {
          unitId: this._unitId,
          objectId: this._objectId,
          action: a.UnitAction["Edit"],
          value: _0x21d52c,
        },
      );
    }
    async setReadOnly() {
      await this._commandService["executeCommand"](
        e.SetBoardPermissionCommand["id"],
        {
          unitId: this._unitId,
          objectId: this._objectId,
          action: a.UnitAction["Edit"],
          value: false,
        },
      );
    }
    canEdit() {
      return (0, e.canEditBoardTargets)(this._permissionService, this._unitId, [
        this._objectId,
      ]);
    }
  };
function b(_0x56ba42) {
  "@babel/helpers - typeof";
  return (
    (b =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x3d8589) {
            return typeof _0x3d8589;
          }
        : function (_0x5978f0) {
            return _0x5978f0 &&
              typeof Symbol == "function" &&
              _0x5978f0.constructor === Symbol &&
              _0x5978f0 !== Symbol.prototype
              ? "symbol"
              : typeof _0x5978f0;
          }),
    b(_0x56ba42)
  );
}
function oe(_0x29db1e, _0x4b584f) {
  if (b(_0x29db1e) != "object" || !_0x29db1e) return _0x29db1e;
  var _0x26d531 = _0x29db1e[Symbol.toPrimitive];
  if (_0x26d531 !== undefined) {
    var _0x1e1ac1 = _0x26d531.call(_0x29db1e, _0x4b584f || "default");
    if (b(_0x1e1ac1) != "object") return _0x1e1ac1;
    throw TypeError(
      "@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.",
    );
  }
  return (_0x4b584f === "string" ? String : Number)(_0x29db1e);
}
function se(_0x1a3532) {
  var _0x1cfcda = oe(_0x1a3532, "string");
  return b(_0x1cfcda) == "symbol" ? _0x1cfcda : _0x1cfcda + "";
}
function ce(_0x498f30, _0x58f962, _0x2500ce) {
  return (
    (_0x58f962 = se(_0x58f962)) in _0x498f30
      ? Object.defineProperty(_0x498f30, _0x58f962, {
          value: _0x2500ce,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x498f30[_0x58f962] = _0x2500ce),
    _0x498f30
  );
}
function x(_0x1da7f0, _0x8a841b) {
  return function (_0x3c4521, _0x2e078b) {
    _0x8a841b(_0x3c4521, _0x2e078b, _0x1da7f0);
  };
}
function le(_0xc7eb7b, _0x566d0d, _0x22df4d, _0x47ebda) {
  var _0x4068cb = arguments.length,
    _0x5154c3 =
      _0x4068cb < 3
        ? _0x566d0d
        : _0x47ebda === null
          ? (_0x47ebda = Object.getOwnPropertyDescriptor(_0x566d0d, _0x22df4d))
          : _0x47ebda,
    _0x5ed4ff;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0x5154c3 = Reflect.decorate(_0xc7eb7b, _0x566d0d, _0x22df4d, _0x47ebda);
  else {
    for (var _0x2a24d5 = _0xc7eb7b.length - 1; _0x2a24d5 >= 0; _0x2a24d5--)
      (_0x5ed4ff = _0xc7eb7b[_0x2a24d5]) &&
        (_0x5154c3 =
          (_0x4068cb < 3
            ? _0x5ed4ff(_0x5154c3)
            : _0x4068cb > 3
              ? _0x5ed4ff(_0x566d0d, _0x22df4d, _0x5154c3)
              : _0x5ed4ff(_0x566d0d, _0x22df4d)) || _0x5154c3);
  }
  return (
    _0x4068cb > 3 &&
      _0x5154c3 &&
      Object.defineProperty(_0x566d0d, _0x22df4d, _0x5154c3),
    _0x5154c3
  );
}
function S(_0x10a0bf) {
  let _0x5b26d8 = _0x10a0bf.transform;
  return {
    left: _0x5b26d8.left ?? 0,
    top: _0x5b26d8.top ?? 0,
    width: _0x5b26d8.width ?? 0,
    height: _0x5b26d8.height ?? 0,
    angle: _0x5b26d8.rotation ?? 0,
    flipX: _0x5b26d8.flipX,
    flipY: _0x5b26d8.flipY,
  };
}
function C(_0x3224a7, _0x3f4d2a) {
  if (Object.is(_0x3224a7, _0x3f4d2a)) return true;
  if (
    !_0x3224a7 ||
    !_0x3f4d2a ||
    typeof _0x3224a7 != "object" ||
    typeof _0x3f4d2a != "object"
  )
    return false;
  if (Array.isArray(_0x3224a7) || Array.isArray(_0x3f4d2a))
    return (
      Array.isArray(_0x3224a7) &&
      Array.isArray(_0x3f4d2a) &&
      _0x3224a7.length === _0x3f4d2a.length &&
      _0x3224a7.every((_0xac2ee6, _0x38a4ad) =>
        C(_0xac2ee6, _0x3f4d2a[_0x38a4ad]),
      )
    );
  let _0x23d156 = _0x3224a7,
    _0x2c082f = _0x3f4d2a,
    _0x278ddb = Object.keys(_0x23d156),
    _0xcd9c8c = Object.keys(_0x2c082f);
  return (
    _0x278ddb.length === _0xcd9c8c.length &&
    _0x278ddb.every(
      (_0x4d7988) =>
        Object.prototype["hasOwnProperty"].call(_0x2c082f, _0x4d7988) &&
        C(_0x23d156[_0x4d7988], _0x2c082f[_0x4d7988]),
    )
  );
}
function ue(_0x93b1c1, _0x290291) {
  let _0x1ed46f = { ..._0x93b1c1.transform },
    _0x52bd0e = false;
  for (let _0x1ae36a of [
    "left",
    "top",
    "width",
    "height",
    "rotation",
    "flipX",
    "flipY",
  ])
    _0x290291[_0x1ae36a] !== undefined &&
      ((_0x1ed46f[_0x1ae36a] = _0x290291[_0x1ae36a]), (_0x52bd0e = true));
  return _0x52bd0e ? { ..._0x93b1c1, transform: _0x1ed46f } : null;
}
function w(_0x2ac523) {
  let _0x530ac7 = _0x2ac523.dx ?? 0,
    _0x500697 = _0x2ac523.dy ?? 0;
  return !Number.isFinite(_0x530ac7) ||
    !Number.isFinite(_0x500697) ||
    (_0x530ac7 === 0 && _0x500697 === 0)
    ? null
    : { dx: _0x530ac7, dy: _0x500697 };
}
function T(_0x9f28bc, _0x3aab89) {
  return ue(_0x9f28bc, {
    left: (_0x9f28bc.transform["left"] ?? 0) + _0x3aab89.dx,
    top: (_0x9f28bc.transform["top"] ?? 0) + _0x3aab89.dy,
  });
}
const de = new Set(["bottom", "center", "left", "middle", "right", "top"]);
function fe(_0x1ff52e) {
  return de.has(_0x1ff52e);
}
const pe = new Set(["horizontal", "vertical"]);
function me(_0x3f4129) {
  return pe.has(_0x3f4129);
}
function he(_0x4a0452, _0x82cd19, _0x5677d9) {
  switch (_0x5677d9) {
    case "left":
      return w({ dx: _0x82cd19.left - _0x4a0452.bounds["left"] });
    case "center":
      return w({
        dx: _0x82cd19.left + _0x82cd19.width / 2 - _0x4a0452.center["x"],
      });
    case "right":
      return w({
        dx:
          _0x82cd19.left +
          _0x82cd19.width -
          _0x4a0452.bounds["left"] -
          _0x4a0452.bounds["width"],
      });
    case "top":
      return w({ dy: _0x82cd19.top - _0x4a0452.bounds["top"] });
    case "middle":
      return w({
        dy: _0x82cd19.top + _0x82cd19.height / 2 - _0x4a0452.center["y"],
      });
    case "bottom":
      return w({
        dy:
          _0x82cd19.top +
          _0x82cd19.height -
          _0x4a0452.bounds["top"] -
          _0x4a0452.bounds["height"],
      });
  }
}
function ge(_0x459e44, _0x5f95cc) {
  let _0x4fd186 = _0x5f95cc === "horizontal" ? "x" : "y",
    _0x22cf4a = [..._0x459e44].sort((_0xc24188, _0x46a66c) => {
      let _0xdfba1e =
          _0x5f95cc === "horizontal"
            ? _0xc24188.bounds["left"]
            : _0xc24188.bounds["top"],
        _0x5b47eb =
          _0x5f95cc === "horizontal"
            ? _0x46a66c.bounds["left"]
            : _0x46a66c.bounds["top"];
      return _0xdfba1e === _0x5b47eb
        ? _0xc24188.orderIndex - _0x46a66c.orderIndex
        : _0xdfba1e - _0x5b47eb;
    }),
    _0x2cd0c5 = _0x22cf4a[0].bounds,
    _0x379eea = _0x22cf4a[_0x22cf4a.length - 1].bounds,
    _0x202f1f = _0x5f95cc === "horizontal" ? _0x2cd0c5.left : _0x2cd0c5.top,
    _0x43fe0a =
      _0x5f95cc === "horizontal"
        ? _0x379eea.left + _0x379eea.width
        : _0x379eea.top + _0x379eea.height,
    _0x1947b7 = _0x22cf4a.reduce(
      (_0x598edd, _0x3c8c22) =>
        _0x598edd +
        (_0x5f95cc === "horizontal"
          ? _0x3c8c22.bounds["width"]
          : _0x3c8c22.bounds["height"]),
      0,
    ),
    _0x2d53ab = (_0x43fe0a - _0x202f1f - _0x1947b7) / (_0x22cf4a.length - 1),
    _0x42495f = new Map(),
    _0x2a13fc = _0x202f1f;
  return (
    _0x22cf4a.forEach((_0x12b084) => {
      let _0x51f453 =
          _0x5f95cc === "horizontal"
            ? _0x12b084.bounds["left"]
            : _0x12b084.bounds["top"],
        _0x55549b = _0x2a13fc - _0x51f453,
        _0x1d44ec = w(
          _0x4fd186 === "x" ? { dx: _0x55549b } : { dy: _0x55549b },
        );
      (_0x1d44ec && _0x42495f.set(_0x12b084.id, _0x1d44ec),
        (_0x2a13fc +=
          (_0x5f95cc === "horizontal"
            ? _0x12b084.bounds["width"]
            : _0x12b084.bounds["height"]) + _0x2d53ab));
    }),
    _0x42495f
  );
}
function _e(_0x65e56f) {
  let _0x129d02 = _0x65e56f.gap ?? 40;
  return !me(_0x65e56f.direction) ||
    !Number.isFinite(_0x129d02) ||
    _0x129d02 < 0 ||
    !E(_0x65e56f.start)
    ? null
    : {
        direction: _0x65e56f.direction,
        gap: _0x129d02,
        start: _0x65e56f.start && n.Tools["deepClone"](_0x65e56f.start),
      };
}
function ve(_0x390175) {
  let _0x268f1a = _0x390175.columnGap ?? 40,
    _0x3a3fca = _0x390175.rowGap ?? 40;
  return !Number.isInteger(_0x390175.columns) ||
    _0x390175.columns < 1 ||
    !Number.isFinite(_0x268f1a) ||
    _0x268f1a < 0 ||
    !Number.isFinite(_0x3a3fca) ||
    _0x3a3fca < 0 ||
    !E(_0x390175.start)
    ? null
    : {
        columns: _0x390175.columns,
        columnGap: _0x268f1a,
        rowGap: _0x3a3fca,
        start: _0x390175.start && n.Tools["deepClone"](_0x390175.start),
      };
}
const ye = new Set(["horizontal", "vertical"]),
  be = new Set(["center", "end", "start"]);
function xe(_0x4edfc5, _0x20fba9) {
  let _0x571591 = _0x4edfc5
      .map((_0x4c2944) => U(_0x4c2944))
      .filter((_0x5b5708) => !!_0x5b5708),
    _0x22d240 = _0x571591.flat(),
    _0x3a3ab7 = _0x20fba9.direction ?? "vertical",
    _0x368727 = _0x20fba9.layerGap ?? 140,
    _0x2bcfe6 = _0x20fba9.itemGap ?? 100,
    _0x111f46 = _0x20fba9.align ?? "center",
    _0x43b0e9 = _0x20fba9.itemAlign ?? "center";
  return _0x571591.length === 0 ||
    new Set(_0x22d240).size !== _0x22d240.length ||
    !ye.has(_0x3a3ab7) ||
    !be.has(_0x111f46) ||
    !be.has(_0x43b0e9) ||
    !Number.isFinite(_0x368727) ||
    _0x368727 < 0 ||
    !Number.isFinite(_0x2bcfe6) ||
    _0x2bcfe6 < 0 ||
    !E(_0x20fba9.start)
    ? null
    : {
        align: _0x111f46,
        direction: _0x3a3ab7,
        elementIds: _0x22d240,
        itemAlign: _0x43b0e9,
        itemGap: _0x2bcfe6,
        layerGap: _0x368727,
        layers: _0x571591,
        start: _0x20fba9.start && n.Tools["deepClone"](_0x20fba9.start),
      };
}
function E(_0x105e81) {
  return (
    !_0x105e81 || (Number.isFinite(_0x105e81.x) && Number.isFinite(_0x105e81.y))
  );
}
function Se(_0x5cefe0, _0x5338a1) {
  let _0xc4d7f2 = _0x5338a1.start ?? {
      x: _0x5cefe0[0].bounds["left"],
      y: _0x5cefe0[0].bounds["top"],
    },
    _0x576abc = new Map(),
    _0x1d5977 =
      _0x5338a1.direction === "horizontal" ? _0xc4d7f2.x : _0xc4d7f2.y;
  return (
    _0x5cefe0.forEach((_0x245263) => {
      let _0xd5088f =
          _0x5338a1.direction === "horizontal" ? _0x1d5977 : _0xc4d7f2.x,
        _0x303477 =
          _0x5338a1.direction === "horizontal" ? _0xc4d7f2.y : _0x1d5977,
        _0x205d95 = w({
          dx: _0xd5088f - _0x245263.bounds["left"],
          dy: _0x303477 - _0x245263.bounds["top"],
        });
      (_0x205d95 && _0x576abc.set(_0x245263.id, _0x205d95),
        (_0x1d5977 +=
          (_0x5338a1.direction === "horizontal"
            ? _0x245263.bounds["width"]
            : _0x245263.bounds["height"]) + _0x5338a1.gap));
    }),
    _0x576abc
  );
}
function Ce(_0x3effdf, _0x344a0b) {
  let _0x435854 = _0x344a0b.start ?? {
      x: _0x3effdf[0].bounds["left"],
      y: _0x3effdf[0].bounds["top"],
    },
    _0x2cf6f6 = new Map(),
    _0x56a611 = _0x435854.y;
  for (
    let _0x225691 = 0;
    _0x225691 < _0x3effdf.length;
    _0x225691 += _0x344a0b.columns
  ) {
    let _0x1204fa = _0x3effdf.slice(_0x225691, _0x225691 + _0x344a0b.columns),
      _0x2e2f66 = _0x435854.x,
      _0x5ac1f9 = 0;
    (_0x1204fa.forEach((_0x1536b9) => {
      let _0xc611d4 = w({
        dx: _0x2e2f66 - _0x1536b9.bounds["left"],
        dy: _0x56a611 - _0x1536b9.bounds["top"],
      });
      (_0xc611d4 && _0x2cf6f6.set(_0x1536b9.id, _0xc611d4),
        (_0x2e2f66 += _0x1536b9.bounds["width"] + _0x344a0b.columnGap),
        (_0x5ac1f9 = Math.max(_0x5ac1f9, _0x1536b9.bounds["height"])));
    }),
      (_0x56a611 += _0x5ac1f9 + _0x344a0b.rowGap));
  }
  return _0x2cf6f6;
}
function D(_0x17122f, _0x395cfe, _0x37797f) {
  switch (_0x37797f) {
    case "start":
      return 0;
    case "end":
      return _0x17122f - _0x395cfe;
    case "center":
      return (_0x17122f - _0x395cfe) / 2;
  }
}
function O(_0x118b9e) {
  return Number((Math.abs(_0x118b9e) < 1e-9 ? 0 : _0x118b9e).toFixed(6));
}
function we(_0x322416) {
  return (
    _0x322416.fillColor !== undefined ||
    _0x322416.strokeColor !== undefined ||
    _0x322416.strokeWidth !== undefined
  );
}
function Te(_0x4b964d) {
  return [
    "stroke",
    "strokeWidth",
    "opacity",
    "dash",
    "startMarker",
    "endMarker",
    "cornerStyle",
    "lineJump",
    "animation",
  ].some((_0x439b94) => _0x4b964d[_0x439b94] !== undefined);
}
function Ee(_0x3ecf94) {
  return _0x3ecf94 == null
    ? true
    : ![
          "dash",
          "particle",
          "pulse",
          "gradient",
          "particles",
          "arrows",
        ].includes(_0x3ecf94.mode) ||
        (_0x3ecf94.direction !== undefined &&
          _0x3ecf94.direction !== "forward" &&
          _0x3ecf94.direction !== "reverse")
      ? false
      : _0x3ecf94.speed === undefined ||
        (Number.isFinite(_0x3ecf94.speed) && _0x3ecf94.speed > 0);
}
function k(_0x23dd5d) {
  return (
    _0x23dd5d === undefined ||
    (_0x23dd5d !== null &&
      [
        "none",
        "composite",
        "openArrow",
        "filledArrow",
        "openTriangle",
        "filledTriangle",
        "openDiamond",
        "filledDiamond",
        "openCircle",
        "filledCircle",
        "bar",
        "doubleBar",
        "crowFoot",
        "cross",
        "plus",
      ].includes(_0x23dd5d.type))
  );
}
function De(_0x2acc4b, _0x114b1f) {
  if (
    !Te(_0x114b1f) ||
    !Ee(_0x114b1f.animation) ||
    !k(_0x114b1f.startMarker) ||
    !k(_0x114b1f.endMarker)
  )
    return null;
  let { animation: _0x38a5a3, ..._0x116cb5 } = _0x114b1f,
    _0x1417d0 = { ..._0x2acc4b.connectorData["style"], ..._0x116cb5 };
  return (
    _0x38a5a3 === null
      ? delete _0x1417d0.animation
      : _0x38a5a3 !== undefined &&
        (_0x1417d0.animation = n.Tools["deepClone"](_0x38a5a3)),
    {
      ..._0x2acc4b,
      connectorData: { ..._0x2acc4b.connectorData, style: _0x1417d0 },
    }
  );
}
function Oe(_0x151996) {
  return n.Tools["deepClone"](_0x151996.connectorData["style"] ?? {});
}
function ke(_0x2aff15) {
  var _0x4516a4, _0x12a63b, _0x242ef2, _0x125c8a;
  return {
    fillColor:
      (_0x4516a4 = _0x2aff15.containerData["shapeData"].fill) == null
        ? undefined
        : _0x4516a4.color,
    strokeColor:
      (_0x12a63b = _0x2aff15.containerData["shapeData"].stroke) == null
        ? undefined
        : _0x12a63b.color,
    strokeWidth:
      (_0x242ef2 = _0x2aff15.containerData["shapeData"].stroke) == null
        ? undefined
        : _0x242ef2.width,
    titleStyle:
      (_0x125c8a = _0x2aff15.containerData["style"]) != null &&
      _0x125c8a.titleStyle
        ? n.Tools["deepClone"](_0x2aff15.containerData["style"].titleStyle)
        : undefined,
  };
}
function Ae(_0x3da8c9, _0x18e309) {
  var _0x12c2b0;
  return !we(_0x18e309) && _0x18e309.titleStyle === undefined
    ? null
    : {
        ..._0x3da8c9,
        containerData: {
          ..._0x3da8c9.containerData,
          shapeData: {
            ..._0x3da8c9.containerData["shapeData"],
            ...(_0x18e309.fillColor === undefined
              ? null
              : {
                  fill: {
                    ..._0x3da8c9.containerData["shapeData"].fill,
                    color: _0x18e309.fillColor,
                  },
                }),
            ...(_0x18e309.strokeColor === undefined &&
            _0x18e309.strokeWidth === undefined
              ? null
              : {
                  stroke: {
                    ..._0x3da8c9.containerData["shapeData"].stroke,
                    ...(_0x18e309.strokeColor === undefined
                      ? null
                      : { color: _0x18e309.strokeColor }),
                    ...(_0x18e309.strokeWidth === undefined
                      ? null
                      : { width: _0x18e309.strokeWidth }),
                  },
                }),
          },
          ...(_0x18e309.titleStyle === undefined
            ? null
            : {
                style: {
                  ..._0x3da8c9.containerData["style"],
                  titleStyle: {
                    ...((_0x12c2b0 = _0x3da8c9.containerData["style"]) == null
                      ? undefined
                      : _0x12c2b0.titleStyle),
                    ...n.Tools["deepClone"](_0x18e309.titleStyle),
                  },
                },
              }),
        },
      };
}
function je(_0x13333e) {
  return _0x13333e && typeof _0x13333e == "object" ? _0x13333e : undefined;
}
function Me(_0xdfe537, _0x17757f) {
  let _0x1547ed = je(_0x17757f),
    _0xe0da95 = v(_0xdfe537),
    _0x2dcc15 = (0, e.createBoardTextBoxShapeTextData)({
      bold: _0x1547ed == null ? undefined : _0x1547ed.bold,
      color: _0x1547ed == null ? undefined : _0x1547ed.color,
      fontFamily: _0x1547ed == null ? undefined : _0x1547ed.fontFamily,
      fontSize: _0x1547ed == null ? undefined : _0x1547ed.fontSize,
      horizontal: _0x1547ed == null ? undefined : _0x1547ed.isHorizontal,
      horizontalAlign:
        (_0x1547ed == null ? undefined : _0x1547ed.horizontalAlign) ??
        n.HorizontalAlign["CENTER"],
      italic: _0x1547ed == null ? undefined : _0x1547ed.italic,
      strikethrough: _0x1547ed == null ? undefined : _0x1547ed.strikethrough,
      text: _0xe0da95.text,
      textFill: _0x1547ed == null ? undefined : _0x1547ed.textFill,
      underline: _0x1547ed == null ? undefined : _0x1547ed.underline,
      verticalAlign:
        (_0x1547ed == null ? undefined : _0x1547ed.verticalAlign) ??
        n.VerticalAlign["MIDDLE"],
    });
  return _0xe0da95.documentData
    ? {
        ..._0x2dcc15,
        isRichText: true,
        dataModel: {
          ..._0x2dcc15.dataModel,
          doc: (0, e.mergeBoardRichTextDocument)(
            _0x2dcc15.dataModel["doc"],
            _0xe0da95.documentData,
          ),
        },
      }
    : _0x2dcc15;
}
function A(_0x494f71, _0x4eb081) {
  return _0x494f71
    ? y(_0x494f71)
    : _0x4eb081 === undefined
      ? null
      : y(
          (0, e.createBoardTextElement)({ left: 0, top: 0, text: _0x4eb081 })
            .textData,
        );
}
function j(_0x508247) {
  return {
    content: n.Tools["deepClone"](
      _0x508247 instanceof n.RichTextValue ? _0x508247.getData() : _0x508247,
    ),
  };
}
function M(_0x2bb8be) {
  if (!Array.isArray(_0x2bb8be)) return null;
  let _0x380e66 = _0x2bb8be.map((_0x2b515a) =>
    (_0x2b515a == null ? undefined : _0x2b515a.content) === undefined
      ? _0x2b515a
      : { ..._0x2b515a, ...j(_0x2b515a.content) },
  );
  return (0, e.isValidBoardConnectorLabels)(_0x380e66)
    ? n.Tools["deepClone"](_0x380e66)
    : null;
}
function N(_0x1c8e34, _0x59487d) {
  return Object.fromEntries(
    Object.values(_0x59487d.elements).map((_0x5f113a) => [
      _0x5f113a.id,
      {
        unitId: _0x1c8e34,
        subUnitId: _0x59487d.id,
        elementId: _0x5f113a.id,
        element: _0x5f113a,
        transform: S(_0x5f113a),
      },
    ]),
  );
}
function P(_0x16a80b) {
  return _0x16a80b && !Q(_0x16a80b) ? _0x16a80b.elementId : undefined;
}
function Ne(_0x260755) {
  return (
    !!_0x260755 &&
    !Q(_0x260755) &&
    _0x260755.side === undefined &&
    _0x260755.connectionSiteId === undefined &&
    _0x260755.position === undefined
  );
}
function Pe(_0x1f934c, _0x41ff8f) {
  let _0x4e2888 = J(_0x1f934c),
    _0x306106 = J(_0x41ff8f),
    _0x4cc2c8 = _0x306106.x - _0x4e2888.x,
    _0x591ad7 = _0x306106.y - _0x4e2888.y;
  return Math.abs(_0x4cc2c8) >= Math.abs(_0x591ad7)
    ? _0x4cc2c8 >= 0
      ? { start: "right", end: "left" }
      : { start: "left", end: "right" }
    : _0x591ad7 >= 0
      ? { start: "bottom", end: "top" }
      : { start: "top", end: "bottom" };
}
function F(_0x287732, _0x2b6806) {
  return Ne(_0x287732) && _0x287732 && !Q(_0x287732)
    ? { ..._0x287732, side: _0x2b6806 }
    : _0x287732;
}
function Fe(_0x311c29) {
  return (
    !!_0x311c29 &&
    !Q(_0x311c29) &&
    (_0x311c29.position === undefined ||
      Math.abs(_0x311c29.position - 0.5) <= 2 ** -52)
  );
}
function I(_0x360fef) {
  var _0x32b93c;
  if (!(!_0x360fef || Q(_0x360fef)))
    return _0x360fef.side === undefined
      ? (_0x32b93c = Object.entries(e.BoardConnectorSiteBySide).find(
          ([, _0x37f8b6]) => _0x37f8b6 === _0x360fef.connectionSiteId,
        )) == null
        ? undefined
        : _0x32b93c[0]
      : _0x360fef.side;
}
function Ie(_0x22eb34, _0x19fdd6, _0x7bd5f0, _0x194471, _0x1a7425) {
  let _0x297930 = Math.min(_0x194471, _0x1a7425),
    _0x594870 = Math.max(_0x194471, _0x1a7425),
    _0x5b1033 = _0x19fdd6 === "horizontal" ? _0x22eb34.top : _0x22eb34.left,
    _0x39f8f2 =
      _0x5b1033 +
      (_0x19fdd6 === "horizontal" ? _0x22eb34.height : _0x22eb34.width),
    _0x131a91 = _0x19fdd6 === "horizontal" ? _0x22eb34.left : _0x22eb34.top,
    _0x16981c =
      _0x131a91 +
      (_0x19fdd6 === "horizontal" ? _0x22eb34.width : _0x22eb34.height);
  return (
    _0x7bd5f0 >= _0x5b1033 - 8 &&
    _0x7bd5f0 <= _0x39f8f2 + 8 &&
    _0x594870 > _0x131a91 - 8 &&
    _0x297930 < _0x16981c + 8
  );
}
const Le = {
    bottom: "vertical",
    left: "horizontal",
    right: "horizontal",
    top: "vertical",
  },
  Re = { bottom: "top", left: "right", right: "left", top: "bottom" };
function ze(_0x1718ed, _0x2edfc6) {
  return _0x2edfc6 === "right"
    ? _0x1718ed.left + _0x1718ed.width
    : _0x2edfc6 === "bottom"
      ? _0x1718ed.top + _0x1718ed.height
      : _0x2edfc6 === "left"
        ? _0x1718ed.left
        : _0x1718ed.top;
}
function Be(_0x1252bf, _0xbd8f0d, _0x4a03a0) {
  let _0x2f67fd = Le[_0x4a03a0.start],
    _0x34f495 = J(_0x1252bf),
    _0x251c42 = J(_0xbd8f0d);
  if (
    Re[_0x4a03a0.start] !== _0x4a03a0.end ||
    Math.abs(
      _0x2f67fd === "horizontal"
        ? _0x34f495.y - _0x251c42.y
        : _0x34f495.x - _0x251c42.x,
    ) > 1
  )
    return null;
  let _0x12a666 = ze(_0x1252bf, _0x4a03a0.start),
    _0x4af49a = ze(_0xbd8f0d, _0x4a03a0.end);
  return (
    _0x4a03a0.start === "right" || _0x4a03a0.start === "bottom"
      ? _0x4af49a > _0x12a666
      : _0x4af49a < _0x12a666
  )
    ? {
        axis: _0x2f67fd,
        fixed: _0x2f67fd === "horizontal" ? _0x34f495.y : _0x34f495.x,
        start: _0x12a666,
        end: _0x4af49a,
      }
    : null;
}
function Ve(_0x42734e, _0x343f44, _0x1cfb52, _0x1291e1) {
  if (
    _0x343f44.has(_0x42734e.id) ||
    _0x42734e.visible === false ||
    _0x42734e.type === e.BoardElementType["Connector"] ||
    _0x42734e.type === e.BoardElementType["Container"]
  )
    return false;
  let _0x5b3730 = (0, e.resolveBoardElementWorldBounds)(
    _0x1cfb52,
    _0x42734e.id,
  );
  return (
    !!_0x5b3730 &&
    Ie(
      _0x5b3730,
      _0x1291e1.axis,
      _0x1291e1.fixed,
      _0x1291e1.start,
      _0x1291e1.end,
    )
  );
}
function He(
  _0x2f4826,
  _0x37618b,
  _0x338595,
  _0x1c4cac,
  _0x5cc020,
  _0x2b9321,
  _0x20ed52,
) {
  let _0xf6e62c = Be(_0x5cc020, _0x2b9321, _0x20ed52);
  if (!_0xf6e62c) return false;
  let _0xc592a = N(_0x2f4826, _0x37618b),
    _0x24b313 = new Set([_0x338595, _0x1c4cac]);
  return !Object.values(_0x37618b.elements).some((_0x5437de) =>
    Ve(_0x5437de, _0x24b313, _0xc592a, _0xf6e62c),
  );
}
function Ue(
  _0x21d99e,
  _0x358c1e,
  _0x1f2dec,
  _0x17b635,
  _0x28e157,
  _0x5c8c89,
  _0xe90157,
  _0x3fb942,
  _0x4baacc,
) {
  return (
    Fe(_0x28e157) &&
    Fe(_0x5c8c89) &&
    I(_0x28e157) === _0x4baacc.start &&
    I(_0x5c8c89) === _0x4baacc.end &&
    He(
      _0x21d99e,
      _0x358c1e,
      _0x1f2dec,
      _0x17b635,
      _0xe90157,
      _0x3fb942,
      _0x4baacc,
    )
  );
}
function We(_0xe9e73, _0x417e69, _0x4db3d2, _0x7b706e, _0x2c5dd) {
  var _0x4c4936, _0x3171d1;
  let _0x400537 = P(_0x7b706e),
    _0x5889a1 = P(_0x2c5dd),
    _0x3aeedc = _0x7b706e,
    _0x43d3d2 = _0x2c5dd,
    _0x2bda0b = false;
  if (_0x417e69 && _0x400537 && _0x5889a1 && _0x400537 !== _0x5889a1) {
    let _0x4f52e7 = N(_0xe9e73, _0x417e69),
      _0x105579 = (0, e.resolveBoardElementWorldBounds)(_0x4f52e7, _0x400537),
      _0x3acf30 = (0, e.resolveBoardElementWorldBounds)(_0x4f52e7, _0x5889a1);
    if (_0x105579 && _0x3acf30) {
      let _0x126288 = Pe(_0x105579, _0x3acf30);
      ((_0x3aeedc = F(_0x7b706e, _0x126288.start)),
        (_0x43d3d2 = F(_0x2c5dd, _0x126288.end)),
        (_0x2bda0b = Ue(
          _0xe9e73,
          _0x417e69,
          _0x400537,
          _0x5889a1,
          _0x3aeedc,
          _0x43d3d2,
          _0x105579,
          _0x3acf30,
          _0x126288,
        )));
    }
  }
  let _0x353bf3 =
      _0x4db3d2.routing === undefined || _0x4db3d2.routing === "auto",
    _0x3ec7a8 =
      _0x4db3d2.routing !== undefined && _0x4db3d2.routing !== "auto"
        ? _0x4db3d2.routing
        : _0x2bda0b &&
            _0x4db3d2.routingMode !== "manual" &&
            (((_0x4c4936 = _0x4db3d2.waypoints) == null
              ? undefined
              : _0x4c4936.length) ?? 0) === 0
          ? "straight"
          : "orthogonal",
    _0x57db90 =
      _0x353bf3 &&
      _0x3ec7a8 === "orthogonal" &&
      ((_0x3171d1 = _0x4db3d2.style) == null
        ? undefined
        : _0x3171d1.cornerStyle) === undefined
        ? { ..._0x4db3d2.style, cornerStyle: "miter" }
        : _0x4db3d2.style;
  return {
    start: _0x3aeedc,
    end: _0x43d3d2,
    routing: _0x3ec7a8,
    style: _0x57db90,
  };
}
function Ge(_0x58167d, _0x31c56b) {
  return (
    _0x58167d.x >= _0x31c56b.left &&
    _0x58167d.x <= _0x31c56b.left + _0x31c56b.width &&
    _0x58167d.y >= _0x31c56b.top &&
    _0x58167d.y <= _0x31c56b.top + _0x31c56b.height
  );
}
function Ke(_0x44f92e, _0x305904, _0x25047d, _0x570197) {
  return _0x570197 === "content"
    ? _0x44f92e.containerData["kind"] === "swimlane" &&
      _0x44f92e.containerData["swimlane"]
      ? !!(0, e.resolveBoardSwimlaneContentLaneAtPointInFilledBounds)(
          _0x44f92e,
          _0x305904,
          _0x25047d,
        )
      : Ge(
          _0x25047d,
          (0, e.resolveBoardContainerBounds)(_0x44f92e, _0x305904)
            .contentBounds,
        )
    : Ge(_0x25047d, _0x305904);
}
function qe(_0x3be9f0, _0x124816, _0x372483) {
  return _0x124816.get(_0x372483) ?? _0x3be9f0.elements[_0x372483];
}
function L(_0xba5865, _0x4da1eb, _0x1b1659 = new Map()) {
  let _0x102372 = _0x4da1eb.parentId,
    _0x106a42 = new Set([_0x4da1eb.id]);
  for (; _0x102372;) {
    if (_0x106a42.has(_0x102372)) return true;
    let _0xd98075 = qe(_0xba5865, _0x1b1659, _0x102372);
    if (
      !_0xd98075 ||
      _0xd98075.type !== e.BoardElementType["Container"] ||
      _0xd98075.visible === false ||
      _0xd98075.locked === true ||
      _0xd98075.selectable === false
    )
      return true;
    (_0x106a42.add(_0x102372), (_0x102372 = _0xd98075.parentId));
  }
  return false;
}
function Je(_0x3dc9d3, _0x5750fa, _0x255151) {
  if (!_0x255151.parentId) return true;
  let _0xa2b46d = qe(_0x3dc9d3, _0x5750fa, _0x255151.parentId);
  if (!_0xa2b46d) return true;
  if (_0xa2b46d.type !== e.BoardElementType["Container"]) return false;
  let _0x16b5c5 = _0xa2b46d.containerData["behavior"];
  return _0xa2b46d.visible === false ||
    _0xa2b46d.locked === true ||
    _0xa2b46d.selectable === false ||
    _0x16b5c5.membershipLocked ||
    !_0x16b5c5.acceptsChildren ||
    L(_0x3dc9d3, _0xa2b46d, _0x5750fa)
    ? false
    : _0x255151.type !== e.BoardElementType["Container"] ||
        (_0x16b5c5.acceptsContainer && _0x16b5c5.allowNested);
}
function Ye(_0x194502) {
  let _0x36b7d7 = new Map(
    _0x194502.map((_0x28e9dc) => [_0x28e9dc.id, _0x28e9dc]),
  );
  return _0x194502.every((_0x261557) => {
    if (!_0x261557.parentId) return true;
    let _0x114da3 = new Set([_0x261557.id]),
      _0x5b006a = _0x261557.parentId;
    for (; _0x5b006a;) {
      var _0x88c270;
      if (_0x114da3.has(_0x5b006a)) return false;
      (_0x114da3.add(_0x5b006a),
        (_0x5b006a =
          (_0x88c270 = _0x36b7d7.get(_0x5b006a)) == null
            ? undefined
            : _0x88c270.parentId));
    }
    let _0x5e14c0 = _0x36b7d7.get(_0x261557.parentId);
    if (!_0x5e14c0) return true;
    if (_0x5e14c0.type !== e.BoardElementType["Container"]) return false;
    let _0x4aad04 = _0x5e14c0.containerData["behavior"];
    return _0x5e14c0.visible === false ||
      _0x5e14c0.locked === true ||
      _0x5e14c0.selectable === false ||
      _0x4aad04.membershipLocked ||
      !_0x4aad04.acceptsChildren
      ? false
      : _0x261557.type !== e.BoardElementType["Container"] ||
          (_0x4aad04.acceptsContainer && _0x4aad04.allowNested);
  });
}
function Xe(_0x36e1ee) {
  return (
    !!_0x36e1ee &&
    _0x36e1ee.type === e.BoardElementType["Container"] &&
    _0x36e1ee.visible !== false &&
    _0x36e1ee.locked !== true &&
    _0x36e1ee.selectable !== false
  );
}
function R(_0x2061cd, _0x2d01db) {
  return (
    _0x2061cd.type !== e.BoardElementType["Container"] ||
    ((_0x2061cd.transform["rotation"] ?? 0) === 0 &&
      ((_0x2d01db == null ? undefined : _0x2d01db.angle) ?? 0) === 0 &&
      (!_0x2061cd.containerData["behavior"].membershipLocked ||
        _0x2061cd.containerData["behavior"].autoResize))
  );
}
function z(_0x5bd154) {
  let _0x588ab6 = new Set();
  for (let _0x1972ce of _0x5bd154) {
    if (_0x588ab6.has(_0x1972ce)) return true;
    _0x588ab6.add(_0x1972ce);
  }
  return false;
}
function B(_0x89f696) {
  return [..._0x89f696.lanes].sort(
    (_0x377ce1, _0x2610c3) => _0x377ce1.order - _0x2610c3.order,
  );
}
function V(_0x84e242) {
  return _0x84e242.map((_0x171fe2, _0xc417a1) => ({
    ..._0x171fe2,
    order: _0xc417a1,
  }));
}
function Ze(_0x345fce, _0x5b4407) {
  return _0x345fce.lanes["some"](
    (_0x51c55b) => _0x51c55b.id === _0x5b4407 && _0x51c55b.locked === true,
  );
}
function Qe(_0x21c826, _0x43e694) {
  let _0x6999a1 = 0,
    _0x67f0bb = B(_0x21c826);
  for (let _0x541c96 of _0x67f0bb) {
    if (_0x541c96.id === _0x43e694) return _0x6999a1;
    _0x6999a1 += _0x541c96.size;
  }
}
function H(_0xd08b19, _0x8e51d5) {
  let _0x18927c = new Map(
      _0x8e51d5.map((_0x530036) => [_0x530036.id, _0x530036]),
    ),
    _0x3249fb = { ..._0xd08b19, lanes: _0x8e51d5 };
  return _0xd08b19.lanes["some"]((_0x302922) => {
    if (_0x302922.locked !== true) return false;
    let _0x1fa3db = _0x18927c.get(_0x302922.id),
      _0x403aff = Qe(_0xd08b19, _0x302922.id),
      _0x15b1a0 = Qe(_0x3249fb, _0x302922.id);
    return (
      !_0x1fa3db ||
      _0x15b1a0 !== _0x403aff ||
      _0x1fa3db.title !== _0x302922.title ||
      _0x1fa3db.order !== _0x302922.order ||
      _0x1fa3db.size !== _0x302922.size ||
      _0x1fa3db.minSize !== _0x302922.minSize ||
      _0x1fa3db.locked !== _0x302922.locked ||
      _0x1fa3db.collapsed !== _0x302922.collapsed
    );
  });
}
function $e(_0x28331c, _0x10660e) {
  return (
    _0x28331c.lanes["some"]((_0x5229b2) => _0x5229b2.locked === true) &&
    (_0x10660e.orientation !== _0x28331c.orientation ||
      _0x10660e.headerSize !== _0x28331c.headerSize ||
      _0x10660e.collapsedLaneSize !== _0x28331c.collapsedLaneSize)
  );
}
function U(..._0x1e58da) {
  let _0x4526fe = _0x1e58da
    .flatMap((_0x10389e) =>
      Array.isArray(_0x10389e)
        ? _0x10389e
        : _0x10389e === undefined
          ? []
          : [_0x10389e],
    )
    .map((_0xc65ddb) => _0xc65ddb.trim())
    .filter((_0x1158ea) => _0x1158ea.length > 0);
  return _0x4526fe.length > 0 ? [...new Set(_0x4526fe)] : undefined;
}
function et(..._0x1c9adf) {
  let _0xc00f54 = _0x1c9adf.flatMap((_0x37ad14) =>
    Array.isArray(_0x37ad14)
      ? _0x37ad14
      : _0x37ad14 === undefined
        ? []
        : [_0x37ad14],
  );
  return _0xc00f54.length > 0 ? [...new Set(_0xc00f54)] : undefined;
}
function tt(_0x512b47) {
  return {
    name: _0x512b47.name,
    description: _0x512b47.description,
    visible: _0x512b47.visible !== false,
    selectable: _0x512b47.selectable !== false,
    locked: _0x512b47.locked === true,
  };
}
function W(_0x114d06) {
  if (typeof _0x114d06 != "string") return;
  let _0x334b3e = _0x114d06.trim();
  return _0x334b3e.length > 0 ? _0x334b3e : undefined;
}
function nt(_0x1b39b7) {
  let _0x105dc3 = _0x1b39b7.shapeData["shapeText"];
  return W(
    !_0x105dc3 || typeof _0x105dc3 != "object" ? _0x105dc3 : _0x105dc3.text,
  );
}
function rt(_0xef34c8) {
  switch (_0xef34c8.type) {
    case e.BoardElementType["Shape"]:
      return nt(_0xef34c8);
    case e.BoardElementType["Connector"]:
      return W(
        (0, e.getBoardConnectorLabelText)(
          (0, e.getBoardConnectorLabels)(_0xef34c8.connectorData)[0],
        ),
      );
    case e.BoardElementType["Container"]:
      return W(_0xef34c8.containerData["title"]);
    case e.BoardElementType["Text"]:
    case e.BoardElementType["Placeholder"]:
      return W(_0xef34c8.text);
    default:
      return;
  }
}
function it(_0x470727) {
  switch (_0x470727.type) {
    case e.BoardElementType["Shape"]:
      return W(_0x470727.shapeData["shapeType"]);
    case e.BoardElementType["Connector"]:
      return W(_0x470727.connectorData["routing"]);
    case e.BoardElementType["Container"]:
      return W(_0x470727.containerData["kind"]);
    case e.BoardElementType["Placeholder"]:
      return W(_0x470727.placeholder["type"]);
    default:
      return;
  }
}
function at(_0x25eeff) {
  return _0x25eeff.kind === "free" ? undefined : _0x25eeff.shapeId;
}
function ot(_0x47979, _0x3cb8a6) {
  return n.Tools["deepClone"](_0x3cb8a6);
}
function st(_0x2d1dbe) {
  let _0x305bb1 = new Set();
  return _0x2d1dbe.every((_0x3ef92a) => {
    let _0x21c544 =
      _0x3ef92a.id["trim"]().length > 0 &&
      !_0x305bb1.has(_0x3ef92a.id) &&
      Number.isFinite(_0x3ef92a.x) &&
      Number.isFinite(_0x3ef92a.y) &&
      (_0x3ef92a.kind === "manual" || _0x3ef92a.kind === "auto");
    return (_0x305bb1.add(_0x3ef92a.id), _0x21c544);
  });
}
function G(_0x593848, _0x121b72, _0x31fe06, _0x432f5a) {
  return {
    id: _0x593848,
    ...j(_0x121b72),
    placement: {
      anchor: _0x31fe06,
      side: _0x432f5a,
      distance: 22,
      ...(_0x31fe06 === "start" || _0x31fe06 === "end"
        ? { alongOffset: 24 }
        : {}),
      orientation: "horizontal",
    },
  };
}
function ct(_0x16b88f) {
  switch (_0x16b88f) {
    case "directedAssociation":
      return { endMarker: { type: "openArrow", size: "md" } };
    case "aggregation":
      return { startMarker: { type: "openDiamond", size: "md" } };
    case "composition":
      return { startMarker: { type: "filledDiamond", size: "md" } };
    case "generalization":
      return { endMarker: { type: "openTriangle", size: "md" } };
    case "realization":
      return { dash: [6, 4], endMarker: { type: "openTriangle", size: "md" } };
    case "dependency":
      return { dash: [6, 4], endMarker: { type: "openArrow", size: "md" } };
    default:
      return {};
  }
}
function lt(_0x4480d6) {
  switch (_0x4480d6) {
    case "zeroOrOne":
      return { type: "composite", size: "md", parts: ["openCircle", "bar"] };
    case "oneOrMany":
      return { type: "composite", size: "md", parts: ["bar", "crowFoot"] };
    case "zeroOrMany":
      return {
        type: "composite",
        size: "md",
        parts: ["openCircle", "crowFoot"],
      };
    default:
      return { type: "doubleBar", size: "md" };
  }
}
function ut(_0x597e36) {
  switch (_0x597e36) {
    case "asynchronous":
    case "self":
      return { endMarker: { type: "openArrow", size: "md" } };
    case "create":
    case "reply":
      return { dash: [6, 4], endMarker: { type: "openArrow", size: "md" } };
    case "destroy":
      return { endMarker: { type: "cross", size: "md" } };
    default:
      return { endMarker: { type: "filledTriangle", size: "md" } };
  }
}
function dt(_0x428b46) {
  return (
    !!_0x428b46 &&
    [
      "association",
      "directedAssociation",
      "aggregation",
      "composition",
      "generalization",
      "realization",
      "dependency",
    ].includes(_0x428b46.type) &&
    [_0x428b46.start, _0x428b46.end].every(
      (_0x5bef37) =>
        !!_0x5bef37 &&
        typeof _0x5bef37.elementId == "string" &&
        _0x5bef37.elementId["length"] > 0 &&
        (_0x5bef37.multiplicity === undefined ||
          typeof _0x5bef37.multiplicity == "string"),
    )
  );
}
function ft(_0x4b8278) {
  return (
    !!_0x4b8278 &&
    ["identifying", "nonIdentifying"].includes(_0x4b8278.type) &&
    [_0x4b8278.start, _0x4b8278.end].every(
      (_0x50aa93) =>
        !!_0x50aa93 &&
        typeof _0x50aa93.elementId == "string" &&
        _0x50aa93.elementId["length"] > 0 &&
        ["one", "zeroOrOne", "oneOrMany", "zeroOrMany"].includes(
          _0x50aa93.cardinality,
        ),
    )
  );
}
function pt(_0x23c9b2) {
  var _0x569b3e, _0x48a9ce;
  let _0x22ae1a = _0x23c9b2.id ?? (0, n.generateRandomId)(6),
    _0x199917 = [];
  return (
    _0x23c9b2.name !== undefined &&
      _0x199917.push(G(_0x22ae1a + ":name", _0x23c9b2.name, "center", "left")),
    _0x23c9b2.start["role"] !== undefined &&
      _0x199917.push(
        G(_0x22ae1a + ":start-role", _0x23c9b2.start["role"], "start", "left"),
      ),
    (_0x569b3e = _0x23c9b2.start["multiplicity"]) != null &&
      _0x569b3e.trim() &&
      _0x199917.push(
        G(
          _0x22ae1a + ":start-multiplicity",
          _0x23c9b2.start["multiplicity"],
          "start",
          "right",
        ),
      ),
    _0x23c9b2.end["role"] !== undefined &&
      _0x199917.push(
        G(_0x22ae1a + ":end-role", _0x23c9b2.end["role"], "end", "left"),
      ),
    (_0x48a9ce = _0x23c9b2.end["multiplicity"]) != null &&
      _0x48a9ce.trim() &&
      _0x199917.push(
        G(
          _0x22ae1a + ":end-multiplicity",
          _0x23c9b2.end["multiplicity"],
          "end",
          "right",
        ),
      ),
    {
      id: _0x23c9b2.id,
      start: {
        elementId: _0x23c9b2.start["elementId"],
        connectionSiteId: _0x23c9b2.start["connectionSiteId"],
      },
      end: {
        elementId: _0x23c9b2.end["elementId"],
        connectionSiteId: _0x23c9b2.end["connectionSiteId"],
      },
      routing: _0x23c9b2.routing,
      style: { ...ct(_0x23c9b2.type), ..._0x23c9b2.style },
      labels: _0x199917,
      parentId: _0x23c9b2.parentId,
      laneId: _0x23c9b2.laneId,
    }
  );
}
function mt(_0x52996d) {
  let _0x2f7d61 =
    _0x52996d.label === undefined
      ? undefined
      : [
          G(
            (_0x52996d.id ?? (0, n.generateRandomId)(6)) + ":name",
            _0x52996d.label,
            "center",
            "left",
          ),
        ];
  return {
    id: _0x52996d.id,
    start: {
      elementId: _0x52996d.start["elementId"],
      connectionSiteId: _0x52996d.start["connectionSiteId"],
    },
    end: {
      elementId: _0x52996d.end["elementId"],
      connectionSiteId: _0x52996d.end["connectionSiteId"],
    },
    routing: _0x52996d.routing,
    style: {
      dash: _0x52996d.type === "nonIdentifying" ? [6, 4] : undefined,
      startMarker: lt(_0x52996d.start["cardinality"]),
      endMarker: lt(_0x52996d.end["cardinality"]),
      ..._0x52996d.style,
    },
    labels: _0x2f7d61,
    parentId: _0x52996d.parentId,
    laneId: _0x52996d.laneId,
  };
}
function ht(
  _0x39aa12,
  _0x208554,
  _0xfae1c8,
  _0x122ac4,
  _0x229008,
  _0x3b497d = "message",
) {
  var _0x3ab6a2;
  let _0x4e9b4b = (0, e.resolveBoardElementWorldBounds)(_0x122ac4, _0x39aa12),
    _0x456c21 = (0, e.resolveBoardElementWorldBounds)(_0x122ac4, _0x208554),
    _0x277dd5 =
      (_0x3ab6a2 = _0x122ac4[_0x39aa12]) == null
        ? undefined
        : _0x3ab6a2.element,
    _0x41bf5c =
      (_0x277dd5 == null ? undefined : _0x277dd5.type) ===
      e.BoardElementType["Shape"]
        ? (0, e.getBoardShapeSequenceLifelineData)(_0x277dd5.shapeData)
        : undefined,
    _0x3ac0fb = _0x41bf5c
      ? Math.max(_0x41bf5c.minLifelineHeight, _0x41bf5c.lifelineHeight)
      : 0;
  if (
    !_0x4e9b4b ||
    !_0x456c21 ||
    !Number.isFinite(_0xfae1c8) ||
    !Number.isFinite(_0x3ac0fb)
  )
    return null;
  let _0x1693c1 =
    _0x456c21.left + _0x456c21.width / 2 >= _0x4e9b4b.left + _0x4e9b4b.width / 2
      ? "right"
      : "left";
  if (_0x3b497d === "create")
    return _0x229008 !== undefined ||
      Math.abs(_0xfae1c8 - _0x4e9b4b.top - _0x4e9b4b.height / 2) > 0.000001
      ? null
      : { elementId: _0x39aa12, side: _0x1693c1, position: 0.5 };
  let _0x14b650 = _0xfae1c8 - _0x4e9b4b.top - _0x4e9b4b.height;
  if (
    _0x14b650 < 0 ||
    _0x14b650 > _0x3ac0fb ||
    (_0x3b497d === "destroy" && Math.abs(_0x14b650 - _0x3ac0fb) > 0.000001)
  )
    return null;
  let _0x6e30e = Object.values(_0x122ac4).filter(({ element: _0x57eac0 }) => {
    if (
      _0x57eac0.type !== e.BoardElementType["Shape"] ||
      _0x57eac0.visible === false ||
      (_0x229008 && _0x57eac0.id !== _0x229008)
    )
      return false;
    let _0x5e7a52 = (0, e.getBoardShapeSequenceActivationData)(
      _0x57eac0.shapeData,
    );
    if (
      (_0x5e7a52 == null ? undefined : _0x5e7a52.lifelineId) !== _0x39aa12 ||
      !_0x5e7a52.attachableToLifeline
    )
      return false;
    let _0x4ca6ad = (0, e.resolveBoardElementWorldBounds)(
      _0x122ac4,
      _0x57eac0.id,
    );
    return (
      !!_0x4ca6ad &&
      _0x4ca6ad.height > 0 &&
      _0xfae1c8 >= _0x4ca6ad.top &&
      _0xfae1c8 <= _0x4ca6ad.top + _0x4ca6ad.height
    );
  });
  if (_0x6e30e.length === 0 && !_0x229008)
    return { kind: "lifeline", shapeId: _0x39aa12, offsetY: _0x14b650 };
  if (_0x6e30e.length !== 1) return null;
  let _0x476a8f = _0x6e30e[0].element,
    _0x50e2b4 = (0, e.resolveBoardElementWorldBounds)(_0x122ac4, _0x476a8f.id);
  return {
    elementId: _0x476a8f.id,
    side: _0x1693c1,
    position: (_0xfae1c8 - _0x50e2b4.top) / _0x50e2b4.height,
  };
}
function gt(_0x43ecc5, _0x482cd4, _0x36d895, _0x40d016, _0x3fdffa) {
  let _0x4f3f35 = _0x43ecc5.fromParticipantId === _0x43ecc5.toParticipantId;
  if (
    (_0x43ecc5.type === "self" && !_0x4f3f35) ||
    (_0x43ecc5.type === "create" && _0x4f3f35)
  )
    return null;
  let _0x65c8f = ht(
      _0x43ecc5.fromParticipantId,
      _0x43ecc5.toParticipantId,
      _0x482cd4,
      _0x36d895,
      _0x43ecc5.fromActivationId,
    ),
    _0x3a71df = ht(
      _0x43ecc5.toParticipantId,
      _0x43ecc5.fromParticipantId,
      _0x482cd4 + (_0x4f3f35 ? _0x40d016 : 0),
      _0x36d895,
      _0x43ecc5.toActivationId,
      _0x43ecc5.type === "create" || _0x43ecc5.type === "destroy"
        ? _0x43ecc5.type
        : "message",
    );
  if (!_0x65c8f || !_0x3a71df) return null;
  let _0x3933d0 =
      _0x43ecc5.text === undefined
        ? undefined
        : [
            G(
              (_0x43ecc5.id ?? (0, n.generateRandomId)(6)) + ":message",
              _0x43ecc5.text,
              "center",
              "left",
            ),
          ],
    _0xbc6c80 = _0x43ecc5.routing ?? (_0x4f3f35 ? "orthogonal" : "straight"),
    _0x3b5323;
  if (
    _0x4f3f35 &&
    (_0xbc6c80 === "orthogonal" ||
      _0xbc6c80 === "auto" ||
      _0xbc6c80 === "freePolyline")
  ) {
    let _0x33d2ca = (0, e.resolveBoardElementWorldBounds)(
        _0x36d895,
        _0x43ecc5.fromParticipantId,
      ),
      _0x291495 =
        "elementId" in _0x65c8f
          ? (0, e.resolveBoardElementWorldBounds)(_0x36d895, _0x65c8f.elementId)
          : null,
      _0x49b453 =
        "elementId" in _0x3a71df
          ? (0, e.resolveBoardElementWorldBounds)(
              _0x36d895,
              _0x3a71df.elementId,
            )
          : null,
      _0x771796 = _0x33d2ca.left + _0x33d2ca.width / 2,
      _0x22a05f =
        Math.max(
          _0x291495 ? _0x291495.left + _0x291495.width : _0x771796,
          _0x49b453 ? _0x49b453.left + _0x49b453.width : _0x771796,
        ) + _0x3fdffa;
    _0x3b5323 = [
      { id: "self-send", kind: "manual", x: _0x22a05f, y: _0x482cd4 },
      {
        id: "self-receive",
        kind: "manual",
        x: _0x22a05f,
        y: _0x482cd4 + _0x40d016,
      },
    ];
  }
  return {
    id: _0x43ecc5.id,
    start: _0x65c8f,
    end: _0x3a71df,
    routing: _0xbc6c80,
    waypoints: _0x3b5323,
    style: { ...ut(_0x43ecc5.type), ..._0x43ecc5.style },
    labels: _0x3933d0,
    parentId: _0x43ecc5.parentId,
    laneId: _0x43ecc5.laneId,
  };
}
function _t(_0x1e0494, _0x1e9400, _0x3d02aa) {
  return _0x1e9400.routingMode === undefined
    ? _0x1e9400.waypoints === undefined
      ? _0x1e0494
      : ((_0x3d02aa == null ? undefined : _0x3d02aa.length) ?? 0) > 0
        ? "manual"
        : "auto"
    : _0x1e9400.routingMode;
}
function vt(_0xe662d6, _0x26136b) {
  return _0x26136b.type === e.BoardElementType["Connector"]
    ? {
        startElementId: at(_0x26136b.connectorData["start"]),
        endElementId: at(_0x26136b.connectorData["end"]),
      }
    : {};
}
function K(_0x1f17b4, _0x7a531b, _0x1a3134, _0x4ca625) {
  return {
    id: _0x7a531b.id,
    orderIndex: _0x4ca625,
    type: _0x7a531b.type,
    subtype: it(_0x7a531b),
    text: rt(_0x7a531b),
    parentId: _0x7a531b.parentId,
    ...vt(_0x1f17b4, _0x7a531b),
    ...(_0x7a531b.type === e.BoardElementType["Connector"]
      ? {
          connectorLabels: (0, e.getBoardConnectorLabels)(
            _0x7a531b.connectorData,
          ).map((_0x12c5f3) => {
            var _0x3c584d, _0x5dc85d;
            return {
              id: _0x12c5f3.id,
              text: W((0, e.getBoardConnectorLabelText)(_0x12c5f3)),
              anchor:
                ((_0x3c584d = _0x12c5f3.placement) == null
                  ? undefined
                  : _0x3c584d.anchor) ?? "center",
              side:
                ((_0x5dc85d = _0x12c5f3.placement) == null
                  ? undefined
                  : _0x5dc85d.side) ?? "onPath",
            };
          }),
        }
      : {}),
    laneId: _0x7a531b.laneId,
    ...tt(_0x7a531b),
    transform: { ..._0x7a531b.transform },
    bounds: (0, e.resolveBoardElementWorldBounds)(_0x1a3134, _0x7a531b.id),
  };
}
function q(_0x4c0e7f) {
  let _0x50c2f9 = _0x4c0e7f.filter((_0x11ed70) => !!_0x11ed70);
  if (_0x50c2f9.length === 0) return null;
  let _0x12f76a = Math.min(..._0x50c2f9.map((_0x39747c) => _0x39747c.left)),
    _0x43d4fe = Math.min(..._0x50c2f9.map((_0x437c84) => _0x437c84.top)),
    _0x133544 = Math.max(
      ..._0x50c2f9.map((_0x21c15e) => _0x21c15e.left + _0x21c15e.width),
    ),
    _0x183429 = Math.max(
      ..._0x50c2f9.map((_0xf45faa) => _0xf45faa.top + _0xf45faa.height),
    );
  return {
    left: _0x12f76a,
    top: _0x43d4fe,
    width: _0x133544 - _0x12f76a,
    height: _0x183429 - _0x43d4fe,
  };
}
function J(_0x48db8c) {
  return _0x48db8c
    ? {
        x: _0x48db8c.left + _0x48db8c.width / 2,
        y: _0x48db8c.top + _0x48db8c.height / 2,
      }
    : null;
}
function Y(_0x102699) {
  let _0x32fee4 = J(_0x102699);
  return _0x102699 && _0x32fee4
    ? { bounds: _0x102699, center: _0x32fee4 }
    : null;
}
function yt(_0x2e82d2) {
  let _0x324bf0 = Y(_0x2e82d2.bounds);
  return _0x324bf0
    ? {
        id: _0x2e82d2.id,
        type: _0x2e82d2.type,
        subtype: _0x2e82d2.subtype,
        orderIndex: _0x2e82d2.orderIndex,
        ..._0x324bf0,
      }
    : null;
}
function bt(_0x564664, _0x439ebf, _0x3bd9f2, _0x120cd6 = {}) {
  let _0xe3911c = St(_0x120cd6),
    _0xa7e28c = N(_0x564664, _0x439ebf),
    _0x61acbb = new Map(
      _0x439ebf.elementOrder["map"]((_0x2056c7, _0x576c4c) => [
        _0x2056c7,
        _0x576c4c,
      ]),
    );
  return _0x3bd9f2
    .filter((_0x3367a6) => xt(_0x3367a6, _0xe3911c))
    .map((_0x1e0e46) =>
      K(_0x439ebf, _0x1e0e46, _0xa7e28c, _0x61acbb.get(_0x1e0e46.id) ?? -1),
    );
}
function xt(_0x542d65, _0x515906) {
  return !_0x542d65 ||
    (!_0x515906.includeHidden && _0x542d65.visible === false) ||
    (_0x515906.includeLocked === false && _0x542d65.locked === true)
    ? false
    : !_0x515906.elementTypes ||
        _0x515906.elementTypes["includes"](_0x542d65.type);
}
function St(_0x53e840) {
  return {
    elementTypes: et(_0x53e840.elementType, _0x53e840.elementTypes),
    includeHidden: _0x53e840.includeHidden,
    includeLocked: _0x53e840.includeLocked,
  };
}
function Ct(_0x58566b) {
  return Object.keys(_0x58566b).length > 0 ? _0x58566b : null;
}
function X(_0x1c29b1, _0x25f3ca) {
  return (
    (_0x1c29b1.custom = _0x25f3ca.custom
      ? (Ct({ ..._0x25f3ca.custom }) ?? undefined)
      : undefined),
    _0x1c29b1
  );
}
function wt(_0x2f170d, _0x373b7a) {
  let _0x4c75d3 = v(_0x373b7a);
  return _0x4c75d3.documentData
    ? (0, e.mergeBoardRichTextDocument)(_0x2f170d, _0x4c75d3.documentData)
    : _0x2f170d;
}
function Tt(_0x37f176) {
  var _0x46b058;
  if (!_0x37f176) return;
  let _0x304959 = n.Tools["deepClone"](_0x37f176);
  return (
    (_0x46b058 = _0x304959.body) != null &&
      _0x46b058.paragraphs &&
      (_0x304959.body["paragraphs"] = _0x304959.body["paragraphs"].map(
        (_0x597c38) => ({ ..._0x597c38, paragraphId: "__facade-comparison__" }),
      )),
    _0x304959
  );
}
function Et(_0xe83121) {
  var _0x4f9898, _0x4afb58;
  let _0x3d052a = v(_0xe83121.text).text,
    _0x3cb3e4 = _0xe83121.textStyle
      ? (0, e.shapeTextToBoardDocumentTextStyle)(_0xe83121.textStyle)
      : undefined,
    _0x1428ac = (0, e.createBoardTextElement)({
      id: _0xe83121.id,
      left: _0xe83121.left,
      top: _0xe83121.top,
      width: _0xe83121.width,
      height: _0xe83121.height,
      horizontal: _0xe83121.horizontal,
      horizontalAlign:
        (_0x4f9898 = _0xe83121.textStyle) == null
          ? undefined
          : _0x4f9898.horizontalAlign,
      parentId: _0xe83121.parentId,
      laneId: _0xe83121.laneId,
      text: _0x3d052a,
      textStyle: _0x3cb3e4,
      verticalAlign:
        (_0x4afb58 = _0xe83121.textStyle) == null
          ? undefined
          : _0x4afb58.verticalAlign,
    });
  return (
    (_0x1428ac.textData = wt(_0x1428ac.textData, _0xe83121.text)),
    (_0x1428ac.textStyle = _0xe83121.textStyle
      ? { ..._0xe83121.textStyle }
      : undefined),
    X(_0x1428ac, _0xe83121)
  );
}
function Dt(_0x1f67a1, _0x477bbd) {
  return (
    _0x1f67a1.text === _0x477bbd.text &&
      C(Tt(_0x1f67a1.textData), Tt(_0x477bbd.textData)) &&
      (_0x477bbd.textData = _0x1f67a1.textData),
    _0x477bbd
  );
}
function Ot(_0x554cce, _0x40a34a) {
  var _0x4867e8, _0x37d5c2, _0x4237ba;
  let _0x34a06c = v(_0x40a34a).text,
    _0x3f18f6 = _0x554cce.textStyle
      ? (0, e.shapeTextToBoardDocumentTextStyle)(_0x554cce.textStyle)
      : undefined,
    _0xbbddc8 = (0, e.createBoardTextElement)({
      left: _0x554cce.transform["left"] ?? 0,
      top: _0x554cce.transform["top"] ?? 0,
      horizontal:
        ((_0x4867e8 = _0x554cce.custom) == null
          ? undefined
          : _0x4867e8.horizontal) !== false,
      horizontalAlign:
        (_0x37d5c2 = _0x554cce.textStyle) == null
          ? undefined
          : _0x37d5c2.horizontalAlign,
      text: _0x34a06c,
      textStyle: _0x3f18f6,
      verticalAlign:
        (_0x4237ba = _0x554cce.textStyle) == null
          ? undefined
          : _0x4237ba.verticalAlign,
    });
  return Dt(_0x554cce, {
    ..._0x554cce,
    text: _0x34a06c,
    textData: wt(_0xbbddc8.textData, _0x40a34a),
  });
}
function kt(_0x1b32a7) {
  let _0x1e6681 = (0, e.createBoardShapeElement)(_0x1b32a7);
  return (
    _0x1b32a7.text !== undefined &&
      (_0x1e6681.shapeData = {
        ..._0x1e6681.shapeData,
        shapeText: Me(_0x1b32a7.text, undefined),
      }),
    _0x1b32a7.textBox !== undefined &&
      (_0x1e6681.shapeData = (0, r.applyShapeTextBoxOptions)(
        _0x1e6681.shapeData,
        _0x1b32a7.textBox,
      )),
    X(_0x1e6681, _0x1b32a7)
  );
}
const At = [
  "id",
  "left",
  "top",
  "width",
  "height",
  "text",
  "textBox",
  "fillColor",
  "strokeColor",
  "strokeWidth",
  "parentId",
  "laneId",
  "custom",
  "insertIndex",
];
function Z(_0x27bba3) {
  return At.filter((_0x1cd17b) =>
    Object.prototype["hasOwnProperty"].call(_0x27bba3, _0x1cd17b),
  );
}
function jt(_0x14b9a2) {
  return X(
    (0, e.createBoardImageElement)({
      id: _0x14b9a2.id,
      source: _0x14b9a2.source,
      imageSourceType: _0x14b9a2.imageSourceType ?? n.ImageSourceType["URL"],
      left: _0x14b9a2.left,
      top: _0x14b9a2.top,
      width: _0x14b9a2.width,
      height: _0x14b9a2.height,
      parentId: _0x14b9a2.parentId,
      laneId: _0x14b9a2.laneId,
    }),
    _0x14b9a2,
  );
}
function Mt(_0x3bdba9, _0x1ca494) {
  return _0x1ca494 === undefined
    ? _0x3bdba9
    : { ..._0x3bdba9, parentId: _0x1ca494 };
}
function Nt(_0x2f4663, _0x4f6fb2) {
  let _0x59ceb8 = _0x2f4663.parentId === undefined;
  return {
    parentId:
      _0x2f4663.parentId ??
      (_0x59ceb8
        ? _0x4f6fb2 == null
          ? undefined
          : _0x4f6fb2.containerId
        : undefined),
    laneId:
      _0x2f4663.laneId ??
      (_0x59ceb8
        ? _0x4f6fb2 == null
          ? undefined
          : _0x4f6fb2.laneId
        : undefined),
  };
}
function Pt(_0x18aee4) {
  return X((0, e.createBoardContainerElement)(_0x18aee4), _0x18aee4);
}
function Ft(_0x5ee9c1) {
  return X((0, e.createBoardSwimlaneElement)(_0x5ee9c1), _0x5ee9c1);
}
function Q(_0x217d60) {
  return "kind" in _0x217d60;
}
function It(_0x111d06) {
  return Number.isFinite(_0x111d06) && _0x111d06 >= 0 && _0x111d06 <= 1;
}
let $ = class extends t.FBaseInitialable {
  constructor(
    _0xb21cbc,
    _0x56f69b,
    _0x48299d,
    _0xa8d1f5,
    _0x11a288,
    _0x22bc0d,
    _0x2a5449,
  ) {
    (super(_0x56f69b),
      (this._boardModel = _0xb21cbc),
      (this._injector = _0x56f69b),
      (this._commandService = _0x48299d),
      (this._resourceLoaderService = _0xa8d1f5),
      (this._univerInstanceService = _0x11a288),
      (this._permissionService = _0x22bc0d),
      (this._shapeHostAdapterRegistry = _0x2a5449),
      ce(this, "id", undefined),
      (this.id = this._boardModel["getUnitId"]()));
  }
  getId() {
    return this.id;
  }
  getPermission() {
    return new ie(this.id, this._commandService, this._permissionService);
  }
  getElementPermission(_0xa5a1eb) {
    return new ae(
      this.id,
      (0, e.getBoardElementPermissionObjectId)(
        this._boardModel["getActivePageId"](),
        _0xa5a1eb,
      ),
      this._commandService,
      this._permissionService,
    );
  }
  getName() {
    return this._boardModel["getSnapshot"]().name;
  }
  setName(_0x4414c8) {
    return (
      this._commandService["syncExecuteCommand"](e.SetBoardNameCommand["id"], {
        unitId: this.getId(),
        name: _0x4414c8,
      }),
      this
    );
  }
  getBackground() {
    let _0x1f4aa2 = this._boardModel["getActivePage"]().background;
    return _0x1f4aa2 ? n.Tools["deepClone"](_0x1f4aa2) : undefined;
  }
  setImageBackground(_0x7ea108) {
    return (
      this._commandService["syncExecuteCommand"](
        e.SetBoardPageBackgroundCommand["id"],
        {
          unitId: this.getId(),
          subUnitId: this._boardModel["getActivePageId"](),
          background: {
            type: e.BoardBackgroundType["Image"],
            source: _0x7ea108.source,
            imageSourceType:
              _0x7ea108.imageSourceType ?? n.ImageSourceType["URL"],
            fit: _0x7ea108.fit ?? "cover",
          },
        },
      ),
      this
    );
  }
  clearBackground() {
    return (
      this._commandService["syncExecuteCommand"](
        e.SetBoardPageBackgroundCommand["id"],
        {
          unitId: this.getId(),
          subUnitId: this._boardModel["getActivePageId"](),
          background: undefined,
        },
      ),
      this
    );
  }
  getData() {
    return n.Tools["deepClone"](this._boardModel["getSnapshot"]());
  }
  save() {
    return n.Tools["deepClone"](
      this._resourceLoaderService["saveUnit"](this.id) ??
        this._boardModel["getSnapshot"](),
    );
  }
  undo() {
    return (
      this._univerInstanceService["focusUnit"](this.id),
      this._commandService["syncExecuteCommand"](n.UndoCommand["id"])
    );
  }
  redo() {
    return (
      this._univerInstanceService["focusUnit"](this.id),
      this._commandService["syncExecuteCommand"](n.RedoCommand["id"])
    );
  }
  getThemeData() {
    return this._boardModel["getThemeData"]();
  }
  setTheme(_0x72e9c9) {
    let _0x65fa95 =
      typeof _0x72e9c9 == "string" ? _0x72e9c9 : _0x72e9c9.themeId;
    return this._commandService["syncExecuteCommand"](
      e.SetBoardThemeOperation["id"],
      { unitId: this.id, themeId: _0x65fa95 },
    );
  }
  beginImport(_0x54e8bb) {
    return this._commandService["syncExecuteCommand"](
      e.BeginBoardImportOperation["id"],
      {
        unitId: this.id,
        subUnitId: this._boardModel["getActivePageId"](),
        sourceType: _0x54e8bb,
      },
    );
  }
  beginExport(_0xbe93da) {
    return this._commandService["syncExecuteCommand"](
      e.BeginBoardExportOperation["id"],
      {
        unitId: this.id,
        subUnitId: this._boardModel["getActivePageId"](),
        targetType: _0xbe93da,
      },
    );
  }
  getElement(_0x12eaea) {
    let _0x8103d9 = this._getElementFromPage(
      _0x12eaea,
      this._boardModel["getActivePageId"](),
    );
    return _0x8103d9 ? n.Tools["deepClone"](_0x8103d9) : null;
  }
  getElements() {
    return n.Tools["deepClone"](this._boardModel["getActivePage"]().elements);
  }
  getElementLayout() {
    let _0x36c139 = this._boardModel["getActivePage"](),
      _0x32f75c = N(this.id, _0x36c139),
      _0x245657 = _0x36c139.elementOrder["map"]((_0x5472c1, _0x3c1395) => ({
        id: _0x5472c1,
        orderIndex: _0x3c1395,
        bounds: (0, e.resolveBoardElementWorldBounds)(_0x32f75c, _0x5472c1),
      }));
    return {
      subUnitId: _0x36c139.id,
      elements: _0x245657,
      contentBounds: q(_0x245657.map(({ bounds: _0x31bd0f }) => _0x31bd0f)),
    };
  }
  analyzeModelLayout(_0x73726e) {
    return this._commandService["syncExecuteCommand"](
      e.AnalyzeBoardModelLayoutCommand["id"],
      {
        unitId: this.id,
        subUnitId: this._boardModel["getActivePageId"](),
        focusPadding: _0x73726e,
      },
    );
  }
  resolveCaptureBounds(_0x3720eb = {}) {
    return this._commandService["syncExecuteCommand"](
      e.ResolveBoardCaptureBoundsCommand["id"],
      {
        ..._0x3720eb,
        unitId: this.id,
        subUnitId: this._boardModel["getActivePageId"](),
      },
    );
  }
  normalizeConnectorRouting(_0x29659) {
    return this._commandService["syncExecuteCommand"](
      e.NormalizeBoardConnectorRoutingCommand["id"],
      {
        unitId: this.id,
        subUnitId: this._boardModel["getActivePageId"](),
        connectorIds: _0x29659,
      },
    );
  }
  getElementsByIds(_0x32a19d) {
    let _0x293ba5 = U(_0x32a19d) ?? [];
    return Object.fromEntries(
      _0x293ba5.map((_0x20a393) => [_0x20a393, this.getElement(_0x20a393)]),
    );
  }
  findElements(_0x39ae78 = {}) {
    let _0x499aed = this._boardModel["getPage"](
      this._boardModel["getActivePageId"](),
    );
    if (!_0x499aed) return [];
    let _0x558a9b = St(_0x39ae78);
    return _0x499aed.elementOrder["map"](
      (_0x1d8add) => _0x499aed.elements[_0x1d8add],
    )
      .filter((_0x3196af) => xt(_0x3196af, _0x558a9b))
      .map((_0x3e1362) => n.Tools["deepClone"](_0x3e1362));
  }
  getElementIdsInOrder(_0x181253 = {}) {
    return this.findElements(_0x181253).map((_0x308215) => _0x308215.id);
  }
  describeElement(_0xe73b25) {
    let _0x595b5d = this._boardModel["getActivePage"](),
      _0x393145 = _0x595b5d == null ? undefined : _0x595b5d.elements[_0xe73b25];
    return !_0x595b5d || !_0x393145
      ? null
      : K(
          _0x595b5d,
          _0x393145,
          N(this.id, _0x595b5d),
          _0x595b5d.elementOrder["indexOf"](_0x393145.id),
        );
  }
  describeElementsByIds(_0x58fc3c) {
    let _0x26e604 = U(_0x58fc3c) ?? [];
    return Object.fromEntries(
      _0x26e604.map((_0x287a29) => [
        _0x287a29,
        this.describeElement(_0x287a29),
      ]),
    );
  }
  getElementBounds(_0x376367) {
    var _0x520082;
    return (
      ((_0x520082 = this.describeElement(_0x376367)) == null
        ? undefined
        : _0x520082.bounds) ?? null
    );
  }
  getElementCenter(_0x3ccec7) {
    return J(this.getElementBounds(_0x3ccec7));
  }
  getElementGeometry(_0x442dab) {
    return Y(this.getElementBounds(_0x442dab));
  }
  getElementsBoundsByIds(_0x2579e7) {
    let _0x51bcdc = this.describeElementsByIds(_0x2579e7);
    return Object.fromEntries(
      Object.entries(_0x51bcdc).map(([_0xffa6c0, _0xc54d9]) => [
        _0xffa6c0,
        (_0xc54d9 == null ? undefined : _0xc54d9.bounds) ?? null,
      ]),
    );
  }
  getElementsCentersByIds(_0x49cb03) {
    let _0x1557b6 = this.getElementsBoundsByIds(_0x49cb03);
    return Object.fromEntries(
      Object.entries(_0x1557b6).map(([_0x1aaa65, _0x20b125]) => [
        _0x1aaa65,
        J(_0x20b125),
      ]),
    );
  }
  getElementsGeometryByIds(_0x632d16) {
    let _0x27ec82 = this.getElementsBoundsByIds(_0x632d16);
    return Object.fromEntries(
      Object.entries(_0x27ec82).map(([_0x77857a, _0x10a1a6]) => [
        _0x77857a,
        Y(_0x10a1a6),
      ]),
    );
  }
  getElementsBoundingRectByIds(_0x26de95) {
    return q(Object.values(this.getElementsBoundsByIds(_0x26de95)));
  }
  checkElementIds(_0x5867d3) {
    let _0x101b60 = U(_0x5867d3) ?? [],
      _0x24db5b = _0x101b60.filter((_0x1f2a90) => !!this.getElement(_0x1f2a90)),
      _0x1a297a = _0x101b60.filter(
        (_0x2601f4) => !_0x24db5b.includes(_0x2601f4),
      );
    return {
      requestedIds: _0x101b60,
      existingIds: _0x24db5b,
      missingIds: _0x1a297a,
      allExist: _0x101b60.length > 0 && _0x1a297a.length === 0,
    };
  }
  checkElementIdTypes(_0x23c6d6, _0x406940) {
    let _0x374f4b = U(_0x23c6d6) ?? [],
      _0x1ca5f6 = et(_0x406940) ?? [],
      _0x2f47c8 = [],
      _0x188361 = [],
      _0x1a2ddd = [];
    return (
      _0x374f4b.forEach((_0x44dbe0) => {
        let _0x386df6 = this.getElement(_0x44dbe0);
        if (!_0x386df6) {
          _0x188361.push(_0x44dbe0);
          return;
        }
        if (_0x1ca5f6.includes(_0x386df6.type)) {
          _0x2f47c8.push(_0x44dbe0);
          return;
        }
        _0x1a2ddd.push({
          id: _0x44dbe0,
          actualType: _0x386df6.type,
          expectedTypes: _0x1ca5f6,
        });
      }),
      {
        requestedIds: _0x374f4b,
        matchingIds: _0x2f47c8,
        missingIds: _0x188361,
        mismatchedIds: _0x1a2ddd,
        allMatch:
          _0x374f4b.length > 0 &&
          _0x188361.length === 0 &&
          _0x1a2ddd.length === 0,
      }
    );
  }
  getElementsBoundingRect(_0x11a510 = {}) {
    return q(
      this.describeElements(_0x11a510).map((_0x7b6e1a) => _0x7b6e1a.bounds),
    );
  }
  getNextAvailableBounds(_0x13df11) {
    let { width: _0x1dc8f9, height: _0x54e6a0 } = _0x13df11,
      _0x29e4f1 = _0x13df11.gap ?? 80;
    if (
      !Number.isFinite(_0x1dc8f9) ||
      !Number.isFinite(_0x54e6a0) ||
      !Number.isFinite(_0x29e4f1) ||
      _0x1dc8f9 <= 0 ||
      _0x54e6a0 <= 0 ||
      _0x29e4f1 < 0
    )
      return null;
    let _0x1df6aa = this.getElementsBoundingRect(_0x13df11.query ?? {});
    if (!_0x1df6aa) {
      var _0x885c7, _0xee2063;
      return {
        left:
          ((_0x885c7 = _0x13df11.origin) == null ? undefined : _0x885c7.x) ?? 0,
        top:
          ((_0xee2063 = _0x13df11.origin) == null ? undefined : _0xee2063.y) ??
          0,
        width: _0x1dc8f9,
        height: _0x54e6a0,
      };
    }
    return _0x13df11.placement === "below"
      ? {
          left: _0x1df6aa.left,
          top: _0x1df6aa.top + _0x1df6aa.height + _0x29e4f1,
          width: _0x1dc8f9,
          height: _0x54e6a0,
        }
      : {
          left: _0x1df6aa.left + _0x1df6aa.width + _0x29e4f1,
          top: _0x1df6aa.top,
          width: _0x1dc8f9,
          height: _0x54e6a0,
        };
  }
  getElementsGeometry(_0x15e6ea = {}) {
    return this.describeElements(_0x15e6ea)
      .map(yt)
      .filter((_0x55cea6) => !!_0x55cea6);
  }
  describeElements(_0x25e229 = {}) {
    let _0x8ea749 = this._boardModel["getPage"](
      this._boardModel["getActivePageId"](),
    );
    return _0x8ea749
      ? bt(this.id, _0x8ea749, this.findElements(_0x25e229), _0x25e229)
      : [];
  }
  getElementMetadata(_0x395891) {
    let _0xc9b49b = this.getElement(_0x395891);
    return _0xc9b49b ? tt(_0xc9b49b) : null;
  }
  getElementsMetadataByIds(_0x165138) {
    let _0x3f25fb = U(_0x165138) ?? [];
    return Object.fromEntries(
      _0x3f25fb.map((_0x38e945) => [
        _0x38e945,
        this.getElementMetadata(_0x38e945),
      ]),
    );
  }
  getElementOrder() {
    return [...this._boardModel["getActivePage"]().elementOrder];
  }
  getContainerChildren(_0x5c1aa3) {
    var _0xe0f5ff;
    let _0x2dc480 = this._boardModel["getActivePage"]();
    return !_0x2dc480 ||
      ((_0xe0f5ff = _0x2dc480.elements[_0x5c1aa3]) == null
        ? undefined
        : _0xe0f5ff.type) !== e.BoardElementType["Container"]
      ? []
      : _0x2dc480.elementOrder["map"](
          (_0xa93e1e) => _0x2dc480.elements[_0xa93e1e],
        ).filter(
          (_0x245d16) => !!_0x245d16 && _0x245d16.parentId === _0x5c1aa3,
        );
  }
  getContainerDescendants(_0x139791) {
    if (!this._boardModel["getActivePage"]()) return [];
    let _0x4e7da2 = [],
      _0x564b14 = new Set(),
      _0x57ac49 = (_0x3b652) => {
        this.getContainerChildren(_0x3b652).forEach((_0x4e04f1) => {
          _0x564b14.has(_0x4e04f1.id) ||
            (_0x564b14.add(_0x4e04f1.id),
            _0x4e7da2.push(_0x4e04f1),
            _0x4e04f1.type === e.BoardElementType["Container"] &&
              _0x57ac49(_0x4e04f1.id));
        });
      };
    return (_0x57ac49(_0x139791), _0x4e7da2);
  }
  getElementParentChain(_0x198ea6) {
    var _0x125540;
    let _0x194df2 = this._boardModel["getActivePage"]();
    if (!_0x194df2) return [];
    let _0x1a53b3 = [],
      _0x4d1a86 = new Set([_0x198ea6]),
      _0x489375 =
        (_0x125540 = _0x194df2.elements[_0x198ea6]) == null
          ? undefined
          : _0x125540.parentId;
    for (; _0x489375 && !_0x4d1a86.has(_0x489375);) {
      let _0x23e0af = _0x194df2.elements[_0x489375];
      if (!_0x23e0af || _0x23e0af.type !== e.BoardElementType["Container"])
        break;
      (_0x1a53b3.push(_0x489375),
        _0x4d1a86.add(_0x489375),
        (_0x489375 = _0x23e0af.parentId));
    }
    return _0x1a53b3;
  }
  resolveContainerAtPoint(_0x531ef7, _0x1f68a1 = {}) {
    let _0x1ee4a8 = this._boardModel["getActivePageId"](),
      _0x37e000 = _0x1f68a1.area ?? "outer",
      _0x528ff1 = this._boardModel["getPage"](_0x1ee4a8);
    if (!_0x528ff1) return null;
    let _0x481c30 = N(this.id, _0x528ff1),
      _0x13af4b = _0x528ff1.elementOrder["map"]((_0x3c53c2, _0x23c522) => ({
        elementId: _0x3c53c2,
        orderIndex: _0x23c522,
      }))
        .map(({ elementId: _0x374e3a, orderIndex: _0x4dcef4 }) => {
          let _0xb80830 = _0x528ff1.elements[_0x374e3a];
          if (
            !_0xb80830 ||
            _0xb80830.type !== e.BoardElementType["Container"] ||
            _0xb80830.visible === false ||
            _0xb80830.selectable === false ||
            _0xb80830.locked === true ||
            L(_0x528ff1, _0xb80830)
          )
            return null;
          let _0x154eda = (0, e.resolveBoardElementWorldBounds)(
            _0x481c30,
            _0x374e3a,
          );
          return !_0x154eda || !Ke(_0xb80830, _0x154eda, _0x531ef7, _0x37e000)
            ? null
            : {
                element: _0xb80830,
                depth: this.getElementParentChain(_0x374e3a).length,
                orderIndex: _0x4dcef4,
              };
        })
        .filter((_0x21bf7c) => !!_0x21bf7c)
        .sort(
          (_0x426034, _0x5dacb5) =>
            _0x5dacb5.depth - _0x426034.depth ||
            _0x5dacb5.orderIndex - _0x426034.orderIndex,
        )[0];
    return (_0x13af4b == null ? undefined : _0x13af4b.element) ?? null;
  }
  resolveDropTargetAtPoint(_0x19729a, _0x116546 = {}) {
    var _0x140a7c;
    let _0x416c99 = this._boardModel["getActivePageId"](),
      _0x47adf0 = this._boardModel["getPage"](_0x416c99),
      _0x428e10 = this.resolveContainerAtPoint(_0x19729a, _0x116546);
    if (!_0x47adf0 || !_0x428e10) return null;
    let _0x4fc283 = N(this.id, _0x47adf0),
      _0x22ac02 = (0, e.resolveBoardElementWorldBounds)(
        _0x4fc283,
        _0x428e10.id,
      ),
      _0x792d1 =
        _0x428e10.containerData["kind"] === "swimlane" &&
        _0x428e10.containerData["swimlane"] &&
        _0x22ac02
          ? (_0x140a7c = (0,
            e.resolveBoardSwimlaneContentLaneAtPointInFilledBounds)(
              _0x428e10,
              _0x22ac02,
              _0x19729a,
            )) == null
            ? undefined
            : _0x140a7c.lane["id"]
          : undefined,
      _0x4083cb = _0x47adf0.elementOrder["indexOf"](_0x428e10.id);
    return {
      containerId: _0x428e10.id,
      laneId: _0x792d1,
      container: K(_0x47adf0, _0x428e10, _0x4fc283, _0x4083cb),
    };
  }
  addElement(_0x4bdd3d, _0x50c6a2 = {}) {
    return this._addElement(_0x4bdd3d, _0x50c6a2);
  }
  addElements(_0x47cba3, _0x9030b2 = {}) {
    return this._addElements(_0x47cba3, _0x9030b2);
  }
  _addElement(_0x37f669, _0x1dd302 = {}) {
    return this._addElements([_0x37f669], _0x1dd302);
  }
  _addElements(_0x59b389, _0x338363 = {}) {
    let _0x133d84 = this._boardModel["getActivePageId"](),
      _0xef47b4 = _0x338363.fitContainerId;
    return _0x59b389.length === 0 ||
      !this._canAddNewElementsToKnownPage(_0x59b389, _0x133d84) ||
      !this._canFitAddedElementsToKnownTarget(_0x59b389, _0x133d84, _0xef47b4)
      ? false
      : this._commandService["syncExecuteCommand"](
          e.AddBoardElementsOperation["id"],
          {
            unitId: this.id,
            subUnitId: _0x133d84,
            elements: _0x59b389,
            insertIndex: _0x338363.insertIndex,
            fitContainerId: _0xef47b4,
          },
        );
  }
  createContainer(_0x22fb5f) {
    let _0x35a5aa = Pt(_0x22fb5f);
    return _0x35a5aa ? this._addElement(_0x35a5aa, _0x22fb5f) : false;
  }
  createSwimlane(_0x3e4caa) {
    let _0x4cddbc = Ft(_0x3e4caa);
    return _0x4cddbc ? this._addElement(_0x4cddbc, _0x3e4caa) : false;
  }
  insertText(_0x59c62b) {
    let _0x5a2dc1 = Et(_0x59c62b);
    return (_0x5a2dc1 == null ? undefined : _0x5a2dc1.type) ===
      e.BoardElementType["Text"] && this._addElement(_0x5a2dc1, _0x59c62b)
      ? _0x5a2dc1
      : null;
  }
  insertImage(_0x78305a) {
    let _0x1e52f1 = jt(_0x78305a);
    return _0x1e52f1 && this._addElement(_0x1e52f1, _0x78305a)
      ? _0x1e52f1
      : null;
  }
  insertShape(_0x219b12) {
    let _0xdda9ae = Z(_0x219b12);
    if (_0xdda9ae.length > 0)
      return (
        console.warn(
          '[Board Shape Facade]: insertShape() expects IShapeCreateInput. Move geometry into "transform" and use the live Shape handle for text and style. Unsupported top-level fields: ' +
            _0xdda9ae.join(",\x20") +
            ".",
        ),
        null
      );
    let _0x1f30ac = this._getShapeAdapter();
    if (!_0x1f30ac) return null;
    try {
      let _0xbf40e5 = _0x1f30ac.createShape(this._getShapeScope(), _0x219b12);
      return _0xbf40e5
        ? this._createShapeHandle(_0xbf40e5)
        : (console.warn("[Board Shape Facade]: Failed to insert Shape."), null);
    } catch (_0x54e47f) {
      return (
        console.warn(
          "[Board\x20Shape\x20Facade]:\x20Failed\x20to\x20insert\x20Shape.",
          _0x54e47f,
        ),
        null
      );
    }
  }
  getShape(_0x32e0bd) {
    let _0x559eac = this._getShapeAdapter();
    if (!_0x559eac) return null;
    try {
      let _0x6a00c2 = _0x559eac.getShape({
        ...this._getShapeScope(),
        shapeId: _0x32e0bd,
      });
      return _0x6a00c2
        ? this._createShapeHandle(_0x6a00c2)
        : (console.warn(
            '[Board Shape Facade]: Shape "' + _0x32e0bd + '" was not found.',
          ),
          null);
    } catch (_0x114b90) {
      return (
        console.warn(
          '[Board Shape Facade]: Failed to read Shape "' + _0x32e0bd + "\x22.",
          _0x114b90,
        ),
        null
      );
    }
  }
  getShapes() {
    let _0x234b32 = this._getShapeAdapter();
    if (!_0x234b32) return [];
    try {
      return _0x234b32
        .listShapes(this._getShapeScope())
        .map((_0x2f0522) => this._createShapeHandle(_0x2f0522));
    } catch (_0x3cd37b) {
      return (
        console.warn("[Board Shape Facade]: Failed to list Shapes.", _0x3cd37b),
        []
      );
    }
  }
  _insertBoardShape(_0x47a8db) {
    let _0x15e1d2 = kt(_0x47a8db),
      _0x10b976 = _0x15e1d2 ? Mt(_0x15e1d2, _0x47a8db.parentId) : null;
    return _0x10b976 && this._addElement(_0x10b976, _0x47a8db)
      ? _0x10b976
      : null;
  }
  insertShapeAtPoint(_0x37a474) {
    let {
        attachToDropTarget: _0x1154e4 = true,
        dropTargetArea: _0x49b3fa = "content",
        point: _0x1820e3,
        ..._0x9b6c9b
      } = _0x37a474,
      _0x346b18 = Nt(
        _0x9b6c9b,
        _0x1154e4
          ? this.resolveDropTargetAtPoint(_0x1820e3, { area: _0x49b3fa })
          : null,
      ),
      _0x239426 = _0x346b18.parentId
        ? (0, e.resolveBoardElementLocalTransformForParent)(
            N(this.id, this._boardModel["getActivePage"]()),
            {
              parentId: _0x346b18.parentId,
              worldTransform: { left: _0x1820e3.x, top: _0x1820e3.y },
            },
          )
        : null;
    return this._insertBoardShape({
      ..._0x9b6c9b,
      ..._0x346b18,
      left: (_0x239426 == null ? undefined : _0x239426.left) ?? _0x1820e3.x,
      top: (_0x239426 == null ? undefined : _0x239426.top) ?? _0x1820e3.y,
    });
  }
  insertShapes(_0x108620) {
    if (_0x108620.length === 0) return null;
    let _0x227920 = _0x108620.find((_0x45ddf5) => Z(_0x45ddf5).length > 0);
    if (_0x227920) {
      let _0x102f54 = Z(_0x227920);
      return (
        console.warn(
          "[Board\x20Shape\x20Facade]:\x20insertShapes()\x20expects\x20IShapeCreateInput\x20items.\x20Move\x20geometry\x20into\x20\x22transform\x22\x20and\x20use\x20live\x20Shape\x20handles\x20for\x20text\x20and\x20style.\x20Unsupported\x20top-level\x20fields:\x20" +
            _0x102f54.join(",\x20") +
            ".",
        ),
        null
      );
    }
    let _0x44b732 = this._getShapeAdapter();
    if (!(_0x44b732 != null && _0x44b732.createShapes))
      return (
        console.warn(
          "[Board Shape Facade]: The active Board Shape adapter does not support atomic batch creation.",
        ),
        null
      );
    try {
      let _0x367219 = _0x44b732.createShapes(this._getShapeScope(), _0x108620);
      return (
        (_0x367219 == null
          ? undefined
          : _0x367219.map((_0x370d85) => this._createShapeHandle(_0x370d85))) ??
        null
      );
    } catch (_0x52520c) {
      return (
        console.warn(
          "[Board Shape Facade]: Failed to insert Shapes.",
          _0x52520c,
        ),
        null
      );
    }
  }
  insertConnector(_0x197a1d) {
    let _0x54e7c9 = this._boardModel["getActivePageId"](),
      _0x312610 = this._createFacadeConnectorElement(_0x197a1d, _0x54e7c9);
    return _0x312610 && this._addElement(_0x312610, _0x197a1d)
      ? _0x312610
      : null;
  }
  insertConnectors(_0x4e5b29, _0x27c546 = {}) {
    if (_0x4e5b29.length === 0) return null;
    let _0x33509a = this._boardModel["getActivePageId"](),
      _0x16e048 = _0x4e5b29.map((_0x1f28d0) =>
        this._createFacadeConnectorElement(_0x1f28d0, _0x33509a),
      );
    if (_0x16e048.some((_0x1498dc) => !_0x1498dc)) return null;
    let _0x3998a2 = _0x16e048;
    return this._addElements(_0x3998a2, _0x27c546) ? _0x3998a2 : null;
  }
  insertClassRelation(_0x269c16) {
    if (!dt(_0x269c16)) return null;
    let { insertIndex: _0x18302c, ..._0x5d8040 } = _0x269c16;
    return this.insertConnector({ ...pt(_0x5d8040), insertIndex: _0x18302c });
  }
  insertClassRelations(_0x43fd12, _0x30272b = {}) {
    return !Array.isArray(_0x43fd12) || !_0x43fd12.every(dt)
      ? null
      : this.insertConnectors(_0x43fd12.map(pt), _0x30272b);
  }
  insertEntityRelation(_0x42bea1) {
    if (!ft(_0x42bea1)) return null;
    let { insertIndex: _0x15e088, ..._0x5a35bf } = _0x42bea1;
    return this.insertConnector({ ...mt(_0x5a35bf), insertIndex: _0x15e088 });
  }
  insertEntityRelations(_0x21d086, _0x50c42c = {}) {
    return !Array.isArray(_0x21d086) || !_0x21d086.every(ft)
      ? null
      : this.insertConnectors(_0x21d086.map(mt), _0x50c42c);
  }
  insertSequenceMessage(_0x160199, _0x22a142 = {}) {
    var _0x2587cd;
    let { insertIndex: _0x2f15dc, ..._0x1f04c3 } = _0x160199;
    return (
      ((_0x2587cd = this.insertSequenceMessages([_0x1f04c3], {
        ..._0x22a142,
        insertIndex: _0x2f15dc,
      })) == null
        ? undefined
        : _0x2587cd[0]) ?? null
    );
  }
  insertSequenceMessages(_0x417eab, _0x4e1677 = {}) {
    let _0x18407e = _0x4e1677.firstOffsetY ?? 72,
      _0x339208 = _0x4e1677.step ?? 48,
      _0x443dea = _0x4e1677.selfMessageHeight ?? _0x339208 / 2,
      _0x17715e = _0x4e1677.selfMessageWidth ?? 96;
    if (
      _0x417eab.length === 0 ||
      !Number.isFinite(_0x18407e) ||
      _0x18407e < 0 ||
      !Number.isFinite(_0x339208) ||
      _0x339208 <= 0 ||
      !Number.isFinite(_0x443dea) ||
      _0x443dea <= 0 ||
      !Number.isFinite(_0x17715e) ||
      _0x17715e <= 0 ||
      _0x417eab.some(
        (_0x57e8b6) =>
          !Number.isInteger(_0x57e8b6.order) ||
          _0x57e8b6.order <= 0 ||
          ![
            "synchronous",
            "asynchronous",
            "reply",
            "create",
            "destroy",
            "self",
          ].includes(_0x57e8b6.type),
      ) ||
      new Set(_0x417eab.map((_0x1e9131) => _0x1e9131.order)).size !==
        _0x417eab.length
    )
      return null;
    let _0x1e6ce7 = this._boardModel["getActivePage"](),
      _0x2d642c = _0x417eab.flatMap((_0x4716bd) => [
        _0x4716bd.fromParticipantId,
        _0x4716bd.toParticipantId,
      ]);
    if (
      _0x2d642c.some(
        (_0x55eb01) =>
          !(0, e.isBoardSequenceLifelineElement)(_0x1e6ce7.elements[_0x55eb01]),
      )
    )
      return null;
    let _0x3b1715 = N(this.id, _0x1e6ce7),
      _0x49e825 =
        _0x4e1677.timeOriginY ??
        _0x2d642c.reduce((_0x55d633, _0x16863d) => {
          let _0x14c8fb = (0, e.resolveBoardElementWorldBounds)(
            _0x3b1715,
            _0x16863d,
          );
          return _0x14c8fb
            ? Math.min(_0x55d633, _0x14c8fb.top + _0x14c8fb.height)
            : NaN;
        }, 1 / 0);
    if (!Number.isFinite(_0x49e825)) return null;
    let _0x55bf9c = [];
    for (let _0x1b8f09 of _0x417eab) {
      let _0x243837 = gt(
        _0x1b8f09,
        _0x49e825 + _0x18407e + (_0x1b8f09.order - 1) * _0x339208,
        _0x3b1715,
        _0x443dea,
        _0x17715e,
      );
      if (!_0x243837) return null;
      _0x55bf9c.push(_0x243837);
    }
    return this.insertConnectors(_0x55bf9c, {
      insertIndex: _0x4e1677.insertIndex,
      fitContainerId: _0x4e1677.fitContainerId,
    });
  }
  _getShapeScope() {
    return {
      hostType: n.UniverInstanceType["UNIVER_BOARD"],
      unitId: this.id,
      subUnitId: this._boardModel["getActivePageId"](),
    };
  }
  _getShapeAdapter() {
    return this._shapeHostAdapterRegistry["get"](
      n.UniverInstanceType["UNIVER_BOARD"],
    );
  }
  _createShapeHandle(_0x54b652) {
    let _0x331e81 = {
      hostType: n.UniverInstanceType["UNIVER_BOARD"],
      unitId: _0x54b652.unitId,
      subUnitId: _0x54b652.subUnitId,
      shapeId: _0x54b652.shapeId,
    };
    return (0, r.isConnectorShape)(_0x54b652.shapeType)
      ? this._injector["createInstance"](
          i.FConnectorShape,
          _0x331e81,
          this._injector,
        )
      : this._injector["createInstance"](i.FShape, _0x331e81, this._injector);
  }
  setElementMetadata(_0xd2db58, _0x519864) {
    return this.setElementsMetadata({ [_0xd2db58]: _0x519864 });
  }
  setElementsMetadata(_0x6f889a) {
    let _0x4c2eed = this._boardModel["getActivePageId"](),
      _0x176587 = Object.entries(_0x6f889a);
    if (_0x176587.length === 0) return false;
    let _0x11f6c9 = [];
    for (let [_0x40d285, _0x10c3ec] of _0x176587) {
      var _0x4048da;
      let _0x21f5b4 =
        (_0x4048da = this._boardModel["getPage"](_0x4c2eed)) == null
          ? undefined
          : _0x4048da.elements[_0x40d285];
      if (!_0x21f5b4 || Object.keys(_0x10c3ec).length === 0) return false;
      let _0x2b0594 = _0x21f5b4;
      Object.entries(_0x10c3ec).some(([_0x45200a, _0x4528a1]) =>
        _0x4528a1 === undefined
          ? Object.prototype["hasOwnProperty"].call(_0x2b0594, _0x45200a)
          : _0x2b0594[_0x45200a] !== _0x4528a1,
      ) && _0x11f6c9.push({ elementId: _0x40d285, metadata: _0x10c3ec });
    }
    return (
      _0x11f6c9.length === 0 ||
      this._commandService["syncExecuteCommand"](
        e.SetBoardElementsMetadataOperation["id"],
        { unitId: this.id, subUnitId: _0x4c2eed, updates: _0x11f6c9 },
      )
    );
  }
  setElementTransform(_0x6d1939, _0x17336b) {
    return this.setElementsTransform({ [_0x6d1939]: _0x17336b });
  }
  setElementsTransform(_0x53ecd1) {
    let _0x3916bf = this._boardModel["getActivePageId"](),
      _0x1c1ecd = Object.entries(_0x53ecd1);
    if (_0x1c1ecd.length === 0) return false;
    let _0x9a5132 = [];
    for (let [_0x2236ce, _0x49eff7] of _0x1c1ecd) {
      var _0x26da74;
      let _0x8cc99d =
          (_0x26da74 = this._boardModel["getPage"](_0x3916bf)) == null
            ? undefined
            : _0x26da74.elements[_0x2236ce],
        _0xf6b508 = _0x8cc99d ? ue(_0x8cc99d, _0x49eff7) : null;
      if (!_0xf6b508) return false;
      _0x9a5132.push({ elementId: _0x2236ce, element: _0xf6b508 });
    }
    return this._updateElements(_0x9a5132, _0x3916bf);
  }
  translateElement(_0x524fba, _0x5561ef) {
    return this.translateElements([_0x524fba], _0x5561ef);
  }
  translateElements(_0xb46858, _0x3db321) {
    let _0x518a5c = this._boardModel["getActivePageId"](),
      _0x1704c7 = U(_0xb46858),
      _0x1cc84c = w(_0x3db321);
    if (!_0x1704c7 || !_0x1cc84c) return false;
    let _0x1e53aa = [];
    for (let _0x38a8b1 of _0x1704c7) {
      var _0xd513df;
      let _0x21fe9d =
          (_0xd513df = this._boardModel["getPage"](_0x518a5c)) == null
            ? undefined
            : _0xd513df.elements[_0x38a8b1],
        _0x488b5b = _0x21fe9d ? T(_0x21fe9d, _0x1cc84c) : null;
      if (!_0x488b5b) return false;
      _0x1e53aa.push({ elementId: _0x38a8b1, element: _0x488b5b });
    }
    return this._updateElements(_0x1e53aa, _0x518a5c);
  }
  alignElements(_0x35186c, _0x28dd88) {
    let _0x2a7ca3 = U(_0x35186c);
    if (!_0x2a7ca3 || _0x2a7ca3.length < 2 || !fe(_0x28dd88)) return false;
    let _0x36a684 = this._getElementGeometries(_0x2a7ca3),
      _0x524aef =
        _0x36a684 && q(_0x36a684.map((_0x3473a7) => _0x3473a7.bounds));
    if (!_0x36a684 || !_0x524aef) return false;
    let _0x19894c = this._boardModel["getActivePageId"](),
      _0x52447e = [];
    for (let _0x4960bb of _0x36a684) {
      var _0xa7df5b;
      let _0x503453 = he(_0x4960bb, _0x524aef, _0x28dd88);
      if (!_0x503453) continue;
      let _0x34f229 =
          (_0xa7df5b = this._boardModel["getPage"](_0x19894c)) == null
            ? undefined
            : _0xa7df5b.elements[_0x4960bb.id],
        _0x5086f6 = _0x34f229 && T(_0x34f229, _0x503453);
      if (!_0x5086f6) return false;
      _0x52447e.push({ elementId: _0x4960bb.id, element: _0x5086f6 });
    }
    return _0x52447e.length > 0 && this._updateElements(_0x52447e, _0x19894c);
  }
  distributeElements(_0x13fd34, _0x1e7806) {
    let _0x5e4e67 = U(_0x13fd34);
    if (!_0x5e4e67 || _0x5e4e67.length < 3 || !me(_0x1e7806)) return false;
    let _0x2b6ec1 = this._getElementGeometries(_0x5e4e67),
      _0x2799af = _0x2b6ec1 && ge(_0x2b6ec1, _0x1e7806);
    if (!_0x2b6ec1 || !_0x2799af || _0x2799af.size === 0) return false;
    let _0x4ce386 = this._boardModel["getActivePageId"](),
      _0x565a78 = [];
    for (let _0x3e64d6 of _0x2b6ec1) {
      var _0x51ff6b;
      let _0x3a6c76 = _0x2799af.get(_0x3e64d6.id);
      if (!_0x3a6c76) continue;
      let _0x24e505 =
          (_0x51ff6b = this._boardModel["getPage"](_0x4ce386)) == null
            ? undefined
            : _0x51ff6b.elements[_0x3e64d6.id],
        _0xd8f1a4 = _0x24e505 && T(_0x24e505, _0x3a6c76);
      if (!_0xd8f1a4) return false;
      _0x565a78.push({ elementId: _0x3e64d6.id, element: _0xd8f1a4 });
    }
    return this._updateElements(_0x565a78, _0x4ce386);
  }
  arrangeElements(_0x41c696, _0x353229) {
    let _0x5382b6 = U(_0x41c696),
      _0x334c50 = _e(_0x353229);
    if (!_0x5382b6 || !_0x334c50) return false;
    let _0x8dd703 = this._getElementGeometries(_0x5382b6);
    return !!_0x8dd703 && this._applyTranslations(Se(_0x8dd703, _0x334c50));
  }
  arrangeElementsInGrid(_0x48dea5, _0x4bb4ac) {
    let _0x3ab329 = U(_0x48dea5),
      _0x51b4f3 = ve(_0x4bb4ac);
    if (!_0x3ab329 || !_0x51b4f3) return false;
    let _0x550e82 = this._getElementGeometries(_0x3ab329);
    return !!_0x550e82 && this._applyTranslations(Ce(_0x550e82, _0x51b4f3));
  }
  arrangeElementsInLayers(_0x57b729, _0xbc6650 = {}) {
    let _0x423a50 = xe(_0x57b729, _0xbc6650);
    if (!_0x423a50) return false;
    let {
        align: _0x565c7c,
        direction: _0x42b19b,
        elementIds: _0x20835b,
        itemAlign: _0x1f093a,
        itemGap: _0x26ca36,
        layerGap: _0x1bf8cc,
        layers: _0x258621,
        start: _0x402606,
      } = _0x423a50,
      _0x335f73 = this._getElementGeometries(_0x20835b);
    if (!_0x335f73) return false;
    let _0x172ff4 = new Map(
        _0x335f73.map((_0x930f68) => [_0x930f68.id, _0x930f68]),
      ),
      _0x105476 = _0x402606 ?? {
        x: _0x335f73[0].bounds["left"],
        y: _0x335f73[0].bounds["top"],
      },
      _0x5200a1 = _0x258621.map((_0x3367a5) => {
        let _0x5c0bcc = _0x3367a5.map((_0x18508d) => _0x172ff4.get(_0x18508d));
        return {
          items: _0x5c0bcc,
          mainSize: Math.max(
            ...(_0x42b19b === "vertical"
              ? _0x5c0bcc.map((_0x483abd) => _0x483abd.bounds["height"])
              : _0x5c0bcc.map((_0x503c88) => _0x503c88.bounds["width"])),
          ),
          crossSize: _0x5c0bcc.reduce(
            (_0x4abf1f, _0x26d7e7, _0x239df1) =>
              _0x4abf1f +
              (_0x42b19b === "vertical"
                ? _0x26d7e7.bounds["width"]
                : _0x26d7e7.bounds["height"]) +
              (_0x239df1 ? _0x26ca36 : 0),
            0,
          ),
        };
      }),
      _0x3acf4a = Math.max(
        ..._0x5200a1.map((_0x3401a4) => _0x3401a4.crossSize),
      ),
      _0x5af1e2 = {},
      _0x124d5a = _0x42b19b === "vertical" ? _0x105476.y : _0x105476.x;
    for (let _0x19249a of _0x5200a1) {
      let _0x54bacd =
        (_0x42b19b === "vertical" ? _0x105476.x : _0x105476.y) +
        D(_0x3acf4a, _0x19249a.crossSize, _0x565c7c);
      for (let _0x1f61b5 of _0x19249a.items) {
        let _0x17014a =
            _0x42b19b === "vertical"
              ? _0x1f61b5.bounds["height"]
              : _0x1f61b5.bounds["width"],
          _0x1b21c3 =
            _0x42b19b === "vertical"
              ? _0x1f61b5.bounds["width"]
              : _0x1f61b5.bounds["height"],
          _0x519b2f = D(_0x19249a.mainSize, _0x17014a, _0x1f093a);
        ((_0x5af1e2[_0x1f61b5.id] =
          _0x42b19b === "vertical"
            ? { left: O(_0x54bacd), top: O(_0x124d5a + _0x519b2f) }
            : { left: O(_0x124d5a + _0x519b2f), top: O(_0x54bacd) }),
          (_0x54bacd += _0x1b21c3 + _0x26ca36));
      }
      _0x124d5a += _0x19249a.mainSize + _0x1bf8cc;
    }
    return this.setElementsTransform(_0x5af1e2);
  }
  arrangeElementsInCircle(_0x1ee016, _0x4f1475) {
    let _0xeba7f8 = U(_0x1ee016);
    if (
      !_0xeba7f8 ||
      !Number.isFinite(_0x4f1475.center["x"]) ||
      !Number.isFinite(_0x4f1475.center["y"]) ||
      !Number.isFinite(_0x4f1475.radius) ||
      _0x4f1475.radius <= 0 ||
      (_0x4f1475.startAngle !== undefined &&
        !Number.isFinite(_0x4f1475.startAngle))
    )
      return false;
    let _0x444be6 = this._getElementGeometries(_0xeba7f8);
    if (!_0x444be6) return false;
    let _0x55aa62 =
        (360 / _0x444be6.length) * (_0x4f1475.clockwise === false ? -1 : 1),
      _0x14a112 = _0x4f1475.startAngle ?? -90,
      _0x2f09e3 = Object.fromEntries(
        _0x444be6.map((_0x57f914, _0x59d85f) => {
          let _0x49d6b3 = ((_0x14a112 + _0x55aa62 * _0x59d85f) * Math.PI) / 180;
          return [
            _0x57f914.id,
            {
              left: O(
                _0x4f1475.center["x"] +
                  Math.cos(_0x49d6b3) * _0x4f1475.radius -
                  _0x57f914.bounds["width"] / 2,
              ),
              top: O(
                _0x4f1475.center["y"] +
                  Math.sin(_0x49d6b3) * _0x4f1475.radius -
                  _0x57f914.bounds["height"] / 2,
              ),
            },
          ];
        }),
      );
    return this.setElementsTransform(_0x2f09e3);
  }
  fitElementsIntoBounds(_0x59d61e, _0x38a467, _0x4dc564 = {}) {
    let _0x5c554d = U(_0x59d61e);
    if (
      !_0x5c554d ||
      !Number.isFinite(_0x38a467.left) ||
      !Number.isFinite(_0x38a467.top) ||
      !Number.isFinite(_0x38a467.width) ||
      !Number.isFinite(_0x38a467.height) ||
      _0x38a467.width <= 0 ||
      _0x38a467.height <= 0
    )
      return false;
    let _0x2709a7 = this._getElementGeometries(_0x5c554d),
      _0x46207c =
        _0x2709a7 && q(_0x2709a7.map((_0x4374f7) => _0x4374f7.bounds));
    if (
      !_0x2709a7 ||
      !_0x46207c ||
      _0x46207c.width <= 0 ||
      _0x46207c.height <= 0
    )
      return false;
    let _0x3d8c57 = _0x38a467.width / _0x46207c.width,
      _0x5e1cb4 = _0x38a467.height / _0x46207c.height,
      _0x42ed3e = _0x4dc564.preserveAspectRatio !== false,
      _0x2ecfdc = _0x42ed3e ? Math.min(_0x3d8c57, _0x5e1cb4) : _0x3d8c57,
      _0x4e5355 = _0x42ed3e ? Math.min(_0x3d8c57, _0x5e1cb4) : _0x5e1cb4,
      _0x12e5c8 = _0x42ed3e
        ? (_0x38a467.width - _0x46207c.width * _0x2ecfdc) / 2
        : 0,
      _0x333c57 = _0x42ed3e
        ? (_0x38a467.height - _0x46207c.height * _0x4e5355) / 2
        : 0,
      _0x13aa25 = Object.fromEntries(
        _0x2709a7.map((_0x331339) => [
          _0x331339.id,
          {
            left: O(
              _0x38a467.left +
                _0x12e5c8 +
                (_0x331339.bounds["left"] - _0x46207c.left) * _0x2ecfdc,
            ),
            top: O(
              _0x38a467.top +
                _0x333c57 +
                (_0x331339.bounds["top"] - _0x46207c.top) * _0x4e5355,
            ),
            width: O(_0x331339.bounds["width"] * _0x2ecfdc),
            height: O(_0x331339.bounds["height"] * _0x4e5355),
          },
        ]),
      );
    return this.setElementsTransform(_0x13aa25);
  }
  getConnectorStyle(_0x3714f2) {
    let _0x56a40b = this._boardModel["getActivePage"]().elements[_0x3714f2];
    return (_0x56a40b == null ? undefined : _0x56a40b.type) ===
      e.BoardElementType["Connector"]
      ? Oe(_0x56a40b)
      : null;
  }
  setConnectorStyle(_0x18fa20, _0x51ecb1) {
    var _0x3ea120;
    let _0x28871d = this._boardModel["getActivePageId"](),
      _0x22ebfe =
        (_0x3ea120 = this._boardModel["getPage"](_0x28871d)) == null
          ? undefined
          : _0x3ea120.elements[_0x18fa20],
      _0x55bff5 =
        (_0x22ebfe == null ? undefined : _0x22ebfe.type) ===
        e.BoardElementType["Connector"]
          ? De(_0x22ebfe, _0x51ecb1)
          : null;
    return (
      !!_0x55bff5 &&
      this._updateElements(
        [{ elementId: _0x18fa20, element: _0x55bff5 }],
        _0x28871d,
      )
    );
  }
  getContainerStyle(_0x5be95e) {
    let _0x424546 = this._boardModel["getActivePage"]().elements[_0x5be95e];
    return (_0x424546 == null ? undefined : _0x424546.type) ===
      e.BoardElementType["Container"]
      ? ke(_0x424546)
      : null;
  }
  setContainerStyle(_0x454724, _0x41ba08) {
    var _0x4e6029;
    let _0x423d12 = this._boardModel["getActivePageId"](),
      _0x258a9d =
        (_0x4e6029 = this._boardModel["getPage"](_0x423d12)) == null
          ? undefined
          : _0x4e6029.elements[_0x454724],
      _0x285edd =
        (_0x258a9d == null ? undefined : _0x258a9d.type) ===
        e.BoardElementType["Container"]
          ? Ae(_0x258a9d, _0x41ba08)
          : null;
    return (
      !!_0x285edd &&
      this._updateElements(
        [{ elementId: _0x454724, element: _0x285edd }],
        _0x423d12,
      )
    );
  }
  getTextContent(_0xda8719) {
    let _0x13d29f = this._boardModel["getActivePage"]().elements[_0xda8719];
    return (_0x13d29f == null ? undefined : _0x13d29f.type) ===
      e.BoardElementType["Text"]
      ? A(_0x13d29f.textData, _0x13d29f.text)
      : null;
  }
  setTextContent(_0x4c6735, _0x29a0cf) {
    var _0x57fcf5;
    let _0x29082f = this._boardModel["getActivePageId"](),
      _0x385bb4 =
        (_0x57fcf5 = this._boardModel["getPage"](_0x29082f)) == null
          ? undefined
          : _0x57fcf5.elements[_0x4c6735];
    return (
      (_0x385bb4 == null ? undefined : _0x385bb4.type) ===
        e.BoardElementType["Text"] &&
      this._updateElements(
        [{ elementId: _0x4c6735, element: Ot(_0x385bb4, _0x29a0cf) }],
        _0x29082f,
      )
    );
  }
  getConnectorLabelText(_0x57ab01) {
    let _0x1357ba = this._boardModel["getActivePage"]().elements[_0x57ab01],
      _0x2ab26e =
        (_0x1357ba == null ? undefined : _0x1357ba.type) ===
        e.BoardElementType["Connector"]
          ? (0, e.getBoardConnectorLabels)(_0x1357ba.connectorData)[0]
          : undefined;
    return _0x2ab26e
      ? A(
          (0, e.getBoardConnectorLabelDocumentData)(_0x2ab26e),
          (0, e.getBoardConnectorLabelText)(_0x2ab26e),
        )
      : null;
  }
  setConnectorLabelText(_0x564656, _0x32a8d1) {
    let _0x2031cc = this._boardModel["getActivePageId"](),
      _0x76fa09 = v(_0x32a8d1);
    return this._commandService["syncExecuteCommand"](
      e.SetBoardConnectorLabelTextCommand["id"],
      {
        unitId: this.id,
        subUnitId: _0x2031cc,
        elementId: _0x564656,
        content: _0x76fa09.documentData ?? _0x76fa09.text,
      },
    );
  }
  getConnectorLabelStyle(_0x59af76) {
    let _0x4485f4 = this._boardModel["getActivePage"]().elements[_0x59af76],
      _0x597f62 =
        (_0x4485f4 == null ? undefined : _0x4485f4.type) ===
        e.BoardElementType["Connector"]
          ? (0, e.getBoardConnectorLabels)(_0x4485f4.connectorData)[0]
          : undefined;
    return _0x597f62 ? n.Tools["deepClone"](_0x597f62.style ?? {}) : null;
  }
  setConnectorLabelStyle(_0x28bb69, _0x2e8dfb) {
    return this._commandService["syncExecuteCommand"](
      e.SetBoardConnectorLabelStyleCommand["id"],
      {
        unitId: this.id,
        subUnitId: this._boardModel["getActivePageId"](),
        elementId: _0x28bb69,
        style: _0x2e8dfb,
      },
    );
  }
  removeConnectorLabel(_0x376ae7, _0x668124) {
    if (_0x668124 !== undefined) {
      let _0x276ded = this.getConnectorLabels(_0x376ae7);
      return _0x276ded.some((_0x3fba2f) => _0x3fba2f.id === _0x668124)
        ? this.setConnectorLabels(
            _0x376ae7,
            _0x276ded.filter((_0x488d5e) => _0x488d5e.id !== _0x668124),
          )
        : false;
    }
    return this._commandService["syncExecuteCommand"](
      e.RemoveBoardConnectorLabelCommand["id"],
      {
        unitId: this.id,
        subUnitId: this._boardModel["getActivePageId"](),
        elementId: _0x376ae7,
      },
    );
  }
  getConnectorLabels(_0x292b70) {
    let _0x1fa2c7 = this._boardModel["getActivePage"]().elements[_0x292b70];
    return (_0x1fa2c7 == null ? undefined : _0x1fa2c7.type) ===
      e.BoardElementType["Connector"]
      ? n.Tools["deepClone"]([
          ...(0, e.getBoardConnectorLabels)(_0x1fa2c7.connectorData),
        ])
      : [];
  }
  setConnectorLabels(_0xd31324, _0x3bbfab) {
    var _0x4c8a31;
    let _0x3cc070 = M(_0x3bbfab);
    if (!_0x3cc070) return false;
    let _0xf228fb = this._boardModel["getActivePageId"](),
      _0x45ba2c =
        (_0x4c8a31 = this._boardModel["getPage"](_0xf228fb)) == null
          ? undefined
          : _0x4c8a31.elements[_0xd31324];
    if (
      (_0x45ba2c == null ? undefined : _0x45ba2c.type) !==
      e.BoardElementType["Connector"]
    )
      return false;
    let _0x1b5735 = (0, e.setBoardConnectorLabels)(
      _0x45ba2c.connectorData,
      _0x3cc070,
    );
    return this._updateElements(
      [
        {
          elementId: _0xd31324,
          element: { ..._0x45ba2c, connectorData: _0x1b5735 },
        },
      ],
      _0xf228fb,
    );
  }
  updateConnectorLabel(_0x4e33fc, _0x4bfcd2, _0x334bf3) {
    if (!_0x334bf3 || typeof _0x334bf3 != "object" || Array.isArray(_0x334bf3))
      return false;
    for (let _0x4b1860 of [_0x334bf3.placement, _0x334bf3.style])
      if (
        _0x4b1860 != null &&
        (typeof _0x4b1860 != "object" || Array.isArray(_0x4b1860))
      )
        return false;
    let _0x228030 = this.getConnectorLabels(_0x4e33fc),
      _0x4dea7e = _0x228030.findIndex(
        (_0xf9d1e2) => _0xf9d1e2.id === _0x4bfcd2,
      );
    if (_0x4dea7e < 0) return false;
    let _0x478a90 = _0x228030[_0x4dea7e],
      {
        content: _0x5c46f4,
        placement: _0x59fde0,
        style: _0x29d7ad,
        layout: _0x21c7eb,
        ..._0x26d05e
      } = _0x334bf3,
      _0x50dae8 = {
        ..._0x478a90,
        ...n.Tools["deepClone"](_0x26d05e),
        id: _0x4bfcd2,
      };
    if (
      (_0x5c46f4 !== undefined && Object.assign(_0x50dae8, j(_0x5c46f4)),
      _0x59fde0 !== undefined)
    ) {
      var _0x2c7023;
      ((_0x50dae8.placement =
        _0x59fde0 === null
          ? undefined
          : {
              ..._0x478a90.placement,
              ...n.Tools["deepClone"](_0x59fde0),
              offset:
                _0x59fde0.offset === null
                  ? undefined
                  : n.Tools["deepClone"](
                      _0x59fde0.offset ??
                        ((_0x2c7023 = _0x478a90.placement) == null
                          ? undefined
                          : _0x2c7023.offset),
                    ),
            }),
        _0x59fde0 !== null &&
          _0x50dae8.placement &&
          (_0x59fde0.offset === null ||
            ("offset" in _0x59fde0 && _0x59fde0.offset === undefined) ||
            ((_0x59fde0.anchor !== undefined ||
              _0x59fde0.pathRatio !== undefined) &&
              !("offset" in _0x59fde0))) &&
          delete _0x50dae8.placement["offset"]);
    }
    if (_0x29d7ad !== undefined) {
      if (_0x29d7ad === null) _0x50dae8.style = undefined;
      else {
        let {
          fill: _0x3d882e,
          stroke: _0x21c568,
          ..._0x1b62eb
        } = n.Tools["deepClone"](_0x29d7ad);
        ((_0x50dae8.style = { ..._0x478a90.style, ..._0x1b62eb }),
          _0x3d882e !== undefined &&
            (_0x50dae8.style["fill"] = _0x3d882e ?? undefined),
          _0x21c568 !== undefined &&
            (_0x50dae8.style["stroke"] = _0x21c568 ?? undefined));
      }
    }
    return (
      _0x21c7eb !== undefined &&
        (_0x50dae8.layout =
          _0x21c7eb === null ? undefined : n.Tools["deepClone"](_0x21c7eb)),
      (_0x228030[_0x4dea7e] = _0x50dae8),
      this.setConnectorLabels(_0x4e33fc, _0x228030)
    );
  }
  getConnectorConnection(_0x33ef42) {
    let _0x483070 = this._boardModel["getActivePage"](),
      _0x2df018 = _0x483070.elements[_0x33ef42];
    return (_0x2df018 == null ? undefined : _0x2df018.type) ===
      e.BoardElementType["Connector"]
      ? {
          start: ot(_0x483070, _0x2df018.connectorData["start"]),
          end: ot(_0x483070, _0x2df018.connectorData["end"]),
          routing: _0x2df018.connectorData["routing"],
          routingMode: _0x2df018.connectorData["routingMode"],
          waypoints: n.Tools["deepClone"](
            _0x2df018.connectorData["waypoints"] ?? [],
          ),
        }
      : null;
  }
  setConnectorConnection(_0xca7457, _0x2c5d21) {
    let _0x87f155 = this._boardModel["getActivePageId"](),
      _0x1b5162 = this._createConnectorConnectionUpdate(
        _0xca7457,
        _0x2c5d21,
        _0x87f155,
      );
    return !!_0x1b5162 && this._updateElements([_0x1b5162], _0x87f155);
  }
  reorderElements(_0x442518, _0xa0b25f) {
    let _0x1a8a87 = U(_0x442518),
      _0x12f923 = this._boardModel["getActivePageId"](),
      _0x569aba = this._boardModel["getPage"](_0x12f923);
    return !_0x1a8a87 ||
      !_0x569aba ||
      _0x1a8a87.some((_0xffc1fb) => !_0x569aba.elements[_0xffc1fb])
      ? false
      : this._commandService["syncExecuteCommand"](
          e.ReorderBoardElementsOperation["id"],
          {
            unitId: this.id,
            subUnitId: _0x12f923,
            elementIds: _0x1a8a87,
            placement: _0xa0b25f,
          },
        );
  }
  bringElementsToFront(_0x461aee) {
    return this.reorderElements(_0x461aee, "front");
  }
  bringElementsForward(_0x5b7384) {
    return this.reorderElements(_0x5b7384, "forward");
  }
  sendElementsBackward(_0x287528) {
    return this.reorderElements(_0x287528, "backward");
  }
  sendElementsToBack(_0x3ba047) {
    return this.reorderElements(_0x3ba047, "back");
  }
  updateElement(_0x27e8c4, _0xbb73af) {
    let _0x377d6b = this._boardModel["getActivePageId"]();
    return this._isBlockedElement(_0x27e8c4, _0x377d6b) ||
      !R(_0xbb73af.element, _0xbb73af.transform) ||
      !this._canUpdateElementInKnownPage(
        _0x27e8c4,
        _0xbb73af.element,
        _0x377d6b,
      ) ||
      !this._canAddElementsToKnownParents([_0xbb73af.element], _0x377d6b)
      ? false
      : this._isElementUpdateNoop(
            _0x27e8c4,
            _0xbb73af.element,
            _0xbb73af.transform,
            _0x377d6b,
          )
        ? true
        : this._commandService["syncExecuteCommand"](
            e.UpdateBoardElementCommand["id"],
            {
              unitId: this.id,
              subUnitId: _0x377d6b,
              elementId: _0x27e8c4,
              element: _0xbb73af.element,
              transform: _0xbb73af.transform ?? S(_0xbb73af.element),
              isRealtimePreview: _0xbb73af.isRealtimePreview,
            },
          );
  }
  _updateElements(_0x3cb8be, _0x4ec647) {
    if (_0x3cb8be.length === 0) return false;
    let _0x4d2706 = _0x3cb8be.map((_0x519c85) => _0x519c85.element);
    for (let _0x897e5c of _0x3cb8be)
      if (
        this._isBlockedElement(_0x897e5c.elementId, _0x4ec647) ||
        !R(_0x897e5c.element, _0x897e5c.transform) ||
        !this._canUpdateElementInKnownPage(
          _0x897e5c.elementId,
          _0x897e5c.element,
          _0x4ec647,
        )
      )
        return false;
    if (!this._canAddElementsToKnownParents(_0x4d2706, _0x4ec647)) return false;
    let _0x511ec3 = _0x3cb8be.filter(
      (_0x45f4ac) =>
        !this._isElementUpdateNoop(
          _0x45f4ac.elementId,
          _0x45f4ac.element,
          _0x45f4ac.transform,
          _0x4ec647,
        ),
    );
    return (
      _0x511ec3.length === 0 ||
      this._commandService["syncExecuteCommand"](
        e.UpdateBoardElementsCommand["id"],
        {
          unitId: this.id,
          subUnitId: _0x4ec647,
          updates: _0x511ec3.map((_0x1940bf) => ({
            ..._0x1940bf,
            transform: _0x1940bf.transform ?? S(_0x1940bf.element),
          })),
        },
      )
    );
  }
  _getElementGeometries(_0x1614ea) {
    let _0x39af96 = _0x1614ea
      .map((_0x589a15) => this.describeElement(_0x589a15))
      .map((_0x1906b1) => _0x1906b1 && yt(_0x1906b1));
    return _0x39af96.every((_0x40e333) => !!_0x40e333) ? _0x39af96 : null;
  }
  _applyTranslations(_0x1ec581) {
    if (_0x1ec581.size === 0) return false;
    let _0x23e3e4 = this._boardModel["getActivePageId"](),
      _0x3123c2 = [];
    for (let [_0x8fd82b, _0xe76781] of _0x1ec581) {
      var _0x3b4b69;
      let _0x1dba05 =
          (_0x3b4b69 = this._boardModel["getPage"](_0x23e3e4)) == null
            ? undefined
            : _0x3b4b69.elements[_0x8fd82b],
        _0x24115e = _0x1dba05 && T(_0x1dba05, _0xe76781);
      if (!_0x24115e) return false;
      _0x3123c2.push({ elementId: _0x8fd82b, element: _0x24115e });
    }
    return this._updateElements(_0x3123c2, _0x23e3e4);
  }
  _isElementUpdateNoop(_0x523b7e, _0x372ad7, _0x3d3374, _0x2df33d) {
    var _0x18728b;
    let _0x20c5aa =
      (_0x18728b = this._boardModel["getPage"](_0x2df33d)) == null
        ? undefined
        : _0x18728b.elements[_0x523b7e];
    return !_0x20c5aa || !C(_0x20c5aa, _0x372ad7)
      ? false
      : C(S(_0x20c5aa), _0x3d3374 ?? S(_0x372ad7));
  }
  removeElement(_0x5e61f4) {
    let _0x4b84eb = this._boardModel["getActivePageId"]();
    return this._isBlockedElement(_0x5e61f4, _0x4b84eb) ||
      !this._canRemoveElementsInKnownPage([_0x5e61f4], _0x4b84eb)
      ? false
      : this._commandService["syncExecuteCommand"](
          e.RemoveBoardElementOperation["id"],
          { unitId: this.id, subUnitId: _0x4b84eb, elementId: _0x5e61f4 },
        );
  }
  removeElements(_0x144e72) {
    let _0x1bced4 = this._boardModel["getActivePageId"]();
    return _0x144e72.length === 0 ||
      z(_0x144e72) ||
      this._hasBlockedElements(_0x144e72, _0x1bced4) ||
      !this._canRemoveElementsInKnownPage(_0x144e72, _0x1bced4)
      ? false
      : this._commandService["syncExecuteCommand"](
          e.RemoveBoardElementsOperation["id"],
          { unitId: this.id, subUnitId: _0x1bced4, elementIds: _0x144e72 },
        );
  }
  disbandContainer(_0x41f654) {
    let _0x27cbac = this._boardModel["getActivePageId"]();
    return this._isBlockedContainer(_0x41f654, _0x27cbac) ||
      !this._canDisbandContainerInKnownPage(_0x41f654, _0x27cbac)
      ? false
      : this._commandService["syncExecuteCommand"](
          e.DisbandBoardContainerOperation["id"],
          { unitId: this.id, subUnitId: _0x27cbac, containerId: _0x41f654 },
        );
  }
  wrapElementsInContainer(_0x518901, _0x26dbf9 = {}) {
    let _0x481b5e = this._boardModel["getActivePageId"](),
      _0xdbc178 = this._boardModel["getPage"](_0x481b5e),
      _0x2c248e = _0xdbc178
        ? (0, e.resolveBoardStructuredSelectionRootIds)(
            _0xdbc178.elements,
            _0x518901,
          )
        : _0x518901;
    return _0x518901.length === 0 ||
      z(_0x518901) ||
      this._hasBlockedElements(_0x2c248e, _0x481b5e) ||
      !this._canWrapElementsInKnownPage(_0x2c248e, _0x481b5e)
      ? false
      : this._commandService["syncExecuteCommand"](
          e.WrapBoardElementsInContainerOperation["id"],
          {
            unitId: this.id,
            subUnitId: _0x481b5e,
            elementIds: _0x2c248e,
            containerId: _0x26dbf9.containerId,
            title: _0x26dbf9.title,
          },
        );
  }
  reparentElements(_0x15dbf8, _0x123d89) {
    let _0x3edb87 = this._boardModel["getActivePageId"]();
    return _0x15dbf8.length === 0 ||
      z(_0x15dbf8) ||
      this._hasBlockedElements(_0x15dbf8, _0x3edb87) ||
      (_0x123d89 && this._isBlockedContainer(_0x123d89, _0x3edb87)) ||
      !this._canReparentElementsInKnownPage(_0x15dbf8, _0x123d89, _0x3edb87)
      ? false
      : this._commandService["syncExecuteCommand"](
          e.ReparentBoardElementsOperation["id"],
          {
            unitId: this.id,
            subUnitId: _0x3edb87,
            elementIds: _0x15dbf8,
            parentId: _0x123d89,
          },
        );
  }
  moveElementsToContainer(_0x38f08c, _0x8784e1) {
    return this.reparentElements(_0x38f08c, _0x8784e1);
  }
  moveElementsOutOfContainer(_0x24b6e3) {
    return this.reparentElements(_0x24b6e3);
  }
  fitContainerToContent(_0x43f06d) {
    let _0x43c546 = this._boardModel["getActivePageId"]();
    return (
      !this._isBlockedContainer(_0x43f06d, _0x43c546) &&
      this._commandService["syncExecuteCommand"](
        e.FitBoardContainerToContentOperation["id"],
        { unitId: this.id, subUnitId: _0x43c546, containerId: _0x43f06d },
      )
    );
  }
  setContainerMembershipLocked(_0x20ed59, _0x12dac8) {
    let _0x4677db = this._boardModel["getActivePageId"]();
    return (
      !this._isBlockedContainer(_0x20ed59, _0x4677db) &&
      this._commandService["syncExecuteCommand"](
        e.SetBoardContainerMembershipLockOperation["id"],
        {
          unitId: this.id,
          subUnitId: _0x4677db,
          containerId: _0x20ed59,
          membershipLocked: _0x12dac8,
        },
      )
    );
  }
  setContainerAutoResize(_0xfb864b, _0x40f7cc) {
    let _0x249c4b = this._boardModel["getActivePageId"]();
    if (this._isBlockedContainer(_0xfb864b, _0x249c4b)) return false;
    let _0x39d5d0 = this._getContainerElement(_0xfb864b, _0x249c4b);
    return _0x39d5d0 != null &&
      _0x39d5d0.containerData["behavior"].membershipLocked &&
      !_0x40f7cc
      ? false
      : this._commandService["syncExecuteCommand"](
          e.SetBoardContainerAutoResizeOperation["id"],
          {
            unitId: this.id,
            subUnitId: _0x249c4b,
            containerId: _0xfb864b,
            autoResize: _0x40f7cc,
          },
        );
  }
  setSwimlaneLanes(_0x3d78c8, _0x21b089) {
    let _0x4729c9 = this._boardModel["getActivePageId"]();
    if (this._isBlockedSwimlaneContainer(_0x3d78c8, _0x4729c9)) return false;
    let _0xd76bff = this._getSwimlaneData(_0x3d78c8, _0x4729c9);
    return _0xd76bff &&
      ($e(_0xd76bff, _0x21b089) || H(_0xd76bff, _0x21b089.lanes))
      ? false
      : this._commandService["syncExecuteCommand"](
          e.SetBoardSwimlaneLanesOperation["id"],
          {
            unitId: this.id,
            subUnitId: _0x4729c9,
            containerId: _0x3d78c8,
            swimlane: (0, e.normalizeBoardSwimlaneData)(_0x21b089),
          },
        );
  }
  setSwimlaneLaneSize(_0x589075, _0x3102f5, _0x101922) {
    let _0x1262a9 = this._boardModel["getActivePageId"]();
    if (this._isBlockedSwimlaneContainer(_0x589075, _0x1262a9)) return false;
    let _0x4a52aa = this._getSwimlaneData(_0x589075, _0x1262a9);
    return _0x4a52aa &&
      H(
        _0x4a52aa,
        _0x4a52aa.lanes["map"]((_0x2e95e3) =>
          _0x2e95e3.id === _0x3102f5
            ? { ..._0x2e95e3, size: _0x101922 }
            : _0x2e95e3,
        ),
      )
      ? false
      : this._commandService["syncExecuteCommand"](
          e.SetBoardSwimlaneLaneSizeOperation["id"],
          {
            unitId: this.id,
            subUnitId: _0x1262a9,
            containerId: _0x589075,
            laneId: _0x3102f5,
            size: _0x101922,
          },
        );
  }
  addSwimlaneLane(_0x126a43, _0x53fa5c, _0x1efdb8 = {}) {
    let _0x3b63c1 = this._boardModel["getActivePageId"]();
    if (this._isBlockedSwimlaneContainer(_0x126a43, _0x3b63c1)) return false;
    let _0x4eb48d = this._getSwimlaneData(_0x126a43, _0x3b63c1);
    if (
      !_0x4eb48d ||
      _0x4eb48d.lanes["some"]((_0x16146a) => _0x16146a.id === _0x53fa5c.id)
    )
      return false;
    let _0x2033e5 = B(_0x4eb48d),
      _0x33d903 = Math.max(
        0,
        Math.min(_0x1efdb8.insertIndex ?? _0x2033e5.length, _0x2033e5.length),
      );
    _0x2033e5.splice(_0x33d903, 0, _0x53fa5c);
    let _0x470f4a = V(_0x2033e5);
    return (
      !H(_0x4eb48d, _0x470f4a) &&
      this.setSwimlaneLanes(_0x126a43, { ..._0x4eb48d, lanes: _0x470f4a })
    );
  }
  removeSwimlaneLane(_0x4fa034, _0x48985f, _0x190b3c = {}) {
    let _0x403a26 = this._boardModel["getActivePageId"]();
    if (this._isBlockedSwimlaneContainer(_0x4fa034, _0x403a26)) return false;
    let _0x4a4173 = this._getSwimlaneData(_0x4fa034, _0x403a26);
    if (
      !_0x4a4173 ||
      !_0x4a4173.lanes["some"]((_0x49716a) => _0x49716a.id === _0x48985f) ||
      Ze(_0x4a4173, _0x48985f)
    )
      return false;
    let _0x258484 = this._boardModel["getPage"](_0x403a26);
    if (!_0x258484) return false;
    if (
      (0, e.hasBoardSwimlaneLaneChildren)(
        N(this.id, _0x258484),
        _0x4fa034,
        _0x48985f,
      )
    )
      return (_0x190b3c.contentPolicy !== "promote-to-pool" &&
        _0x190b3c.contentPolicy !== "move-to-lane" &&
        _0x190b3c.contentPolicy !== "delete-content") ||
        (_0x190b3c.contentPolicy === "move-to-lane" &&
          (!_0x190b3c.targetLaneId ||
            _0x190b3c.targetLaneId === _0x48985f ||
            !_0x4a4173.lanes["some"](
              (_0x8f97b2) =>
                _0x8f97b2.id === _0x190b3c.targetLaneId &&
                _0x8f97b2.locked !== true,
            )))
        ? false
        : this._commandService["syncExecuteCommand"](
            e.RemoveBoardSwimlaneLaneOperation["id"],
            {
              unitId: this.id,
              subUnitId: _0x403a26,
              containerId: _0x4fa034,
              laneId: _0x48985f,
              contentPolicy: _0x190b3c.contentPolicy,
              targetLaneId: _0x190b3c.targetLaneId,
            },
          );
    let _0x179895 = V(
      B(_0x4a4173).filter((_0x4ab105) => _0x4ab105.id !== _0x48985f),
    );
    return (
      !H(_0x4a4173, _0x179895) &&
      this.setSwimlaneLanes(_0x4fa034, { ..._0x4a4173, lanes: _0x179895 })
    );
  }
  reorderSwimlaneLane(_0xe73f6d, _0x1dcb72, _0x2eaab6) {
    let _0x467c65 = this._boardModel["getActivePageId"]();
    if (this._isBlockedSwimlaneContainer(_0xe73f6d, _0x467c65)) return false;
    let _0x1900c9 = this._getSwimlaneData(_0xe73f6d, _0x467c65);
    if (!_0x1900c9 || !Number.isFinite(_0x2eaab6)) return false;
    let _0x2b9292 = B(_0x1900c9),
      _0x568714 = _0x2b9292.findIndex(
        (_0x4a9c56) => _0x4a9c56.id === _0x1dcb72,
      );
    if (_0x568714 < 0 || _0x2b9292[_0x568714].locked === true) return false;
    let [_0x224212] = _0x2b9292.splice(_0x568714, 1);
    _0x2b9292.splice(
      Math.max(0, Math.min(_0x2eaab6, _0x2b9292.length)),
      0,
      _0x224212,
    );
    let _0x15a97a = V(_0x2b9292);
    return (
      !H(_0x1900c9, _0x15a97a) &&
      this.setSwimlaneLanes(_0xe73f6d, { ..._0x1900c9, lanes: _0x15a97a })
    );
  }
  setSwimlaneLaneCollapsed(_0xe16f09, _0x2ef6d2, _0x561b41) {
    let _0x27e2bc = this._boardModel["getActivePageId"]();
    if (this._isBlockedSwimlaneContainer(_0xe16f09, _0x27e2bc)) return false;
    let _0x384506 = this._getSwimlaneData(_0xe16f09, _0x27e2bc);
    return !_0x384506 ||
      !_0x384506.lanes["some"](
        (_0x3bfbff) => _0x3bfbff.id === _0x2ef6d2 && _0x3bfbff.locked !== true,
      )
      ? false
      : this.setSwimlaneLanes(_0xe16f09, {
          ..._0x384506,
          lanes: B(_0x384506).map((_0x53a5f1) =>
            _0x53a5f1.id === _0x2ef6d2
              ? { ..._0x53a5f1, collapsed: _0x561b41 }
              : _0x53a5f1,
          ),
        });
  }
  renameSwimlaneLane(_0x466e69, _0x458639, _0x4a7ffc) {
    let _0x56fe2d = this._boardModel["getActivePageId"]();
    if (this._isBlockedSwimlaneContainer(_0x466e69, _0x56fe2d)) return false;
    let _0xa099ff = this._getSwimlaneData(_0x466e69, _0x56fe2d),
      _0x15f0ed = _0x4a7ffc.trim();
    if (!_0xa099ff || !_0x15f0ed || Ze(_0xa099ff, _0x458639)) return false;
    let _0x5a1564 = false,
      _0x5bf0ae = B(_0xa099ff).map((_0x2c6039) =>
        _0x2c6039.id === _0x458639
          ? ((_0x5a1564 = _0x2c6039.title !== _0x15f0ed),
            { ..._0x2c6039, title: _0x15f0ed })
          : _0x2c6039,
      );
    return _0x5a1564
      ? this.setSwimlaneLanes(_0x466e69, { ..._0xa099ff, lanes: _0x5bf0ae })
      : false;
  }
  _getElementFromPage(_0x5328aa, _0x2cda2b) {
    var _0x10a58a;
    return (
      ((_0x10a58a = this._boardModel["getPage"](_0x2cda2b)) == null
        ? undefined
        : _0x10a58a.elements[_0x5328aa]) ?? null
    );
  }
  _getSwimlaneData(_0x5a6411, _0x15629f) {
    let _0x5bb1c8 = this._getElementFromPage(_0x5a6411, _0x15629f);
    return !_0x5bb1c8 ||
      _0x5bb1c8.type !== e.BoardElementType["Container"] ||
      _0x5bb1c8.containerData["kind"] !== "swimlane" ||
      !_0x5bb1c8.containerData["swimlane"]
      ? null
      : _0x5bb1c8.containerData["swimlane"];
  }
  _getContainerElement(_0x225faf, _0x5dedcb) {
    let _0x3b5994 = this._getElementFromPage(_0x225faf, _0x5dedcb);
    return !_0x3b5994 || _0x3b5994.type !== e.BoardElementType["Container"]
      ? null
      : _0x3b5994;
  }
  _isBlockedSwimlaneContainer(_0x26cd4d, _0x51cbb8) {
    if (this._isBlockedContainer(_0x26cd4d, _0x51cbb8)) return true;
    let _0x582b16 = this._getElementFromPage(_0x26cd4d, _0x51cbb8);
    return (
      !!_0x582b16 &&
      (_0x582b16.type !== e.BoardElementType["Container"] ||
        _0x582b16.containerData["kind"] !== "swimlane" ||
        !_0x582b16.containerData["swimlane"])
    );
  }
  _isBlockedContainer(_0xa74a06, _0x3d39f9) {
    let _0x1d2377 = this._getElementFromPage(_0xa74a06, _0x3d39f9);
    return _0x1d2377
      ? _0x1d2377.type !== e.BoardElementType["Container"] ||
          _0x1d2377.visible === false ||
          _0x1d2377.locked === true ||
          _0x1d2377.selectable === false ||
          this._hasBlockedContainerAncestor(_0x1d2377, _0x3d39f9)
      : false;
  }
  _isBlockedElement(_0x1ce91d, _0x21baf6) {
    let _0x4c86f8 = this._getElementFromPage(_0x1ce91d, _0x21baf6);
    return _0x4c86f8
      ? _0x4c86f8.visible === false ||
          _0x4c86f8.locked === true ||
          _0x4c86f8.selectable === false ||
          this._hasBlockedContainerAncestor(_0x4c86f8, _0x21baf6)
      : false;
  }
  _hasBlockedElements(_0x329279, _0x1cd8e7) {
    return _0x329279.some((_0x2d54a6) =>
      this._isBlockedElement(_0x2d54a6, _0x1cd8e7),
    );
  }
  _createFacadeConnectorElement(_0x23d91e, _0x43d119) {
    let _0x45b337 = We(
        this.id,
        this._boardModel["getPage"](_0x43d119),
        _0x23d91e,
        this._resolveConnectorStartEndpointInput(_0x23d91e),
        this._resolveConnectorEndEndpointInput(_0x23d91e),
      ),
      _0x4620a3 = this._resolveConnectorEndpoint(_0x45b337.start, _0x43d119),
      _0x4675f1 = this._resolveConnectorEndpoint(_0x45b337.end, _0x43d119);
    if (!_0x4620a3 || !_0x4675f1) return null;
    let _0x20850f = this._resolveConnectorLabels(_0x23d91e);
    if (_0x20850f === null) return null;
    let _0x4d369f = X(
      (0, e.createBoardConnectorElement)({
        id: _0x23d91e.id,
        start: _0x4620a3,
        end: _0x4675f1,
        routing: _0x45b337.routing,
        routingMode: _0x23d91e.routingMode,
        waypoints: _0x23d91e.waypoints,
        style: _0x45b337.style,
        labels: _0x20850f,
      }),
      _0x23d91e,
    );
    return _0x4d369f
      ? ((_0x4d369f.parentId = _0x23d91e.parentId),
        (_0x4d369f.laneId = _0x23d91e.laneId),
        _0x4d369f)
      : null;
  }
  _createConnectorConnectionUpdate(_0x1abd7b, _0x3d4e80, _0x39cafc) {
    var _0x46b75c;
    if (Object.values(_0x3d4e80).every((_0x2d55c5) => _0x2d55c5 === undefined))
      return null;
    let _0x1e6986 =
      (_0x46b75c = this._boardModel["getPage"](_0x39cafc)) == null
        ? undefined
        : _0x46b75c.elements[_0x1abd7b];
    if (
      (_0x1e6986 == null ? undefined : _0x1e6986.type) !==
      e.BoardElementType["Connector"]
    )
      return null;
    let _0x2f12e3 =
        _0x3d4e80.start === undefined
          ? _0x1e6986.connectorData["start"]
          : this._resolveConnectorEndpoint(_0x3d4e80.start, _0x39cafc),
      _0xaaaa85 =
        _0x3d4e80.end === undefined
          ? _0x1e6986.connectorData["end"]
          : this._resolveConnectorEndpoint(_0x3d4e80.end, _0x39cafc);
    if (
      !_0x2f12e3 ||
      !_0xaaaa85 ||
      (_0x3d4e80.waypoints !== undefined && !st(_0x3d4e80.waypoints))
    )
      return null;
    let _0x9d1d9 =
        _0x3d4e80.waypoints === undefined
          ? _0x1e6986.connectorData["waypoints"]
          : n.Tools["deepClone"](_0x3d4e80.waypoints),
      _0x29909c = _t(
        _0x1e6986.connectorData["routingMode"],
        _0x3d4e80,
        _0x9d1d9,
      ),
      _0x591de8 = {
        ..._0x1e6986.connectorData,
        start: n.Tools["deepClone"](_0x2f12e3),
        end: n.Tools["deepClone"](_0xaaaa85),
        routing: _0x3d4e80.routing ?? _0x1e6986.connectorData["routing"],
        routingMode: _0x29909c,
        waypoints: _0x9d1d9,
      };
    return (
      _0x3d4e80.routing !== undefined &&
        _0x3d4e80.routing !== "orthogonal" &&
        delete _0x591de8.orthogonalData,
      _0x3d4e80.routing !== undefined &&
        _0x3d4e80.routing !== "curve" &&
        delete _0x591de8.curveData,
      {
        elementId: _0x1abd7b,
        element: { ..._0x1e6986, connectorData: _0x591de8 },
      }
    );
  }
  _resolveConnectorEndpoint(_0x2785dd, _0x20a857) {
    if (!_0x2785dd) return null;
    if (Q(_0x2785dd))
      return _0x2785dd.kind === "shapeSite" &&
        _0x2785dd.connectionPosition !== undefined &&
        !It(_0x2785dd.connectionPosition)
        ? null
        : n.Tools["deepClone"](_0x2785dd);
    let _0x4a0da6 = this._getElementFromPage(_0x2785dd.elementId, _0x20a857);
    if (!_0x4a0da6) return null;
    let _0x2e1eeb =
      _0x2785dd.side === undefined
        ? undefined
        : e.BoardConnectorSiteBySide[_0x2785dd.side];
    return (_0x2785dd.position !== undefined &&
      ((_0x2e1eeb === undefined && _0x2785dd.connectionSiteId === undefined) ||
        !It(_0x2785dd.position))) ||
      (_0x2e1eeb !== undefined &&
        _0x2785dd.connectionSiteId !== undefined &&
        _0x2785dd.connectionSiteId !== _0x2e1eeb)
      ? null
      : {
          kind: "shapeSite",
          shapeId: _0x4a0da6.id,
          connectionSiteId:
            _0x2e1eeb ??
            _0x2785dd.connectionSiteId ??
            e.BoardConnectorSite["Bottom"],
          ...(_0x2785dd.position === undefined
            ? {}
            : { connectionPosition: _0x2785dd.position }),
        };
  }
  _resolveConnectorStartEndpointInput(_0x5a9b81) {
    if (_0x5a9b81.start) return _0x5a9b81.start;
    if (_0x5a9b81.fromElementId)
      return {
        elementId: _0x5a9b81.fromElementId,
        ...(_0x5a9b81.fromConnectionSiteId === undefined
          ? {}
          : { connectionSiteId: _0x5a9b81.fromConnectionSiteId }),
      };
  }
  _resolveConnectorEndEndpointInput(_0x479837) {
    if (_0x479837.end) return _0x479837.end;
    if (_0x479837.toElementId)
      return {
        elementId: _0x479837.toElementId,
        ...(_0x479837.toConnectionSiteId === undefined
          ? {}
          : { connectionSiteId: _0x479837.toConnectionSiteId }),
      };
  }
  _resolveConnectorLabels(_0x3c57a0) {
    let _0x30f8c8 = _0x3c57a0.labels;
    return (
      _0x30f8c8 === undefined &&
        _0x3c57a0.label !== undefined &&
        (_0x30f8c8 = [_0x3c57a0.label]),
      _0x30f8c8 === undefined &&
        _0x3c57a0.labelText !== undefined &&
        (_0x30f8c8 = [
          { id: (0, n.generateRandomId)(6), ...j(_0x3c57a0.labelText) },
        ]),
      _0x30f8c8 === undefined ? undefined : M(_0x30f8c8)
    );
  }
  _hasBlockedContainerAncestor(_0x145dcc, _0x15de28) {
    let _0xcdb21a = this._boardModel["getPage"](_0x15de28);
    return _0xcdb21a ? L(_0xcdb21a, _0x145dcc) : false;
  }
  _canAddElementsToKnownParents(_0x342038, _0x2d5143) {
    let _0x57cb94 = this._boardModel["getPage"](_0x2d5143);
    if (!_0x57cb94) return Ye(_0x342038);
    let _0x2a5fd2 = new Map(
      _0x342038.map((_0x5420bb) => [_0x5420bb.id, _0x5420bb]),
    );
    return _0x342038.every((_0x2a639d) => Je(_0x57cb94, _0x2a5fd2, _0x2a639d));
  }
  _canAddNewElementsToKnownPage(_0x238c4c, _0x5c432c) {
    if (
      !_0x238c4c.every((_0x1d2fe2) => R(_0x1d2fe2)) ||
      z(_0x238c4c.map((_0x2af7d9) => _0x2af7d9.id))
    )
      return false;
    let _0x3d8765 = this._boardModel["getPage"](_0x5c432c);
    if (!_0x3d8765) return Ye(_0x238c4c);
    for (let _0xdebc9d of _0x238c4c)
      if (_0x3d8765.elements[_0xdebc9d.id]) return false;
    return this._canAddElementsToKnownParents(_0x238c4c, _0x5c432c);
  }
  _canFitAddedElementsToKnownTarget(_0x111234, _0x3a6129, _0x1b42ca) {
    if (!_0x1b42ca) return true;
    let _0x18cc64 = new Map(
      _0x111234.map((_0x2d23f0) => [_0x2d23f0.id, _0x2d23f0]),
    ).get(_0x1b42ca);
    if (_0x18cc64) return Xe(_0x18cc64);
    let _0x3d4a7c = this._boardModel["getPage"](_0x3a6129);
    return !_0x3d4a7c || Xe(_0x3d4a7c.elements[_0x1b42ca]);
  }
  _canReparentElementsInKnownPage(_0x35cefb, _0x374e30, _0x517f35) {
    let _0x196f52 = this._boardModel["getPage"](_0x517f35);
    if (!_0x196f52) return true;
    let _0x599bb1 = new Map();
    for (let _0x4bf304 of _0x35cefb) {
      let _0x29313b = _0x196f52.elements[_0x4bf304];
      if (!_0x29313b) continue;
      let _0x4a0dae = _0x29313b.parentId
        ? _0x196f52.elements[_0x29313b.parentId]
        : undefined;
      if (
        (_0x4a0dae == null ? undefined : _0x4a0dae.type) ===
          e.BoardElementType["Container"] &&
        _0x4a0dae.containerData["behavior"].membershipLocked &&
        _0x4a0dae.id !== _0x374e30
      )
        return false;
      _0x599bb1.set(_0x29313b.id, { ..._0x29313b, parentId: _0x374e30 });
    }
    return Array.from(_0x599bb1.values()).every((_0x4d5198) =>
      Je(_0x196f52, _0x599bb1, _0x4d5198),
    );
  }
  _canUpdateElementInKnownPage(_0x5c63d8, _0x25a06c, _0x226522) {
    let _0x2787b7 = this._boardModel["getPage"](_0x226522);
    if (!_0x2787b7) return true;
    let _0x1e0abe = _0x2787b7.elements[_0x5c63d8],
      _0x61ae79 =
        _0x1e0abe != null && _0x1e0abe.parentId
          ? _0x2787b7.elements[_0x1e0abe.parentId]
          : undefined;
    return (
      (_0x61ae79 == null ? undefined : _0x61ae79.type) !==
        e.BoardElementType["Container"] ||
      !_0x61ae79.containerData["behavior"].membershipLocked ||
      _0x25a06c.parentId === _0x61ae79.id
    );
  }
  _canUpdateKnownElementByCommandPath(_0x8fb495, _0x41a844, _0x499631) {
    return (
      !this._isBlockedElement(_0x8fb495, _0x499631) &&
      R(_0x41a844) &&
      this._canUpdateElementInKnownPage(_0x8fb495, _0x41a844, _0x499631) &&
      this._canAddElementsToKnownParents([_0x41a844], _0x499631)
    );
  }
  _canDisbandContainerInKnownPage(_0x9deede, _0x11decf) {
    let _0x295c16 = this._boardModel["getPage"](_0x11decf);
    if (!_0x295c16) return true;
    let _0x52af4a = _0x295c16.elements[_0x9deede],
      _0x5241c3 =
        _0x52af4a != null && _0x52af4a.parentId
          ? _0x295c16.elements[_0x52af4a.parentId]
          : undefined;
    return (
      (_0x5241c3 == null ? undefined : _0x5241c3.type) !==
        e.BoardElementType["Container"] ||
      !_0x5241c3.containerData["behavior"].membershipLocked
    );
  }
  _canWrapElementsInKnownPage(_0x480367, _0x1f1abd) {
    let _0x4f25af = this._boardModel["getPage"](_0x1f1abd);
    if (!_0x4f25af) return true;
    let _0x46d4bd = new Set(_0x480367),
      _0x4427bc = _0x480367
        .map((_0xc5a871) => _0x4f25af.elements[_0xc5a871])
        .filter((_0x103887) => !!_0x103887);
    if (
      !_0x4427bc.every((_0x2b5df0) => {
        let _0x44e484 =
          _0x2b5df0 != null && _0x2b5df0.parentId
            ? _0x4f25af.elements[_0x2b5df0.parentId]
            : undefined;
        return (
          (_0x44e484 == null ? undefined : _0x44e484.type) !==
            e.BoardElementType["Container"] ||
          !_0x44e484.containerData["behavior"].membershipLocked ||
          _0x46d4bd.has(_0x44e484.id)
        );
      })
    )
      return false;
    let _0x2a434c = new Set(_0x4427bc.map((_0x501533) => _0x501533.parentId));
    if (_0x2a434c.size !== 1) return true;
    let [_0x18b522] = _0x2a434c,
      _0x1d2b4c = _0x18b522 ? _0x4f25af.elements[_0x18b522] : undefined;
    if (!_0x1d2b4c || _0x1d2b4c.type !== e.BoardElementType["Container"])
      return true;
    let _0x4366a2 = _0x1d2b4c.containerData["behavior"];
    return (
      _0x4366a2.acceptsChildren &&
      _0x4366a2.acceptsContainer &&
      _0x4366a2.allowNested
    );
  }
  _canRemoveElementsInKnownPage(_0x4f1d9a, _0x3da709) {
    let _0x5ca66a = this._boardModel["getPage"](_0x3da709);
    if (!_0x5ca66a) return true;
    let _0x4d7323 = new Set(_0x4f1d9a);
    return _0x4f1d9a.every((_0x486bf1) => {
      let _0x4982ae = _0x5ca66a.elements[_0x486bf1],
        _0x5a7617 =
          _0x4982ae != null && _0x4982ae.parentId
            ? _0x5ca66a.elements[_0x4982ae.parentId]
            : undefined;
      return (
        (_0x5a7617 == null ? undefined : _0x5a7617.type) !==
          e.BoardElementType["Container"] ||
        !_0x5a7617.containerData["behavior"].membershipLocked ||
        _0x4d7323.has(_0x5a7617.id)
      );
    });
  }
};
$ = le(
  [
    x(1, (0, n.Inject)(n.Injector)),
    x(2, n.ICommandService),
    x(3, n.IResourceLoaderService),
    x(4, n.IUniverInstanceService),
    x(5, n.IPermissionService),
    x(6, r.IShapeHostAdapterRegistry),
  ],
  $,
);
var Lt = class extends t.FUniver {
  createBoard(_0x3b37d0 = {}, _0x2af313) {
    let _0x32ad35 = this._injector["get"](n.IUniverInstanceService).createUnit(
      n.UniverInstanceType["UNIVER_BOARD"],
      _0x3b37d0,
      _0x2af313,
    );
    return this._injector["createInstance"]($, _0x32ad35);
  }
  getActiveBoard() {
    let _0x5870c5 = this._injector["get"](
      n.IUniverInstanceService,
    ).getCurrentUnitOfType(n.UniverInstanceType["UNIVER_BOARD"]);
    return _0x5870c5 ? this._injector["createInstance"]($, _0x5870c5) : null;
  }
  getBoard(_0x6bde6d) {
    let _0x5aee11 = this._injector["get"](n.IUniverInstanceService).getUnit(
      _0x6bde6d,
      n.UniverInstanceType["UNIVER_BOARD"],
    );
    return _0x5aee11 ? this._injector["createInstance"]($, _0x5aee11) : null;
  }
};
(t.FUniver["extend"](Lt),
  Object.defineProperty(exports, "FBoard", {
    enumerable: true,
    get: function () {
      return $;
    },
  }),
  (exports.FBoardElementPermission = ae),
  (exports.FBoardPermission = ie),
  (exports.FUniverBoardsMixin = Lt),
  (exports.createBoardFacadeRichTextValue = y),
  (exports.normalizeBoardFacadeTextContent = v));
