import { BoardElementType } from "@univerjs-pro/boards";
import { AddMindMapChildOperation, AddMindMapSiblingOperation, ChangeMindMapBranchLineTypeOperation, ChangeMindMapLayoutOperation, DeleteMindMapNodeOperation, DetachMindMapNodeOperation, InsertBoardMindMapOperation, PromoteMindMapNodeOperation, ReflowMindMapCommand, ReparentMindMapNodeOperation, ToggleMindMapNodeCollapseOperation, UpdateMindMapIncomingConnectorOperation, UpdateMindMapNodeOperation, compareMindMapOrderKey, getMindMapConnectorMeta, getMindMapContainerMeta, getMindMapNodeMeta } from "@univerjs-pro/boards-mind";
import { FBoard, createBoardFacadeRichTextValue, normalizeBoardFacadeTextContent } from "@univerjs-pro/boards/facade";
import { ICommandService, Tools, generateRandomId } from "@univerjs/core";
import { FEnum } from "@univerjs/core/facade";
var T = class {
    constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627) {
      this._board = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624, this._pageId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625, this._containerId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627;
    }
    getId() {
      return this._containerId;
    }
    getRootNode() {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 = getMindMapContainerMeta(this._board["getElement"](this._containerId));
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 ? this._createNode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632.rootNodeId) : null;
    }
    getNodes() {
      return this._board["findElements"]({
        includeHidden: true,
        includeLocked: true
      }).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 => this._isNodeInScope(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462)).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 => this._createNode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.id));
    }
    getNode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 = this._board["getElement"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 && this._isNodeInScope(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635) ? this._createNode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634) : null;
    }
    getDescendants() {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638;
      return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 = this.getRootNode()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.getDescendants()) ?? [];
    }
    getLayout() {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 = getMindMapContainerMeta(this._board["getElement"](this._containerId));
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 ? Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640.layout) : null;
    }
    getBounds() {
      return this._board["getElementBounds"](this._containerId);
    }
    reflow(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642) {
      return this._commandService["syncExecuteCommand"](ReflowMindMapCommand.id, {
        unitId: this._board["getId"](),
        subUnitId: this._pageId,
        scopeId: this._containerId,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642
      });
    }
    setLayout(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644) {
      return this._commandService["syncExecuteCommand"](ChangeMindMapLayoutOperation.id, {
        unitId: this._board["getId"](),
        subUnitId: this._pageId,
        scopeId: this._containerId,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644
      });
    }
    setBranchLineType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646) {
      return this._commandService["syncExecuteCommand"](ChangeMindMapBranchLineTypeOperation.id, {
        unitId: this._board["getId"](),
        subUnitId: this._pageId,
        scopeId: this._containerId,
        branchLineType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646
      });
    }
    remove() {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648;
      return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648 = this.getRootNode()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648.remove()) ?? false;
    }
    _createNode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650) {
      return new E(this, this._board, this._pageId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650, this._commandService);
    }
    _isNodeInScope(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653;
      return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 = getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653.structureScopeId) === this._containerId;
    }
  },
  E = class {
    constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660) {
      this._mindMap = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656, this._board = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4657, this._pageId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4658, this._nodeId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659, this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660;
    }
    getId() {
      return this._nodeId;
    }
    getText() {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 = this._board["getElement"](this._nodeId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666.type) === BoardElementType.Shape ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666.shapeData["shapeText"] : undefined,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 == "object" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.text : undefined;
      return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668 == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668 : "";
    }
    getRichText() {
      return createBoardFacadeRichTextValue(A(O(this._board["getElement"](this._nodeId))));
    }
    getParent() {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672 = this._getMeta()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672.parentNodeId;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673 ? this._mindMap["getNodes"]().find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.getId() === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673) ?? null : null;
    }
    getChildren() {
      return this._mindMap["getNodes"]().map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 => ({
        node: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465,
        meta: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465._getMeta()
      })).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467;
        return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.meta) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467.parentNodeId) === this._nodeId;
      }).sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611) => compareMindMapOrderKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.meta["orderKey"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.meta["orderKey"])).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612.node);
    }
    getDescendants() {
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = [],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613.getChildren().forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 => {
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46);
          });
        };
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676(this), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A;
    }
    getStyle() {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681 = this._board["getElement"](this._nodeId);
      if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681.type) !== BoardElementType.Shape) return null;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682 = O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681);
      return {
        shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681.shapeData["shapeType"],
        fillColor: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681.shapeData["fill"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678.color,
        strokeColor: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681.shapeData["stroke"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679.color,
        strokeWidth: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681.shapeData["stroke"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680.width,
        textStyle: k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682)
      };
    }
    getIncomingConnectorStyle() {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688;
      if (!((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688 = this._getMeta()) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688.parentNodeId)) return null;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689 = this._board["findElements"]({
        elementType: BoardElementType.Connector,
        includeHidden: true,
        includeLocked: true
      }).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615 => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616;
        return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 = getMindMapConnectorMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.childNodeId) === this._nodeId;
      });
      return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689.type) === BoardElementType.Connector ? Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689.connectorData["style"] ?? {}) : null;
    }
    setText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 = this._board["getElement"](this._nodeId);
      if (!getMindMapNodeMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693)) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694 = normalizeBoardFacadeTextContent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692);
      return N(O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694) ? true : this._commandService["syncExecuteCommand"](UpdateMindMapNodeOperation.id, {
        unitId: this._board["getId"](),
        subUnitId: this._pageId,
        nodeId: this._nodeId,
        text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.text,
        textData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.documentData ?? null
      });
    }
    addChild(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698.id ?? generateRandomId(8),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698.connectorId ?? generateRandomId(8);
      if (this._board["getElement"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699) || this._board["getElement"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100)) return null;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101 = normalizeBoardFacadeTextContent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698.text ?? "");
      return this._commandService["syncExecuteCommand"](AddMindMapChildOperation.id, {
        unitId: this._board["getId"](),
        subUnitId: this._pageId,
        parentNodeId: this._nodeId,
        nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699,
        connectorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100,
        text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101.text,
        textData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101.documentData,
        side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698.side,
        orderKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698.orderKey
      }) ? this._mindMap["getNode"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699) : null;
    }
    addSibling(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106.id ?? generateRandomId(8),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106.connectorId ?? generateRandomId(8);
      if (!((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107 = this._getMeta()) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107.parentNodeId) || this._board["getElement"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108) || this._board["getElement"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109)) return null;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110 = normalizeBoardFacadeTextContent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106.text ?? "");
      return this._commandService["syncExecuteCommand"](AddMindMapSiblingOperation.id, {
        unitId: this._board["getId"](),
        subUnitId: this._pageId,
        nodeId: this._nodeId,
        siblingNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108,
        connectorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109,
        text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.text,
        textData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.documentData,
        placement: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106.placement ?? "after"
      }) ? this._mindMap["getNode"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108) : null;
    }
    remove() {
      return !!this._getMeta() && this._commandService["syncExecuteCommand"](DeleteMindMapNodeOperation.id, {
        unitId: this._board["getId"](),
        subUnitId: this._pageId,
        nodeId: this._nodeId
      });
    }
    reparentTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117 = this._mindMap["getNode"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116);
      return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117.getId() === this._nodeId || !this._getMeta() ? false : this._commandService["syncExecuteCommand"](ReparentMindMapNodeOperation.id, {
        unitId: this._board["getId"](),
        subUnitId: this._pageId,
        nodeId: this._nodeId,
        newParentNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117.getId()
      });
    }
    promote() {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120 = this.getParent();
      return !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.getParent()) && this._commandService["syncExecuteCommand"](PromoteMindMapNodeOperation.id, {
        unitId: this._board["getId"](),
        subUnitId: this._pageId,
        nodeId: this._nodeId
      });
    }
    detachAsMindMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122.id ?? generateRandomId(8);
      return !((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123 = this._getMeta()) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123.parentNodeId) || this._board["getElement"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124) ? false : this._commandService["syncExecuteCommand"](DetachMindMapNodeOperation.id, {
        unitId: this._board["getId"](),
        subUnitId: this._pageId,
        nodeId: this._nodeId,
        containerId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124,
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122.left,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122.top
      });
    }
    moveBefore(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128) {
      return this._moveRelativeTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128, "before");
    }
    moveAfter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130) {
      return this._moveRelativeTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130, "after");
    }
    setStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132) {
      return !this._getMeta() || Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132).every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 === undefined) ? false : this._commandService["syncExecuteCommand"](UpdateMindMapNodeOperation.id, {
        unitId: this._board["getId"](),
        subUnitId: this._pageId,
        nodeId: this._nodeId,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132
      });
    }
    setIncomingConnectorStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135;
      return !((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135 = this._getMeta()) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135.parentNodeId) || Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134).every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 === undefined) ? false : this._commandService["syncExecuteCommand"](UpdateMindMapIncomingConnectorOperation.id, {
        unitId: this._board["getId"](),
        subUnitId: this._pageId,
        nodeId: this._nodeId,
        style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134
      });
    }
    isCollapsed() {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138;
      return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138 = getMindMapNodeMeta(this._board["getElement"](this._nodeId))) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138.collapsed) ?? null;
    }
    setCollapsed(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141 = this.isCollapsed();
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141 === null ? false : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140 || this._commandService["syncExecuteCommand"](ToggleMindMapNodeCollapseOperation.id, {
        unitId: this._board["getId"](),
        subUnitId: this._pageId,
        nodeId: this._nodeId,
        collapsed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140
      });
    }
    _getMeta() {
      return getMindMapNodeMeta(this._board["getElement"](this._nodeId));
    }
    _moveRelativeTo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146 = this._getMeta(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147 = this._mindMap["getNode"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147 ? getMindMapNodeMeta(this._board["getElement"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147.getId())) : null;
      return !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146.parentNodeId) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147.getId() === this._nodeId || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148.parentNodeId) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146.parentNodeId ? false : this._commandService["syncExecuteCommand"](ReparentMindMapNodeOperation.id, {
        unitId: this._board["getId"](),
        subUnitId: this._pageId,
        nodeId: this._nodeId,
        newParentNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146.parentNodeId,
        referenceNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147.getId(),
        placement: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145
      });
    }
  },
  D = class extends FBoard {
    insertMindMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155 = this.getData().activePageId,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.id ?? generateRandomId(8);
      if (this.getElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156)) return null;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157 = P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.root);
      return this._injector["get"](ICommandService).syncExecuteCommand(InsertBoardMindMapOperation.id, {
        unitId: this.getId(),
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155,
        containerId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156,
        rootNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157.root["nodeId"],
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.left,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.top,
        blueprint: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157,
        structureKind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.structureKind,
        branchLineType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.branchLineType,
        insertIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154.insertIndex
      }) ? this._createMindMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155) : null;
    }
    getMindMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163 = this.getData().activePageId,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164 = this.getElement(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164 && getMindMapContainerMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164) ? this._createMindMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163) : null;
    }
    getMindMaps() {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168 = this.getData().activePageId;
      return this.findElements({
        includeHidden: true,
        includeLocked: true
      }).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621 => !!getMindMapContainerMeta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621)).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622 => this._createMindMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46168));
    }
    _createMindMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171) {
      return new T(this, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46170, this._injector["get"](ICommandService));
    }
  };
function O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189.type) === BoardElementType.Shape ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189.shapeData["shapeText"] : undefined;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190 == "object" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190 : undefined;
}
function k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193 ? {
    ...(typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.color == "string" ? {
      color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.color
    } : null),
    ...(typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.fontFamily == "string" ? {
      fontFamily: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.fontFamily
    } : null),
    ...(typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.fontSize == "number" ? {
      fontSize: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.fontSize
    } : null),
    ...(typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.bold == "boolean" ? {
      bold: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.bold
    } : null),
    ...(typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.italic == "boolean" ? {
      italic: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.italic
    } : null),
    ...(typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.underline == "boolean" ? {
      underline: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.underline
    } : null),
    ...(typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.strikethrough == "boolean" ? {
      strikethrough: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.strikethrough
    } : null),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.horizontalAlign === undefined ? null : {
      horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.horizontalAlign
    }),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.verticalAlign === undefined ? null : {
      verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.verticalAlign
    }),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.textFill === undefined ? null : {
      textFill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.textFill
    })
  } : {};
}
function A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195.dataModel;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196 != "object") return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.doc;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197 == "object" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197 : undefined;
}
function j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202) {
  if (Object.is(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202)) return true;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201 != "object" || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202 != "object") return false;
  if (Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201) || Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202)) return Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201) && Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201.length === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.length && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201.every((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175) => j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175]));
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3 = Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204);
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.length === var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3.length && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176 => Object.prototype["hasOwnProperty"].call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176) && j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176]));
}
function M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210) {
  if (Object.is(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210)) return true;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209 != "object" || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210 != "object") return false;
  if (Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209) || Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210)) return Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209) && Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210) && j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209;
  return Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210).every(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178]) => Object.prototype["hasOwnProperty"].call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177) && M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178));
}
function N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216) {
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215.text) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216.text) return false;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217 = A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216.documentData ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215.isRichText) === true && M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216.documentData) : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46215.isRichText) !== true;
}
function P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221) {
  function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179.id ?? generateRandomId(8),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180 ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179.connectorId ?? generateRandomId(8),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183 = normalizeBoardFacadeTextContent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179.text);
    return {
      nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181,
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182 ? {
        connectorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182
      } : {}),
      text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183.text,
      textData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183.documentData,
      side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179.side,
      collapsed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179.collapsed,
      children: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179.children ?? []).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623 => fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623, false))
    };
  }
  return {
    root: fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221, true)
  };
}
export { T as FBoardMindMap, E as FBoardMindMapNode };
export { D };
