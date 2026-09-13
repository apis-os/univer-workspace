import { AddBoardElementMutation, BOARD_MIND_MAP_CONNECTOR_ROLE, BOARD_MIND_MAP_CONTAINER_ROLE, BOARD_MIND_MAP_DECORATION_ROLE, BOARD_MIND_MAP_MODE_ID, BOARD_MIND_MAP_NODE_ROLE, BoardElementType, IBoardElementService, RemoveBoardElementMutation, SetBoardElementOrderMutation, UniverBoardsPlugin, createAddBoardElementsMutationInfos, createBoardConnectorElement, createBoardContainerElement, createBoardTextBoxShapeElement, createBoardTextBoxShapeTextData, mergeBoardRichTextDocument, offsetBoardConnectorGeometry, resolveBoardElementLocalTransformForParent, resolveBoardElementWorldBounds, resolveBoardElementWorldTransform, shapeTextToBoardDocumentTextStyle } from "@univerjs-pro/boards";
import { BooleanNumber, CommandType, DependentOn, Disposable, HorizontalAlign, ICommandService, IConfigService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, Tools, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createInternalEditorID, generateRandomId, merge, sequenceExecute } from "@univerjs/core";
import { ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTypeEnum } from "@univerjs-pro/engine-shape";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { Qe } from "./boards-mind-mind-map-default-child-order-key.js";
import { B, Ct, St, Tt, bt, fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F1, wt, xt, z } from "./internal-core-endo.js";
import { nt } from "./boards-mind-mind-map-branch-line-type-for-structure.js";
import { F, N } from "./boards-mind-mind-map-mode-id.js";
function Dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461081, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461083 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461081.children["map"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203) => Dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202, {
    orderKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.orderKey ?? Qe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203),
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.nodeId ?? generateRandomId(6),
    connectorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.connectorId ?? generateRandomId(6),
    parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082.id,
    side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.side ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082.side ?? "right",
    branchColorKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082.parentId === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.branchColorKey ?? "branch-" + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.orderKey ?? Qe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203)) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.branchColorKey ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082.branchColorKey
  }));
  return {
    blueprint: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461081,
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082.id,
    connectorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082.connectorId,
    parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082.parentId,
    orderKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082.orderKey,
    side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082.side,
    branchColorKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461081.branchColorKey ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461082.branchColorKey,
    children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461083
  };
}
function Ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461087, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461087), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461087.children["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204 => Ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46204, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461088));
}
function kt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461092) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461093 = St({
    parentNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091.parentId,
    text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091.blueprint["text"],
    textData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091.blueprint["textData"]
  });
  return {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091.id,
    parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091.parentId,
    side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091.side,
    collapsed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091.blueprint["collapsed"],
    width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461093.width,
    height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461093.height,
    children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091.children["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205 => kt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46205, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461092))
  };
}
function At(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461097) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461098 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461097.containerId ?? generateRandomId(6),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461099 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461097.rootNodeId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461097.blueprint["root"].nodeId ?? generateRandomId(6),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461100 = nt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461097.structureKind, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461097.branchLineType),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461101 = Dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461097.blueprint["root"], {
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461099,
      parentId: null,
      orderKey: "a0"
    }),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A38 = [];
  Ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461101, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206 => var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A38.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46206));
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461102 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F1(kt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461101, {
      rootNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461099,
      structureKind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461097.structureKind
    }), {
      rootLeft: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461097.left,
      rootTop: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461097.top,
      structureKind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461097.structureKind,
      horizontalGap: N.horizontalGap,
      siblingGap: N.siblingGap
    }),
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5912 = new Map(),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A39 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A38.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208 = St({
          parentNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207.parentId,
          text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207.blueprint["text"],
          textData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207.blueprint["textData"]
        }),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461102.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207.id) ?? {
          left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461097.left,
          top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461097.top
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209 = xt({
          id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207.id,
          scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461098,
          parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461098,
          parentNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207.parentId,
          orderKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207.orderKey,
          side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207.parentId ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207.side ?? "right" : undefined,
          text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207.blueprint["text"],
          textData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207.blueprint["textData"],
          left: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2.left,
          top: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2.top,
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208.width,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208.height,
          collapsed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207.blueprint["collapsed"],
          foreignAttributes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207.blueprint["foreignAttributes"],
          branchColorKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207.parentId ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207.branchColorKey : undefined
        });
      return var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5912.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209;
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461103 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A39[0],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461104 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A38.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214.parentId) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213;
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB25 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214.side ?? "right",
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB26 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46214.parentId + ":" + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB25;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213.set(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB26, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213.get(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB26) ?? 0) + 1), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46213;
    }, new Map()),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A40 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A38.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217.parentId).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218 => Ct({
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218.connectorId ?? generateRandomId(6),
      scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461098,
      parentNode: var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5912.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218.parentId),
      childNode: var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5912.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218.id),
      side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218.side ?? "right",
      branchLineType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461100,
      forceTrunk: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461104.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218.parentId + ":" + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218.side ?? "right")) ?? 0) > 1,
      treeRootTrunk: z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461097.structureKind) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218.parentId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461099,
      timelineRootStructureKind: B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461097.structureKind) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218.parentId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461099 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461097.structureKind : undefined,
      timelinePreviousAxisNode: B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461097.structureKind) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218.parentId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461099 ? (() => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A38.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469.parentId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461099).sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.orderKey["localeCompare"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.orderKey)),
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631.findIndex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218.id);
        return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 > 0 ? var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5912.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 - 1].id) : undefined;
      })() : undefined,
      timelineHorizontalRootNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461097.structureKind === "timeline-horizontal" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461099 : undefined,
      timelineVerticalRootNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461097.structureKind === "timeline-vertical" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461099 : undefined
    })),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461105 = F.containerPadding,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D82 = Math.min(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A39.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219.transform["left"] ?? 0)) - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461105,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D83 = Math.min(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A39.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46220.transform["top"] ?? 0)) - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461105,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB85 = Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A39.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221 => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221.transform["left"] ?? 0) + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46221.transform["width"] ?? F.nodeWidth))) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461105,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB86 = Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A39.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222 => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222.transform["top"] ?? 0) + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46222.transform["height"] ?? F.nodeHeight))) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461105,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461106 = bt({
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461098,
      rootNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461099,
      left: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D82,
      top: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D83,
      width: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB85 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D82,
      height: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB86 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D83,
      structureKind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461097.structureKind,
      branchLineType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461100
    }),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A41 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A39.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223 => wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461106)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461107 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A41.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461103.id) ?? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A41[0],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A42 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A40.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225 => wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461106));
  return {
    container: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461106,
    rootNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461107,
    nodes: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A41,
    connectors: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A42,
    elements: Tt({
      container: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461106,
      nodes: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A41,
      connectors: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A42,
      structureKind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461097.structureKind
    })
  };
}
export { At as createMindMapElementsFromBlueprint };
