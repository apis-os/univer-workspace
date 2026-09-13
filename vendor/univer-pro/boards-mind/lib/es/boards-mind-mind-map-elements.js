import { AddBoardElementMutation, BOARD_MIND_MAP_CONNECTOR_ROLE, BOARD_MIND_MAP_CONTAINER_ROLE, BOARD_MIND_MAP_DECORATION_ROLE, BOARD_MIND_MAP_MODE_ID, BOARD_MIND_MAP_NODE_ROLE, BoardElementType, IBoardElementService, RemoveBoardElementMutation, SetBoardElementOrderMutation, UniverBoardsPlugin, createAddBoardElementsMutationInfos, createBoardConnectorElement, createBoardContainerElement, createBoardTextBoxShapeElement, createBoardTextBoxShapeTextData, mergeBoardRichTextDocument, offsetBoardConnectorGeometry, resolveBoardElementLocalTransformForParent, resolveBoardElementWorldBounds, resolveBoardElementWorldTransform, shapeTextToBoardDocumentTextStyle } from "@univerjs-pro/boards";
import { BooleanNumber, CommandType, DependentOn, Disposable, HorizontalAlign, ICommandService, IConfigService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, Tools, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createInternalEditorID, generateRandomId, merge, sequenceExecute } from "@univerjs/core";
import { ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTypeEnum } from "@univerjs-pro/engine-shape";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { nt } from "./boards-mind-mind-map-branch-line-type-for-structure.js";
import { B, Ct, St, Tt, bt, fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F1, wt, xt, z } from "./internal-core-endo.js";
import { F, N } from "./boards-mind-mind-map-mode-id.js";
import { Qe } from "./boards-mind-mind-map-default-child-order-key.js";
import { H } from "./boards-mind-mind-map-node-meta.js";
function vt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46983, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46983 === "timeline-horizontal" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984 % 2 == 0 ? "top" : "bottom" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46983 === "timeline-vertical" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984 % 2 == 0 ? "left" : "right";
}
function Et(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461054 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.containerId ?? generateRandomId(6),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.rootNodeId ?? generateRandomId(6),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.children ?? [],
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB83 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.rootText ?? "Add\x20text",
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461056 = nt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.structureKind, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.branchLineType),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057 = St({
      parentNodeId: null,
      text: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB83
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461058 = F.containerPadding,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A24.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184) => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183,
      nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183.nodeId ?? generateRandomId(6),
      connectorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183.connectorId ?? generateRandomId(6),
      orderKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183.orderKey ?? Qe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184),
      side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183.side ?? vt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.structureKind, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184),
      text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183.text ?? "Add\x20text"
    })),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461059 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F1({
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055,
      parentId: null,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057.height,
      children: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185 => ({
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185.nodeId,
        parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055,
        side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185.side,
        collapsed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185.collapsed,
        ...St({
          parentNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055,
          text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185.text,
          textData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185.textData
        }),
        children: []
      }))
    }, {
      rootLeft: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.left,
      rootTop: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.top,
      structureKind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.structureKind,
      horizontalGap: N.horizontalGap,
      siblingGap: N.siblingGap
    }),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB37 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461059.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055) ?? {
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.left,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.top
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461060 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187) => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46187.side] += 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186), {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461061 = z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.structureKind),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062 = B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.structureKind) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.structureKind : undefined,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461063 = xt({
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055,
      scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461054,
      parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461054,
      parentNodeId: null,
      orderKey: "a0",
      text: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB83,
      left: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB37.left,
      top: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB37.top,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057.height
    }),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188 => {
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461059.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188.nodeId) ?? {
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.left,
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.top
      };
      return xt({
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188.nodeId,
        scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461054,
        parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461054,
        parentNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055,
        orderKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188.orderKey,
        side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188.side,
        text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188.text,
        textData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188.textData,
        left: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.left,
        top: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB.top,
        ...St({
          parentNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055,
          text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188.text,
          textData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188.textData
        }),
        collapsed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188.collapsed,
        foreignAttributes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188.foreignAttributes,
        branchColorKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188.branchColorKey ?? "branch-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188.orderKey
      });
    }),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A27 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192;
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB19 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46192.side) ?? "right";
      return Ct({
        id: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A25[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191].connectorId,
        scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461054,
        parentNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461063,
        childNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46190,
        side: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB19,
        branchLineType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461056,
        forceTrunk: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461060[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB19] > 1,
        treeRootTrunk: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461061,
        timelineRootStructureKind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062,
        timelinePreviousAxisNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46191 - 1] : undefined,
        timelineHorizontalRootNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.structureKind === "timeline-horizontal" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055 : undefined,
        timelineVerticalRootNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.structureKind === "timeline-vertical" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055 : undefined
      });
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461064 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461063, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26].reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197) => {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197.transform["left"] ?? 0,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D23 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197.transform["top"] ?? 0,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB21 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197.transform["width"] ?? 0),
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB22 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D23 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197.transform["height"] ?? 0);
      return {
        left: Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.left, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22),
        top: Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.top, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D23),
        right: Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.right, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB21),
        bottom: Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46196.bottom, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB22)
      };
    }, {
      left: 1 / 0,
      top: 1 / 0,
      right: -1 / 0,
      bottom: -1 / 0
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461065 = bt({
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461054,
      rootNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055,
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461064.left - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461058,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461064.top - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461058,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461064.right - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461064.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461058 * 2,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461064.bottom - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461064.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461058 * 2,
      structureKind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.structureKind,
      branchLineType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461056
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461066 = wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461063, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461065),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A28 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A26.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200 => wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46200, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461065)),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A27.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201 => wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461065)),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A30 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461066, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A28];
  return {
    container: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461065,
    rootNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461066,
    nodes: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A30,
    connectors: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29,
    elements: Tt({
      container: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461065,
      nodes: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A30,
      connectors: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29,
      structureKind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.structureKind
    })
  };
}
export { Et as createMindMapElements };
