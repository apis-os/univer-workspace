import { AddBoardElementMutation, BOARD_MIND_MAP_CONNECTOR_ROLE, BOARD_MIND_MAP_CONTAINER_ROLE, BOARD_MIND_MAP_DECORATION_ROLE, BOARD_MIND_MAP_MODE_ID, BOARD_MIND_MAP_NODE_ROLE, BoardElementType, IBoardElementService, RemoveBoardElementMutation, SetBoardElementOrderMutation, UniverBoardsPlugin, createAddBoardElementsMutationInfos, createBoardConnectorElement, createBoardContainerElement, createBoardTextBoxShapeElement, createBoardTextBoxShapeTextData, mergeBoardRichTextDocument, offsetBoardConnectorGeometry, resolveBoardElementLocalTransformForParent, resolveBoardElementWorldBounds, resolveBoardElementWorldTransform, shapeTextToBoardDocumentTextStyle } from "@univerjs-pro/boards";
import { BooleanNumber, CommandType, DependentOn, Disposable, HorizontalAlign, ICommandService, IConfigService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, Tools, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createInternalEditorID, generateRandomId, merge, sequenceExecute } from "@univerjs/core";
import { ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTypeEnum } from "@univerjs-pro/engine-shape";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { B, J, K, Xt, Z, an, fn, fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig11DC, jt, nn, q, qn, rn, ur, wn, z } from "./internal-core-endo.js";
import { V } from "./boards-mind-mind-map-container-meta.js";
function cn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461313, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461314) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461315, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461316, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461317;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461318 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461313.get(IBoardElementService).getElementData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461314.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461314.subUnitId),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461319 = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461318, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461314.parentNodeId);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461319) return false;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461320 = Xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461318, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461319.meta["structureScopeId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461314.parentNodeId),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461321 = V((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461315 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461318[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461319.meta["structureScopeId"]]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461315.element),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461322 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461321 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461321.rootNodeId,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461323 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461322 ? resolveBoardElementWorldBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461318, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461322) : null,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461324 = q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461321 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461316 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461321.layout) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461316.structureKind),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461325 = nn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461319.meta, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461314.side, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461324, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461320.length),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326 = rn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461319.data["element"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461325, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461320.length),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461327 = wn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461318, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461319.meta["structureScopeId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461314.parentNodeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461314.nodeId ?? "", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461314.orderKey, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461314.referenceNodeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461314.placement),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461328 = jt({
      nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461314.nodeId,
      connectorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461314.connectorId,
      scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461319.meta["structureScopeId"],
      parentNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461319.data["element"],
      orderKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461327,
      side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461325,
      text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461314.text,
      textData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461314.textData,
      branchColorKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461319.meta["parentNodeId"] === null ? "branch-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461327 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461319.meta["branchColorKey"],
      branchLineType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461321 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461317 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461321.layout) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461317.branchLineType,
      treeRootTrunk: z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461324) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461319.meta["parentNodeId"] === null,
      timelineRootStructureKind: B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461324) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461319.meta["parentNodeId"] === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461324 : undefined,
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326.left,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461326.top
    });
  mn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461328, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461314, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461319, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461320, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461318);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329 = an({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461314.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461314.subUnitId,
      elements: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461328.elements
    }),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB41 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461318
    };
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461328.elements["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251 => {
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB41[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251.id] = qn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461314.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461314.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251);
  });
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461330 = Z(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB41, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461319.meta["structureScopeId"]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461331 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461323 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461322 ? fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig11DC(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB41, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461319.meta["structureScopeId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461322, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461323) : null;
  return J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461313, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461314.unitId, {
    redoMutations: [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.redoMutations, ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461330 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461330.redoMutations) ?? []), ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461331 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461331.redoMutations) ?? [])],
    undoMutations: [...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461331 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461331.undoMutations) ?? []), ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461330 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461330.undoMutations) ?? []), ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461329.undoMutations]
  });
}
function pn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461386, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461387) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461388;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461389 = ur(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461386, {
    nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461386.data["elementId"],
    text: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461388 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385.shapeData["shapeText"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461388.text) ?? "",
    textData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461387
  });
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461389 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461389.type !== BoardElementType.Shape ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385 : {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385,
    shapeData: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461389.shapeData)
  };
}
function mn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461395, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461396, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461397, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461398, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461399) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461400 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461396.referenceNodeId ? K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461399, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461396.referenceNodeId) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461397.meta["parentNodeId"] === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461398[0] ?? null : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461397;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461400) return;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461395.node["shapeData"] = pn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461395.node, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461400, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461396.textData).shapeData;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461401 = fn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461399, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461400.meta["structureScopeId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461400.data["elementId"]);
  (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461401 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461401.element["type"]) === BoardElementType.Connector && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461395.connector["connectorData"].style = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461401.element["connectorData"].style ?? {}));
}
const cr = {
    id: "board.operation.mind-map.add-child",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461843, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461844) => !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461844 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461844.unitId) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461844.subUnitId || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461844.parentNodeId ? false : cn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461843, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461844)
  },
  lr = {
    id: "board.operation.mind-map.add-sibling",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461845, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846) => {
      if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846.unitId) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846.subUnitId || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846.nodeId) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461847 = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461845.get(IBoardElementService).getElementData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846.subUnitId), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846.nodeId);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461847 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461847.meta["parentNodeId"] ? cn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461845, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846.subUnitId,
        parentNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461847.meta["parentNodeId"],
        nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846.siblingNodeId,
        connectorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846.connectorId,
        text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846.text,
        textData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846.textData,
        side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461847.meta["side"],
        referenceNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846.nodeId,
        placement: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846.placement
      }) : false;
    }
  };
export { cr as AddMindMapChildOperation, lr as AddMindMapSiblingOperation };
