import {
  AddBoardElementsOperation as _0x58763b,
  AnalyzeBoardModelLayoutCommand as _0x52d64f,
  BeginBoardExportOperation as _0x1a5f58,
  BeginBoardImportOperation as _0x1b7dd6,
  BoardBackgroundType as _0xc88b15,
  BoardConnectorLabelAnchor as _0x3167c6,
  BoardConnectorLabelOffsetSpace as _0x2e4690,
  BoardConnectorLabelOrientation as _0x1890d5,
  BoardConnectorLabelSide as _0x49c563,
  BoardConnectorLabelSizing as _0x375147,
  BoardConnectorSite as _0x160970,
  BoardConnectorSiteBySide as _0x40255d,
  BoardCustomShapeType as _0x296b91,
  BoardElementType as _0x18d03f,
  BoardSequenceShapeType as _0x175ba4,
  BoardToolType as _0x75f0a5,
  DisbandBoardContainerOperation as _0x187431,
  FitBoardContainerToContentOperation as _0x13356a,
  NormalizeBoardConnectorRoutingCommand as _0x40b64f,
  RemoveBoardConnectorLabelCommand as _0x1be26c,
  RemoveBoardElementOperation as _0x51bcde,
  RemoveBoardElementsOperation as _0x224ca7,
  RemoveBoardSwimlaneLaneOperation as _0x52c944,
  ReorderBoardElementsOperation as _0x214993,
  ReparentBoardElementsOperation as _0x4f8434,
  ResolveBoardCaptureBoundsCommand as _0x44c1ff,
  SetBoardConnectorLabelStyleCommand as _0x507b7d,
  SetBoardConnectorLabelTextCommand as _0x5b3895,
  SetBoardContainerAutoResizeOperation as _0x2f6ff0,
  SetBoardContainerMembershipLockOperation as _0x52cc30,
  SetBoardElementsMetadataOperation as _0x13fef4,
  SetBoardNameCommand as _0x56ca0f,
  SetBoardPageBackgroundCommand as _0xb87193,
  SetBoardPermissionCommand as _0x450d14,
  SetBoardSwimlaneLaneSizeOperation as _0x3892f1,
  SetBoardSwimlaneLanesOperation as _0x3e66a7,
  SetBoardThemeOperation as _0x3edc20,
  UpdateBoardElementCommand as _0x2bdc5e,
  UpdateBoardElementsCommand as _0x1205fc,
  WrapBoardElementsInContainerOperation as _0x12d6d9,
  canEditBoardTargets as _0x259bff,
  createBoardConnectorElement as _0x495fde,
  createBoardContainerElement as _0x4e2c17,
  createBoardImageElement as _0x27e28f,
  createBoardShapeElement as _0x436528,
  createBoardSwimlaneElement as _0x47eead,
  createBoardTextBoxShapeTextData as _0x1a2e88,
  createBoardTextElement as _0x54ed1f,
  getBoardConnectorLabelDocumentData as _0x1b7572,
  getBoardConnectorLabelText as _0x4e27f8,
  getBoardConnectorLabels as _0x149304,
  getBoardElementPermissionObjectId as _0x58e815,
  getBoardPermissionValue as _0x5c94e3,
  getBoardShapeSequenceActivationData as _0x3d105e,
  getBoardShapeSequenceLifelineData as _0x282ecf,
  hasBoardSwimlaneLaneChildren as _0x338b84,
  isBoardSequenceLifelineElement as _0x21a776,
  isValidBoardConnectorLabels as _0x1526fd,
  mergeBoardRichTextDocument as _0x2d8247,
  normalizeBoardSwimlaneData as _0x43eb94,
  resolveBoardContainerBounds as _0x1c43ca,
  resolveBoardElementLocalTransformForParent as _0x7a93d8,
  resolveBoardElementWorldBounds as _0x171003,
  resolveBoardStructuredSelectionRootIds as _0xc6ab5a,
  resolveBoardSwimlaneContentLaneAtPointInFilledBounds as _0x135219,
  setBoardConnectorLabels as _0x5b6134,
  shapeTextToBoardDocumentTextStyle as _0x2b0085,
} from "@univerjs-pro/boards";
import {
  FBaseInitialable as _0x506d34,
  FEnum as _0x35b53c,
  FUniver as _0x5befe5,
} from "@univerjs/core/facade";
import {
  HorizontalAlign as _0x46502a,
  ICommandService as _0x455cfc,
  IPermissionService as _0x5e1364,
  IResourceLoaderService as _0x5aab37,
  IUniverInstanceService as _0x4e62e7,
  ImageSourceType as _0x29d6ba,
  Inject as _0x34feac,
  Injector as _0x22daa7,
  RedoCommand as _0x90a86a,
  RichTextValue as _0x172341,
  Tools as _0x31f860,
  UndoCommand as _0x40a39a,
  UniverInstanceType as _0x2cae43,
  VerticalAlign as _0x46c2f1,
  generateRandomId as _0x52ee79,
} from "@univerjs/core";
import {
  IShapeHostAdapterRegistry as _0x3caf69,
  applyShapeTextBoxOptions as _0x11042b,
  isConnectorShape as _0x24d413,
} from "@univerjs-pro/engine-shape";
import {
  FConnectorShape as _0x56f2b3,
  FShape as _0x3ee33d,
} from "@univerjs-pro/engine-shape/facade";
import { UnitAction as _0x2e9798 } from "@univerjs/protocol";
const dt = {
    Straight: "straight",
    Orthogonal: "orthogonal",
    Curve: "curve",
    FreePolyline: "freePolyline",
  },
  ft = { Auto: "auto", Manual: "manual", Mixed: "mixed" },
  pt = {
    Association: "association",
    DirectedAssociation: "directedAssociation",
    Aggregation: "aggregation",
    Composition: "composition",
    Generalization: "generalization",
    Realization: "realization",
    Dependency: "dependency",
  },
  mt = { Identifying: "identifying", NonIdentifying: "nonIdentifying" },
  ht = {
    One: "one",
    ZeroOrOne: "zeroOrOne",
    OneOrMany: "oneOrMany",
    ZeroOrMany: "zeroOrMany",
  },
  gt = {
    Synchronous: "synchronous",
    Asynchronous: "asynchronous",
    Reply: "reply",
    Create: "create",
    Destroy: "destroy",
    Self: "self",
  },
  _t = {
    Front: "front",
    Forward: "forward",
    Backward: "backward",
    Back: "back",
  },
  vt = { Horizontal: "horizontal", Vertical: "vertical" },
  yt = {
    Generic: "generic",
    Swimlane: "swimlane",
    UMLPackage: "uml-package",
    SystemBoundary: "system-boundary",
  },
  bt = { Right: "right", Below: "below" },
  xt = {
    Left: "left",
    Center: "center",
    Right: "right",
    Top: "top",
    Middle: "middle",
    Bottom: "bottom",
  },
  St = { Horizontal: "horizontal", Vertical: "vertical" },
  Ct = { Vertical: "vertical", Horizontal: "horizontal" },
  wt = { Start: "start", Center: "center", End: "end" },
  Tt = { Complete: "complete", Pairwise: "pairwise", Fan: "fan" };
var Et = class extends _0x35b53c {
  get BoardBackgroundType() {
    return _0xc88b15;
  }
  get BoardElementType() {
    return _0x18d03f;
  }
  get BoardToolType() {
    return _0x75f0a5;
  }
  get BoardSequenceShapeType() {
    return _0x175ba4;
  }
  get BoardCustomShapeType() {
    return _0x296b91;
  }
  get BoardContainerKind() {
    return yt;
  }
  get BoardConnectorRouting() {
    return dt;
  }
  get BoardConnectorRoutingMode() {
    return ft;
  }
  get BoardConnectorLabelAnchor() {
    return _0x3167c6;
  }
  get BoardConnectorLabelOffsetSpace() {
    return _0x2e4690;
  }
  get BoardConnectorLabelSide() {
    return _0x49c563;
  }
  get BoardConnectorLabelOrientation() {
    return _0x1890d5;
  }
  get BoardConnectorLabelSizing() {
    return _0x375147;
  }
  get BoardUMLClassRelationType() {
    return pt;
  }
  get BoardERDRelationType() {
    return mt;
  }
  get BoardERDCardinality() {
    return ht;
  }
  get BoardSequenceMessageType() {
    return gt;
  }
  get BoardConnectorSite() {
    return _0x160970;
  }
  get BoardElementOrderPlacement() {
    return _t;
  }
  get BoardSwimlaneOrientation() {
    return vt;
  }
  get BoardFacadeNextAvailableBoundsPlacement() {
    return bt;
  }
  get BoardFacadeElementAlignment() {
    return xt;
  }
  get BoardFacadeElementDistribution() {
    return St;
  }
  get BoardFacadeLayeredLayoutDirection() {
    return Ct;
  }
  get BoardFacadeLayeredLayoutAlignment() {
    return wt;
  }
  get BoardFacadeLayeredConnectionMode() {
    return Tt;
  }
};
_0x35b53c.extend(Et);
function E(_0xcfefc0) {
  return typeof _0xcfefc0 == "string"
    ? { isRichText: false, text: _0xcfefc0 }
    : {
        documentData: _0x31f860.deepClone(_0xcfefc0.getData()),
        isRichText: true,
        text: _0xcfefc0.toPlainText(),
      };
}
function D(_0x2d6bc0) {
  return _0x2d6bc0 ? _0x172341.create(_0x31f860.deepClone(_0x2d6bc0)) : null;
}
var Dt = class {
    constructor(_0x4e5ffa, _0x552fa0, _0x5821bf) {
      ((this._unitId = _0x4e5ffa),
        (this._commandService = _0x552fa0),
        (this._permissionService = _0x5821bf));
    }
    async setPoint(_0x59b3d4, _0xa9bad0) {
      await this._commandService["executeCommand"](_0x450d14.id, {
        unitId: this._unitId,
        objectId: this._unitId,
        action: _0x59b3d4,
        value: _0xa9bad0,
      });
    }
    getPoint(_0x2956db) {
      return _0x5c94e3(
        this._permissionService,
        this._unitId,
        this._unitId,
        _0x2956db,
      );
    }
    async setEditable(_0x290339 = true) {
      await this._commandService["executeCommand"](_0x450d14.id, {
        unitId: this._unitId,
        objectId: this._unitId,
        action: _0x2e9798.Edit,
        value: _0x290339,
      });
    }
    async setReadOnly() {
      await this._commandService["executeCommand"](_0x450d14.id, {
        unitId: this._unitId,
        objectId: this._unitId,
        action: _0x2e9798.Edit,
        value: false,
      });
    }
    canEdit() {
      return _0x5c94e3(
        this._permissionService,
        this._unitId,
        this._unitId,
        _0x2e9798.Edit,
      );
    }
  },
  Ot = class {
    constructor(_0xca5613, _0x533eda, _0x257288, _0x59c77b) {
      ((this._unitId = _0xca5613),
        (this._objectId = _0x533eda),
        (this._commandService = _0x257288),
        (this._permissionService = _0x59c77b));
    }
    async setEditable(_0x2a1a94 = true) {
      await this._commandService["executeCommand"](_0x450d14.id, {
        unitId: this._unitId,
        objectId: this._objectId,
        action: _0x2e9798.Edit,
        value: _0x2a1a94,
      });
    }
    async setReadOnly() {
      await this._commandService["executeCommand"](_0x450d14.id, {
        unitId: this._unitId,
        objectId: this._objectId,
        action: _0x2e9798.Edit,
        value: false,
      });
    }
    canEdit() {
      return _0x259bff(this._permissionService, this._unitId, [this._objectId]);
    }
  };
function O(_0x483e66) {
  "@babel/helpers - typeof";
  return (
    (O =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x5e9b4c) {
            return typeof _0x5e9b4c;
          }
        : function (_0x31775a) {
            return _0x31775a &&
              typeof Symbol == "function" &&
              _0x31775a.constructor === Symbol &&
              _0x31775a !== Symbol.prototype
              ? "symbol"
              : typeof _0x31775a;
          }),
    O(_0x483e66)
  );
}
function kt(_0x2a3c17, _0x57c1c3) {
  if (O(_0x2a3c17) != "object" || !_0x2a3c17) return _0x2a3c17;
  var _0xd5ee42 = _0x2a3c17[Symbol.toPrimitive];
  if (_0xd5ee42 !== undefined) {
    var _0x8c4574 = _0xd5ee42.call(_0x2a3c17, _0x57c1c3 || "default");
    if (O(_0x8c4574) != "object") return _0x8c4574;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x57c1c3 === "string" ? String : Number)(_0x2a3c17);
}
function At(_0x1f0534) {
  var _0x255792 = kt(_0x1f0534, "string");
  return O(_0x255792) == "symbol" ? _0x255792 : _0x255792 + "";
}
function jt(_0x91b529, _0x3eb950, _0x143b04) {
  return (
    (_0x3eb950 = At(_0x3eb950)) in _0x91b529
      ? Object.defineProperty(_0x91b529, _0x3eb950, {
          value: _0x143b04,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x91b529[_0x3eb950] = _0x143b04),
    _0x91b529
  );
}
function k(_0x31be89, _0x57fd59) {
  return function (_0x5abd7a, _0x31637c) {
    _0x57fd59(_0x5abd7a, _0x31637c, _0x31be89);
  };
}
function Mt(_0x147d20, _0x3d5c46, _0x32cd7b, _0x2a481e) {
  var _0x53df16 = arguments.length,
    _0xe43e59 =
      _0x53df16 < 3
        ? _0x3d5c46
        : _0x2a481e === null
          ? (_0x2a481e = Object.getOwnPropertyDescriptor(_0x3d5c46, _0x32cd7b))
          : _0x2a481e,
    _0x4dfb0a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0xe43e59 = Reflect.decorate(_0x147d20, _0x3d5c46, _0x32cd7b, _0x2a481e);
  else {
    for (var _0x112499 = _0x147d20.length - 1; _0x112499 >= 0; _0x112499--)
      (_0x4dfb0a = _0x147d20[_0x112499]) &&
        (_0xe43e59 =
          (_0x53df16 < 3
            ? _0x4dfb0a(_0xe43e59)
            : _0x53df16 > 3
              ? _0x4dfb0a(_0x3d5c46, _0x32cd7b, _0xe43e59)
              : _0x4dfb0a(_0x3d5c46, _0x32cd7b)) || _0xe43e59);
  }
  return (
    _0x53df16 > 3 &&
      _0xe43e59 &&
      Object.defineProperty(_0x3d5c46, _0x32cd7b, _0xe43e59),
    _0xe43e59
  );
}
function A(_0x1b64c2) {
  let _0x4e8a0e = _0x1b64c2.transform;
  return {
    left: _0x4e8a0e.left ?? 0,
    top: _0x4e8a0e.top ?? 0,
    width: _0x4e8a0e.width ?? 0,
    height: _0x4e8a0e.height ?? 0,
    angle: _0x4e8a0e.rotation ?? 0,
    flipX: _0x4e8a0e.flipX,
    flipY: _0x4e8a0e.flipY,
  };
}
function j(_0x58df32, _0x333812) {
  if (Object.is(_0x58df32, _0x333812)) return true;
  if (
    !_0x58df32 ||
    !_0x333812 ||
    typeof _0x58df32 != "object" ||
    typeof _0x333812 != "object"
  )
    return false;
  if (Array.isArray(_0x58df32) || Array.isArray(_0x333812))
    return (
      Array.isArray(_0x58df32) &&
      Array.isArray(_0x333812) &&
      _0x58df32.length === _0x333812.length &&
      _0x58df32.every((_0x35d42a, _0x13b3ab) =>
        j(_0x35d42a, _0x333812[_0x13b3ab]),
      )
    );
  let _0x45969a = _0x58df32,
    _0x48397c = _0x333812,
    _0x5a529d = Object.keys(_0x45969a),
    _0xd4c851 = Object.keys(_0x48397c);
  return (
    _0x5a529d.length === _0xd4c851.length &&
    _0x5a529d.every(
      (_0xa9a4a8) =>
        Object.prototype["hasOwnProperty"].call(_0x48397c, _0xa9a4a8) &&
        j(_0x45969a[_0xa9a4a8], _0x48397c[_0xa9a4a8]),
    )
  );
}
function Nt(_0x3ebca4, _0x25d85f) {
  let _0x407893 = { ..._0x3ebca4.transform },
    _0x403c87 = false;
  for (let _0x1be1db of [
    "left",
    "top",
    "width",
    "height",
    "rotation",
    "flipX",
    "flipY",
  ])
    _0x25d85f[_0x1be1db] !== undefined &&
      ((_0x407893[_0x1be1db] = _0x25d85f[_0x1be1db]), (_0x403c87 = true));
  return _0x403c87 ? { ..._0x3ebca4, transform: _0x407893 } : null;
}
function M(_0x1307f5) {
  let _0x145f74 = _0x1307f5.dx ?? 0,
    _0x500f32 = _0x1307f5.dy ?? 0;
  return !Number.isFinite(_0x145f74) ||
    !Number.isFinite(_0x500f32) ||
    (_0x145f74 === 0 && _0x500f32 === 0)
    ? null
    : { dx: _0x145f74, dy: _0x500f32 };
}
function N(_0xd0305e, _0x445a09) {
  return Nt(_0xd0305e, {
    left: (_0xd0305e.transform["left"] ?? 0) + _0x445a09.dx,
    top: (_0xd0305e.transform["top"] ?? 0) + _0x445a09.dy,
  });
}
const Pt = new Set(["bottom", "center", "left", "middle", "right", "top"]);
function Ft(_0xe8cb3) {
  return Pt.has(_0xe8cb3);
}
const It = new Set(["horizontal", "vertical"]);
function Lt(_0x3cb981) {
  return It.has(_0x3cb981);
}
function Rt(_0x21fe2d, _0x41066a, _0x57f92a) {
  switch (_0x57f92a) {
    case "left":
      return M({ dx: _0x41066a.left - _0x21fe2d.bounds["left"] });
    case "center":
      return M({
        dx: _0x41066a.left + _0x41066a.width / 2 - _0x21fe2d.center["x"],
      });
    case "right":
      return M({
        dx:
          _0x41066a.left +
          _0x41066a.width -
          _0x21fe2d.bounds["left"] -
          _0x21fe2d.bounds["width"],
      });
    case "top":
      return M({ dy: _0x41066a.top - _0x21fe2d.bounds["top"] });
    case "middle":
      return M({
        dy: _0x41066a.top + _0x41066a.height / 2 - _0x21fe2d.center["y"],
      });
    case "bottom":
      return M({
        dy:
          _0x41066a.top +
          _0x41066a.height -
          _0x21fe2d.bounds["top"] -
          _0x21fe2d.bounds["height"],
      });
  }
}
function zt(_0x5135ec, _0x4dc865) {
  let _0x5517a4 = _0x4dc865 === "horizontal" ? "x" : "y",
    _0x4d013d = [..._0x5135ec].sort((_0xc5b919, _0xb12949) => {
      let _0x2733fc =
          _0x4dc865 === "horizontal"
            ? _0xc5b919.bounds["left"]
            : _0xc5b919.bounds["top"],
        _0x57b831 =
          _0x4dc865 === "horizontal"
            ? _0xb12949.bounds["left"]
            : _0xb12949.bounds["top"];
      return _0x2733fc === _0x57b831
        ? _0xc5b919.orderIndex - _0xb12949.orderIndex
        : _0x2733fc - _0x57b831;
    }),
    _0x53ad9b = _0x4d013d[0].bounds,
    _0x3afcf8 = _0x4d013d[_0x4d013d.length - 1].bounds,
    _0x3142d5 = _0x4dc865 === "horizontal" ? _0x53ad9b.left : _0x53ad9b.top,
    _0xbe3b82 =
      _0x4dc865 === "horizontal"
        ? _0x3afcf8.left + _0x3afcf8.width
        : _0x3afcf8.top + _0x3afcf8.height,
    _0xa46c79 = _0x4d013d.reduce(
      (_0x2cbe32, _0x10c30d) =>
        _0x2cbe32 +
        (_0x4dc865 === "horizontal"
          ? _0x10c30d.bounds["width"]
          : _0x10c30d.bounds["height"]),
      0,
    ),
    _0x1a9651 = (_0xbe3b82 - _0x3142d5 - _0xa46c79) / (_0x4d013d.length - 1),
    _0x161445 = new Map(),
    _0x180b5c = _0x3142d5;
  return (
    _0x4d013d.forEach((_0xaa6d41) => {
      let _0x320302 =
          _0x4dc865 === "horizontal"
            ? _0xaa6d41.bounds["left"]
            : _0xaa6d41.bounds["top"],
        _0x5bc844 = _0x180b5c - _0x320302,
        _0x21698c = M(
          _0x5517a4 === "x" ? { dx: _0x5bc844 } : { dy: _0x5bc844 },
        );
      (_0x21698c && _0x161445.set(_0xaa6d41.id, _0x21698c),
        (_0x180b5c +=
          (_0x4dc865 === "horizontal"
            ? _0xaa6d41.bounds["width"]
            : _0xaa6d41.bounds["height"]) + _0x1a9651));
    }),
    _0x161445
  );
}
function Bt(_0x388c38) {
  let _0x335bf0 = _0x388c38.gap ?? 40;
  return !Lt(_0x388c38.direction) ||
    !Number.isFinite(_0x335bf0) ||
    _0x335bf0 < 0 ||
    !P(_0x388c38.start)
    ? null
    : {
        direction: _0x388c38.direction,
        gap: _0x335bf0,
        start: _0x388c38.start && _0x31f860.deepClone(_0x388c38.start),
      };
}
function Vt(_0x21cef6) {
  let _0x1db7fd = _0x21cef6.columnGap ?? 40,
    _0x5ae1b6 = _0x21cef6.rowGap ?? 40;
  return !Number.isInteger(_0x21cef6.columns) ||
    _0x21cef6.columns < 1 ||
    !Number.isFinite(_0x1db7fd) ||
    _0x1db7fd < 0 ||
    !Number.isFinite(_0x5ae1b6) ||
    _0x5ae1b6 < 0 ||
    !P(_0x21cef6.start)
    ? null
    : {
        columns: _0x21cef6.columns,
        columnGap: _0x1db7fd,
        rowGap: _0x5ae1b6,
        start: _0x21cef6.start && _0x31f860.deepClone(_0x21cef6.start),
      };
}
const Ht = new Set(["horizontal", "vertical"]),
  Ut = new Set(["center", "end", "start"]);
function Wt(_0x18d02a, _0x5c5bc8) {
  let _0x5f1985 = _0x18d02a
      .map((_0x59373e) => W(_0x59373e))
      .filter((_0x4261fd) => !!_0x4261fd),
    _0x160921 = _0x5f1985.flat(),
    _0x342a1c = _0x5c5bc8.direction ?? "vertical",
    _0x17d89c = _0x5c5bc8.layerGap ?? 140,
    _0x42bb1f = _0x5c5bc8.itemGap ?? 100,
    _0x4b2cdd = _0x5c5bc8.align ?? "center",
    _0x58470d = _0x5c5bc8.itemAlign ?? "center";
  return _0x5f1985.length === 0 ||
    new Set(_0x160921).size !== _0x160921.length ||
    !Ht.has(_0x342a1c) ||
    !Ut.has(_0x4b2cdd) ||
    !Ut.has(_0x58470d) ||
    !Number.isFinite(_0x17d89c) ||
    _0x17d89c < 0 ||
    !Number.isFinite(_0x42bb1f) ||
    _0x42bb1f < 0 ||
    !P(_0x5c5bc8.start)
    ? null
    : {
        align: _0x4b2cdd,
        direction: _0x342a1c,
        elementIds: _0x160921,
        itemAlign: _0x58470d,
        itemGap: _0x42bb1f,
        layerGap: _0x17d89c,
        layers: _0x5f1985,
        start: _0x5c5bc8.start && _0x31f860.deepClone(_0x5c5bc8.start),
      };
}
function P(_0x238f7a) {
  return (
    !_0x238f7a || (Number.isFinite(_0x238f7a.x) && Number.isFinite(_0x238f7a.y))
  );
}
function Gt(_0x5d2725, _0x3096a3) {
  let _0x43d739 = _0x3096a3.start ?? {
      x: _0x5d2725[0].bounds["left"],
      y: _0x5d2725[0].bounds["top"],
    },
    _0x3ec7aa = new Map(),
    _0x272010 =
      _0x3096a3.direction === "horizontal" ? _0x43d739.x : _0x43d739.y;
  return (
    _0x5d2725.forEach((_0x273e71) => {
      let _0x500832 =
          _0x3096a3.direction === "horizontal" ? _0x272010 : _0x43d739.x,
        _0x5b9035 =
          _0x3096a3.direction === "horizontal" ? _0x43d739.y : _0x272010,
        _0x334471 = M({
          dx: _0x500832 - _0x273e71.bounds["left"],
          dy: _0x5b9035 - _0x273e71.bounds["top"],
        });
      (_0x334471 && _0x3ec7aa.set(_0x273e71.id, _0x334471),
        (_0x272010 +=
          (_0x3096a3.direction === "horizontal"
            ? _0x273e71.bounds["width"]
            : _0x273e71.bounds["height"]) + _0x3096a3.gap));
    }),
    _0x3ec7aa
  );
}
function Kt(_0x40ed72, _0x5b7a7f) {
  let _0x3bd9a9 = _0x5b7a7f.start ?? {
      x: _0x40ed72[0].bounds["left"],
      y: _0x40ed72[0].bounds["top"],
    },
    _0x2ef8f6 = new Map(),
    _0x20ad5e = _0x3bd9a9.y;
  for (
    let _0x729cf = 0;
    _0x729cf < _0x40ed72.length;
    _0x729cf += _0x5b7a7f.columns
  ) {
    let _0x3af659 = _0x40ed72.slice(_0x729cf, _0x729cf + _0x5b7a7f.columns),
      _0x532332 = _0x3bd9a9.x,
      _0x28b3ad = 0;
    (_0x3af659.forEach((_0x31b5b3) => {
      let _0x340b82 = M({
        dx: _0x532332 - _0x31b5b3.bounds["left"],
        dy: _0x20ad5e - _0x31b5b3.bounds["top"],
      });
      (_0x340b82 && _0x2ef8f6.set(_0x31b5b3.id, _0x340b82),
        (_0x532332 += _0x31b5b3.bounds["width"] + _0x5b7a7f.columnGap),
        (_0x28b3ad = Math.max(_0x28b3ad, _0x31b5b3.bounds["height"])));
    }),
      (_0x20ad5e += _0x28b3ad + _0x5b7a7f.rowGap));
  }
  return _0x2ef8f6;
}
function qt(_0x290eaa, _0x2d8e00, _0x213384) {
  switch (_0x213384) {
    case "start":
      return 0;
    case "end":
      return _0x290eaa - _0x2d8e00;
    case "center":
      return (_0x290eaa - _0x2d8e00) / 2;
  }
}
function F(_0x5ad0f3) {
  return Number((Math.abs(_0x5ad0f3) < 1e-9 ? 0 : _0x5ad0f3).toFixed(6));
}
function Jt(_0x5ae314) {
  return (
    _0x5ae314.fillColor !== undefined ||
    _0x5ae314.strokeColor !== undefined ||
    _0x5ae314.strokeWidth !== undefined
  );
}
function Yt(_0x5a9487) {
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
  ].some((_0xf8acb4) => _0x5a9487[_0xf8acb4] !== undefined);
}
function Xt(_0x2ca85e) {
  return _0x2ca85e == null
    ? true
    : ![
          "dash",
          "particle",
          "pulse",
          "gradient",
          "particles",
          "arrows",
        ].includes(_0x2ca85e.mode) ||
        (_0x2ca85e.direction !== undefined &&
          _0x2ca85e.direction !== "forward" &&
          _0x2ca85e.direction !== "reverse")
      ? false
      : _0x2ca85e.speed === undefined ||
        (Number.isFinite(_0x2ca85e.speed) && _0x2ca85e.speed > 0);
}
function Zt(_0x202da6) {
  return (
    _0x202da6 === undefined ||
    (_0x202da6 !== null &&
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
      ].includes(_0x202da6.type))
  );
}
function Qt(_0x69d2c5, _0x5d0901) {
  if (
    !Yt(_0x5d0901) ||
    !Xt(_0x5d0901.animation) ||
    !Zt(_0x5d0901.startMarker) ||
    !Zt(_0x5d0901.endMarker)
  )
    return null;
  let { animation: _0x541875, ..._0x452dd9 } = _0x5d0901,
    _0x3b6354 = { ..._0x69d2c5.connectorData["style"], ..._0x452dd9 };
  return (
    _0x541875 === null
      ? delete _0x3b6354.animation
      : _0x541875 !== undefined &&
        (_0x3b6354.animation = _0x31f860.deepClone(_0x541875)),
    {
      ..._0x69d2c5,
      connectorData: { ..._0x69d2c5.connectorData, style: _0x3b6354 },
    }
  );
}
function $t(_0x425744) {
  return _0x31f860.deepClone(_0x425744.connectorData["style"] ?? {});
}
function en(_0x3cd58d) {
  var _0x1da54f, _0x2eb74f, _0x97dd3b, _0x1debca;
  return {
    fillColor:
      (_0x1da54f = _0x3cd58d.containerData["shapeData"].fill) == null
        ? undefined
        : _0x1da54f.color,
    strokeColor:
      (_0x2eb74f = _0x3cd58d.containerData["shapeData"].stroke) == null
        ? undefined
        : _0x2eb74f.color,
    strokeWidth:
      (_0x97dd3b = _0x3cd58d.containerData["shapeData"].stroke) == null
        ? undefined
        : _0x97dd3b.width,
    titleStyle:
      (_0x1debca = _0x3cd58d.containerData["style"]) != null &&
      _0x1debca.titleStyle
        ? _0x31f860.deepClone(_0x3cd58d.containerData["style"].titleStyle)
        : undefined,
  };
}
function tn(_0x208086, _0x102843) {
  var _0x290112;
  return !Jt(_0x102843) && _0x102843.titleStyle === undefined
    ? null
    : {
        ..._0x208086,
        containerData: {
          ..._0x208086.containerData,
          shapeData: {
            ..._0x208086.containerData["shapeData"],
            ...(_0x102843.fillColor === undefined
              ? null
              : {
                  fill: {
                    ..._0x208086.containerData["shapeData"].fill,
                    color: _0x102843.fillColor,
                  },
                }),
            ...(_0x102843.strokeColor === undefined &&
            _0x102843.strokeWidth === undefined
              ? null
              : {
                  stroke: {
                    ..._0x208086.containerData["shapeData"].stroke,
                    ...(_0x102843.strokeColor === undefined
                      ? null
                      : { color: _0x102843.strokeColor }),
                    ...(_0x102843.strokeWidth === undefined
                      ? null
                      : { width: _0x102843.strokeWidth }),
                  },
                }),
          },
          ...(_0x102843.titleStyle === undefined
            ? null
            : {
                style: {
                  ..._0x208086.containerData["style"],
                  titleStyle: {
                    ...((_0x290112 = _0x208086.containerData["style"]) == null
                      ? undefined
                      : _0x290112.titleStyle),
                    ..._0x31f860.deepClone(_0x102843.titleStyle),
                  },
                },
              }),
        },
      };
}
function nn(_0x44d21a) {
  return _0x44d21a && typeof _0x44d21a == "object" ? _0x44d21a : undefined;
}
function rn(_0x3e7c61, _0x2bd444) {
  let _0x2c1a78 = nn(_0x2bd444),
    _0x17ae31 = E(_0x3e7c61),
    _0x3a7411 = _0x1a2e88({
      bold: _0x2c1a78 == null ? undefined : _0x2c1a78.bold,
      color: _0x2c1a78 == null ? undefined : _0x2c1a78.color,
      fontFamily: _0x2c1a78 == null ? undefined : _0x2c1a78.fontFamily,
      fontSize: _0x2c1a78 == null ? undefined : _0x2c1a78.fontSize,
      horizontal: _0x2c1a78 == null ? undefined : _0x2c1a78.isHorizontal,
      horizontalAlign:
        (_0x2c1a78 == null ? undefined : _0x2c1a78.horizontalAlign) ??
        _0x46502a.CENTER,
      italic: _0x2c1a78 == null ? undefined : _0x2c1a78.italic,
      strikethrough: _0x2c1a78 == null ? undefined : _0x2c1a78.strikethrough,
      text: _0x17ae31.text,
      textFill: _0x2c1a78 == null ? undefined : _0x2c1a78.textFill,
      underline: _0x2c1a78 == null ? undefined : _0x2c1a78.underline,
      verticalAlign:
        (_0x2c1a78 == null ? undefined : _0x2c1a78.verticalAlign) ??
        _0x46c2f1.MIDDLE,
    });
  return _0x17ae31.documentData
    ? {
        ..._0x3a7411,
        isRichText: true,
        dataModel: {
          ..._0x3a7411.dataModel,
          doc: _0x2d8247(_0x3a7411.dataModel["doc"], _0x17ae31.documentData),
        },
      }
    : _0x3a7411;
}
function an(_0x1b1f41, _0x4bf9e1) {
  return _0x1b1f41
    ? D(_0x1b1f41)
    : _0x4bf9e1 === undefined
      ? null
      : D(_0x54ed1f({ left: 0, top: 0, text: _0x4bf9e1 }).textData);
}
function I(_0x2bf359) {
  return {
    content: _0x31f860.deepClone(
      _0x2bf359 instanceof _0x172341 ? _0x2bf359.getData() : _0x2bf359,
    ),
  };
}
function on(_0x36ef67) {
  if (!Array.isArray(_0x36ef67)) return null;
  let _0x169076 = _0x36ef67.map((_0xedd4e9) =>
    (_0xedd4e9 == null ? undefined : _0xedd4e9.content) === undefined
      ? _0xedd4e9
      : { ..._0xedd4e9, ...I(_0xedd4e9.content) },
  );
  return _0x1526fd(_0x169076) ? _0x31f860.deepClone(_0x169076) : null;
}
function L(_0x127519, _0x32beca) {
  return Object.fromEntries(
    Object.values(_0x32beca.elements).map((_0x2c7438) => [
      _0x2c7438.id,
      {
        unitId: _0x127519,
        subUnitId: _0x32beca.id,
        elementId: _0x2c7438.id,
        element: _0x2c7438,
        transform: A(_0x2c7438),
      },
    ]),
  );
}
function sn(_0x5553c8) {
  return _0x5553c8 && !Q(_0x5553c8) ? _0x5553c8.elementId : undefined;
}
function cn(_0x27536c) {
  return (
    !!_0x27536c &&
    !Q(_0x27536c) &&
    _0x27536c.side === undefined &&
    _0x27536c.connectionSiteId === undefined &&
    _0x27536c.position === undefined
  );
}
function ln(_0x152b44, _0x4578ff) {
  let _0x2e66a8 = Y(_0x152b44),
    _0x1f9fee = Y(_0x4578ff),
    _0x34852a = _0x1f9fee.x - _0x2e66a8.x,
    _0x34a11a = _0x1f9fee.y - _0x2e66a8.y;
  return Math.abs(_0x34852a) >= Math.abs(_0x34a11a)
    ? _0x34852a >= 0
      ? { start: "right", end: "left" }
      : { start: "left", end: "right" }
    : _0x34a11a >= 0
      ? { start: "bottom", end: "top" }
      : { start: "top", end: "bottom" };
}
function un(_0x17b8f9, _0x3b864a) {
  return cn(_0x17b8f9) && _0x17b8f9 && !Q(_0x17b8f9)
    ? { ..._0x17b8f9, side: _0x3b864a }
    : _0x17b8f9;
}
function dn(_0x3fc2dd) {
  return (
    !!_0x3fc2dd &&
    !Q(_0x3fc2dd) &&
    (_0x3fc2dd.position === undefined ||
      Math.abs(_0x3fc2dd.position - 0.5) <= 2 ** -52)
  );
}
function fn(_0x4fed8b) {
  var _0x2f3a4c;
  if (!(!_0x4fed8b || Q(_0x4fed8b)))
    return _0x4fed8b.side === undefined
      ? (_0x2f3a4c = Object.entries(_0x40255d).find(
          ([, _0x4742e8]) => _0x4742e8 === _0x4fed8b.connectionSiteId,
        )) == null
        ? undefined
        : _0x2f3a4c[0]
      : _0x4fed8b.side;
}
function pn(_0x5415e8, _0x2218fd, _0x51849f, _0x35438b, _0x53ee0b) {
  let _0x1fe699 = Math.min(_0x35438b, _0x53ee0b),
    _0x14c56d = Math.max(_0x35438b, _0x53ee0b),
    _0x56362a = _0x2218fd === "horizontal" ? _0x5415e8.top : _0x5415e8.left,
    _0xbe9bda =
      _0x56362a +
      (_0x2218fd === "horizontal" ? _0x5415e8.height : _0x5415e8.width),
    _0x2b5b27 = _0x2218fd === "horizontal" ? _0x5415e8.left : _0x5415e8.top,
    _0x3577d5 =
      _0x2b5b27 +
      (_0x2218fd === "horizontal" ? _0x5415e8.width : _0x5415e8.height);
  return (
    _0x51849f >= _0x56362a - 8 &&
    _0x51849f <= _0xbe9bda + 8 &&
    _0x14c56d > _0x2b5b27 - 8 &&
    _0x1fe699 < _0x3577d5 + 8
  );
}
const mn = {
    bottom: "vertical",
    left: "horizontal",
    right: "horizontal",
    top: "vertical",
  },
  hn = { bottom: "top", left: "right", right: "left", top: "bottom" };
function gn(_0x4ac4ac, _0x28cecd) {
  return _0x28cecd === "right"
    ? _0x4ac4ac.left + _0x4ac4ac.width
    : _0x28cecd === "bottom"
      ? _0x4ac4ac.top + _0x4ac4ac.height
      : _0x28cecd === "left"
        ? _0x4ac4ac.left
        : _0x4ac4ac.top;
}
function _n(_0x3ab3de, _0xac9dda, _0x4e8b0b) {
  let _0x461e6c = mn[_0x4e8b0b.start],
    _0x3e2645 = Y(_0x3ab3de),
    _0x18fdfe = Y(_0xac9dda);
  if (
    hn[_0x4e8b0b.start] !== _0x4e8b0b.end ||
    Math.abs(
      _0x461e6c === "horizontal"
        ? _0x3e2645.y - _0x18fdfe.y
        : _0x3e2645.x - _0x18fdfe.x,
    ) > 1
  )
    return null;
  let _0x4c8ff6 = gn(_0x3ab3de, _0x4e8b0b.start),
    _0x4ad25d = gn(_0xac9dda, _0x4e8b0b.end);
  return (
    _0x4e8b0b.start === "right" || _0x4e8b0b.start === "bottom"
      ? _0x4ad25d > _0x4c8ff6
      : _0x4ad25d < _0x4c8ff6
  )
    ? {
        axis: _0x461e6c,
        fixed: _0x461e6c === "horizontal" ? _0x3e2645.y : _0x3e2645.x,
        start: _0x4c8ff6,
        end: _0x4ad25d,
      }
    : null;
}
function vn(_0x176372, _0x463a88, _0x1f3137, _0x1a8b2f) {
  if (
    _0x463a88.has(_0x176372.id) ||
    _0x176372.visible === false ||
    _0x176372.type === _0x18d03f.Connector ||
    _0x176372.type === _0x18d03f.Container
  )
    return false;
  let _0x465a2e = _0x171003(_0x1f3137, _0x176372.id);
  return (
    !!_0x465a2e &&
    pn(
      _0x465a2e,
      _0x1a8b2f.axis,
      _0x1a8b2f.fixed,
      _0x1a8b2f.start,
      _0x1a8b2f.end,
    )
  );
}
function yn(
  _0x337d97,
  _0x48d497,
  _0x46a8df,
  _0x32a0c1,
  _0x26ab97,
  _0x525993,
  _0x53f83f,
) {
  let _0xa328ad = _n(_0x26ab97, _0x525993, _0x53f83f);
  if (!_0xa328ad) return false;
  let _0x12a9c4 = L(_0x337d97, _0x48d497),
    _0x131b25 = new Set([_0x46a8df, _0x32a0c1]);
  return !Object.values(_0x48d497.elements).some((_0x7fa12d) =>
    vn(_0x7fa12d, _0x131b25, _0x12a9c4, _0xa328ad),
  );
}
function bn(
  _0x485cb3,
  _0x4c5cab,
  _0xf16f6d,
  _0x103170,
  _0x2961a1,
  _0x165fa1,
  _0x28490d,
  _0x1ba0e2,
  _0x2eceec,
) {
  return (
    dn(_0x2961a1) &&
    dn(_0x165fa1) &&
    fn(_0x2961a1) === _0x2eceec.start &&
    fn(_0x165fa1) === _0x2eceec.end &&
    yn(
      _0x485cb3,
      _0x4c5cab,
      _0xf16f6d,
      _0x103170,
      _0x28490d,
      _0x1ba0e2,
      _0x2eceec,
    )
  );
}
function xn(_0x18b769, _0xbd61db, _0x40c4d0, _0x103e63, _0x487f2c) {
  var _0x19406f, _0x3130b5;
  let _0x5254e6 = sn(_0x103e63),
    _0x281618 = sn(_0x487f2c),
    _0x53a0b1 = _0x103e63,
    _0x55b867 = _0x487f2c,
    _0x1b5ee3 = false;
  if (_0xbd61db && _0x5254e6 && _0x281618 && _0x5254e6 !== _0x281618) {
    let _0x46afae = L(_0x18b769, _0xbd61db),
      _0x593bf6 = _0x171003(_0x46afae, _0x5254e6),
      _0x528d7e = _0x171003(_0x46afae, _0x281618);
    if (_0x593bf6 && _0x528d7e) {
      let _0x36e244 = ln(_0x593bf6, _0x528d7e);
      ((_0x53a0b1 = un(_0x103e63, _0x36e244.start)),
        (_0x55b867 = un(_0x487f2c, _0x36e244.end)),
        (_0x1b5ee3 = bn(
          _0x18b769,
          _0xbd61db,
          _0x5254e6,
          _0x281618,
          _0x53a0b1,
          _0x55b867,
          _0x593bf6,
          _0x528d7e,
          _0x36e244,
        )));
    }
  }
  let _0x335111 =
      _0x40c4d0.routing === undefined || _0x40c4d0.routing === "auto",
    _0x4e974d =
      _0x40c4d0.routing !== undefined && _0x40c4d0.routing !== "auto"
        ? _0x40c4d0.routing
        : _0x1b5ee3 &&
            _0x40c4d0.routingMode !== "manual" &&
            (((_0x19406f = _0x40c4d0.waypoints) == null
              ? undefined
              : _0x19406f.length) ?? 0) === 0
          ? "straight"
          : "orthogonal",
    _0x3ed098 =
      _0x335111 &&
      _0x4e974d === "orthogonal" &&
      ((_0x3130b5 = _0x40c4d0.style) == null
        ? undefined
        : _0x3130b5.cornerStyle) === undefined
        ? { ..._0x40c4d0.style, cornerStyle: "miter" }
        : _0x40c4d0.style;
  return {
    start: _0x53a0b1,
    end: _0x55b867,
    routing: _0x4e974d,
    style: _0x3ed098,
  };
}
function Sn(_0x49cc58, _0x58f927) {
  return (
    _0x49cc58.x >= _0x58f927.left &&
    _0x49cc58.x <= _0x58f927.left + _0x58f927.width &&
    _0x49cc58.y >= _0x58f927.top &&
    _0x49cc58.y <= _0x58f927.top + _0x58f927.height
  );
}
function Cn(_0x410085, _0x2e88ff, _0x55fe43, _0x4de50f) {
  return _0x4de50f === "content"
    ? _0x410085.containerData["kind"] === "swimlane" &&
      _0x410085.containerData["swimlane"]
      ? !!_0x135219(_0x410085, _0x2e88ff, _0x55fe43)
      : Sn(_0x55fe43, _0x1c43ca(_0x410085, _0x2e88ff).contentBounds)
    : Sn(_0x55fe43, _0x2e88ff);
}
function wn(_0x3b18dc, _0x3df7d3, _0x4afdbf) {
  return _0x3df7d3.get(_0x4afdbf) ?? _0x3b18dc.elements[_0x4afdbf];
}
function R(_0x5d98c4, _0x452118, _0x585ea8 = new Map()) {
  let _0x344347 = _0x452118.parentId,
    _0x571e39 = new Set([_0x452118.id]);
  for (; _0x344347;) {
    if (_0x571e39.has(_0x344347)) return true;
    let _0x2b7275 = wn(_0x5d98c4, _0x585ea8, _0x344347);
    if (
      !_0x2b7275 ||
      _0x2b7275.type !== _0x18d03f.Container ||
      _0x2b7275.visible === false ||
      _0x2b7275.locked === true ||
      _0x2b7275.selectable === false
    )
      return true;
    (_0x571e39.add(_0x344347), (_0x344347 = _0x2b7275.parentId));
  }
  return false;
}
function Tn(_0x241ae5, _0x52704a, _0x30cc24) {
  if (!_0x30cc24.parentId) return true;
  let _0x63c876 = wn(_0x241ae5, _0x52704a, _0x30cc24.parentId);
  if (!_0x63c876) return true;
  if (_0x63c876.type !== _0x18d03f.Container) return false;
  let _0x24aae8 = _0x63c876.containerData["behavior"];
  return _0x63c876.visible === false ||
    _0x63c876.locked === true ||
    _0x63c876.selectable === false ||
    _0x24aae8.membershipLocked ||
    !_0x24aae8.acceptsChildren ||
    R(_0x241ae5, _0x63c876, _0x52704a)
    ? false
    : _0x30cc24.type !== _0x18d03f.Container ||
        (_0x24aae8.acceptsContainer && _0x24aae8.allowNested);
}
function En(_0x5e2932) {
  let _0x503a9c = new Map(
    _0x5e2932.map((_0x135aef) => [_0x135aef.id, _0x135aef]),
  );
  return _0x5e2932.every((_0x113d1a) => {
    if (!_0x113d1a.parentId) return true;
    let _0x2f0fe6 = new Set([_0x113d1a.id]),
      _0x5004a6 = _0x113d1a.parentId;
    for (; _0x5004a6;) {
      var _0x510cac;
      if (_0x2f0fe6.has(_0x5004a6)) return false;
      (_0x2f0fe6.add(_0x5004a6),
        (_0x5004a6 =
          (_0x510cac = _0x503a9c.get(_0x5004a6)) == null
            ? undefined
            : _0x510cac.parentId));
    }
    let _0x2e3cb0 = _0x503a9c.get(_0x113d1a.parentId);
    if (!_0x2e3cb0) return true;
    if (_0x2e3cb0.type !== _0x18d03f.Container) return false;
    let _0x54f4be = _0x2e3cb0.containerData["behavior"];
    return _0x2e3cb0.visible === false ||
      _0x2e3cb0.locked === true ||
      _0x2e3cb0.selectable === false ||
      _0x54f4be.membershipLocked ||
      !_0x54f4be.acceptsChildren
      ? false
      : _0x113d1a.type !== _0x18d03f.Container ||
          (_0x54f4be.acceptsContainer && _0x54f4be.allowNested);
  });
}
function Dn(_0x375e4f) {
  return (
    !!_0x375e4f &&
    _0x375e4f.type === _0x18d03f.Container &&
    _0x375e4f.visible !== false &&
    _0x375e4f.locked !== true &&
    _0x375e4f.selectable !== false
  );
}
function z(_0x5a07f6, _0x14c1be) {
  return (
    _0x5a07f6.type !== _0x18d03f.Container ||
    ((_0x5a07f6.transform["rotation"] ?? 0) === 0 &&
      ((_0x14c1be == null ? undefined : _0x14c1be.angle) ?? 0) === 0 &&
      (!_0x5a07f6.containerData["behavior"].membershipLocked ||
        _0x5a07f6.containerData["behavior"].autoResize))
  );
}
function B(_0x2aaa23) {
  let _0x39218c = new Set();
  for (let _0x13f5c9 of _0x2aaa23) {
    if (_0x39218c.has(_0x13f5c9)) return true;
    _0x39218c.add(_0x13f5c9);
  }
  return false;
}
function V(_0x1dd503) {
  return [..._0x1dd503.lanes].sort(
    (_0x19ce77, _0x6afdd5) => _0x19ce77.order - _0x6afdd5.order,
  );
}
function H(_0x550a8a) {
  return _0x550a8a.map((_0xeac168, _0x2c9f9d) => ({
    ..._0xeac168,
    order: _0x2c9f9d,
  }));
}
function On(_0x1ee878, _0x37e264) {
  return _0x1ee878.lanes["some"](
    (_0xb3b612) => _0xb3b612.id === _0x37e264 && _0xb3b612.locked === true,
  );
}
function kn(_0x222c61, _0x144dfa) {
  let _0x47dad3 = 0,
    _0xe205db = V(_0x222c61);
  for (let _0x19f09d of _0xe205db) {
    if (_0x19f09d.id === _0x144dfa) return _0x47dad3;
    _0x47dad3 += _0x19f09d.size;
  }
}
function U(_0x3a7a74, _0x2f824e) {
  let _0x1d34cc = new Map(
      _0x2f824e.map((_0x22c6d7) => [_0x22c6d7.id, _0x22c6d7]),
    ),
    _0x249239 = { ..._0x3a7a74, lanes: _0x2f824e };
  return _0x3a7a74.lanes["some"]((_0x5c8e32) => {
    if (_0x5c8e32.locked !== true) return false;
    let _0x49040a = _0x1d34cc.get(_0x5c8e32.id),
      _0xbc0890 = kn(_0x3a7a74, _0x5c8e32.id),
      _0x5d9b42 = kn(_0x249239, _0x5c8e32.id);
    return (
      !_0x49040a ||
      _0x5d9b42 !== _0xbc0890 ||
      _0x49040a.title !== _0x5c8e32.title ||
      _0x49040a.order !== _0x5c8e32.order ||
      _0x49040a.size !== _0x5c8e32.size ||
      _0x49040a.minSize !== _0x5c8e32.minSize ||
      _0x49040a.locked !== _0x5c8e32.locked ||
      _0x49040a.collapsed !== _0x5c8e32.collapsed
    );
  });
}
function An(_0x475be6, _0x17f3e2) {
  return (
    _0x475be6.lanes["some"]((_0x4ca4b0) => _0x4ca4b0.locked === true) &&
    (_0x17f3e2.orientation !== _0x475be6.orientation ||
      _0x17f3e2.headerSize !== _0x475be6.headerSize ||
      _0x17f3e2.collapsedLaneSize !== _0x475be6.collapsedLaneSize)
  );
}
function W(..._0x59e3bc) {
  let _0x49cbdf = _0x59e3bc
    .flatMap((_0x17014f) =>
      Array.isArray(_0x17014f)
        ? _0x17014f
        : _0x17014f === undefined
          ? []
          : [_0x17014f],
    )
    .map((_0x336e58) => _0x336e58.trim())
    .filter((_0x34210c) => _0x34210c.length > 0);
  return _0x49cbdf.length > 0 ? [...new Set(_0x49cbdf)] : undefined;
}
function jn(..._0xc60e5b) {
  let _0x5a8ae2 = _0xc60e5b.flatMap((_0x4dd81d) =>
    Array.isArray(_0x4dd81d)
      ? _0x4dd81d
      : _0x4dd81d === undefined
        ? []
        : [_0x4dd81d],
  );
  return _0x5a8ae2.length > 0 ? [...new Set(_0x5a8ae2)] : undefined;
}
function Mn(_0x478ae2) {
  return {
    name: _0x478ae2.name,
    description: _0x478ae2.description,
    visible: _0x478ae2.visible !== false,
    selectable: _0x478ae2.selectable !== false,
    locked: _0x478ae2.locked === true,
  };
}
function G(_0x1d76c3) {
  if (typeof _0x1d76c3 != "string") return;
  let _0xce8fc8 = _0x1d76c3.trim();
  return _0xce8fc8.length > 0 ? _0xce8fc8 : undefined;
}
function Nn(_0x2d32e1) {
  let _0x2f249b = _0x2d32e1.shapeData["shapeText"];
  return G(
    !_0x2f249b || typeof _0x2f249b != "object" ? _0x2f249b : _0x2f249b.text,
  );
}
function Pn(_0x87162b) {
  switch (_0x87162b.type) {
    case _0x18d03f.Shape:
      return Nn(_0x87162b);
    case _0x18d03f.Connector:
      return G(_0x4e27f8(_0x149304(_0x87162b.connectorData)[0]));
    case _0x18d03f.Container:
      return G(_0x87162b.containerData["title"]);
    case _0x18d03f.Text:
    case _0x18d03f.Placeholder:
      return G(_0x87162b.text);
    default:
      return;
  }
}
function Fn(_0x510495) {
  switch (_0x510495.type) {
    case _0x18d03f.Shape:
      return G(_0x510495.shapeData["shapeType"]);
    case _0x18d03f.Connector:
      return G(_0x510495.connectorData["routing"]);
    case _0x18d03f.Container:
      return G(_0x510495.containerData["kind"]);
    case _0x18d03f.Placeholder:
      return G(_0x510495.placeholder["type"]);
    default:
      return;
  }
}
function In(_0x3dd768) {
  return _0x3dd768.kind === "free" ? undefined : _0x3dd768.shapeId;
}
function Ln(_0x59bfb6, _0x2e4667) {
  return _0x31f860.deepClone(_0x2e4667);
}
function Rn(_0x59355f) {
  let _0x5e9be3 = new Set();
  return _0x59355f.every((_0x1b39b0) => {
    let _0x4d9ef9 =
      _0x1b39b0.id["trim"]().length > 0 &&
      !_0x5e9be3.has(_0x1b39b0.id) &&
      Number.isFinite(_0x1b39b0.x) &&
      Number.isFinite(_0x1b39b0.y) &&
      (_0x1b39b0.kind === "manual" || _0x1b39b0.kind === "auto");
    return (_0x5e9be3.add(_0x1b39b0.id), _0x4d9ef9);
  });
}
function K(_0x19dd8e, _0x1eabfc, _0x5e59e4, _0x5b98c3) {
  return {
    id: _0x19dd8e,
    ...I(_0x1eabfc),
    placement: {
      anchor: _0x5e59e4,
      side: _0x5b98c3,
      distance: 22,
      ...(_0x5e59e4 === "start" || _0x5e59e4 === "end"
        ? { alongOffset: 24 }
        : {}),
      orientation: "horizontal",
    },
  };
}
function zn(_0x5c99f9) {
  switch (_0x5c99f9) {
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
function Bn(_0x802d33) {
  switch (_0x802d33) {
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
function Vn(_0x4ce024) {
  switch (_0x4ce024) {
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
function Hn(_0x44ee19) {
  return (
    !!_0x44ee19 &&
    [
      "association",
      "directedAssociation",
      "aggregation",
      "composition",
      "generalization",
      "realization",
      "dependency",
    ].includes(_0x44ee19.type) &&
    [_0x44ee19.start, _0x44ee19.end].every(
      (_0x4c08d9) =>
        !!_0x4c08d9 &&
        typeof _0x4c08d9.elementId == "string" &&
        _0x4c08d9.elementId["length"] > 0 &&
        (_0x4c08d9.multiplicity === undefined ||
          typeof _0x4c08d9.multiplicity == "string"),
    )
  );
}
function Un(_0x41a909) {
  return (
    !!_0x41a909 &&
    ["identifying", "nonIdentifying"].includes(_0x41a909.type) &&
    [_0x41a909.start, _0x41a909.end].every(
      (_0x345f2a) =>
        !!_0x345f2a &&
        typeof _0x345f2a.elementId == "string" &&
        _0x345f2a.elementId["length"] > 0 &&
        ["one", "zeroOrOne", "oneOrMany", "zeroOrMany"].includes(
          _0x345f2a.cardinality,
        ),
    )
  );
}
function Wn(_0x14a81a) {
  var _0x307ecf, _0x15e6fc;
  let _0x1a087d = _0x14a81a.id ?? _0x52ee79(6),
    _0x16ce3a = [];
  return (
    _0x14a81a.name !== undefined &&
      _0x16ce3a.push(K(_0x1a087d + ":name", _0x14a81a.name, "center", "left")),
    _0x14a81a.start["role"] !== undefined &&
      _0x16ce3a.push(
        K(_0x1a087d + ":start-role", _0x14a81a.start["role"], "start", "left"),
      ),
    (_0x307ecf = _0x14a81a.start["multiplicity"]) != null &&
      _0x307ecf.trim() &&
      _0x16ce3a.push(
        K(
          _0x1a087d + ":start-multiplicity",
          _0x14a81a.start["multiplicity"],
          "start",
          "right",
        ),
      ),
    _0x14a81a.end["role"] !== undefined &&
      _0x16ce3a.push(
        K(_0x1a087d + ":end-role", _0x14a81a.end["role"], "end", "left"),
      ),
    (_0x15e6fc = _0x14a81a.end["multiplicity"]) != null &&
      _0x15e6fc.trim() &&
      _0x16ce3a.push(
        K(
          _0x1a087d + ":end-multiplicity",
          _0x14a81a.end["multiplicity"],
          "end",
          "right",
        ),
      ),
    {
      id: _0x14a81a.id,
      start: {
        elementId: _0x14a81a.start["elementId"],
        connectionSiteId: _0x14a81a.start["connectionSiteId"],
      },
      end: {
        elementId: _0x14a81a.end["elementId"],
        connectionSiteId: _0x14a81a.end["connectionSiteId"],
      },
      routing: _0x14a81a.routing,
      style: { ...zn(_0x14a81a.type), ..._0x14a81a.style },
      labels: _0x16ce3a,
      parentId: _0x14a81a.parentId,
      laneId: _0x14a81a.laneId,
    }
  );
}
function Gn(_0x119796) {
  let _0xa8d20e =
    _0x119796.label === undefined
      ? undefined
      : [
          K(
            (_0x119796.id ?? _0x52ee79(6)) + ":name",
            _0x119796.label,
            "center",
            "left",
          ),
        ];
  return {
    id: _0x119796.id,
    start: {
      elementId: _0x119796.start["elementId"],
      connectionSiteId: _0x119796.start["connectionSiteId"],
    },
    end: {
      elementId: _0x119796.end["elementId"],
      connectionSiteId: _0x119796.end["connectionSiteId"],
    },
    routing: _0x119796.routing,
    style: {
      dash: _0x119796.type === "nonIdentifying" ? [6, 4] : undefined,
      startMarker: Bn(_0x119796.start["cardinality"]),
      endMarker: Bn(_0x119796.end["cardinality"]),
      ..._0x119796.style,
    },
    labels: _0xa8d20e,
    parentId: _0x119796.parentId,
    laneId: _0x119796.laneId,
  };
}
function Kn(
  _0x4afc9e,
  _0x1967f4,
  _0x3f2552,
  _0x354e11,
  _0x1321b0,
  _0x1aca29 = "message",
) {
  var _0x4170fd;
  let _0x219eed = _0x171003(_0x354e11, _0x4afc9e),
    _0x1693a5 = _0x171003(_0x354e11, _0x1967f4),
    _0x8b4826 =
      (_0x4170fd = _0x354e11[_0x4afc9e]) == null
        ? undefined
        : _0x4170fd.element,
    _0x55b36f =
      (_0x8b4826 == null ? undefined : _0x8b4826.type) === _0x18d03f.Shape
        ? _0x282ecf(_0x8b4826.shapeData)
        : undefined,
    _0x33e05d = _0x55b36f
      ? Math.max(_0x55b36f.minLifelineHeight, _0x55b36f.lifelineHeight)
      : 0;
  if (
    !_0x219eed ||
    !_0x1693a5 ||
    !Number.isFinite(_0x3f2552) ||
    !Number.isFinite(_0x33e05d)
  )
    return null;
  let _0x745e3f =
    _0x1693a5.left + _0x1693a5.width / 2 >= _0x219eed.left + _0x219eed.width / 2
      ? "right"
      : "left";
  if (_0x1aca29 === "create")
    return _0x1321b0 !== undefined ||
      Math.abs(_0x3f2552 - _0x219eed.top - _0x219eed.height / 2) > 0.000001
      ? null
      : { elementId: _0x4afc9e, side: _0x745e3f, position: 0.5 };
  let _0x3a46b5 = _0x3f2552 - _0x219eed.top - _0x219eed.height;
  if (
    _0x3a46b5 < 0 ||
    _0x3a46b5 > _0x33e05d ||
    (_0x1aca29 === "destroy" && Math.abs(_0x3a46b5 - _0x33e05d) > 0.000001)
  )
    return null;
  let _0x16836d = Object.values(_0x354e11).filter(({ element: _0x3b2d07 }) => {
    if (
      _0x3b2d07.type !== _0x18d03f.Shape ||
      _0x3b2d07.visible === false ||
      (_0x1321b0 && _0x3b2d07.id !== _0x1321b0)
    )
      return false;
    let _0x5b6764 = _0x3d105e(_0x3b2d07.shapeData);
    if (
      (_0x5b6764 == null ? undefined : _0x5b6764.lifelineId) !== _0x4afc9e ||
      !_0x5b6764.attachableToLifeline
    )
      return false;
    let _0x40dc62 = _0x171003(_0x354e11, _0x3b2d07.id);
    return (
      !!_0x40dc62 &&
      _0x40dc62.height > 0 &&
      _0x3f2552 >= _0x40dc62.top &&
      _0x3f2552 <= _0x40dc62.top + _0x40dc62.height
    );
  });
  if (_0x16836d.length === 0 && !_0x1321b0)
    return { kind: "lifeline", shapeId: _0x4afc9e, offsetY: _0x3a46b5 };
  if (_0x16836d.length !== 1) return null;
  let _0x5b11e2 = _0x16836d[0].element,
    _0x4ece7c = _0x171003(_0x354e11, _0x5b11e2.id);
  return {
    elementId: _0x5b11e2.id,
    side: _0x745e3f,
    position: (_0x3f2552 - _0x4ece7c.top) / _0x4ece7c.height,
  };
}
function qn(_0x53f30a, _0x13b8f9, _0x2b0962, _0x53a8d3, _0x49df2a) {
  let _0x2f9119 = _0x53f30a.fromParticipantId === _0x53f30a.toParticipantId;
  if (
    (_0x53f30a.type === "self" && !_0x2f9119) ||
    (_0x53f30a.type === "create" && _0x2f9119)
  )
    return null;
  let _0x421b61 = Kn(
      _0x53f30a.fromParticipantId,
      _0x53f30a.toParticipantId,
      _0x13b8f9,
      _0x2b0962,
      _0x53f30a.fromActivationId,
    ),
    _0x5bed9a = Kn(
      _0x53f30a.toParticipantId,
      _0x53f30a.fromParticipantId,
      _0x13b8f9 + (_0x2f9119 ? _0x53a8d3 : 0),
      _0x2b0962,
      _0x53f30a.toActivationId,
      _0x53f30a.type === "create" || _0x53f30a.type === "destroy"
        ? _0x53f30a.type
        : "message",
    );
  if (!_0x421b61 || !_0x5bed9a) return null;
  let _0x3900f8 =
      _0x53f30a.text === undefined
        ? undefined
        : [
            K(
              (_0x53f30a.id ?? _0x52ee79(6)) + ":message",
              _0x53f30a.text,
              "center",
              "left",
            ),
          ],
    _0x415368 = _0x53f30a.routing ?? (_0x2f9119 ? "orthogonal" : "straight"),
    _0x55d049;
  if (
    _0x2f9119 &&
    (_0x415368 === "orthogonal" ||
      _0x415368 === "auto" ||
      _0x415368 === "freePolyline")
  ) {
    let _0x5d6862 = _0x171003(_0x2b0962, _0x53f30a.fromParticipantId),
      _0x5679b8 =
        "elementId" in _0x421b61
          ? _0x171003(_0x2b0962, _0x421b61.elementId)
          : null,
      _0x4c158c =
        "elementId" in _0x5bed9a
          ? _0x171003(_0x2b0962, _0x5bed9a.elementId)
          : null,
      _0xb75087 = _0x5d6862.left + _0x5d6862.width / 2,
      _0xf296ca =
        Math.max(
          _0x5679b8 ? _0x5679b8.left + _0x5679b8.width : _0xb75087,
          _0x4c158c ? _0x4c158c.left + _0x4c158c.width : _0xb75087,
        ) + _0x49df2a;
    _0x55d049 = [
      { id: "self-send", kind: "manual", x: _0xf296ca, y: _0x13b8f9 },
      {
        id: "self-receive",
        kind: "manual",
        x: _0xf296ca,
        y: _0x13b8f9 + _0x53a8d3,
      },
    ];
  }
  return {
    id: _0x53f30a.id,
    start: _0x421b61,
    end: _0x5bed9a,
    routing: _0x415368,
    waypoints: _0x55d049,
    style: { ...Vn(_0x53f30a.type), ..._0x53f30a.style },
    labels: _0x3900f8,
    parentId: _0x53f30a.parentId,
    laneId: _0x53f30a.laneId,
  };
}
function Jn(_0x18e8c9, _0x19bc1c, _0x105152) {
  return _0x19bc1c.routingMode === undefined
    ? _0x19bc1c.waypoints === undefined
      ? _0x18e8c9
      : ((_0x105152 == null ? undefined : _0x105152.length) ?? 0) > 0
        ? "manual"
        : "auto"
    : _0x19bc1c.routingMode;
}
function Yn(_0x261e8a, _0xa9ea1a) {
  return _0xa9ea1a.type === _0x18d03f.Connector
    ? {
        startElementId: In(_0xa9ea1a.connectorData["start"]),
        endElementId: In(_0xa9ea1a.connectorData["end"]),
      }
    : {};
}
function q(_0xa5a39a, _0x17c385, _0x1e3539, _0x4d342b) {
  return {
    id: _0x17c385.id,
    orderIndex: _0x4d342b,
    type: _0x17c385.type,
    subtype: Fn(_0x17c385),
    text: Pn(_0x17c385),
    parentId: _0x17c385.parentId,
    ...Yn(_0xa5a39a, _0x17c385),
    ...(_0x17c385.type === _0x18d03f.Connector
      ? {
          connectorLabels: _0x149304(_0x17c385.connectorData).map(
            (_0x4a3840) => {
              var _0x3187d0, _0x2038e8;
              return {
                id: _0x4a3840.id,
                text: G(_0x4e27f8(_0x4a3840)),
                anchor:
                  ((_0x3187d0 = _0x4a3840.placement) == null
                    ? undefined
                    : _0x3187d0.anchor) ?? "center",
                side:
                  ((_0x2038e8 = _0x4a3840.placement) == null
                    ? undefined
                    : _0x2038e8.side) ?? "onPath",
              };
            },
          ),
        }
      : {}),
    laneId: _0x17c385.laneId,
    ...Mn(_0x17c385),
    transform: { ..._0x17c385.transform },
    bounds: _0x171003(_0x1e3539, _0x17c385.id),
  };
}
function J(_0x18c489) {
  let _0xdff57d = _0x18c489.filter((_0x55205f) => !!_0x55205f);
  if (_0xdff57d.length === 0) return null;
  let _0x17c9fa = Math.min(..._0xdff57d.map((_0x418b85) => _0x418b85.left)),
    _0x352a83 = Math.min(..._0xdff57d.map((_0x5bec18) => _0x5bec18.top)),
    _0x47156e = Math.max(
      ..._0xdff57d.map((_0x3612c2) => _0x3612c2.left + _0x3612c2.width),
    ),
    _0x395638 = Math.max(
      ..._0xdff57d.map((_0xb52250) => _0xb52250.top + _0xb52250.height),
    );
  return {
    left: _0x17c9fa,
    top: _0x352a83,
    width: _0x47156e - _0x17c9fa,
    height: _0x395638 - _0x352a83,
  };
}
function Y(_0x2346f2) {
  return _0x2346f2
    ? {
        x: _0x2346f2.left + _0x2346f2.width / 2,
        y: _0x2346f2.top + _0x2346f2.height / 2,
      }
    : null;
}
function X(_0x32f665) {
  let _0x585983 = Y(_0x32f665);
  return _0x32f665 && _0x585983
    ? { bounds: _0x32f665, center: _0x585983 }
    : null;
}
function Xn(_0x171d0e) {
  let _0x3a595e = X(_0x171d0e.bounds);
  return _0x3a595e
    ? {
        id: _0x171d0e.id,
        type: _0x171d0e.type,
        subtype: _0x171d0e.subtype,
        orderIndex: _0x171d0e.orderIndex,
        ..._0x3a595e,
      }
    : null;
}
function Zn(_0x2eb4ed, _0x5c8be1, _0x4924a8, _0x145554 = {}) {
  let _0xa26c91 = $n(_0x145554),
    _0xf65e13 = L(_0x2eb4ed, _0x5c8be1),
    _0x2ef0c5 = new Map(
      _0x5c8be1.elementOrder["map"]((_0x28f527, _0x5ecbb7) => [
        _0x28f527,
        _0x5ecbb7,
      ]),
    );
  return _0x4924a8
    .filter((_0x34a921) => Qn(_0x34a921, _0xa26c91))
    .map((_0x576e18) =>
      q(_0x5c8be1, _0x576e18, _0xf65e13, _0x2ef0c5.get(_0x576e18.id) ?? -1),
    );
}
function Qn(_0x1d32a5, _0x14a49d) {
  return !_0x1d32a5 ||
    (!_0x14a49d.includeHidden && _0x1d32a5.visible === false) ||
    (_0x14a49d.includeLocked === false && _0x1d32a5.locked === true)
    ? false
    : !_0x14a49d.elementTypes ||
        _0x14a49d.elementTypes["includes"](_0x1d32a5.type);
}
function $n(_0x40b40d) {
  return {
    elementTypes: jn(_0x40b40d.elementType, _0x40b40d.elementTypes),
    includeHidden: _0x40b40d.includeHidden,
    includeLocked: _0x40b40d.includeLocked,
  };
}
function er(_0x34b035) {
  return Object.keys(_0x34b035).length > 0 ? _0x34b035 : null;
}
function Z(_0xa0c4f7, _0x2978b2) {
  return (
    (_0xa0c4f7.custom = _0x2978b2.custom
      ? (er({ ..._0x2978b2.custom }) ?? undefined)
      : undefined),
    _0xa0c4f7
  );
}
function tr(_0x37cfbe, _0x94a98d) {
  let _0x388b62 = E(_0x94a98d);
  return _0x388b62.documentData
    ? _0x2d8247(_0x37cfbe, _0x388b62.documentData)
    : _0x37cfbe;
}
function nr(_0x42b414) {
  var _0x358bd1;
  if (!_0x42b414) return;
  let _0x3f819c = _0x31f860.deepClone(_0x42b414);
  return (
    (_0x358bd1 = _0x3f819c.body) != null &&
      _0x358bd1.paragraphs &&
      (_0x3f819c.body["paragraphs"] = _0x3f819c.body["paragraphs"].map(
        (_0x4b0969) => ({ ..._0x4b0969, paragraphId: "__facade-comparison__" }),
      )),
    _0x3f819c
  );
}
function rr(_0x3030e8) {
  var _0x4b0b41, _0x2ae165;
  let _0x21b558 = E(_0x3030e8.text).text,
    _0xbadd8e = _0x3030e8.textStyle
      ? _0x2b0085(_0x3030e8.textStyle)
      : undefined,
    _0xa5f041 = _0x54ed1f({
      id: _0x3030e8.id,
      left: _0x3030e8.left,
      top: _0x3030e8.top,
      width: _0x3030e8.width,
      height: _0x3030e8.height,
      horizontal: _0x3030e8.horizontal,
      horizontalAlign:
        (_0x4b0b41 = _0x3030e8.textStyle) == null
          ? undefined
          : _0x4b0b41.horizontalAlign,
      parentId: _0x3030e8.parentId,
      laneId: _0x3030e8.laneId,
      text: _0x21b558,
      textStyle: _0xbadd8e,
      verticalAlign:
        (_0x2ae165 = _0x3030e8.textStyle) == null
          ? undefined
          : _0x2ae165.verticalAlign,
    });
  return (
    (_0xa5f041.textData = tr(_0xa5f041.textData, _0x3030e8.text)),
    (_0xa5f041.textStyle = _0x3030e8.textStyle
      ? { ..._0x3030e8.textStyle }
      : undefined),
    Z(_0xa5f041, _0x3030e8)
  );
}
function ir(_0x414653, _0x97e638) {
  return (
    _0x414653.text === _0x97e638.text &&
      j(nr(_0x414653.textData), nr(_0x97e638.textData)) &&
      (_0x97e638.textData = _0x414653.textData),
    _0x97e638
  );
}
function ar(_0x8defec, _0x1b6d8b) {
  var _0x3ef704, _0x100183, _0x40f57f;
  let _0x466814 = E(_0x1b6d8b).text,
    _0x5d261c = _0x8defec.textStyle
      ? _0x2b0085(_0x8defec.textStyle)
      : undefined,
    _0x13c283 = _0x54ed1f({
      left: _0x8defec.transform["left"] ?? 0,
      top: _0x8defec.transform["top"] ?? 0,
      horizontal:
        ((_0x3ef704 = _0x8defec.custom) == null
          ? undefined
          : _0x3ef704.horizontal) !== false,
      horizontalAlign:
        (_0x100183 = _0x8defec.textStyle) == null
          ? undefined
          : _0x100183.horizontalAlign,
      text: _0x466814,
      textStyle: _0x5d261c,
      verticalAlign:
        (_0x40f57f = _0x8defec.textStyle) == null
          ? undefined
          : _0x40f57f.verticalAlign,
    });
  return ir(_0x8defec, {
    ..._0x8defec,
    text: _0x466814,
    textData: tr(_0x13c283.textData, _0x1b6d8b),
  });
}
function or(_0x55b1e9) {
  let _0x1d7f55 = _0x436528(_0x55b1e9);
  return (
    _0x55b1e9.text !== undefined &&
      (_0x1d7f55.shapeData = {
        ..._0x1d7f55.shapeData,
        shapeText: rn(_0x55b1e9.text, undefined),
      }),
    _0x55b1e9.textBox !== undefined &&
      (_0x1d7f55.shapeData = _0x11042b(_0x1d7f55.shapeData, _0x55b1e9.textBox)),
    Z(_0x1d7f55, _0x55b1e9)
  );
}
const sr = [
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
function cr(_0x2c8d07) {
  return sr.filter((_0x4500b2) =>
    Object.prototype["hasOwnProperty"].call(_0x2c8d07, _0x4500b2),
  );
}
function lr(_0x10faaa) {
  return Z(
    _0x27e28f({
      id: _0x10faaa.id,
      source: _0x10faaa.source,
      imageSourceType: _0x10faaa.imageSourceType ?? _0x29d6ba.URL,
      left: _0x10faaa.left,
      top: _0x10faaa.top,
      width: _0x10faaa.width,
      height: _0x10faaa.height,
      parentId: _0x10faaa.parentId,
      laneId: _0x10faaa.laneId,
    }),
    _0x10faaa,
  );
}
function ur(_0x5a6d02, _0x4ddac1) {
  return _0x4ddac1 === undefined
    ? _0x5a6d02
    : { ..._0x5a6d02, parentId: _0x4ddac1 };
}
function dr(_0xded2a7, _0x3fa2d3) {
  let _0x5ce730 = _0xded2a7.parentId === undefined;
  return {
    parentId:
      _0xded2a7.parentId ??
      (_0x5ce730
        ? _0x3fa2d3 == null
          ? undefined
          : _0x3fa2d3.containerId
        : undefined),
    laneId:
      _0xded2a7.laneId ??
      (_0x5ce730
        ? _0x3fa2d3 == null
          ? undefined
          : _0x3fa2d3.laneId
        : undefined),
  };
}
function fr(_0x3b7d6a) {
  return Z(_0x4e2c17(_0x3b7d6a), _0x3b7d6a);
}
function pr(_0x1ad549) {
  return Z(_0x47eead(_0x1ad549), _0x1ad549);
}
function Q(_0x569a20) {
  return "kind" in _0x569a20;
}
function mr(_0x332593) {
  return Number.isFinite(_0x332593) && _0x332593 >= 0 && _0x332593 <= 1;
}
let $ = class extends _0x506d34 {
  constructor(
    _0x3c4a3e,
    _0x1d7904,
    _0x1d4a42,
    _0x757845,
    _0x12f651,
    _0x4c48f5,
    _0xa5e317,
  ) {
    (super(_0x1d7904),
      (this._boardModel = _0x3c4a3e),
      (this._injector = _0x1d7904),
      (this._commandService = _0x1d4a42),
      (this._resourceLoaderService = _0x757845),
      (this._univerInstanceService = _0x12f651),
      (this._permissionService = _0x4c48f5),
      (this._shapeHostAdapterRegistry = _0xa5e317),
      jt(this, "id", undefined),
      (this.id = this._boardModel["getUnitId"]()));
  }
  getId() {
    return this.id;
  }
  getPermission() {
    return new Dt(this.id, this._commandService, this._permissionService);
  }
  getElementPermission(_0x1ae4bc) {
    return new Ot(
      this.id,
      _0x58e815(this._boardModel["getActivePageId"](), _0x1ae4bc),
      this._commandService,
      this._permissionService,
    );
  }
  getName() {
    return this._boardModel["getSnapshot"]().name;
  }
  setName(_0x49fb13) {
    return (
      this._commandService["syncExecuteCommand"](_0x56ca0f.id, {
        unitId: this.getId(),
        name: _0x49fb13,
      }),
      this
    );
  }
  getBackground() {
    let _0x2b59a9 = this._boardModel["getActivePage"]().background;
    return _0x2b59a9 ? _0x31f860.deepClone(_0x2b59a9) : undefined;
  }
  setImageBackground(_0x34eefb) {
    return (
      this._commandService["syncExecuteCommand"](_0xb87193.id, {
        unitId: this.getId(),
        subUnitId: this._boardModel["getActivePageId"](),
        background: {
          type: _0xc88b15.Image,
          source: _0x34eefb.source,
          imageSourceType: _0x34eefb.imageSourceType ?? _0x29d6ba.URL,
          fit: _0x34eefb.fit ?? "cover",
        },
      }),
      this
    );
  }
  clearBackground() {
    return (
      this._commandService["syncExecuteCommand"](_0xb87193.id, {
        unitId: this.getId(),
        subUnitId: this._boardModel["getActivePageId"](),
        background: undefined,
      }),
      this
    );
  }
  getData() {
    return _0x31f860.deepClone(this._boardModel["getSnapshot"]());
  }
  save() {
    return _0x31f860.deepClone(
      this._resourceLoaderService["saveUnit"](this.id) ??
        this._boardModel["getSnapshot"](),
    );
  }
  undo() {
    return (
      this._univerInstanceService["focusUnit"](this.id),
      this._commandService["syncExecuteCommand"](_0x40a39a.id)
    );
  }
  redo() {
    return (
      this._univerInstanceService["focusUnit"](this.id),
      this._commandService["syncExecuteCommand"](_0x90a86a.id)
    );
  }
  getThemeData() {
    return this._boardModel["getThemeData"]();
  }
  setTheme(_0x4f711b) {
    let _0x320b67 =
      typeof _0x4f711b == "string" ? _0x4f711b : _0x4f711b.themeId;
    return this._commandService["syncExecuteCommand"](_0x3edc20.id, {
      unitId: this.id,
      themeId: _0x320b67,
    });
  }
  beginImport(_0x4dffc2) {
    return this._commandService["syncExecuteCommand"](_0x1b7dd6.id, {
      unitId: this.id,
      subUnitId: this._boardModel["getActivePageId"](),
      sourceType: _0x4dffc2,
    });
  }
  beginExport(_0x2255d0) {
    return this._commandService["syncExecuteCommand"](_0x1a5f58.id, {
      unitId: this.id,
      subUnitId: this._boardModel["getActivePageId"](),
      targetType: _0x2255d0,
    });
  }
  getElement(_0x2a01da) {
    let _0x3fec67 = this._getElementFromPage(
      _0x2a01da,
      this._boardModel["getActivePageId"](),
    );
    return _0x3fec67 ? _0x31f860.deepClone(_0x3fec67) : null;
  }
  getElements() {
    return _0x31f860.deepClone(this._boardModel["getActivePage"]().elements);
  }
  getElementLayout() {
    let _0xd85578 = this._boardModel["getActivePage"](),
      _0x6c6ca0 = L(this.id, _0xd85578),
      _0x581723 = _0xd85578.elementOrder["map"]((_0x2593a8, _0x5f0cad) => ({
        id: _0x2593a8,
        orderIndex: _0x5f0cad,
        bounds: _0x171003(_0x6c6ca0, _0x2593a8),
      }));
    return {
      subUnitId: _0xd85578.id,
      elements: _0x581723,
      contentBounds: J(_0x581723.map(({ bounds: _0x21a679 }) => _0x21a679)),
    };
  }
  analyzeModelLayout(_0x3777c9) {
    return this._commandService["syncExecuteCommand"](_0x52d64f.id, {
      unitId: this.id,
      subUnitId: this._boardModel["getActivePageId"](),
      focusPadding: _0x3777c9,
    });
  }
  resolveCaptureBounds(_0x46d023 = {}) {
    return this._commandService["syncExecuteCommand"](_0x44c1ff.id, {
      ..._0x46d023,
      unitId: this.id,
      subUnitId: this._boardModel["getActivePageId"](),
    });
  }
  normalizeConnectorRouting(_0x56ce61) {
    return this._commandService["syncExecuteCommand"](_0x40b64f.id, {
      unitId: this.id,
      subUnitId: this._boardModel["getActivePageId"](),
      connectorIds: _0x56ce61,
    });
  }
  getElementsByIds(_0x3720bf) {
    let _0x5b1ab7 = W(_0x3720bf) ?? [];
    return Object.fromEntries(
      _0x5b1ab7.map((_0x291ee0) => [_0x291ee0, this.getElement(_0x291ee0)]),
    );
  }
  findElements(_0x2d80e4 = {}) {
    let _0xa6f77 = this._boardModel["getPage"](
      this._boardModel["getActivePageId"](),
    );
    if (!_0xa6f77) return [];
    let _0x36f971 = $n(_0x2d80e4);
    return _0xa6f77.elementOrder["map"](
      (_0x8a8f5d) => _0xa6f77.elements[_0x8a8f5d],
    )
      .filter((_0xccd0d0) => Qn(_0xccd0d0, _0x36f971))
      .map((_0x3823f6) => _0x31f860.deepClone(_0x3823f6));
  }
  getElementIdsInOrder(_0x42f602 = {}) {
    return this.findElements(_0x42f602).map((_0x57be18) => _0x57be18.id);
  }
  describeElement(_0x5d4beb) {
    let _0xad4513 = this._boardModel["getActivePage"](),
      _0x2913ce = _0xad4513 == null ? undefined : _0xad4513.elements[_0x5d4beb];
    return !_0xad4513 || !_0x2913ce
      ? null
      : q(
          _0xad4513,
          _0x2913ce,
          L(this.id, _0xad4513),
          _0xad4513.elementOrder["indexOf"](_0x2913ce.id),
        );
  }
  describeElementsByIds(_0x32e634) {
    let _0xfe2c00 = W(_0x32e634) ?? [];
    return Object.fromEntries(
      _0xfe2c00.map((_0x2f8545) => [
        _0x2f8545,
        this.describeElement(_0x2f8545),
      ]),
    );
  }
  getElementBounds(_0x4b1ee3) {
    var _0x562971;
    return (
      ((_0x562971 = this.describeElement(_0x4b1ee3)) == null
        ? undefined
        : _0x562971.bounds) ?? null
    );
  }
  getElementCenter(_0x51c720) {
    return Y(this.getElementBounds(_0x51c720));
  }
  getElementGeometry(_0x2d9365) {
    return X(this.getElementBounds(_0x2d9365));
  }
  getElementsBoundsByIds(_0x80d716) {
    let _0x12eb51 = this.describeElementsByIds(_0x80d716);
    return Object.fromEntries(
      Object.entries(_0x12eb51).map(([_0x3482bd, _0x42873e]) => [
        _0x3482bd,
        (_0x42873e == null ? undefined : _0x42873e.bounds) ?? null,
      ]),
    );
  }
  getElementsCentersByIds(_0x537dec) {
    let _0x1f54e6 = this.getElementsBoundsByIds(_0x537dec);
    return Object.fromEntries(
      Object.entries(_0x1f54e6).map(([_0x579986, _0x115edb]) => [
        _0x579986,
        Y(_0x115edb),
      ]),
    );
  }
  getElementsGeometryByIds(_0x5567c7) {
    let _0x23cb7b = this.getElementsBoundsByIds(_0x5567c7);
    return Object.fromEntries(
      Object.entries(_0x23cb7b).map(([_0x1ac052, _0x4217b3]) => [
        _0x1ac052,
        X(_0x4217b3),
      ]),
    );
  }
  getElementsBoundingRectByIds(_0x253159) {
    return J(Object.values(this.getElementsBoundsByIds(_0x253159)));
  }
  checkElementIds(_0x9caae3) {
    let _0x153466 = W(_0x9caae3) ?? [],
      _0x1bb0ee = _0x153466.filter((_0x5477a4) => !!this.getElement(_0x5477a4)),
      _0x4d9f28 = _0x153466.filter(
        (_0xce1223) => !_0x1bb0ee.includes(_0xce1223),
      );
    return {
      requestedIds: _0x153466,
      existingIds: _0x1bb0ee,
      missingIds: _0x4d9f28,
      allExist: _0x153466.length > 0 && _0x4d9f28.length === 0,
    };
  }
  checkElementIdTypes(_0x3f8b66, _0x507dda) {
    let _0x1aca71 = W(_0x3f8b66) ?? [],
      _0x191f97 = jn(_0x507dda) ?? [],
      _0x47417e = [],
      _0x1bcd30 = [],
      _0x3b6d6 = [];
    return (
      _0x1aca71.forEach((_0x2b53af) => {
        let _0x1d6a26 = this.getElement(_0x2b53af);
        if (!_0x1d6a26) {
          _0x1bcd30.push(_0x2b53af);
          return;
        }
        if (_0x191f97.includes(_0x1d6a26.type)) {
          _0x47417e.push(_0x2b53af);
          return;
        }
        _0x3b6d6.push({
          id: _0x2b53af,
          actualType: _0x1d6a26.type,
          expectedTypes: _0x191f97,
        });
      }),
      {
        requestedIds: _0x1aca71,
        matchingIds: _0x47417e,
        missingIds: _0x1bcd30,
        mismatchedIds: _0x3b6d6,
        allMatch:
          _0x1aca71.length > 0 &&
          _0x1bcd30.length === 0 &&
          _0x3b6d6.length === 0,
      }
    );
  }
  getElementsBoundingRect(_0x3f4026 = {}) {
    return J(
      this.describeElements(_0x3f4026).map((_0x4e4dad) => _0x4e4dad.bounds),
    );
  }
  getNextAvailableBounds(_0x62e59b) {
    let { width: _0x1d5bfa, height: _0x442de7 } = _0x62e59b,
      _0x109ec0 = _0x62e59b.gap ?? 80;
    if (
      !Number.isFinite(_0x1d5bfa) ||
      !Number.isFinite(_0x442de7) ||
      !Number.isFinite(_0x109ec0) ||
      _0x1d5bfa <= 0 ||
      _0x442de7 <= 0 ||
      _0x109ec0 < 0
    )
      return null;
    let _0x14e168 = this.getElementsBoundingRect(_0x62e59b.query ?? {});
    if (!_0x14e168) {
      var _0xd5fa3e, _0x740105;
      return {
        left:
          ((_0xd5fa3e = _0x62e59b.origin) == null ? undefined : _0xd5fa3e.x) ??
          0,
        top:
          ((_0x740105 = _0x62e59b.origin) == null ? undefined : _0x740105.y) ??
          0,
        width: _0x1d5bfa,
        height: _0x442de7,
      };
    }
    return _0x62e59b.placement === "below"
      ? {
          left: _0x14e168.left,
          top: _0x14e168.top + _0x14e168.height + _0x109ec0,
          width: _0x1d5bfa,
          height: _0x442de7,
        }
      : {
          left: _0x14e168.left + _0x14e168.width + _0x109ec0,
          top: _0x14e168.top,
          width: _0x1d5bfa,
          height: _0x442de7,
        };
  }
  getElementsGeometry(_0x3af700 = {}) {
    return this.describeElements(_0x3af700)
      .map(Xn)
      .filter((_0x1c1a58) => !!_0x1c1a58);
  }
  describeElements(_0x51d74f = {}) {
    let _0x49a470 = this._boardModel["getPage"](
      this._boardModel["getActivePageId"](),
    );
    return _0x49a470
      ? Zn(this.id, _0x49a470, this.findElements(_0x51d74f), _0x51d74f)
      : [];
  }
  getElementMetadata(_0x2587e9) {
    let _0x51406e = this.getElement(_0x2587e9);
    return _0x51406e ? Mn(_0x51406e) : null;
  }
  getElementsMetadataByIds(_0x5864f1) {
    let _0x24527a = W(_0x5864f1) ?? [];
    return Object.fromEntries(
      _0x24527a.map((_0x33e631) => [
        _0x33e631,
        this.getElementMetadata(_0x33e631),
      ]),
    );
  }
  getElementOrder() {
    return [...this._boardModel["getActivePage"]().elementOrder];
  }
  getContainerChildren(_0x2680b7) {
    var _0x30af79;
    let _0x1a89c4 = this._boardModel["getActivePage"]();
    return !_0x1a89c4 ||
      ((_0x30af79 = _0x1a89c4.elements[_0x2680b7]) == null
        ? undefined
        : _0x30af79.type) !== _0x18d03f.Container
      ? []
      : _0x1a89c4.elementOrder["map"](
          (_0x2b36c2) => _0x1a89c4.elements[_0x2b36c2],
        ).filter(
          (_0x400968) => !!_0x400968 && _0x400968.parentId === _0x2680b7,
        );
  }
  getContainerDescendants(_0x7e259f) {
    if (!this._boardModel["getActivePage"]()) return [];
    let _0x3ee235 = [],
      _0xcf96b4 = new Set(),
      _0x2db2be = (_0x1b4ba0) => {
        this.getContainerChildren(_0x1b4ba0).forEach((_0x1eec57) => {
          _0xcf96b4.has(_0x1eec57.id) ||
            (_0xcf96b4.add(_0x1eec57.id),
            _0x3ee235.push(_0x1eec57),
            _0x1eec57.type === _0x18d03f.Container && _0x2db2be(_0x1eec57.id));
        });
      };
    return (_0x2db2be(_0x7e259f), _0x3ee235);
  }
  getElementParentChain(_0x220e78) {
    var _0x5121b1;
    let _0x21dbd9 = this._boardModel["getActivePage"]();
    if (!_0x21dbd9) return [];
    let _0x3324e6 = [],
      _0x5a6abe = new Set([_0x220e78]),
      _0x53c4a1 =
        (_0x5121b1 = _0x21dbd9.elements[_0x220e78]) == null
          ? undefined
          : _0x5121b1.parentId;
    for (; _0x53c4a1 && !_0x5a6abe.has(_0x53c4a1);) {
      let _0x46db15 = _0x21dbd9.elements[_0x53c4a1];
      if (!_0x46db15 || _0x46db15.type !== _0x18d03f.Container) break;
      (_0x3324e6.push(_0x53c4a1),
        _0x5a6abe.add(_0x53c4a1),
        (_0x53c4a1 = _0x46db15.parentId));
    }
    return _0x3324e6;
  }
  resolveContainerAtPoint(_0x36210a, _0x321ec4 = {}) {
    let _0x29979c = this._boardModel["getActivePageId"](),
      _0x11239d = _0x321ec4.area ?? "outer",
      _0x595822 = this._boardModel["getPage"](_0x29979c);
    if (!_0x595822) return null;
    let _0x132ff1 = L(this.id, _0x595822),
      _0x28ec19 = _0x595822.elementOrder["map"]((_0x1e58ef, _0x26495f) => ({
        elementId: _0x1e58ef,
        orderIndex: _0x26495f,
      }))
        .map(({ elementId: _0xa32338, orderIndex: _0x10b272 }) => {
          let _0x136061 = _0x595822.elements[_0xa32338];
          if (
            !_0x136061 ||
            _0x136061.type !== _0x18d03f.Container ||
            _0x136061.visible === false ||
            _0x136061.selectable === false ||
            _0x136061.locked === true ||
            R(_0x595822, _0x136061)
          )
            return null;
          let _0x20c79e = _0x171003(_0x132ff1, _0xa32338);
          return !_0x20c79e || !Cn(_0x136061, _0x20c79e, _0x36210a, _0x11239d)
            ? null
            : {
                element: _0x136061,
                depth: this.getElementParentChain(_0xa32338).length,
                orderIndex: _0x10b272,
              };
        })
        .filter((_0x304694) => !!_0x304694)
        .sort(
          (_0x13a458, _0x48ed31) =>
            _0x48ed31.depth - _0x13a458.depth ||
            _0x48ed31.orderIndex - _0x13a458.orderIndex,
        )[0];
    return (_0x28ec19 == null ? undefined : _0x28ec19.element) ?? null;
  }
  resolveDropTargetAtPoint(_0x37744b, _0x45261c = {}) {
    var _0x4c77c4;
    let _0x221aed = this._boardModel["getActivePageId"](),
      _0x1ea627 = this._boardModel["getPage"](_0x221aed),
      _0x40fc30 = this.resolveContainerAtPoint(_0x37744b, _0x45261c);
    if (!_0x1ea627 || !_0x40fc30) return null;
    let _0x1b6f49 = L(this.id, _0x1ea627),
      _0x5f3e3c = _0x171003(_0x1b6f49, _0x40fc30.id),
      _0x146abd =
        _0x40fc30.containerData["kind"] === "swimlane" &&
        _0x40fc30.containerData["swimlane"] &&
        _0x5f3e3c
          ? (_0x4c77c4 = _0x135219(_0x40fc30, _0x5f3e3c, _0x37744b)) == null
            ? undefined
            : _0x4c77c4.lane["id"]
          : undefined,
      _0xb82dc6 = _0x1ea627.elementOrder["indexOf"](_0x40fc30.id);
    return {
      containerId: _0x40fc30.id,
      laneId: _0x146abd,
      container: q(_0x1ea627, _0x40fc30, _0x1b6f49, _0xb82dc6),
    };
  }
  addElement(_0x13f0df, _0x209f33 = {}) {
    return this._addElement(_0x13f0df, _0x209f33);
  }
  addElements(_0x55db73, _0x2ecb6b = {}) {
    return this._addElements(_0x55db73, _0x2ecb6b);
  }
  _addElement(_0x2c92c3, _0x1edca0 = {}) {
    return this._addElements([_0x2c92c3], _0x1edca0);
  }
  _addElements(_0x24c0ba, _0x492d14 = {}) {
    let _0x182527 = this._boardModel["getActivePageId"](),
      _0x479a32 = _0x492d14.fitContainerId;
    return _0x24c0ba.length === 0 ||
      !this._canAddNewElementsToKnownPage(_0x24c0ba, _0x182527) ||
      !this._canFitAddedElementsToKnownTarget(_0x24c0ba, _0x182527, _0x479a32)
      ? false
      : this._commandService["syncExecuteCommand"](_0x58763b.id, {
          unitId: this.id,
          subUnitId: _0x182527,
          elements: _0x24c0ba,
          insertIndex: _0x492d14.insertIndex,
          fitContainerId: _0x479a32,
        });
  }
  createContainer(_0x5bcbe1) {
    let _0x2d0b0f = fr(_0x5bcbe1);
    return _0x2d0b0f ? this._addElement(_0x2d0b0f, _0x5bcbe1) : false;
  }
  createSwimlane(_0xbf9e9f) {
    let _0x41ac5b = pr(_0xbf9e9f);
    return _0x41ac5b ? this._addElement(_0x41ac5b, _0xbf9e9f) : false;
  }
  insertText(_0x3e10fd) {
    let _0x51fc55 = rr(_0x3e10fd);
    return (_0x51fc55 == null ? undefined : _0x51fc55.type) ===
      _0x18d03f.Text && this._addElement(_0x51fc55, _0x3e10fd)
      ? _0x51fc55
      : null;
  }
  insertImage(_0x7cd3b4) {
    let _0x48a9f7 = lr(_0x7cd3b4);
    return _0x48a9f7 && this._addElement(_0x48a9f7, _0x7cd3b4)
      ? _0x48a9f7
      : null;
  }
  insertShape(_0x58053a) {
    let _0x1b90b6 = cr(_0x58053a);
    if (_0x1b90b6.length > 0)
      return (
        console.warn(
          '[Board Shape Facade]: insertShape() expects IShapeCreateInput. Move geometry into "transform" and use the live Shape handle for text and style. Unsupported top-level fields: ' +
            _0x1b90b6.join(",\x20") +
            ".",
        ),
        null
      );
    let _0x1f209f = this._getShapeAdapter();
    if (!_0x1f209f) return null;
    try {
      let _0x56ab72 = _0x1f209f.createShape(this._getShapeScope(), _0x58053a);
      return _0x56ab72
        ? this._createShapeHandle(_0x56ab72)
        : (console.warn("[Board Shape Facade]: Failed to insert Shape."), null);
    } catch (_0xd0ed17) {
      return (
        console.warn(
          "[Board Shape Facade]: Failed to insert Shape.",
          _0xd0ed17,
        ),
        null
      );
    }
  }
  getShape(_0x2fee70) {
    let _0x25ee84 = this._getShapeAdapter();
    if (!_0x25ee84) return null;
    try {
      let _0x1a5c51 = _0x25ee84.getShape({
        ...this._getShapeScope(),
        shapeId: _0x2fee70,
      });
      return _0x1a5c51
        ? this._createShapeHandle(_0x1a5c51)
        : (console.warn(
            '[Board Shape Facade]: Shape "' + _0x2fee70 + '" was not found.',
          ),
          null);
    } catch (_0x4b747e) {
      return (
        console.warn(
          '[Board Shape Facade]: Failed to read Shape "' + _0x2fee70 + "\x22.",
          _0x4b747e,
        ),
        null
      );
    }
  }
  getShapes() {
    let _0x26ec11 = this._getShapeAdapter();
    if (!_0x26ec11) return [];
    try {
      return _0x26ec11
        .listShapes(this._getShapeScope())
        .map((_0x525b6e) => this._createShapeHandle(_0x525b6e));
    } catch (_0x56be1c) {
      return (
        console.warn("[Board Shape Facade]: Failed to list Shapes.", _0x56be1c),
        []
      );
    }
  }
  _insertBoardShape(_0x5341f5) {
    let _0x565617 = or(_0x5341f5),
      _0x1b2fba = _0x565617 ? ur(_0x565617, _0x5341f5.parentId) : null;
    return _0x1b2fba && this._addElement(_0x1b2fba, _0x5341f5)
      ? _0x1b2fba
      : null;
  }
  insertShapeAtPoint(_0x4b73d4) {
    let {
        attachToDropTarget: _0xed2855 = true,
        dropTargetArea: _0x546910 = "content",
        point: _0x375518,
        ..._0x2d7ccf
      } = _0x4b73d4,
      _0x393a63 = dr(
        _0x2d7ccf,
        _0xed2855
          ? this.resolveDropTargetAtPoint(_0x375518, { area: _0x546910 })
          : null,
      ),
      _0x30fb33 = _0x393a63.parentId
        ? _0x7a93d8(L(this.id, this._boardModel["getActivePage"]()), {
            parentId: _0x393a63.parentId,
            worldTransform: { left: _0x375518.x, top: _0x375518.y },
          })
        : null;
    return this._insertBoardShape({
      ..._0x2d7ccf,
      ..._0x393a63,
      left: (_0x30fb33 == null ? undefined : _0x30fb33.left) ?? _0x375518.x,
      top: (_0x30fb33 == null ? undefined : _0x30fb33.top) ?? _0x375518.y,
    });
  }
  insertShapes(_0x1d4ce9) {
    if (_0x1d4ce9.length === 0) return null;
    let _0x221e3d = _0x1d4ce9.find((_0x500244) => cr(_0x500244).length > 0);
    if (_0x221e3d) {
      let _0x284ab2 = cr(_0x221e3d);
      return (
        console.warn(
          '[Board Shape Facade]: insertShapes() expects IShapeCreateInput items. Move geometry into "transform" and use live Shape handles for text and style. Unsupported top-level fields: ' +
            _0x284ab2.join(",\x20") +
            ".",
        ),
        null
      );
    }
    let _0x4af0c4 = this._getShapeAdapter();
    if (!(_0x4af0c4 != null && _0x4af0c4.createShapes))
      return (
        console.warn(
          "[Board Shape Facade]: The active Board Shape adapter does not support atomic batch creation.",
        ),
        null
      );
    try {
      let _0x2ad473 = _0x4af0c4.createShapes(this._getShapeScope(), _0x1d4ce9);
      return (
        (_0x2ad473 == null
          ? undefined
          : _0x2ad473.map((_0x1b4be2) => this._createShapeHandle(_0x1b4be2))) ??
        null
      );
    } catch (_0x470deb) {
      return (
        console.warn(
          "[Board Shape Facade]: Failed to insert Shapes.",
          _0x470deb,
        ),
        null
      );
    }
  }
  insertConnector(_0x1dcb4b) {
    let _0x5aaba8 = this._boardModel["getActivePageId"](),
      _0x165885 = this._createFacadeConnectorElement(_0x1dcb4b, _0x5aaba8);
    return _0x165885 && this._addElement(_0x165885, _0x1dcb4b)
      ? _0x165885
      : null;
  }
  insertConnectors(_0x4f5a0e, _0x2e9b1a = {}) {
    if (_0x4f5a0e.length === 0) return null;
    let _0x1aeb45 = this._boardModel["getActivePageId"](),
      _0x256b55 = _0x4f5a0e.map((_0x4ec63f) =>
        this._createFacadeConnectorElement(_0x4ec63f, _0x1aeb45),
      );
    if (_0x256b55.some((_0x2d133c) => !_0x2d133c)) return null;
    let _0x3ee678 = _0x256b55;
    return this._addElements(_0x3ee678, _0x2e9b1a) ? _0x3ee678 : null;
  }
  insertClassRelation(_0x5488ba) {
    if (!Hn(_0x5488ba)) return null;
    let { insertIndex: _0x41719a, ..._0x5eca2c } = _0x5488ba;
    return this.insertConnector({ ...Wn(_0x5eca2c), insertIndex: _0x41719a });
  }
  insertClassRelations(_0x12920f, _0x57b8ae = {}) {
    return !Array.isArray(_0x12920f) || !_0x12920f.every(Hn)
      ? null
      : this.insertConnectors(_0x12920f.map(Wn), _0x57b8ae);
  }
  insertEntityRelation(_0x1a65b5) {
    if (!Un(_0x1a65b5)) return null;
    let { insertIndex: _0x4d25f0, ..._0x5233b3 } = _0x1a65b5;
    return this.insertConnector({ ...Gn(_0x5233b3), insertIndex: _0x4d25f0 });
  }
  insertEntityRelations(_0x29d315, _0x37bb41 = {}) {
    return !Array.isArray(_0x29d315) || !_0x29d315.every(Un)
      ? null
      : this.insertConnectors(_0x29d315.map(Gn), _0x37bb41);
  }
  insertSequenceMessage(_0x9a7515, _0x55bc69 = {}) {
    var _0x5bbf47;
    let { insertIndex: _0x18ab34, ..._0x48d3db } = _0x9a7515;
    return (
      ((_0x5bbf47 = this.insertSequenceMessages([_0x48d3db], {
        ..._0x55bc69,
        insertIndex: _0x18ab34,
      })) == null
        ? undefined
        : _0x5bbf47[0]) ?? null
    );
  }
  insertSequenceMessages(_0x392ce1, _0x5c1056 = {}) {
    let _0x5bcb15 = _0x5c1056.firstOffsetY ?? 72,
      _0x37310d = _0x5c1056.step ?? 48,
      _0x706792 = _0x5c1056.selfMessageHeight ?? _0x37310d / 2,
      _0x16b0aa = _0x5c1056.selfMessageWidth ?? 96;
    if (
      _0x392ce1.length === 0 ||
      !Number.isFinite(_0x5bcb15) ||
      _0x5bcb15 < 0 ||
      !Number.isFinite(_0x37310d) ||
      _0x37310d <= 0 ||
      !Number.isFinite(_0x706792) ||
      _0x706792 <= 0 ||
      !Number.isFinite(_0x16b0aa) ||
      _0x16b0aa <= 0 ||
      _0x392ce1.some(
        (_0x58325a) =>
          !Number.isInteger(_0x58325a.order) ||
          _0x58325a.order <= 0 ||
          ![
            "synchronous",
            "asynchronous",
            "reply",
            "create",
            "destroy",
            "self",
          ].includes(_0x58325a.type),
      ) ||
      new Set(_0x392ce1.map((_0x566c4e) => _0x566c4e.order)).size !==
        _0x392ce1.length
    )
      return null;
    let _0x13634f = this._boardModel["getActivePage"](),
      _0x3b849b = _0x392ce1.flatMap((_0xb48c3e) => [
        _0xb48c3e.fromParticipantId,
        _0xb48c3e.toParticipantId,
      ]);
    if (
      _0x3b849b.some((_0x55d499) => !_0x21a776(_0x13634f.elements[_0x55d499]))
    )
      return null;
    let _0x4b319b = L(this.id, _0x13634f),
      _0xb4ef69 =
        _0x5c1056.timeOriginY ??
        _0x3b849b.reduce((_0x5a5763, _0x299d6b) => {
          let _0x2e0313 = _0x171003(_0x4b319b, _0x299d6b);
          return _0x2e0313
            ? Math.min(_0x5a5763, _0x2e0313.top + _0x2e0313.height)
            : NaN;
        }, 1 / 0);
    if (!Number.isFinite(_0xb4ef69)) return null;
    let _0x4d1e18 = [];
    for (let _0x5e7fc0 of _0x392ce1) {
      let _0x303cc9 = qn(
        _0x5e7fc0,
        _0xb4ef69 + _0x5bcb15 + (_0x5e7fc0.order - 1) * _0x37310d,
        _0x4b319b,
        _0x706792,
        _0x16b0aa,
      );
      if (!_0x303cc9) return null;
      _0x4d1e18.push(_0x303cc9);
    }
    return this.insertConnectors(_0x4d1e18, {
      insertIndex: _0x5c1056.insertIndex,
      fitContainerId: _0x5c1056.fitContainerId,
    });
  }
  _getShapeScope() {
    return {
      hostType: _0x2cae43.UNIVER_BOARD,
      unitId: this.id,
      subUnitId: this._boardModel["getActivePageId"](),
    };
  }
  _getShapeAdapter() {
    return this._shapeHostAdapterRegistry["get"](_0x2cae43.UNIVER_BOARD);
  }
  _createShapeHandle(_0x39380a) {
    let _0x44ea76 = {
      hostType: _0x2cae43.UNIVER_BOARD,
      unitId: _0x39380a.unitId,
      subUnitId: _0x39380a.subUnitId,
      shapeId: _0x39380a.shapeId,
    };
    return _0x24d413(_0x39380a.shapeType)
      ? this._injector["createInstance"](_0x56f2b3, _0x44ea76, this._injector)
      : this._injector["createInstance"](_0x3ee33d, _0x44ea76, this._injector);
  }
  setElementMetadata(_0x1fd129, _0x387cca) {
    return this.setElementsMetadata({ [_0x1fd129]: _0x387cca });
  }
  setElementsMetadata(_0x5cbc38) {
    let _0x2af055 = this._boardModel["getActivePageId"](),
      _0x410df = Object.entries(_0x5cbc38);
    if (_0x410df.length === 0) return false;
    let _0x2934e6 = [];
    for (let [_0x4823b6, _0x4a164e] of _0x410df) {
      var _0x19346a;
      let _0x59b0da =
        (_0x19346a = this._boardModel["getPage"](_0x2af055)) == null
          ? undefined
          : _0x19346a.elements[_0x4823b6];
      if (!_0x59b0da || Object.keys(_0x4a164e).length === 0) return false;
      let _0x5b02f7 = _0x59b0da;
      Object.entries(_0x4a164e).some(([_0x22dc18, _0x5ce46a]) =>
        _0x5ce46a === undefined
          ? Object.prototype["hasOwnProperty"].call(_0x5b02f7, _0x22dc18)
          : _0x5b02f7[_0x22dc18] !== _0x5ce46a,
      ) && _0x2934e6.push({ elementId: _0x4823b6, metadata: _0x4a164e });
    }
    return (
      _0x2934e6.length === 0 ||
      this._commandService["syncExecuteCommand"](_0x13fef4.id, {
        unitId: this.id,
        subUnitId: _0x2af055,
        updates: _0x2934e6,
      })
    );
  }
  setElementTransform(_0x29e6fd, _0x3d263f) {
    return this.setElementsTransform({ [_0x29e6fd]: _0x3d263f });
  }
  setElementsTransform(_0xd85ed6) {
    let _0x31ddf4 = this._boardModel["getActivePageId"](),
      _0x44a576 = Object.entries(_0xd85ed6);
    if (_0x44a576.length === 0) return false;
    let _0x2b1194 = [];
    for (let [_0x4c1b25, _0x19c4b6] of _0x44a576) {
      var _0x5289e4;
      let _0xaba41e =
          (_0x5289e4 = this._boardModel["getPage"](_0x31ddf4)) == null
            ? undefined
            : _0x5289e4.elements[_0x4c1b25],
        _0x40ef9c = _0xaba41e ? Nt(_0xaba41e, _0x19c4b6) : null;
      if (!_0x40ef9c) return false;
      _0x2b1194.push({ elementId: _0x4c1b25, element: _0x40ef9c });
    }
    return this._updateElements(_0x2b1194, _0x31ddf4);
  }
  translateElement(_0x3ffb7d, _0x5331aa) {
    return this.translateElements([_0x3ffb7d], _0x5331aa);
  }
  translateElements(_0x40ce0c, _0x42e9f4) {
    let _0x69375a = this._boardModel["getActivePageId"](),
      _0x4cb3c2 = W(_0x40ce0c),
      _0x5109d5 = M(_0x42e9f4);
    if (!_0x4cb3c2 || !_0x5109d5) return false;
    let _0x330224 = [];
    for (let _0xe3d1f2 of _0x4cb3c2) {
      var _0x17aa4f;
      let _0x424701 =
          (_0x17aa4f = this._boardModel["getPage"](_0x69375a)) == null
            ? undefined
            : _0x17aa4f.elements[_0xe3d1f2],
        _0x1bcccd = _0x424701 ? N(_0x424701, _0x5109d5) : null;
      if (!_0x1bcccd) return false;
      _0x330224.push({ elementId: _0xe3d1f2, element: _0x1bcccd });
    }
    return this._updateElements(_0x330224, _0x69375a);
  }
  alignElements(_0x2ba119, _0x1537a5) {
    let _0x226da4 = W(_0x2ba119);
    if (!_0x226da4 || _0x226da4.length < 2 || !Ft(_0x1537a5)) return false;
    let _0x3a0468 = this._getElementGeometries(_0x226da4),
      _0x2f5647 =
        _0x3a0468 && J(_0x3a0468.map((_0x38744f) => _0x38744f.bounds));
    if (!_0x3a0468 || !_0x2f5647) return false;
    let _0x533d85 = this._boardModel["getActivePageId"](),
      _0x3e284d = [];
    for (let _0x3c5b6c of _0x3a0468) {
      var _0x2a0397;
      let _0x20cb9f = Rt(_0x3c5b6c, _0x2f5647, _0x1537a5);
      if (!_0x20cb9f) continue;
      let _0x21e1bc =
          (_0x2a0397 = this._boardModel["getPage"](_0x533d85)) == null
            ? undefined
            : _0x2a0397.elements[_0x3c5b6c.id],
        _0x1257a2 = _0x21e1bc && N(_0x21e1bc, _0x20cb9f);
      if (!_0x1257a2) return false;
      _0x3e284d.push({ elementId: _0x3c5b6c.id, element: _0x1257a2 });
    }
    return _0x3e284d.length > 0 && this._updateElements(_0x3e284d, _0x533d85);
  }
  distributeElements(_0x2640e6, _0x27e976) {
    let _0x521bc5 = W(_0x2640e6);
    if (!_0x521bc5 || _0x521bc5.length < 3 || !Lt(_0x27e976)) return false;
    let _0x44c87a = this._getElementGeometries(_0x521bc5),
      _0x3ed103 = _0x44c87a && zt(_0x44c87a, _0x27e976);
    if (!_0x44c87a || !_0x3ed103 || _0x3ed103.size === 0) return false;
    let _0x3344e9 = this._boardModel["getActivePageId"](),
      _0x1eff28 = [];
    for (let _0x25cb55 of _0x44c87a) {
      var _0x272b81;
      let _0x375f89 = _0x3ed103.get(_0x25cb55.id);
      if (!_0x375f89) continue;
      let _0x32046f =
          (_0x272b81 = this._boardModel["getPage"](_0x3344e9)) == null
            ? undefined
            : _0x272b81.elements[_0x25cb55.id],
        _0x4c2ce3 = _0x32046f && N(_0x32046f, _0x375f89);
      if (!_0x4c2ce3) return false;
      _0x1eff28.push({ elementId: _0x25cb55.id, element: _0x4c2ce3 });
    }
    return this._updateElements(_0x1eff28, _0x3344e9);
  }
  arrangeElements(_0x33d106, _0x3af4e1) {
    let _0x5e3f29 = W(_0x33d106),
      _0x29325b = Bt(_0x3af4e1);
    if (!_0x5e3f29 || !_0x29325b) return false;
    let _0x38a0f8 = this._getElementGeometries(_0x5e3f29);
    return !!_0x38a0f8 && this._applyTranslations(Gt(_0x38a0f8, _0x29325b));
  }
  arrangeElementsInGrid(_0x309eb2, _0xfc7a1e) {
    let _0x46a6f7 = W(_0x309eb2),
      _0x156ad5 = Vt(_0xfc7a1e);
    if (!_0x46a6f7 || !_0x156ad5) return false;
    let _0x2d94f5 = this._getElementGeometries(_0x46a6f7);
    return !!_0x2d94f5 && this._applyTranslations(Kt(_0x2d94f5, _0x156ad5));
  }
  arrangeElementsInLayers(_0x30e75a, _0x466115 = {}) {
    let _0x1f8ec8 = Wt(_0x30e75a, _0x466115);
    if (!_0x1f8ec8) return false;
    let {
        align: _0x33f114,
        direction: _0x1f69a0,
        elementIds: _0x2ff7fb,
        itemAlign: _0xdb11f7,
        itemGap: _0x2c796c,
        layerGap: _0x3ac8f5,
        layers: _0x5eb21f,
        start: _0x3bdd3c,
      } = _0x1f8ec8,
      _0x30830e = this._getElementGeometries(_0x2ff7fb);
    if (!_0x30830e) return false;
    let _0x68b4a2 = new Map(
        _0x30830e.map((_0x18dffe) => [_0x18dffe.id, _0x18dffe]),
      ),
      _0x50e78b = _0x3bdd3c ?? {
        x: _0x30830e[0].bounds["left"],
        y: _0x30830e[0].bounds["top"],
      },
      _0x54a81a = _0x5eb21f.map((_0x2d3651) => {
        let _0xe9b4de = _0x2d3651.map((_0xbb902f) => _0x68b4a2.get(_0xbb902f));
        return {
          items: _0xe9b4de,
          mainSize: Math.max(
            ...(_0x1f69a0 === "vertical"
              ? _0xe9b4de.map((_0x5d23cd) => _0x5d23cd.bounds["height"])
              : _0xe9b4de.map((_0x3dd3f6) => _0x3dd3f6.bounds["width"])),
          ),
          crossSize: _0xe9b4de.reduce(
            (_0xe5a4b6, _0x451fd2, _0x3eee90) =>
              _0xe5a4b6 +
              (_0x1f69a0 === "vertical"
                ? _0x451fd2.bounds["width"]
                : _0x451fd2.bounds["height"]) +
              (_0x3eee90 ? _0x2c796c : 0),
            0,
          ),
        };
      }),
      _0x22ce26 = Math.max(
        ..._0x54a81a.map((_0x12b85b) => _0x12b85b.crossSize),
      ),
      _0x1e9fc5 = {},
      _0x43d35e = _0x1f69a0 === "vertical" ? _0x50e78b.y : _0x50e78b.x;
    for (let _0x916959 of _0x54a81a) {
      let _0x26ea2a =
        (_0x1f69a0 === "vertical" ? _0x50e78b.x : _0x50e78b.y) +
        qt(_0x22ce26, _0x916959.crossSize, _0x33f114);
      for (let _0x41cb3b of _0x916959.items) {
        let _0x6b3343 =
            _0x1f69a0 === "vertical"
              ? _0x41cb3b.bounds["height"]
              : _0x41cb3b.bounds["width"],
          _0x179dd2 =
            _0x1f69a0 === "vertical"
              ? _0x41cb3b.bounds["width"]
              : _0x41cb3b.bounds["height"],
          _0x58e253 = qt(_0x916959.mainSize, _0x6b3343, _0xdb11f7);
        ((_0x1e9fc5[_0x41cb3b.id] =
          _0x1f69a0 === "vertical"
            ? { left: F(_0x26ea2a), top: F(_0x43d35e + _0x58e253) }
            : { left: F(_0x43d35e + _0x58e253), top: F(_0x26ea2a) }),
          (_0x26ea2a += _0x179dd2 + _0x2c796c));
      }
      _0x43d35e += _0x916959.mainSize + _0x3ac8f5;
    }
    return this.setElementsTransform(_0x1e9fc5);
  }
  arrangeElementsInCircle(_0x16d408, _0x3ee90e) {
    let _0x15015e = W(_0x16d408);
    if (
      !_0x15015e ||
      !Number.isFinite(_0x3ee90e.center["x"]) ||
      !Number.isFinite(_0x3ee90e.center["y"]) ||
      !Number.isFinite(_0x3ee90e.radius) ||
      _0x3ee90e.radius <= 0 ||
      (_0x3ee90e.startAngle !== undefined &&
        !Number.isFinite(_0x3ee90e.startAngle))
    )
      return false;
    let _0x575f1a = this._getElementGeometries(_0x15015e);
    if (!_0x575f1a) return false;
    let _0xe6bfdd =
        (360 / _0x575f1a.length) * (_0x3ee90e.clockwise === false ? -1 : 1),
      _0xc1528b = _0x3ee90e.startAngle ?? -90,
      _0x3c554e = Object.fromEntries(
        _0x575f1a.map((_0x3594ae, _0x27eaa8) => {
          let _0x4d8c1a = ((_0xc1528b + _0xe6bfdd * _0x27eaa8) * Math.PI) / 180;
          return [
            _0x3594ae.id,
            {
              left: F(
                _0x3ee90e.center["x"] +
                  Math.cos(_0x4d8c1a) * _0x3ee90e.radius -
                  _0x3594ae.bounds["width"] / 2,
              ),
              top: F(
                _0x3ee90e.center["y"] +
                  Math.sin(_0x4d8c1a) * _0x3ee90e.radius -
                  _0x3594ae.bounds["height"] / 2,
              ),
            },
          ];
        }),
      );
    return this.setElementsTransform(_0x3c554e);
  }
  fitElementsIntoBounds(_0x528c3f, _0x27e057, _0x45d11e = {}) {
    let _0xef18ee = W(_0x528c3f);
    if (
      !_0xef18ee ||
      !Number.isFinite(_0x27e057.left) ||
      !Number.isFinite(_0x27e057.top) ||
      !Number.isFinite(_0x27e057.width) ||
      !Number.isFinite(_0x27e057.height) ||
      _0x27e057.width <= 0 ||
      _0x27e057.height <= 0
    )
      return false;
    let _0x1694f6 = this._getElementGeometries(_0xef18ee),
      _0x2ecfa0 =
        _0x1694f6 && J(_0x1694f6.map((_0x5b85cd) => _0x5b85cd.bounds));
    if (
      !_0x1694f6 ||
      !_0x2ecfa0 ||
      _0x2ecfa0.width <= 0 ||
      _0x2ecfa0.height <= 0
    )
      return false;
    let _0x47b319 = _0x27e057.width / _0x2ecfa0.width,
      _0x4d6f17 = _0x27e057.height / _0x2ecfa0.height,
      _0x2f0f4e = _0x45d11e.preserveAspectRatio !== false,
      _0x460f97 = _0x2f0f4e ? Math.min(_0x47b319, _0x4d6f17) : _0x47b319,
      _0x1fcfae = _0x2f0f4e ? Math.min(_0x47b319, _0x4d6f17) : _0x4d6f17,
      _0x22b740 = _0x2f0f4e
        ? (_0x27e057.width - _0x2ecfa0.width * _0x460f97) / 2
        : 0,
      _0x52534b = _0x2f0f4e
        ? (_0x27e057.height - _0x2ecfa0.height * _0x1fcfae) / 2
        : 0,
      _0x34af60 = Object.fromEntries(
        _0x1694f6.map((_0x344f28) => [
          _0x344f28.id,
          {
            left: F(
              _0x27e057.left +
                _0x22b740 +
                (_0x344f28.bounds["left"] - _0x2ecfa0.left) * _0x460f97,
            ),
            top: F(
              _0x27e057.top +
                _0x52534b +
                (_0x344f28.bounds["top"] - _0x2ecfa0.top) * _0x1fcfae,
            ),
            width: F(_0x344f28.bounds["width"] * _0x460f97),
            height: F(_0x344f28.bounds["height"] * _0x1fcfae),
          },
        ]),
      );
    return this.setElementsTransform(_0x34af60);
  }
  getConnectorStyle(_0x22fea9) {
    let _0x193556 = this._boardModel["getActivePage"]().elements[_0x22fea9];
    return (_0x193556 == null ? undefined : _0x193556.type) ===
      _0x18d03f.Connector
      ? $t(_0x193556)
      : null;
  }
  setConnectorStyle(_0x15e554, _0x4a3806) {
    var _0x246f15;
    let _0x1cf220 = this._boardModel["getActivePageId"](),
      _0x40f976 =
        (_0x246f15 = this._boardModel["getPage"](_0x1cf220)) == null
          ? undefined
          : _0x246f15.elements[_0x15e554],
      _0x2e42c8 =
        (_0x40f976 == null ? undefined : _0x40f976.type) === _0x18d03f.Connector
          ? Qt(_0x40f976, _0x4a3806)
          : null;
    return (
      !!_0x2e42c8 &&
      this._updateElements(
        [{ elementId: _0x15e554, element: _0x2e42c8 }],
        _0x1cf220,
      )
    );
  }
  getContainerStyle(_0x4c3f36) {
    let _0x2ec515 = this._boardModel["getActivePage"]().elements[_0x4c3f36];
    return (_0x2ec515 == null ? undefined : _0x2ec515.type) ===
      _0x18d03f.Container
      ? en(_0x2ec515)
      : null;
  }
  setContainerStyle(_0xb3a757, _0x12c5e0) {
    var _0x364e81;
    let _0xc7c6c = this._boardModel["getActivePageId"](),
      _0x571a50 =
        (_0x364e81 = this._boardModel["getPage"](_0xc7c6c)) == null
          ? undefined
          : _0x364e81.elements[_0xb3a757],
      _0x2094e6 =
        (_0x571a50 == null ? undefined : _0x571a50.type) === _0x18d03f.Container
          ? tn(_0x571a50, _0x12c5e0)
          : null;
    return (
      !!_0x2094e6 &&
      this._updateElements(
        [{ elementId: _0xb3a757, element: _0x2094e6 }],
        _0xc7c6c,
      )
    );
  }
  getTextContent(_0xb21c3) {
    let _0x80d976 = this._boardModel["getActivePage"]().elements[_0xb21c3];
    return (_0x80d976 == null ? undefined : _0x80d976.type) === _0x18d03f.Text
      ? an(_0x80d976.textData, _0x80d976.text)
      : null;
  }
  setTextContent(_0xd440dc, _0x5efbd3) {
    var _0x4f74a0;
    let _0x52aa32 = this._boardModel["getActivePageId"](),
      _0x1d4cdf =
        (_0x4f74a0 = this._boardModel["getPage"](_0x52aa32)) == null
          ? undefined
          : _0x4f74a0.elements[_0xd440dc];
    return (
      (_0x1d4cdf == null ? undefined : _0x1d4cdf.type) === _0x18d03f.Text &&
      this._updateElements(
        [{ elementId: _0xd440dc, element: ar(_0x1d4cdf, _0x5efbd3) }],
        _0x52aa32,
      )
    );
  }
  getConnectorLabelText(_0x2e7ad8) {
    let _0x475389 = this._boardModel["getActivePage"]().elements[_0x2e7ad8],
      _0x5253c9 =
        (_0x475389 == null ? undefined : _0x475389.type) === _0x18d03f.Connector
          ? _0x149304(_0x475389.connectorData)[0]
          : undefined;
    return _0x5253c9 ? an(_0x1b7572(_0x5253c9), _0x4e27f8(_0x5253c9)) : null;
  }
  setConnectorLabelText(_0x31e35c, _0x1ad3dc) {
    let _0xf705d0 = this._boardModel["getActivePageId"](),
      _0x6c43fd = E(_0x1ad3dc);
    return this._commandService["syncExecuteCommand"](_0x5b3895.id, {
      unitId: this.id,
      subUnitId: _0xf705d0,
      elementId: _0x31e35c,
      content: _0x6c43fd.documentData ?? _0x6c43fd.text,
    });
  }
  getConnectorLabelStyle(_0x4e5397) {
    let _0x3d4f59 = this._boardModel["getActivePage"]().elements[_0x4e5397],
      _0x1efab8 =
        (_0x3d4f59 == null ? undefined : _0x3d4f59.type) === _0x18d03f.Connector
          ? _0x149304(_0x3d4f59.connectorData)[0]
          : undefined;
    return _0x1efab8 ? _0x31f860.deepClone(_0x1efab8.style ?? {}) : null;
  }
  setConnectorLabelStyle(_0x553735, _0x7fd56b) {
    return this._commandService["syncExecuteCommand"](_0x507b7d.id, {
      unitId: this.id,
      subUnitId: this._boardModel["getActivePageId"](),
      elementId: _0x553735,
      style: _0x7fd56b,
    });
  }
  removeConnectorLabel(_0xd47c7f, _0x3ccaaa) {
    if (_0x3ccaaa !== undefined) {
      let _0x499948 = this.getConnectorLabels(_0xd47c7f);
      return _0x499948.some((_0x23fc19) => _0x23fc19.id === _0x3ccaaa)
        ? this.setConnectorLabels(
            _0xd47c7f,
            _0x499948.filter((_0x2cb13f) => _0x2cb13f.id !== _0x3ccaaa),
          )
        : false;
    }
    return this._commandService["syncExecuteCommand"](_0x1be26c.id, {
      unitId: this.id,
      subUnitId: this._boardModel["getActivePageId"](),
      elementId: _0xd47c7f,
    });
  }
  getConnectorLabels(_0x1b19c8) {
    let _0x419ad3 = this._boardModel["getActivePage"]().elements[_0x1b19c8];
    return (_0x419ad3 == null ? undefined : _0x419ad3.type) ===
      _0x18d03f.Connector
      ? _0x31f860.deepClone([..._0x149304(_0x419ad3.connectorData)])
      : [];
  }
  setConnectorLabels(_0x72df8c, _0x167e22) {
    var _0x5cebf2;
    let _0x3cf4f6 = on(_0x167e22);
    if (!_0x3cf4f6) return false;
    let _0x374ca7 = this._boardModel["getActivePageId"](),
      _0x671b0c =
        (_0x5cebf2 = this._boardModel["getPage"](_0x374ca7)) == null
          ? undefined
          : _0x5cebf2.elements[_0x72df8c];
    if (
      (_0x671b0c == null ? undefined : _0x671b0c.type) !== _0x18d03f.Connector
    )
      return false;
    let _0x5f0af1 = _0x5b6134(_0x671b0c.connectorData, _0x3cf4f6);
    return this._updateElements(
      [
        {
          elementId: _0x72df8c,
          element: { ..._0x671b0c, connectorData: _0x5f0af1 },
        },
      ],
      _0x374ca7,
    );
  }
  updateConnectorLabel(_0x14d9d1, _0x438a2f, _0x163ba3) {
    if (!_0x163ba3 || typeof _0x163ba3 != "object" || Array.isArray(_0x163ba3))
      return false;
    for (let _0xd6bd65 of [_0x163ba3.placement, _0x163ba3.style])
      if (
        _0xd6bd65 != null &&
        (typeof _0xd6bd65 != "object" || Array.isArray(_0xd6bd65))
      )
        return false;
    let _0x46258c = this.getConnectorLabels(_0x14d9d1),
      _0x10e743 = _0x46258c.findIndex(
        (_0x137e0e) => _0x137e0e.id === _0x438a2f,
      );
    if (_0x10e743 < 0) return false;
    let _0x4d54cb = _0x46258c[_0x10e743],
      {
        content: _0x1620e8,
        placement: _0x103a24,
        style: _0x4aa5cf,
        layout: _0x2f5280,
        ..._0x10299b
      } = _0x163ba3,
      _0x9ca1d2 = {
        ..._0x4d54cb,
        ..._0x31f860.deepClone(_0x10299b),
        id: _0x438a2f,
      };
    if (
      (_0x1620e8 !== undefined && Object.assign(_0x9ca1d2, I(_0x1620e8)),
      _0x103a24 !== undefined)
    ) {
      var _0xc0f5a3;
      ((_0x9ca1d2.placement =
        _0x103a24 === null
          ? undefined
          : {
              ..._0x4d54cb.placement,
              ..._0x31f860.deepClone(_0x103a24),
              offset:
                _0x103a24.offset === null
                  ? undefined
                  : _0x31f860.deepClone(
                      _0x103a24.offset ??
                        ((_0xc0f5a3 = _0x4d54cb.placement) == null
                          ? undefined
                          : _0xc0f5a3.offset),
                    ),
            }),
        _0x103a24 !== null &&
          _0x9ca1d2.placement &&
          (_0x103a24.offset === null ||
            ("offset" in _0x103a24 && _0x103a24.offset === undefined) ||
            ((_0x103a24.anchor !== undefined ||
              _0x103a24.pathRatio !== undefined) &&
              !("offset" in _0x103a24))) &&
          delete _0x9ca1d2.placement["offset"]);
    }
    if (_0x4aa5cf !== undefined) {
      if (_0x4aa5cf === null) _0x9ca1d2.style = undefined;
      else {
        let {
          fill: _0xea2a3b,
          stroke: _0x52c920,
          ..._0x5c9070
        } = _0x31f860.deepClone(_0x4aa5cf);
        ((_0x9ca1d2.style = { ..._0x4d54cb.style, ..._0x5c9070 }),
          _0xea2a3b !== undefined &&
            (_0x9ca1d2.style["fill"] = _0xea2a3b ?? undefined),
          _0x52c920 !== undefined &&
            (_0x9ca1d2.style["stroke"] = _0x52c920 ?? undefined));
      }
    }
    return (
      _0x2f5280 !== undefined &&
        (_0x9ca1d2.layout =
          _0x2f5280 === null ? undefined : _0x31f860.deepClone(_0x2f5280)),
      (_0x46258c[_0x10e743] = _0x9ca1d2),
      this.setConnectorLabels(_0x14d9d1, _0x46258c)
    );
  }
  getConnectorConnection(_0x5fedf6) {
    let _0x243589 = this._boardModel["getActivePage"](),
      _0x3ca864 = _0x243589.elements[_0x5fedf6];
    return (_0x3ca864 == null ? undefined : _0x3ca864.type) ===
      _0x18d03f.Connector
      ? {
          start: Ln(_0x243589, _0x3ca864.connectorData["start"]),
          end: Ln(_0x243589, _0x3ca864.connectorData["end"]),
          routing: _0x3ca864.connectorData["routing"],
          routingMode: _0x3ca864.connectorData["routingMode"],
          waypoints: _0x31f860.deepClone(
            _0x3ca864.connectorData["waypoints"] ?? [],
          ),
        }
      : null;
  }
  setConnectorConnection(_0x49bd54, _0xafc3b4) {
    let _0x3cd9f7 = this._boardModel["getActivePageId"](),
      _0x2aa7e1 = this._createConnectorConnectionUpdate(
        _0x49bd54,
        _0xafc3b4,
        _0x3cd9f7,
      );
    return !!_0x2aa7e1 && this._updateElements([_0x2aa7e1], _0x3cd9f7);
  }
  reorderElements(_0x58eaee, _0x17d3ce) {
    let _0x13bdda = W(_0x58eaee),
      _0x299a1f = this._boardModel["getActivePageId"](),
      _0x337620 = this._boardModel["getPage"](_0x299a1f);
    return !_0x13bdda ||
      !_0x337620 ||
      _0x13bdda.some((_0x5e4148) => !_0x337620.elements[_0x5e4148])
      ? false
      : this._commandService["syncExecuteCommand"](_0x214993.id, {
          unitId: this.id,
          subUnitId: _0x299a1f,
          elementIds: _0x13bdda,
          placement: _0x17d3ce,
        });
  }
  bringElementsToFront(_0x44a8a2) {
    return this.reorderElements(_0x44a8a2, "front");
  }
  bringElementsForward(_0x576690) {
    return this.reorderElements(_0x576690, "forward");
  }
  sendElementsBackward(_0x171ea5) {
    return this.reorderElements(_0x171ea5, "backward");
  }
  sendElementsToBack(_0x57495e) {
    return this.reorderElements(_0x57495e, "back");
  }
  updateElement(_0x14ca71, _0x5943ff) {
    let _0x229fe8 = this._boardModel["getActivePageId"]();
    return this._isBlockedElement(_0x14ca71, _0x229fe8) ||
      !z(_0x5943ff.element, _0x5943ff.transform) ||
      !this._canUpdateElementInKnownPage(
        _0x14ca71,
        _0x5943ff.element,
        _0x229fe8,
      ) ||
      !this._canAddElementsToKnownParents([_0x5943ff.element], _0x229fe8)
      ? false
      : this._isElementUpdateNoop(
            _0x14ca71,
            _0x5943ff.element,
            _0x5943ff.transform,
            _0x229fe8,
          )
        ? true
        : this._commandService["syncExecuteCommand"](_0x2bdc5e.id, {
            unitId: this.id,
            subUnitId: _0x229fe8,
            elementId: _0x14ca71,
            element: _0x5943ff.element,
            transform: _0x5943ff.transform ?? A(_0x5943ff.element),
            isRealtimePreview: _0x5943ff.isRealtimePreview,
          });
  }
  _updateElements(_0x3cfff5, _0x54782d) {
    if (_0x3cfff5.length === 0) return false;
    let _0x9921a6 = _0x3cfff5.map((_0x50f432) => _0x50f432.element);
    for (let _0x1dee86 of _0x3cfff5)
      if (
        this._isBlockedElement(_0x1dee86.elementId, _0x54782d) ||
        !z(_0x1dee86.element, _0x1dee86.transform) ||
        !this._canUpdateElementInKnownPage(
          _0x1dee86.elementId,
          _0x1dee86.element,
          _0x54782d,
        )
      )
        return false;
    if (!this._canAddElementsToKnownParents(_0x9921a6, _0x54782d)) return false;
    let _0x551152 = _0x3cfff5.filter(
      (_0x3189ee) =>
        !this._isElementUpdateNoop(
          _0x3189ee.elementId,
          _0x3189ee.element,
          _0x3189ee.transform,
          _0x54782d,
        ),
    );
    return (
      _0x551152.length === 0 ||
      this._commandService["syncExecuteCommand"](_0x1205fc.id, {
        unitId: this.id,
        subUnitId: _0x54782d,
        updates: _0x551152.map((_0x53c8fa) => ({
          ..._0x53c8fa,
          transform: _0x53c8fa.transform ?? A(_0x53c8fa.element),
        })),
      })
    );
  }
  _getElementGeometries(_0x37ab18) {
    let _0x5c0698 = _0x37ab18
      .map((_0x491d11) => this.describeElement(_0x491d11))
      .map((_0x288cbe) => _0x288cbe && Xn(_0x288cbe));
    return _0x5c0698.every((_0x322b2a) => !!_0x322b2a) ? _0x5c0698 : null;
  }
  _applyTranslations(_0x1f4ea8) {
    if (_0x1f4ea8.size === 0) return false;
    let _0x5c14ad = this._boardModel["getActivePageId"](),
      _0xcafcd3 = [];
    for (let [_0x713cd8, _0x5089cc] of _0x1f4ea8) {
      var _0x1e3268;
      let _0x54c127 =
          (_0x1e3268 = this._boardModel["getPage"](_0x5c14ad)) == null
            ? undefined
            : _0x1e3268.elements[_0x713cd8],
        _0x5d41b9 = _0x54c127 && N(_0x54c127, _0x5089cc);
      if (!_0x5d41b9) return false;
      _0xcafcd3.push({ elementId: _0x713cd8, element: _0x5d41b9 });
    }
    return this._updateElements(_0xcafcd3, _0x5c14ad);
  }
  _isElementUpdateNoop(_0x48cc1d, _0x5f74fe, _0x544ccf, _0x47ace8) {
    var _0x583c19;
    let _0x5a45fd =
      (_0x583c19 = this._boardModel["getPage"](_0x47ace8)) == null
        ? undefined
        : _0x583c19.elements[_0x48cc1d];
    return !_0x5a45fd || !j(_0x5a45fd, _0x5f74fe)
      ? false
      : j(A(_0x5a45fd), _0x544ccf ?? A(_0x5f74fe));
  }
  removeElement(_0x4e5ad7) {
    let _0x446a74 = this._boardModel["getActivePageId"]();
    return this._isBlockedElement(_0x4e5ad7, _0x446a74) ||
      !this._canRemoveElementsInKnownPage([_0x4e5ad7], _0x446a74)
      ? false
      : this._commandService["syncExecuteCommand"](_0x51bcde.id, {
          unitId: this.id,
          subUnitId: _0x446a74,
          elementId: _0x4e5ad7,
        });
  }
  removeElements(_0x1dca0c) {
    let _0x1c14b9 = this._boardModel["getActivePageId"]();
    return _0x1dca0c.length === 0 ||
      B(_0x1dca0c) ||
      this._hasBlockedElements(_0x1dca0c, _0x1c14b9) ||
      !this._canRemoveElementsInKnownPage(_0x1dca0c, _0x1c14b9)
      ? false
      : this._commandService["syncExecuteCommand"](_0x224ca7.id, {
          unitId: this.id,
          subUnitId: _0x1c14b9,
          elementIds: _0x1dca0c,
        });
  }
  disbandContainer(_0x1bc183) {
    let _0x36f798 = this._boardModel["getActivePageId"]();
    return this._isBlockedContainer(_0x1bc183, _0x36f798) ||
      !this._canDisbandContainerInKnownPage(_0x1bc183, _0x36f798)
      ? false
      : this._commandService["syncExecuteCommand"](_0x187431.id, {
          unitId: this.id,
          subUnitId: _0x36f798,
          containerId: _0x1bc183,
        });
  }
  wrapElementsInContainer(_0xd2209e, _0x5481ed = {}) {
    let _0x28baa5 = this._boardModel["getActivePageId"](),
      _0x2b80e2 = this._boardModel["getPage"](_0x28baa5),
      _0x1bfd3d = _0x2b80e2
        ? _0xc6ab5a(_0x2b80e2.elements, _0xd2209e)
        : _0xd2209e;
    return _0xd2209e.length === 0 ||
      B(_0xd2209e) ||
      this._hasBlockedElements(_0x1bfd3d, _0x28baa5) ||
      !this._canWrapElementsInKnownPage(_0x1bfd3d, _0x28baa5)
      ? false
      : this._commandService["syncExecuteCommand"](_0x12d6d9.id, {
          unitId: this.id,
          subUnitId: _0x28baa5,
          elementIds: _0x1bfd3d,
          containerId: _0x5481ed.containerId,
          title: _0x5481ed.title,
        });
  }
  reparentElements(_0x3448b1, _0xcbf963) {
    let _0x2f2fd6 = this._boardModel["getActivePageId"]();
    return _0x3448b1.length === 0 ||
      B(_0x3448b1) ||
      this._hasBlockedElements(_0x3448b1, _0x2f2fd6) ||
      (_0xcbf963 && this._isBlockedContainer(_0xcbf963, _0x2f2fd6)) ||
      !this._canReparentElementsInKnownPage(_0x3448b1, _0xcbf963, _0x2f2fd6)
      ? false
      : this._commandService["syncExecuteCommand"](_0x4f8434.id, {
          unitId: this.id,
          subUnitId: _0x2f2fd6,
          elementIds: _0x3448b1,
          parentId: _0xcbf963,
        });
  }
  moveElementsToContainer(_0x41c3b7, _0x5972aa) {
    return this.reparentElements(_0x41c3b7, _0x5972aa);
  }
  moveElementsOutOfContainer(_0x54ea83) {
    return this.reparentElements(_0x54ea83);
  }
  fitContainerToContent(_0xc715df) {
    let _0x5ef875 = this._boardModel["getActivePageId"]();
    return (
      !this._isBlockedContainer(_0xc715df, _0x5ef875) &&
      this._commandService["syncExecuteCommand"](_0x13356a.id, {
        unitId: this.id,
        subUnitId: _0x5ef875,
        containerId: _0xc715df,
      })
    );
  }
  setContainerMembershipLocked(_0x1bd78b, _0x283232) {
    let _0x39cde0 = this._boardModel["getActivePageId"]();
    return (
      !this._isBlockedContainer(_0x1bd78b, _0x39cde0) &&
      this._commandService["syncExecuteCommand"](_0x52cc30.id, {
        unitId: this.id,
        subUnitId: _0x39cde0,
        containerId: _0x1bd78b,
        membershipLocked: _0x283232,
      })
    );
  }
  setContainerAutoResize(_0x58a390, _0x2e0c76) {
    let _0x29946e = this._boardModel["getActivePageId"]();
    if (this._isBlockedContainer(_0x58a390, _0x29946e)) return false;
    let _0x587dbd = this._getContainerElement(_0x58a390, _0x29946e);
    return _0x587dbd != null &&
      _0x587dbd.containerData["behavior"].membershipLocked &&
      !_0x2e0c76
      ? false
      : this._commandService["syncExecuteCommand"](_0x2f6ff0.id, {
          unitId: this.id,
          subUnitId: _0x29946e,
          containerId: _0x58a390,
          autoResize: _0x2e0c76,
        });
  }
  setSwimlaneLanes(_0x3e11f1, _0x3b2547) {
    let _0x8e2cb7 = this._boardModel["getActivePageId"]();
    if (this._isBlockedSwimlaneContainer(_0x3e11f1, _0x8e2cb7)) return false;
    let _0x31e122 = this._getSwimlaneData(_0x3e11f1, _0x8e2cb7);
    return _0x31e122 &&
      (An(_0x31e122, _0x3b2547) || U(_0x31e122, _0x3b2547.lanes))
      ? false
      : this._commandService["syncExecuteCommand"](_0x3e66a7.id, {
          unitId: this.id,
          subUnitId: _0x8e2cb7,
          containerId: _0x3e11f1,
          swimlane: _0x43eb94(_0x3b2547),
        });
  }
  setSwimlaneLaneSize(_0x12c1f1, _0xabce79, _0x3cd4fa) {
    let _0x3fc657 = this._boardModel["getActivePageId"]();
    if (this._isBlockedSwimlaneContainer(_0x12c1f1, _0x3fc657)) return false;
    let _0x379c58 = this._getSwimlaneData(_0x12c1f1, _0x3fc657);
    return _0x379c58 &&
      U(
        _0x379c58,
        _0x379c58.lanes["map"]((_0x29e0a3) =>
          _0x29e0a3.id === _0xabce79
            ? { ..._0x29e0a3, size: _0x3cd4fa }
            : _0x29e0a3,
        ),
      )
      ? false
      : this._commandService["syncExecuteCommand"](_0x3892f1.id, {
          unitId: this.id,
          subUnitId: _0x3fc657,
          containerId: _0x12c1f1,
          laneId: _0xabce79,
          size: _0x3cd4fa,
        });
  }
  addSwimlaneLane(_0x2f4c26, _0x3f7e7f, _0xc5f629 = {}) {
    let _0x201092 = this._boardModel["getActivePageId"]();
    if (this._isBlockedSwimlaneContainer(_0x2f4c26, _0x201092)) return false;
    let _0x30f4c6 = this._getSwimlaneData(_0x2f4c26, _0x201092);
    if (
      !_0x30f4c6 ||
      _0x30f4c6.lanes["some"]((_0x1dc3df) => _0x1dc3df.id === _0x3f7e7f.id)
    )
      return false;
    let _0x39821d = V(_0x30f4c6),
      _0x56ff5c = Math.max(
        0,
        Math.min(_0xc5f629.insertIndex ?? _0x39821d.length, _0x39821d.length),
      );
    _0x39821d.splice(_0x56ff5c, 0, _0x3f7e7f);
    let _0x37ff24 = H(_0x39821d);
    return (
      !U(_0x30f4c6, _0x37ff24) &&
      this.setSwimlaneLanes(_0x2f4c26, { ..._0x30f4c6, lanes: _0x37ff24 })
    );
  }
  removeSwimlaneLane(_0x4d902b, _0x44db31, _0x1493c6 = {}) {
    let _0x1e912b = this._boardModel["getActivePageId"]();
    if (this._isBlockedSwimlaneContainer(_0x4d902b, _0x1e912b)) return false;
    let _0x167eb3 = this._getSwimlaneData(_0x4d902b, _0x1e912b);
    if (
      !_0x167eb3 ||
      !_0x167eb3.lanes["some"]((_0x191293) => _0x191293.id === _0x44db31) ||
      On(_0x167eb3, _0x44db31)
    )
      return false;
    let _0x265d0a = this._boardModel["getPage"](_0x1e912b);
    if (!_0x265d0a) return false;
    if (_0x338b84(L(this.id, _0x265d0a), _0x4d902b, _0x44db31))
      return (_0x1493c6.contentPolicy !== "promote-to-pool" &&
        _0x1493c6.contentPolicy !== "move-to-lane" &&
        _0x1493c6.contentPolicy !== "delete-content") ||
        (_0x1493c6.contentPolicy === "move-to-lane" &&
          (!_0x1493c6.targetLaneId ||
            _0x1493c6.targetLaneId === _0x44db31 ||
            !_0x167eb3.lanes["some"](
              (_0x4c2ccb) =>
                _0x4c2ccb.id === _0x1493c6.targetLaneId &&
                _0x4c2ccb.locked !== true,
            )))
        ? false
        : this._commandService["syncExecuteCommand"](_0x52c944.id, {
            unitId: this.id,
            subUnitId: _0x1e912b,
            containerId: _0x4d902b,
            laneId: _0x44db31,
            contentPolicy: _0x1493c6.contentPolicy,
            targetLaneId: _0x1493c6.targetLaneId,
          });
    let _0x330752 = H(
      V(_0x167eb3).filter((_0x5e43b7) => _0x5e43b7.id !== _0x44db31),
    );
    return (
      !U(_0x167eb3, _0x330752) &&
      this.setSwimlaneLanes(_0x4d902b, { ..._0x167eb3, lanes: _0x330752 })
    );
  }
  reorderSwimlaneLane(_0x390996, _0x4e3464, _0x512171) {
    let _0x579a4a = this._boardModel["getActivePageId"]();
    if (this._isBlockedSwimlaneContainer(_0x390996, _0x579a4a)) return false;
    let _0x217ca1 = this._getSwimlaneData(_0x390996, _0x579a4a);
    if (!_0x217ca1 || !Number.isFinite(_0x512171)) return false;
    let _0x3efa76 = V(_0x217ca1),
      _0x51e1f3 = _0x3efa76.findIndex(
        (_0x480633) => _0x480633.id === _0x4e3464,
      );
    if (_0x51e1f3 < 0 || _0x3efa76[_0x51e1f3].locked === true) return false;
    let [_0x401dc0] = _0x3efa76.splice(_0x51e1f3, 1);
    _0x3efa76.splice(
      Math.max(0, Math.min(_0x512171, _0x3efa76.length)),
      0,
      _0x401dc0,
    );
    let _0x2e6202 = H(_0x3efa76);
    return (
      !U(_0x217ca1, _0x2e6202) &&
      this.setSwimlaneLanes(_0x390996, { ..._0x217ca1, lanes: _0x2e6202 })
    );
  }
  setSwimlaneLaneCollapsed(_0x4b12fb, _0x532daa, _0x5062b1) {
    let _0x3276ca = this._boardModel["getActivePageId"]();
    if (this._isBlockedSwimlaneContainer(_0x4b12fb, _0x3276ca)) return false;
    let _0x554502 = this._getSwimlaneData(_0x4b12fb, _0x3276ca);
    return !_0x554502 ||
      !_0x554502.lanes["some"](
        (_0x19aa60) => _0x19aa60.id === _0x532daa && _0x19aa60.locked !== true,
      )
      ? false
      : this.setSwimlaneLanes(_0x4b12fb, {
          ..._0x554502,
          lanes: V(_0x554502).map((_0x265291) =>
            _0x265291.id === _0x532daa
              ? { ..._0x265291, collapsed: _0x5062b1 }
              : _0x265291,
          ),
        });
  }
  renameSwimlaneLane(_0x4e6430, _0x46b8a1, _0x574508) {
    let _0x1ae95a = this._boardModel["getActivePageId"]();
    if (this._isBlockedSwimlaneContainer(_0x4e6430, _0x1ae95a)) return false;
    let _0x122b6c = this._getSwimlaneData(_0x4e6430, _0x1ae95a),
      _0x580cd2 = _0x574508.trim();
    if (!_0x122b6c || !_0x580cd2 || On(_0x122b6c, _0x46b8a1)) return false;
    let _0xa24bd9 = false,
      _0x1cda2c = V(_0x122b6c).map((_0x205892) =>
        _0x205892.id === _0x46b8a1
          ? ((_0xa24bd9 = _0x205892.title !== _0x580cd2),
            { ..._0x205892, title: _0x580cd2 })
          : _0x205892,
      );
    return _0xa24bd9
      ? this.setSwimlaneLanes(_0x4e6430, { ..._0x122b6c, lanes: _0x1cda2c })
      : false;
  }
  _getElementFromPage(_0x3ec2ad, _0x192707) {
    var _0x47c6cd;
    return (
      ((_0x47c6cd = this._boardModel["getPage"](_0x192707)) == null
        ? undefined
        : _0x47c6cd.elements[_0x3ec2ad]) ?? null
    );
  }
  _getSwimlaneData(_0x4195c4, _0x131c6a) {
    let _0x12228a = this._getElementFromPage(_0x4195c4, _0x131c6a);
    return !_0x12228a ||
      _0x12228a.type !== _0x18d03f.Container ||
      _0x12228a.containerData["kind"] !== "swimlane" ||
      !_0x12228a.containerData["swimlane"]
      ? null
      : _0x12228a.containerData["swimlane"];
  }
  _getContainerElement(_0x451b35, _0x10c2ed) {
    let _0x470973 = this._getElementFromPage(_0x451b35, _0x10c2ed);
    return !_0x470973 || _0x470973.type !== _0x18d03f.Container
      ? null
      : _0x470973;
  }
  _isBlockedSwimlaneContainer(_0x4f8e8a, _0x5d4fd6) {
    if (this._isBlockedContainer(_0x4f8e8a, _0x5d4fd6)) return true;
    let _0x66393b = this._getElementFromPage(_0x4f8e8a, _0x5d4fd6);
    return (
      !!_0x66393b &&
      (_0x66393b.type !== _0x18d03f.Container ||
        _0x66393b.containerData["kind"] !== "swimlane" ||
        !_0x66393b.containerData["swimlane"])
    );
  }
  _isBlockedContainer(_0x5f5616, _0x4c185d) {
    let _0x3ce8fe = this._getElementFromPage(_0x5f5616, _0x4c185d);
    return _0x3ce8fe
      ? _0x3ce8fe.type !== _0x18d03f.Container ||
          _0x3ce8fe.visible === false ||
          _0x3ce8fe.locked === true ||
          _0x3ce8fe.selectable === false ||
          this._hasBlockedContainerAncestor(_0x3ce8fe, _0x4c185d)
      : false;
  }
  _isBlockedElement(_0x4703b9, _0x52b747) {
    let _0x2bc0dc = this._getElementFromPage(_0x4703b9, _0x52b747);
    return _0x2bc0dc
      ? _0x2bc0dc.visible === false ||
          _0x2bc0dc.locked === true ||
          _0x2bc0dc.selectable === false ||
          this._hasBlockedContainerAncestor(_0x2bc0dc, _0x52b747)
      : false;
  }
  _hasBlockedElements(_0x4de6b1, _0x3432d4) {
    return _0x4de6b1.some((_0x2db501) =>
      this._isBlockedElement(_0x2db501, _0x3432d4),
    );
  }
  _createFacadeConnectorElement(_0xaf75f7, _0x29c3c9) {
    let _0x353f95 = xn(
        this.id,
        this._boardModel["getPage"](_0x29c3c9),
        _0xaf75f7,
        this._resolveConnectorStartEndpointInput(_0xaf75f7),
        this._resolveConnectorEndEndpointInput(_0xaf75f7),
      ),
      _0x183769 = this._resolveConnectorEndpoint(_0x353f95.start, _0x29c3c9),
      _0x1b14fe = this._resolveConnectorEndpoint(_0x353f95.end, _0x29c3c9);
    if (!_0x183769 || !_0x1b14fe) return null;
    let _0x382bb6 = this._resolveConnectorLabels(_0xaf75f7);
    if (_0x382bb6 === null) return null;
    let _0x5c75c2 = Z(
      _0x495fde({
        id: _0xaf75f7.id,
        start: _0x183769,
        end: _0x1b14fe,
        routing: _0x353f95.routing,
        routingMode: _0xaf75f7.routingMode,
        waypoints: _0xaf75f7.waypoints,
        style: _0x353f95.style,
        labels: _0x382bb6,
      }),
      _0xaf75f7,
    );
    return _0x5c75c2
      ? ((_0x5c75c2.parentId = _0xaf75f7.parentId),
        (_0x5c75c2.laneId = _0xaf75f7.laneId),
        _0x5c75c2)
      : null;
  }
  _createConnectorConnectionUpdate(_0x469160, _0x3c186b, _0x3aec03) {
    var _0x11acd6;
    if (Object.values(_0x3c186b).every((_0x3dcf28) => _0x3dcf28 === undefined))
      return null;
    let _0x84851 =
      (_0x11acd6 = this._boardModel["getPage"](_0x3aec03)) == null
        ? undefined
        : _0x11acd6.elements[_0x469160];
    if ((_0x84851 == null ? undefined : _0x84851.type) !== _0x18d03f.Connector)
      return null;
    let _0x1bfe15 =
        _0x3c186b.start === undefined
          ? _0x84851.connectorData["start"]
          : this._resolveConnectorEndpoint(_0x3c186b.start, _0x3aec03),
      _0x4dd11f =
        _0x3c186b.end === undefined
          ? _0x84851.connectorData["end"]
          : this._resolveConnectorEndpoint(_0x3c186b.end, _0x3aec03);
    if (
      !_0x1bfe15 ||
      !_0x4dd11f ||
      (_0x3c186b.waypoints !== undefined && !Rn(_0x3c186b.waypoints))
    )
      return null;
    let _0x158423 =
        _0x3c186b.waypoints === undefined
          ? _0x84851.connectorData["waypoints"]
          : _0x31f860.deepClone(_0x3c186b.waypoints),
      _0x1a474a = Jn(
        _0x84851.connectorData["routingMode"],
        _0x3c186b,
        _0x158423,
      ),
      _0x35fa1c = {
        ..._0x84851.connectorData,
        start: _0x31f860.deepClone(_0x1bfe15),
        end: _0x31f860.deepClone(_0x4dd11f),
        routing: _0x3c186b.routing ?? _0x84851.connectorData["routing"],
        routingMode: _0x1a474a,
        waypoints: _0x158423,
      };
    return (
      _0x3c186b.routing !== undefined &&
        _0x3c186b.routing !== "orthogonal" &&
        delete _0x35fa1c.orthogonalData,
      _0x3c186b.routing !== undefined &&
        _0x3c186b.routing !== "curve" &&
        delete _0x35fa1c.curveData,
      {
        elementId: _0x469160,
        element: { ..._0x84851, connectorData: _0x35fa1c },
      }
    );
  }
  _resolveConnectorEndpoint(_0x31bdb6, _0x2c6fa6) {
    if (!_0x31bdb6) return null;
    if (Q(_0x31bdb6))
      return _0x31bdb6.kind === "shapeSite" &&
        _0x31bdb6.connectionPosition !== undefined &&
        !mr(_0x31bdb6.connectionPosition)
        ? null
        : _0x31f860.deepClone(_0x31bdb6);
    let _0x5345e2 = this._getElementFromPage(_0x31bdb6.elementId, _0x2c6fa6);
    if (!_0x5345e2) return null;
    let _0x311800 =
      _0x31bdb6.side === undefined ? undefined : _0x40255d[_0x31bdb6.side];
    return (_0x31bdb6.position !== undefined &&
      ((_0x311800 === undefined && _0x31bdb6.connectionSiteId === undefined) ||
        !mr(_0x31bdb6.position))) ||
      (_0x311800 !== undefined &&
        _0x31bdb6.connectionSiteId !== undefined &&
        _0x31bdb6.connectionSiteId !== _0x311800)
      ? null
      : {
          kind: "shapeSite",
          shapeId: _0x5345e2.id,
          connectionSiteId:
            _0x311800 ?? _0x31bdb6.connectionSiteId ?? _0x160970.Bottom,
          ...(_0x31bdb6.position === undefined
            ? {}
            : { connectionPosition: _0x31bdb6.position }),
        };
  }
  _resolveConnectorStartEndpointInput(_0x51f95c) {
    if (_0x51f95c.start) return _0x51f95c.start;
    if (_0x51f95c.fromElementId)
      return {
        elementId: _0x51f95c.fromElementId,
        ...(_0x51f95c.fromConnectionSiteId === undefined
          ? {}
          : { connectionSiteId: _0x51f95c.fromConnectionSiteId }),
      };
  }
  _resolveConnectorEndEndpointInput(_0x373f72) {
    if (_0x373f72.end) return _0x373f72.end;
    if (_0x373f72.toElementId)
      return {
        elementId: _0x373f72.toElementId,
        ...(_0x373f72.toConnectionSiteId === undefined
          ? {}
          : { connectionSiteId: _0x373f72.toConnectionSiteId }),
      };
  }
  _resolveConnectorLabels(_0x3be5fc) {
    let _0x234c50 = _0x3be5fc.labels;
    return (
      _0x234c50 === undefined &&
        _0x3be5fc.label !== undefined &&
        (_0x234c50 = [_0x3be5fc.label]),
      _0x234c50 === undefined &&
        _0x3be5fc.labelText !== undefined &&
        (_0x234c50 = [{ id: _0x52ee79(6), ...I(_0x3be5fc.labelText) }]),
      _0x234c50 === undefined ? undefined : on(_0x234c50)
    );
  }
  _hasBlockedContainerAncestor(_0x2bc98b, _0x296d01) {
    let _0x4e5f54 = this._boardModel["getPage"](_0x296d01);
    return _0x4e5f54 ? R(_0x4e5f54, _0x2bc98b) : false;
  }
  _canAddElementsToKnownParents(_0x56c49b, _0x491666) {
    let _0x33eba0 = this._boardModel["getPage"](_0x491666);
    if (!_0x33eba0) return En(_0x56c49b);
    let _0x31dcda = new Map(
      _0x56c49b.map((_0x53e095) => [_0x53e095.id, _0x53e095]),
    );
    return _0x56c49b.every((_0x5cbc2b) => Tn(_0x33eba0, _0x31dcda, _0x5cbc2b));
  }
  _canAddNewElementsToKnownPage(_0x5c39c9, _0x3e0338) {
    if (
      !_0x5c39c9.every((_0x4cab1a) => z(_0x4cab1a)) ||
      B(_0x5c39c9.map((_0x129834) => _0x129834.id))
    )
      return false;
    let _0x2e979e = this._boardModel["getPage"](_0x3e0338);
    if (!_0x2e979e) return En(_0x5c39c9);
    for (let _0x323c31 of _0x5c39c9)
      if (_0x2e979e.elements[_0x323c31.id]) return false;
    return this._canAddElementsToKnownParents(_0x5c39c9, _0x3e0338);
  }
  _canFitAddedElementsToKnownTarget(_0x35a080, _0x3ee85e, _0x23bd68) {
    if (!_0x23bd68) return true;
    let _0x41ee88 = new Map(
      _0x35a080.map((_0x2d6821) => [_0x2d6821.id, _0x2d6821]),
    ).get(_0x23bd68);
    if (_0x41ee88) return Dn(_0x41ee88);
    let _0x5ae787 = this._boardModel["getPage"](_0x3ee85e);
    return !_0x5ae787 || Dn(_0x5ae787.elements[_0x23bd68]);
  }
  _canReparentElementsInKnownPage(_0x410344, _0x52b929, _0x3da502) {
    let _0x5765c3 = this._boardModel["getPage"](_0x3da502);
    if (!_0x5765c3) return true;
    let _0x1d45cf = new Map();
    for (let _0x568708 of _0x410344) {
      let _0xc295f5 = _0x5765c3.elements[_0x568708];
      if (!_0xc295f5) continue;
      let _0x4559c1 = _0xc295f5.parentId
        ? _0x5765c3.elements[_0xc295f5.parentId]
        : undefined;
      if (
        (_0x4559c1 == null ? undefined : _0x4559c1.type) ===
          _0x18d03f.Container &&
        _0x4559c1.containerData["behavior"].membershipLocked &&
        _0x4559c1.id !== _0x52b929
      )
        return false;
      _0x1d45cf.set(_0xc295f5.id, { ..._0xc295f5, parentId: _0x52b929 });
    }
    return Array.from(_0x1d45cf.values()).every((_0x497238) =>
      Tn(_0x5765c3, _0x1d45cf, _0x497238),
    );
  }
  _canUpdateElementInKnownPage(_0xfc6e4c, _0x179a1b, _0x477454) {
    let _0x1ca17c = this._boardModel["getPage"](_0x477454);
    if (!_0x1ca17c) return true;
    let _0x1ca83d = _0x1ca17c.elements[_0xfc6e4c],
      _0x5f4902 =
        _0x1ca83d != null && _0x1ca83d.parentId
          ? _0x1ca17c.elements[_0x1ca83d.parentId]
          : undefined;
    return (
      (_0x5f4902 == null ? undefined : _0x5f4902.type) !==
        _0x18d03f.Container ||
      !_0x5f4902.containerData["behavior"].membershipLocked ||
      _0x179a1b.parentId === _0x5f4902.id
    );
  }
  _canUpdateKnownElementByCommandPath(_0x2dcee6, _0x13d65d, _0x13a0a7) {
    return (
      !this._isBlockedElement(_0x2dcee6, _0x13a0a7) &&
      z(_0x13d65d) &&
      this._canUpdateElementInKnownPage(_0x2dcee6, _0x13d65d, _0x13a0a7) &&
      this._canAddElementsToKnownParents([_0x13d65d], _0x13a0a7)
    );
  }
  _canDisbandContainerInKnownPage(_0x574ead, _0x2f1ef6) {
    let _0x11b813 = this._boardModel["getPage"](_0x2f1ef6);
    if (!_0x11b813) return true;
    let _0x18bd1c = _0x11b813.elements[_0x574ead],
      _0x5aaf14 =
        _0x18bd1c != null && _0x18bd1c.parentId
          ? _0x11b813.elements[_0x18bd1c.parentId]
          : undefined;
    return (
      (_0x5aaf14 == null ? undefined : _0x5aaf14.type) !==
        _0x18d03f.Container ||
      !_0x5aaf14.containerData["behavior"].membershipLocked
    );
  }
  _canWrapElementsInKnownPage(_0x3c8467, _0x351ff5) {
    let _0xe32b2c = this._boardModel["getPage"](_0x351ff5);
    if (!_0xe32b2c) return true;
    let _0x4f6051 = new Set(_0x3c8467),
      _0x33990f = _0x3c8467
        .map((_0x17caba) => _0xe32b2c.elements[_0x17caba])
        .filter((_0x1908fa) => !!_0x1908fa);
    if (
      !_0x33990f.every((_0x4e77da) => {
        let _0x2993f8 =
          _0x4e77da != null && _0x4e77da.parentId
            ? _0xe32b2c.elements[_0x4e77da.parentId]
            : undefined;
        return (
          (_0x2993f8 == null ? undefined : _0x2993f8.type) !==
            _0x18d03f.Container ||
          !_0x2993f8.containerData["behavior"].membershipLocked ||
          _0x4f6051.has(_0x2993f8.id)
        );
      })
    )
      return false;
    let _0x353917 = new Set(_0x33990f.map((_0x4ac73a) => _0x4ac73a.parentId));
    if (_0x353917.size !== 1) return true;
    let [_0x5560ae] = _0x353917,
      _0xb0a1dd = _0x5560ae ? _0xe32b2c.elements[_0x5560ae] : undefined;
    if (!_0xb0a1dd || _0xb0a1dd.type !== _0x18d03f.Container) return true;
    let _0x5a38f3 = _0xb0a1dd.containerData["behavior"];
    return (
      _0x5a38f3.acceptsChildren &&
      _0x5a38f3.acceptsContainer &&
      _0x5a38f3.allowNested
    );
  }
  _canRemoveElementsInKnownPage(_0x4236e5, _0x1a12f2) {
    let _0x4672f7 = this._boardModel["getPage"](_0x1a12f2);
    if (!_0x4672f7) return true;
    let _0x47ff55 = new Set(_0x4236e5);
    return _0x4236e5.every((_0x4c1013) => {
      let _0x459e7c = _0x4672f7.elements[_0x4c1013],
        _0x540fa5 =
          _0x459e7c != null && _0x459e7c.parentId
            ? _0x4672f7.elements[_0x459e7c.parentId]
            : undefined;
      return (
        (_0x540fa5 == null ? undefined : _0x540fa5.type) !==
          _0x18d03f.Container ||
        !_0x540fa5.containerData["behavior"].membershipLocked ||
        _0x47ff55.has(_0x540fa5.id)
      );
    });
  }
};
$ = Mt(
  [
    k(1, _0x34feac(_0x22daa7)),
    k(2, _0x455cfc),
    k(3, _0x5aab37),
    k(4, _0x4e62e7),
    k(5, _0x5e1364),
    k(6, _0x3caf69),
  ],
  $,
);
var hr = class extends _0x5befe5 {
  createBoard(_0x17063d = {}, _0x4b1c2a) {
    let _0x249b75 = this._injector["get"](_0x4e62e7).createUnit(
      _0x2cae43.UNIVER_BOARD,
      _0x17063d,
      _0x4b1c2a,
    );
    return this._injector["createInstance"]($, _0x249b75);
  }
  getActiveBoard() {
    let _0x1bfd3e = this._injector["get"](_0x4e62e7).getCurrentUnitOfType(
      _0x2cae43.UNIVER_BOARD,
    );
    return _0x1bfd3e ? this._injector["createInstance"]($, _0x1bfd3e) : null;
  }
  getBoard(_0x5d280c) {
    let _0x2e382d = this._injector["get"](_0x4e62e7).getUnit(
      _0x5d280c,
      _0x2cae43.UNIVER_BOARD,
    );
    return _0x2e382d ? this._injector["createInstance"]($, _0x2e382d) : null;
  }
};
_0x5befe5.extend(hr);
export {
  $ as FBoard,
  Ot as FBoardElementPermission,
  Dt as FBoardPermission,
  hr as FUniverBoardsMixin,
  D as createBoardFacadeRichTextValue,
  E as normalizeBoardFacadeTextContent,
};
