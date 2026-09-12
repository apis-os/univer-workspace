Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/boards"),
  t = require("@univerjs-pro/boards-mind"),
  n = require("@univerjs-pro/boards/facade"),
  r = require("@univerjs/core"),
  i = require("@univerjs/core/facade");
var a = class {
    constructor(_0xb7f51d, _0x545398, _0x29c72b, _0xd924c0) {
      ((this._board = _0xb7f51d),
        (this._pageId = _0x545398),
        (this._containerId = _0x29c72b),
        (this._commandService = _0xd924c0));
    }
    getId() {
      return this._containerId;
    }
    getRootNode() {
      let _0x509641 = (0, t.getMindMapContainerMeta)(
        this._board["getElement"](this._containerId),
      );
      return _0x509641 ? this._createNode(_0x509641.rootNodeId) : null;
    }
    getNodes() {
      return this._board["findElements"]({
        includeHidden: true,
        includeLocked: true,
      })
        .filter((_0x26c90f) => this._isNodeInScope(_0x26c90f))
        .map((_0x33651b) => this._createNode(_0x33651b.id));
    }
    getNode(_0x4da098) {
      let _0x410f4c = this._board["getElement"](_0x4da098);
      return _0x410f4c && this._isNodeInScope(_0x410f4c)
        ? this._createNode(_0x4da098)
        : null;
    }
    getDescendants() {
      var _0x471d2d;
      return (
        ((_0x471d2d = this.getRootNode()) == null
          ? undefined
          : _0x471d2d.getDescendants()) ?? []
      );
    }
    getLayout() {
      let _0x4aef1a = (0, t.getMindMapContainerMeta)(
        this._board["getElement"](this._containerId),
      );
      return _0x4aef1a ? r.Tools["deepClone"](_0x4aef1a.layout) : null;
    }
    getBounds() {
      return this._board["getElementBounds"](this._containerId);
    }
    reflow(_0x14b470) {
      return this._commandService["syncExecuteCommand"](
        t.ReflowMindMapCommand["id"],
        {
          unitId: this._board["getId"](),
          subUnitId: this._pageId,
          scopeId: this._containerId,
          ..._0x14b470,
        },
      );
    }
    setLayout(_0x1b2798) {
      return this._commandService["syncExecuteCommand"](
        t.ChangeMindMapLayoutOperation["id"],
        {
          unitId: this._board["getId"](),
          subUnitId: this._pageId,
          scopeId: this._containerId,
          ..._0x1b2798,
        },
      );
    }
    setBranchLineType(_0x1151bf) {
      return this._commandService["syncExecuteCommand"](
        t.ChangeMindMapBranchLineTypeOperation["id"],
        {
          unitId: this._board["getId"](),
          subUnitId: this._pageId,
          scopeId: this._containerId,
          branchLineType: _0x1151bf,
        },
      );
    }
    remove() {
      var _0x4fe370;
      return (
        ((_0x4fe370 = this.getRootNode()) == null
          ? undefined
          : _0x4fe370.remove()) ?? false
      );
    }
    _createNode(_0x44fb62) {
      return new o(
        this,
        this._board,
        this._pageId,
        _0x44fb62,
        this._commandService,
      );
    }
    _isNodeInScope(_0x4393a0) {
      var _0x3337ce;
      return (
        ((_0x3337ce = (0, t.getMindMapNodeMeta)(_0x4393a0)) == null
          ? undefined
          : _0x3337ce.structureScopeId) === this._containerId
      );
    }
  },
  o = class {
    constructor(_0x3afe71, _0x2ee46e, _0x1b7441, _0x36cd1e, _0x4c995b) {
      ((this._mindMap = _0x3afe71),
        (this._board = _0x2ee46e),
        (this._pageId = _0x1b7441),
        (this._nodeId = _0x36cd1e),
        (this._commandService = _0x4c995b));
    }
    getId() {
      return this._nodeId;
    }
    getText() {
      let _0x5416ed = this._board["getElement"](this._nodeId),
        _0x1234e2 =
          (_0x5416ed == null ? undefined : _0x5416ed.type) ===
          e.BoardElementType["Shape"]
            ? _0x5416ed.shapeData["shapeText"]
            : undefined,
        _0x45f214 =
          _0x1234e2 && typeof _0x1234e2 == "object"
            ? _0x1234e2.text
            : undefined;
      return typeof _0x45f214 == "string" ? _0x45f214 : "";
    }
    getRichText() {
      return (0, n.createBoardFacadeRichTextValue)(
        u(c(this._board["getElement"](this._nodeId))),
      );
    }
    getParent() {
      var _0x3ccdf1;
      let _0x239d87 =
        (_0x3ccdf1 = this._getMeta()) == null
          ? undefined
          : _0x3ccdf1.parentNodeId;
      return _0x239d87
        ? (this._mindMap["getNodes"]().find(
            (_0x5d0554) => _0x5d0554.getId() === _0x239d87,
          ) ?? null)
        : null;
    }
    getChildren() {
      return this._mindMap["getNodes"]()
        .map((_0x29e8ad) => ({ node: _0x29e8ad, meta: _0x29e8ad._getMeta() }))
        .filter((_0x1a8fc8) => {
          var _0x22a40e;
          return (
            ((_0x22a40e = _0x1a8fc8.meta) == null
              ? undefined
              : _0x22a40e.parentNodeId) === this._nodeId
          );
        })
        .sort((_0x2d4bba, _0xebe365) =>
          (0, t.compareMindMapOrderKey)(
            _0x2d4bba.meta["orderKey"],
            _0xebe365.meta["orderKey"],
          ),
        )
        .map((_0x51083b) => _0x51083b.node);
    }
    getDescendants() {
      let _0x55b3a3 = [],
        _0x32609a = (_0x2b9ff3) => {
          _0x2b9ff3.getChildren().forEach((_0x5cdc81) => {
            (_0x55b3a3.push(_0x5cdc81), _0x32609a(_0x5cdc81));
          });
        };
      return (_0x32609a(this), _0x55b3a3);
    }
    getStyle() {
      var _0x3bb9a2, _0x59e901, _0x32b5ff;
      let _0x1ea6d8 = this._board["getElement"](this._nodeId);
      if (
        (_0x1ea6d8 == null ? undefined : _0x1ea6d8.type) !==
        e.BoardElementType["Shape"]
      )
        return null;
      let _0x5e2cfd = c(_0x1ea6d8);
      return {
        shapeType: _0x1ea6d8.shapeData["shapeType"],
        fillColor:
          (_0x3bb9a2 = _0x1ea6d8.shapeData["fill"]) == null
            ? undefined
            : _0x3bb9a2.color,
        strokeColor:
          (_0x59e901 = _0x1ea6d8.shapeData["stroke"]) == null
            ? undefined
            : _0x59e901.color,
        strokeWidth:
          (_0x32b5ff = _0x1ea6d8.shapeData["stroke"]) == null
            ? undefined
            : _0x32b5ff.width,
        textStyle: l(_0x5e2cfd),
      };
    }
    getIncomingConnectorStyle() {
      var _0x429b79;
      if (!((_0x429b79 = this._getMeta()) != null && _0x429b79.parentNodeId))
        return null;
      let _0x17ee6e = this._board["findElements"]({
        elementType: e.BoardElementType["Connector"],
        includeHidden: true,
        includeLocked: true,
      }).find((_0x14f703) => {
        var _0x344cf8;
        return (
          ((_0x344cf8 = (0, t.getMindMapConnectorMeta)(_0x14f703)) == null
            ? undefined
            : _0x344cf8.childNodeId) === this._nodeId
        );
      });
      return (_0x17ee6e == null ? undefined : _0x17ee6e.type) ===
        e.BoardElementType["Connector"]
        ? r.Tools["deepClone"](_0x17ee6e.connectorData["style"] ?? {})
        : null;
    }
    setText(_0x5f05d6) {
      let _0x48b7f1 = this._board["getElement"](this._nodeId);
      if (!(0, t.getMindMapNodeMeta)(_0x48b7f1)) return false;
      let _0x5053cf = (0, n.normalizeBoardFacadeTextContent)(_0x5f05d6);
      return p(c(_0x48b7f1), _0x5053cf)
        ? true
        : this._commandService["syncExecuteCommand"](
            t.UpdateMindMapNodeOperation["id"],
            {
              unitId: this._board["getId"](),
              subUnitId: this._pageId,
              nodeId: this._nodeId,
              text: _0x5053cf.text,
              textData: _0x5053cf.documentData ?? null,
            },
          );
    }
    addChild(_0x2e8b7b) {
      let _0x4ba189 = _0x2e8b7b.id ?? (0, r.generateRandomId)(8),
        _0x1a0c23 = _0x2e8b7b.connectorId ?? (0, r.generateRandomId)(8);
      if (
        this._board["getElement"](_0x4ba189) ||
        this._board["getElement"](_0x1a0c23)
      )
        return null;
      let _0x184f4a = (0, n.normalizeBoardFacadeTextContent)(
        _0x2e8b7b.text ?? "",
      );
      return this._commandService["syncExecuteCommand"](
        t.AddMindMapChildOperation["id"],
        {
          unitId: this._board["getId"](),
          subUnitId: this._pageId,
          parentNodeId: this._nodeId,
          nodeId: _0x4ba189,
          connectorId: _0x1a0c23,
          text: _0x184f4a.text,
          textData: _0x184f4a.documentData,
          side: _0x2e8b7b.side,
          orderKey: _0x2e8b7b.orderKey,
        },
      )
        ? this._mindMap["getNode"](_0x4ba189)
        : null;
    }
    addSibling(_0x48a2a0) {
      var _0x5de1fb;
      let _0x1d2356 = _0x48a2a0.id ?? (0, r.generateRandomId)(8),
        _0x3a546a = _0x48a2a0.connectorId ?? (0, r.generateRandomId)(8);
      if (
        !((_0x5de1fb = this._getMeta()) != null && _0x5de1fb.parentNodeId) ||
        this._board["getElement"](_0x1d2356) ||
        this._board["getElement"](_0x3a546a)
      )
        return null;
      let _0x1600d6 = (0, n.normalizeBoardFacadeTextContent)(
        _0x48a2a0.text ?? "",
      );
      return this._commandService["syncExecuteCommand"](
        t.AddMindMapSiblingOperation["id"],
        {
          unitId: this._board["getId"](),
          subUnitId: this._pageId,
          nodeId: this._nodeId,
          siblingNodeId: _0x1d2356,
          connectorId: _0x3a546a,
          text: _0x1600d6.text,
          textData: _0x1600d6.documentData,
          placement: _0x48a2a0.placement ?? "after",
        },
      )
        ? this._mindMap["getNode"](_0x1d2356)
        : null;
    }
    remove() {
      return (
        !!this._getMeta() &&
        this._commandService["syncExecuteCommand"](
          t.DeleteMindMapNodeOperation["id"],
          {
            unitId: this._board["getId"](),
            subUnitId: this._pageId,
            nodeId: this._nodeId,
          },
        )
      );
    }
    reparentTo(_0x55a1c1) {
      let _0x38428d = this._mindMap["getNode"](_0x55a1c1);
      return !_0x38428d ||
        _0x38428d.getId() === this._nodeId ||
        !this._getMeta()
        ? false
        : this._commandService["syncExecuteCommand"](
            t.ReparentMindMapNodeOperation["id"],
            {
              unitId: this._board["getId"](),
              subUnitId: this._pageId,
              nodeId: this._nodeId,
              newParentNodeId: _0x38428d.getId(),
            },
          );
    }
    promote() {
      let _0x551dc6 = this.getParent();
      return (
        !!(_0x551dc6 != null && _0x551dc6.getParent()) &&
        this._commandService["syncExecuteCommand"](
          t.PromoteMindMapNodeOperation["id"],
          {
            unitId: this._board["getId"](),
            subUnitId: this._pageId,
            nodeId: this._nodeId,
          },
        )
      );
    }
    detachAsMindMap(_0x3a2c10) {
      var _0x3215e9;
      let _0x5f1187 = _0x3a2c10.id ?? (0, r.generateRandomId)(8);
      return !(
        (_0x3215e9 = this._getMeta()) != null && _0x3215e9.parentNodeId
      ) || this._board["getElement"](_0x5f1187)
        ? false
        : this._commandService["syncExecuteCommand"](
            t.DetachMindMapNodeOperation["id"],
            {
              unitId: this._board["getId"](),
              subUnitId: this._pageId,
              nodeId: this._nodeId,
              containerId: _0x5f1187,
              left: _0x3a2c10.left,
              top: _0x3a2c10.top,
            },
          );
    }
    moveBefore(_0x3118d1) {
      return this._moveRelativeTo(_0x3118d1, "before");
    }
    moveAfter(_0x1d923f) {
      return this._moveRelativeTo(_0x1d923f, "after");
    }
    setStyle(_0x5ac8d2) {
      return !this._getMeta() ||
        Object.values(_0x5ac8d2).every((_0x5d239e) => _0x5d239e === undefined)
        ? false
        : this._commandService["syncExecuteCommand"](
            t.UpdateMindMapNodeOperation["id"],
            {
              unitId: this._board["getId"](),
              subUnitId: this._pageId,
              nodeId: this._nodeId,
              ..._0x5ac8d2,
            },
          );
    }
    setIncomingConnectorStyle(_0x863893) {
      var _0x25494c;
      return !(
        (_0x25494c = this._getMeta()) != null && _0x25494c.parentNodeId
      ) ||
        Object.values(_0x863893).every((_0x4f48a9) => _0x4f48a9 === undefined)
        ? false
        : this._commandService["syncExecuteCommand"](
            t.UpdateMindMapIncomingConnectorOperation["id"],
            {
              unitId: this._board["getId"](),
              subUnitId: this._pageId,
              nodeId: this._nodeId,
              style: _0x863893,
            },
          );
    }
    isCollapsed() {
      var _0x472eb6;
      return (
        ((_0x472eb6 = (0, t.getMindMapNodeMeta)(
          this._board["getElement"](this._nodeId),
        )) == null
          ? undefined
          : _0x472eb6.collapsed) ?? null
      );
    }
    setCollapsed(_0x429977) {
      let _0x2b7127 = this.isCollapsed();
      return _0x2b7127 === null
        ? false
        : _0x2b7127 === _0x429977 ||
            this._commandService["syncExecuteCommand"](
              t.ToggleMindMapNodeCollapseOperation["id"],
              {
                unitId: this._board["getId"](),
                subUnitId: this._pageId,
                nodeId: this._nodeId,
                collapsed: _0x429977,
              },
            );
    }
    _getMeta() {
      return (0, t.getMindMapNodeMeta)(this._board["getElement"](this._nodeId));
    }
    _moveRelativeTo(_0x215759, _0x4e975e) {
      let _0x4e8380 = this._getMeta(),
        _0x22b0af = this._mindMap["getNode"](_0x215759),
        _0x3c5898 = _0x22b0af
          ? (0, t.getMindMapNodeMeta)(
              this._board["getElement"](_0x22b0af.getId()),
            )
          : null;
      return !(_0x4e8380 != null && _0x4e8380.parentNodeId) ||
        !_0x22b0af ||
        _0x22b0af.getId() === this._nodeId ||
        (_0x3c5898 == null ? undefined : _0x3c5898.parentNodeId) !==
          _0x4e8380.parentNodeId
        ? false
        : this._commandService["syncExecuteCommand"](
            t.ReparentMindMapNodeOperation["id"],
            {
              unitId: this._board["getId"](),
              subUnitId: this._pageId,
              nodeId: this._nodeId,
              newParentNodeId: _0x4e8380.parentNodeId,
              referenceNodeId: _0x22b0af.getId(),
              placement: _0x4e975e,
            },
          );
    }
  },
  s = class extends n.FBoard {
    insertMindMap(_0xfdaacf) {
      let _0x4490ae = this.getData().activePageId,
        _0x571bbf = _0xfdaacf.id ?? (0, r.generateRandomId)(8);
      if (this.getElement(_0x571bbf)) return null;
      let _0x596073 = m(_0xfdaacf.root);
      return this._injector["get"](r.ICommandService).syncExecuteCommand(
        t.InsertBoardMindMapOperation["id"],
        {
          unitId: this.getId(),
          subUnitId: _0x4490ae,
          containerId: _0x571bbf,
          rootNodeId: _0x596073.root["nodeId"],
          left: _0xfdaacf.left,
          top: _0xfdaacf.top,
          blueprint: _0x596073,
          structureKind: _0xfdaacf.structureKind,
          branchLineType: _0xfdaacf.branchLineType,
          insertIndex: _0xfdaacf.insertIndex,
        },
      )
        ? this._createMindMap(_0x571bbf, _0x4490ae)
        : null;
    }
    getMindMap(_0xc4a640) {
      let _0x4d01b7 = this.getData().activePageId,
        _0x1443b9 = this.getElement(_0xc4a640);
      return _0x1443b9 && (0, t.getMindMapContainerMeta)(_0x1443b9)
        ? this._createMindMap(_0xc4a640, _0x4d01b7)
        : null;
    }
    getMindMaps() {
      let _0x320323 = this.getData().activePageId;
      return this.findElements({ includeHidden: true, includeLocked: true })
        .filter((_0x25bde5) => !!(0, t.getMindMapContainerMeta)(_0x25bde5))
        .map((_0x55920a) => this._createMindMap(_0x55920a.id, _0x320323));
    }
    _createMindMap(_0x490d6b, _0x34d797) {
      return new a(
        this,
        _0x34d797,
        _0x490d6b,
        this._injector["get"](r.ICommandService),
      );
    }
  };
function c(_0x5d968a) {
  let _0x56513e =
    (_0x5d968a == null ? undefined : _0x5d968a.type) ===
    e.BoardElementType["Shape"]
      ? _0x5d968a.shapeData["shapeText"]
      : undefined;
  return _0x56513e && typeof _0x56513e == "object" ? _0x56513e : undefined;
}
function l(_0x42ecb7) {
  return _0x42ecb7
    ? {
        ...(typeof _0x42ecb7.color == "string"
          ? { color: _0x42ecb7.color }
          : null),
        ...(typeof _0x42ecb7.fontFamily == "string"
          ? { fontFamily: _0x42ecb7.fontFamily }
          : null),
        ...(typeof _0x42ecb7.fontSize == "number"
          ? { fontSize: _0x42ecb7.fontSize }
          : null),
        ...(typeof _0x42ecb7.bold == "boolean"
          ? { bold: _0x42ecb7.bold }
          : null),
        ...(typeof _0x42ecb7.italic == "boolean"
          ? { italic: _0x42ecb7.italic }
          : null),
        ...(typeof _0x42ecb7.underline == "boolean"
          ? { underline: _0x42ecb7.underline }
          : null),
        ...(typeof _0x42ecb7.strikethrough == "boolean"
          ? { strikethrough: _0x42ecb7.strikethrough }
          : null),
        ...(_0x42ecb7.horizontalAlign === undefined
          ? null
          : { horizontalAlign: _0x42ecb7.horizontalAlign }),
        ...(_0x42ecb7.verticalAlign === undefined
          ? null
          : { verticalAlign: _0x42ecb7.verticalAlign }),
        ...(_0x42ecb7.textFill === undefined
          ? null
          : { textFill: _0x42ecb7.textFill }),
      }
    : {};
}
function u(_0x3f75e2) {
  let _0x2cd3f1 = _0x3f75e2 == null ? undefined : _0x3f75e2.dataModel;
  if (!_0x2cd3f1 || typeof _0x2cd3f1 != "object") return;
  let _0x51402c = _0x2cd3f1.doc;
  return _0x51402c && typeof _0x51402c == "object" ? _0x51402c : undefined;
}
function d(_0x3b11f3, _0x46d534) {
  if (Object.is(_0x3b11f3, _0x46d534)) return true;
  if (
    !_0x3b11f3 ||
    !_0x46d534 ||
    typeof _0x3b11f3 != "object" ||
    typeof _0x46d534 != "object"
  )
    return false;
  if (Array.isArray(_0x3b11f3) || Array.isArray(_0x46d534))
    return (
      Array.isArray(_0x3b11f3) &&
      Array.isArray(_0x46d534) &&
      _0x3b11f3.length === _0x46d534.length &&
      _0x3b11f3.every((_0x4536df, _0x20cf53) =>
        d(_0x4536df, _0x46d534[_0x20cf53]),
      )
    );
  let _0x2a4b66 = _0x3b11f3,
    _0x113294 = _0x46d534,
    _0x191d5c = Object.keys(_0x2a4b66),
    _0x3afc92 = Object.keys(_0x113294);
  return (
    _0x191d5c.length === _0x3afc92.length &&
    _0x191d5c.every(
      (_0x2939e5) =>
        Object.prototype["hasOwnProperty"].call(_0x113294, _0x2939e5) &&
        d(_0x2a4b66[_0x2939e5], _0x113294[_0x2939e5]),
    )
  );
}
function f(_0x2ba660, _0x4e1387) {
  if (Object.is(_0x2ba660, _0x4e1387)) return true;
  if (
    !_0x2ba660 ||
    !_0x4e1387 ||
    typeof _0x2ba660 != "object" ||
    typeof _0x4e1387 != "object"
  )
    return false;
  if (Array.isArray(_0x2ba660) || Array.isArray(_0x4e1387))
    return (
      Array.isArray(_0x2ba660) &&
      Array.isArray(_0x4e1387) &&
      d(_0x2ba660, _0x4e1387)
    );
  let _0x5953e3 = _0x2ba660;
  return Object.entries(_0x4e1387).every(
    ([_0x49f499, _0x4fe6b2]) =>
      Object.prototype["hasOwnProperty"].call(_0x5953e3, _0x49f499) &&
      f(_0x5953e3[_0x49f499], _0x4fe6b2),
  );
}
function p(_0x4c40e2, _0x1ba279) {
  if ((_0x4c40e2 == null ? undefined : _0x4c40e2.text) !== _0x1ba279.text)
    return false;
  let _0x179ac6 = u(_0x4c40e2);
  return _0x1ba279.documentData
    ? (_0x4c40e2 == null ? undefined : _0x4c40e2.isRichText) === true &&
        f(_0x179ac6, _0x1ba279.documentData)
    : (_0x4c40e2 == null ? undefined : _0x4c40e2.isRichText) !== true;
}
function m(_0x4b94a2) {
  function _0x238a19(_0x2c4350, _0x58a020) {
    let _0x21dee1 = _0x2c4350.id ?? (0, r.generateRandomId)(8),
      _0x19111e = _0x58a020
        ? undefined
        : (_0x2c4350.connectorId ?? (0, r.generateRandomId)(8)),
      _0x19eda9 = (0, n.normalizeBoardFacadeTextContent)(_0x2c4350.text);
    return {
      nodeId: _0x21dee1,
      ...(_0x19111e ? { connectorId: _0x19111e } : {}),
      text: _0x19eda9.text,
      textData: _0x19eda9.documentData,
      side: _0x2c4350.side,
      collapsed: _0x2c4350.collapsed,
      children: (_0x2c4350.children ?? []).map((_0x4a9a5a) =>
        _0x238a19(_0x4a9a5a, false),
      ),
    };
  }
  return { root: _0x238a19(_0x4b94a2, true) };
}
n.FBoard["extend"](s);
const h = {
    MindMapHorizontal: "mindmap-horizontal",
    MindMapVertical: "mindmap-vertical",
    TreeRight: "tree-right",
    TreeLeft: "tree-left",
    TreeAlternate: "tree-alternate",
    TimelineHorizontal: "timeline-horizontal",
    TimelineVertical: "timeline-vertical",
  },
  g = {
    RoundedOrthogonal: "rounded-orthogonal",
    Curve: "curve",
    Orthogonal: "orthogonal",
  },
  _ = { Left: "left", Right: "right", Top: "top", Bottom: "bottom" };
var v = class extends i.FEnum {
  get BoardMindMapStructureKind() {
    return h;
  }
  get BoardMindMapBranchLineType() {
    return g;
  }
  get BoardMindMapNodeSide() {
    return _;
  }
};
(i.FEnum["extend"](v),
  (exports.FBoardMindMap = a),
  (exports.FBoardMindMapNode = o));
