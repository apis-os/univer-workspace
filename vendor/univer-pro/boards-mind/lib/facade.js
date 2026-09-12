import { BoardElementType as _0x395ea2 } from "@univerjs-pro/boards";
import {
  AddMindMapChildOperation as _0x3070da,
  AddMindMapSiblingOperation as _0x51e5ea,
  ChangeMindMapBranchLineTypeOperation as _0x409e7f,
  ChangeMindMapLayoutOperation as _0x521fb7,
  DeleteMindMapNodeOperation as _0xaecca6,
  DetachMindMapNodeOperation as _0xf8a9b7,
  InsertBoardMindMapOperation as _0x26f138,
  PromoteMindMapNodeOperation as _0x5cfe9c,
  ReflowMindMapCommand as _0x52a874,
  ReparentMindMapNodeOperation as _0x4fb866,
  ToggleMindMapNodeCollapseOperation as _0x3bf0d6,
  UpdateMindMapIncomingConnectorOperation as _0x212dc5,
  UpdateMindMapNodeOperation as _0x1d4cfc,
  compareMindMapOrderKey as _0x2d73ad,
  getMindMapConnectorMeta as _0x46e7a8,
  getMindMapContainerMeta as _0x2eaf7c,
  getMindMapNodeMeta as _0x5e9bd4,
} from "@univerjs-pro/boards-mind";
import {
  FBoard as _0xac85f6,
  createBoardFacadeRichTextValue as _0x6f758d,
  normalizeBoardFacadeTextContent as _0x342d1e,
} from "@univerjs-pro/boards/facade";
import {
  ICommandService as _0x19ba1a,
  Tools as _0x2177b9,
  generateRandomId as _0x1ae996,
} from "@univerjs/core";
import { FEnum as _0x1ff23a } from "@univerjs/core/facade";
var T = class {
    constructor(_0x4defa7, _0x7df4b9, _0x1b498b, _0x47faed) {
      ((this._board = _0x4defa7),
        (this._pageId = _0x7df4b9),
        (this._containerId = _0x1b498b),
        (this._commandService = _0x47faed));
    }
    getId() {
      return this._containerId;
    }
    getRootNode() {
      let _0x1966aa = _0x2eaf7c(this._board["getElement"](this._containerId));
      return _0x1966aa ? this._createNode(_0x1966aa.rootNodeId) : null;
    }
    getNodes() {
      return this._board["findElements"]({
        includeHidden: true,
        includeLocked: true,
      })
        .filter((_0x58cb17) => this._isNodeInScope(_0x58cb17))
        .map((_0x517249) => this._createNode(_0x517249.id));
    }
    getNode(_0x5ab72e) {
      let _0x2e465c = this._board["getElement"](_0x5ab72e);
      return _0x2e465c && this._isNodeInScope(_0x2e465c)
        ? this._createNode(_0x5ab72e)
        : null;
    }
    getDescendants() {
      var _0x1fc205;
      return (
        ((_0x1fc205 = this.getRootNode()) == null
          ? undefined
          : _0x1fc205.getDescendants()) ?? []
      );
    }
    getLayout() {
      let _0xf89a92 = _0x2eaf7c(this._board["getElement"](this._containerId));
      return _0xf89a92 ? _0x2177b9.deepClone(_0xf89a92.layout) : null;
    }
    getBounds() {
      return this._board["getElementBounds"](this._containerId);
    }
    reflow(_0x10aaef) {
      return this._commandService["syncExecuteCommand"](_0x52a874.id, {
        unitId: this._board["getId"](),
        subUnitId: this._pageId,
        scopeId: this._containerId,
        ..._0x10aaef,
      });
    }
    setLayout(_0x542d4e) {
      return this._commandService["syncExecuteCommand"](_0x521fb7.id, {
        unitId: this._board["getId"](),
        subUnitId: this._pageId,
        scopeId: this._containerId,
        ..._0x542d4e,
      });
    }
    setBranchLineType(_0x159079) {
      return this._commandService["syncExecuteCommand"](_0x409e7f.id, {
        unitId: this._board["getId"](),
        subUnitId: this._pageId,
        scopeId: this._containerId,
        branchLineType: _0x159079,
      });
    }
    remove() {
      var _0x5a0529;
      return (
        ((_0x5a0529 = this.getRootNode()) == null
          ? undefined
          : _0x5a0529.remove()) ?? false
      );
    }
    _createNode(_0x5aabc5) {
      return new E(
        this,
        this._board,
        this._pageId,
        _0x5aabc5,
        this._commandService,
      );
    }
    _isNodeInScope(_0x315b59) {
      var _0x2a9f6e;
      return (
        ((_0x2a9f6e = _0x5e9bd4(_0x315b59)) == null
          ? undefined
          : _0x2a9f6e.structureScopeId) === this._containerId
      );
    }
  },
  E = class {
    constructor(_0xddaa09, _0x2d1ab5, _0x3aa9ff, _0x3ea5bc, _0x2c21b3) {
      ((this._mindMap = _0xddaa09),
        (this._board = _0x2d1ab5),
        (this._pageId = _0x3aa9ff),
        (this._nodeId = _0x3ea5bc),
        (this._commandService = _0x2c21b3));
    }
    getId() {
      return this._nodeId;
    }
    getText() {
      let _0x593855 = this._board["getElement"](this._nodeId),
        _0x357df4 =
          (_0x593855 == null ? undefined : _0x593855.type) === _0x395ea2.Shape
            ? _0x593855.shapeData["shapeText"]
            : undefined,
        _0x43c21d =
          _0x357df4 && typeof _0x357df4 == "object"
            ? _0x357df4.text
            : undefined;
      return typeof _0x43c21d == "string" ? _0x43c21d : "";
    }
    getRichText() {
      return _0x6f758d(A(O(this._board["getElement"](this._nodeId))));
    }
    getParent() {
      var _0x44e6a2;
      let _0x538350 =
        (_0x44e6a2 = this._getMeta()) == null
          ? undefined
          : _0x44e6a2.parentNodeId;
      return _0x538350
        ? (this._mindMap["getNodes"]().find(
            (_0x38073d) => _0x38073d.getId() === _0x538350,
          ) ?? null)
        : null;
    }
    getChildren() {
      return this._mindMap["getNodes"]()
        .map((_0x92ea6a) => ({ node: _0x92ea6a, meta: _0x92ea6a._getMeta() }))
        .filter((_0x2cb524) => {
          var _0x3f1278;
          return (
            ((_0x3f1278 = _0x2cb524.meta) == null
              ? undefined
              : _0x3f1278.parentNodeId) === this._nodeId
          );
        })
        .sort((_0x3d5e18, _0x501c13) =>
          _0x2d73ad(_0x3d5e18.meta["orderKey"], _0x501c13.meta["orderKey"]),
        )
        .map((_0x18e3b4) => _0x18e3b4.node);
    }
    getDescendants() {
      let _0x69a9e9 = [],
        _0x5c9488 = (_0x319e5b) => {
          _0x319e5b.getChildren().forEach((_0x31c610) => {
            (_0x69a9e9.push(_0x31c610), _0x5c9488(_0x31c610));
          });
        };
      return (_0x5c9488(this), _0x69a9e9);
    }
    getStyle() {
      var _0x256bbc, _0x321e77, _0x31a7c9;
      let _0x75f0eb = this._board["getElement"](this._nodeId);
      if ((_0x75f0eb == null ? undefined : _0x75f0eb.type) !== _0x395ea2.Shape)
        return null;
      let _0x4e0f5f = O(_0x75f0eb);
      return {
        shapeType: _0x75f0eb.shapeData["shapeType"],
        fillColor:
          (_0x256bbc = _0x75f0eb.shapeData["fill"]) == null
            ? undefined
            : _0x256bbc.color,
        strokeColor:
          (_0x321e77 = _0x75f0eb.shapeData["stroke"]) == null
            ? undefined
            : _0x321e77.color,
        strokeWidth:
          (_0x31a7c9 = _0x75f0eb.shapeData["stroke"]) == null
            ? undefined
            : _0x31a7c9.width,
        textStyle: k(_0x4e0f5f),
      };
    }
    getIncomingConnectorStyle() {
      var _0x278d7c;
      if (!((_0x278d7c = this._getMeta()) != null && _0x278d7c.parentNodeId))
        return null;
      let _0x51bf2d = this._board["findElements"]({
        elementType: _0x395ea2.Connector,
        includeHidden: true,
        includeLocked: true,
      }).find((_0x54471d) => {
        var _0x2b33c1;
        return (
          ((_0x2b33c1 = _0x46e7a8(_0x54471d)) == null
            ? undefined
            : _0x2b33c1.childNodeId) === this._nodeId
        );
      });
      return (_0x51bf2d == null ? undefined : _0x51bf2d.type) ===
        _0x395ea2.Connector
        ? _0x2177b9.deepClone(_0x51bf2d.connectorData["style"] ?? {})
        : null;
    }
    setText(_0x3b9148) {
      let _0x32b017 = this._board["getElement"](this._nodeId);
      if (!_0x5e9bd4(_0x32b017)) return false;
      let _0x221f11 = _0x342d1e(_0x3b9148);
      return N(O(_0x32b017), _0x221f11)
        ? true
        : this._commandService["syncExecuteCommand"](_0x1d4cfc.id, {
            unitId: this._board["getId"](),
            subUnitId: this._pageId,
            nodeId: this._nodeId,
            text: _0x221f11.text,
            textData: _0x221f11.documentData ?? null,
          });
    }
    addChild(_0x10e108) {
      let _0x59477 = _0x10e108.id ?? _0x1ae996(8),
        _0x3af9a8 = _0x10e108.connectorId ?? _0x1ae996(8);
      if (
        this._board["getElement"](_0x59477) ||
        this._board["getElement"](_0x3af9a8)
      )
        return null;
      let _0x4834c1 = _0x342d1e(_0x10e108.text ?? "");
      return this._commandService["syncExecuteCommand"](_0x3070da.id, {
        unitId: this._board["getId"](),
        subUnitId: this._pageId,
        parentNodeId: this._nodeId,
        nodeId: _0x59477,
        connectorId: _0x3af9a8,
        text: _0x4834c1.text,
        textData: _0x4834c1.documentData,
        side: _0x10e108.side,
        orderKey: _0x10e108.orderKey,
      })
        ? this._mindMap["getNode"](_0x59477)
        : null;
    }
    addSibling(_0x13dea0) {
      var _0x57ebe7;
      let _0x1e62ae = _0x13dea0.id ?? _0x1ae996(8),
        _0x4a56f1 = _0x13dea0.connectorId ?? _0x1ae996(8);
      if (
        !((_0x57ebe7 = this._getMeta()) != null && _0x57ebe7.parentNodeId) ||
        this._board["getElement"](_0x1e62ae) ||
        this._board["getElement"](_0x4a56f1)
      )
        return null;
      let _0x271172 = _0x342d1e(_0x13dea0.text ?? "");
      return this._commandService["syncExecuteCommand"](_0x51e5ea.id, {
        unitId: this._board["getId"](),
        subUnitId: this._pageId,
        nodeId: this._nodeId,
        siblingNodeId: _0x1e62ae,
        connectorId: _0x4a56f1,
        text: _0x271172.text,
        textData: _0x271172.documentData,
        placement: _0x13dea0.placement ?? "after",
      })
        ? this._mindMap["getNode"](_0x1e62ae)
        : null;
    }
    remove() {
      return (
        !!this._getMeta() &&
        this._commandService["syncExecuteCommand"](_0xaecca6.id, {
          unitId: this._board["getId"](),
          subUnitId: this._pageId,
          nodeId: this._nodeId,
        })
      );
    }
    reparentTo(_0x1a0b6a) {
      let _0x46d128 = this._mindMap["getNode"](_0x1a0b6a);
      return !_0x46d128 ||
        _0x46d128.getId() === this._nodeId ||
        !this._getMeta()
        ? false
        : this._commandService["syncExecuteCommand"](_0x4fb866.id, {
            unitId: this._board["getId"](),
            subUnitId: this._pageId,
            nodeId: this._nodeId,
            newParentNodeId: _0x46d128.getId(),
          });
    }
    promote() {
      let _0x512e73 = this.getParent();
      return (
        !!(_0x512e73 != null && _0x512e73.getParent()) &&
        this._commandService["syncExecuteCommand"](_0x5cfe9c.id, {
          unitId: this._board["getId"](),
          subUnitId: this._pageId,
          nodeId: this._nodeId,
        })
      );
    }
    detachAsMindMap(_0x219171) {
      var _0x481a85;
      let _0x5e22b2 = _0x219171.id ?? _0x1ae996(8);
      return !(
        (_0x481a85 = this._getMeta()) != null && _0x481a85.parentNodeId
      ) || this._board["getElement"](_0x5e22b2)
        ? false
        : this._commandService["syncExecuteCommand"](_0xf8a9b7.id, {
            unitId: this._board["getId"](),
            subUnitId: this._pageId,
            nodeId: this._nodeId,
            containerId: _0x5e22b2,
            left: _0x219171.left,
            top: _0x219171.top,
          });
    }
    moveBefore(_0x2cf266) {
      return this._moveRelativeTo(_0x2cf266, "before");
    }
    moveAfter(_0x275dfb) {
      return this._moveRelativeTo(_0x275dfb, "after");
    }
    setStyle(_0x258984) {
      return !this._getMeta() ||
        Object.values(_0x258984).every((_0x3f572f) => _0x3f572f === undefined)
        ? false
        : this._commandService["syncExecuteCommand"](_0x1d4cfc.id, {
            unitId: this._board["getId"](),
            subUnitId: this._pageId,
            nodeId: this._nodeId,
            ..._0x258984,
          });
    }
    setIncomingConnectorStyle(_0x43e07b) {
      var _0x1d2088;
      return !(
        (_0x1d2088 = this._getMeta()) != null && _0x1d2088.parentNodeId
      ) ||
        Object.values(_0x43e07b).every((_0x4847de) => _0x4847de === undefined)
        ? false
        : this._commandService["syncExecuteCommand"](_0x212dc5.id, {
            unitId: this._board["getId"](),
            subUnitId: this._pageId,
            nodeId: this._nodeId,
            style: _0x43e07b,
          });
    }
    isCollapsed() {
      var _0x42f0a5;
      return (
        ((_0x42f0a5 = _0x5e9bd4(this._board["getElement"](this._nodeId))) ==
        null
          ? undefined
          : _0x42f0a5.collapsed) ?? null
      );
    }
    setCollapsed(_0x11997a) {
      let _0x52f4e6 = this.isCollapsed();
      return _0x52f4e6 === null
        ? false
        : _0x52f4e6 === _0x11997a ||
            this._commandService["syncExecuteCommand"](_0x3bf0d6.id, {
              unitId: this._board["getId"](),
              subUnitId: this._pageId,
              nodeId: this._nodeId,
              collapsed: _0x11997a,
            });
    }
    _getMeta() {
      return _0x5e9bd4(this._board["getElement"](this._nodeId));
    }
    _moveRelativeTo(_0xd8508c, _0x4e60a2) {
      let _0x46acc4 = this._getMeta(),
        _0x5ca93d = this._mindMap["getNode"](_0xd8508c),
        _0x12f648 = _0x5ca93d
          ? _0x5e9bd4(this._board["getElement"](_0x5ca93d.getId()))
          : null;
      return !(_0x46acc4 != null && _0x46acc4.parentNodeId) ||
        !_0x5ca93d ||
        _0x5ca93d.getId() === this._nodeId ||
        (_0x12f648 == null ? undefined : _0x12f648.parentNodeId) !==
          _0x46acc4.parentNodeId
        ? false
        : this._commandService["syncExecuteCommand"](_0x4fb866.id, {
            unitId: this._board["getId"](),
            subUnitId: this._pageId,
            nodeId: this._nodeId,
            newParentNodeId: _0x46acc4.parentNodeId,
            referenceNodeId: _0x5ca93d.getId(),
            placement: _0x4e60a2,
          });
    }
  },
  D = class extends _0xac85f6 {
    insertMindMap(_0x496f52) {
      let _0x477e94 = this.getData().activePageId,
        _0x1ec17c = _0x496f52.id ?? _0x1ae996(8);
      if (this.getElement(_0x1ec17c)) return null;
      let _0x3ce25c = P(_0x496f52.root);
      return this._injector["get"](_0x19ba1a).syncExecuteCommand(_0x26f138.id, {
        unitId: this.getId(),
        subUnitId: _0x477e94,
        containerId: _0x1ec17c,
        rootNodeId: _0x3ce25c.root["nodeId"],
        left: _0x496f52.left,
        top: _0x496f52.top,
        blueprint: _0x3ce25c,
        structureKind: _0x496f52.structureKind,
        branchLineType: _0x496f52.branchLineType,
        insertIndex: _0x496f52.insertIndex,
      })
        ? this._createMindMap(_0x1ec17c, _0x477e94)
        : null;
    }
    getMindMap(_0x28cab4) {
      let _0x3bacba = this.getData().activePageId,
        _0x1a5b97 = this.getElement(_0x28cab4);
      return _0x1a5b97 && _0x2eaf7c(_0x1a5b97)
        ? this._createMindMap(_0x28cab4, _0x3bacba)
        : null;
    }
    getMindMaps() {
      let _0x76ba50 = this.getData().activePageId;
      return this.findElements({ includeHidden: true, includeLocked: true })
        .filter((_0x289077) => !!_0x2eaf7c(_0x289077))
        .map((_0xf3d238) => this._createMindMap(_0xf3d238.id, _0x76ba50));
    }
    _createMindMap(_0x56ed05, _0x3288f0) {
      return new T(
        this,
        _0x3288f0,
        _0x56ed05,
        this._injector["get"](_0x19ba1a),
      );
    }
  };
function O(_0x4870b0) {
  let _0x45f0bc =
    (_0x4870b0 == null ? undefined : _0x4870b0.type) === _0x395ea2.Shape
      ? _0x4870b0.shapeData["shapeText"]
      : undefined;
  return _0x45f0bc && typeof _0x45f0bc == "object" ? _0x45f0bc : undefined;
}
function k(_0x20fcf1) {
  return _0x20fcf1
    ? {
        ...(typeof _0x20fcf1.color == "string"
          ? { color: _0x20fcf1.color }
          : null),
        ...(typeof _0x20fcf1.fontFamily == "string"
          ? { fontFamily: _0x20fcf1.fontFamily }
          : null),
        ...(typeof _0x20fcf1.fontSize == "number"
          ? { fontSize: _0x20fcf1.fontSize }
          : null),
        ...(typeof _0x20fcf1.bold == "boolean"
          ? { bold: _0x20fcf1.bold }
          : null),
        ...(typeof _0x20fcf1.italic == "boolean"
          ? { italic: _0x20fcf1.italic }
          : null),
        ...(typeof _0x20fcf1.underline == "boolean"
          ? { underline: _0x20fcf1.underline }
          : null),
        ...(typeof _0x20fcf1.strikethrough == "boolean"
          ? { strikethrough: _0x20fcf1.strikethrough }
          : null),
        ...(_0x20fcf1.horizontalAlign === undefined
          ? null
          : { horizontalAlign: _0x20fcf1.horizontalAlign }),
        ...(_0x20fcf1.verticalAlign === undefined
          ? null
          : { verticalAlign: _0x20fcf1.verticalAlign }),
        ...(_0x20fcf1.textFill === undefined
          ? null
          : { textFill: _0x20fcf1.textFill }),
      }
    : {};
}
function A(_0x1a821e) {
  let _0x27113e = _0x1a821e == null ? undefined : _0x1a821e.dataModel;
  if (!_0x27113e || typeof _0x27113e != "object") return;
  let _0x3b45af = _0x27113e.doc;
  return _0x3b45af && typeof _0x3b45af == "object" ? _0x3b45af : undefined;
}
function j(_0x26b16a, _0x1d8d7b) {
  if (Object.is(_0x26b16a, _0x1d8d7b)) return true;
  if (
    !_0x26b16a ||
    !_0x1d8d7b ||
    typeof _0x26b16a != "object" ||
    typeof _0x1d8d7b != "object"
  )
    return false;
  if (Array.isArray(_0x26b16a) || Array.isArray(_0x1d8d7b))
    return (
      Array.isArray(_0x26b16a) &&
      Array.isArray(_0x1d8d7b) &&
      _0x26b16a.length === _0x1d8d7b.length &&
      _0x26b16a.every((_0x92855b, _0x9e87b5) =>
        j(_0x92855b, _0x1d8d7b[_0x9e87b5]),
      )
    );
  let _0x1784b9 = _0x26b16a,
    _0x530c76 = _0x1d8d7b,
    _0x5766f3 = Object.keys(_0x1784b9),
    _0x4a54b3 = Object.keys(_0x530c76);
  return (
    _0x5766f3.length === _0x4a54b3.length &&
    _0x5766f3.every(
      (_0x241e90) =>
        Object.prototype["hasOwnProperty"].call(_0x530c76, _0x241e90) &&
        j(_0x1784b9[_0x241e90], _0x530c76[_0x241e90]),
    )
  );
}
function M(_0x524036, _0xedef94) {
  if (Object.is(_0x524036, _0xedef94)) return true;
  if (
    !_0x524036 ||
    !_0xedef94 ||
    typeof _0x524036 != "object" ||
    typeof _0xedef94 != "object"
  )
    return false;
  if (Array.isArray(_0x524036) || Array.isArray(_0xedef94))
    return (
      Array.isArray(_0x524036) &&
      Array.isArray(_0xedef94) &&
      j(_0x524036, _0xedef94)
    );
  let _0xb8687f = _0x524036;
  return Object.entries(_0xedef94).every(
    ([_0x13d48b, _0x1c8816]) =>
      Object.prototype["hasOwnProperty"].call(_0xb8687f, _0x13d48b) &&
      M(_0xb8687f[_0x13d48b], _0x1c8816),
  );
}
function N(_0x3e1e11, _0x805fbf) {
  if ((_0x3e1e11 == null ? undefined : _0x3e1e11.text) !== _0x805fbf.text)
    return false;
  let _0x1867cc = A(_0x3e1e11);
  return _0x805fbf.documentData
    ? (_0x3e1e11 == null ? undefined : _0x3e1e11.isRichText) === true &&
        M(_0x1867cc, _0x805fbf.documentData)
    : (_0x3e1e11 == null ? undefined : _0x3e1e11.isRichText) !== true;
}
function P(_0x44c29f) {
  function _0x537c56(_0x517037, _0x314eca) {
    let _0x992d60 = _0x517037.id ?? _0x1ae996(8),
      _0x1a7231 = _0x314eca
        ? undefined
        : (_0x517037.connectorId ?? _0x1ae996(8)),
      _0x43bb9f = _0x342d1e(_0x517037.text);
    return {
      nodeId: _0x992d60,
      ...(_0x1a7231 ? { connectorId: _0x1a7231 } : {}),
      text: _0x43bb9f.text,
      textData: _0x43bb9f.documentData,
      side: _0x517037.side,
      collapsed: _0x517037.collapsed,
      children: (_0x517037.children ?? []).map((_0x5a9e36) =>
        _0x537c56(_0x5a9e36, false),
      ),
    };
  }
  return { root: _0x537c56(_0x44c29f, true) };
}
_0xac85f6.extend(D);
const F = {
    MindMapHorizontal: "mindmap-horizontal",
    MindMapVertical: "mindmap-vertical",
    TreeRight: "tree-right",
    TreeLeft: "tree-left",
    TreeAlternate: "tree-alternate",
    TimelineHorizontal: "timeline-horizontal",
    TimelineVertical: "timeline-vertical",
  },
  I = {
    RoundedOrthogonal: "rounded-orthogonal",
    Curve: "curve",
    Orthogonal: "orthogonal",
  },
  L = { Left: "left", Right: "right", Top: "top", Bottom: "bottom" };
var R = class extends _0x1ff23a {
  get BoardMindMapStructureKind() {
    return F;
  }
  get BoardMindMapBranchLineType() {
    return I;
  }
  get BoardMindMapNodeSide() {
    return L;
  }
};
_0x1ff23a.extend(R);
export { T as FBoardMindMap, E as FBoardMindMapNode };
