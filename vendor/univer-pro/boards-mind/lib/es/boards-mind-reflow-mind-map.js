import { AddBoardElementMutation, BOARD_MIND_MAP_CONNECTOR_ROLE, BOARD_MIND_MAP_CONTAINER_ROLE, BOARD_MIND_MAP_DECORATION_ROLE, BOARD_MIND_MAP_MODE_ID, BOARD_MIND_MAP_NODE_ROLE, BoardElementType, IBoardElementService, RemoveBoardElementMutation, SetBoardElementOrderMutation, UniverBoardsPlugin, createAddBoardElementsMutationInfos, createBoardConnectorElement, createBoardContainerElement, createBoardTextBoxShapeElement, createBoardTextBoxShapeTextData, mergeBoardRichTextDocument, offsetBoardConnectorGeometry, resolveBoardElementLocalTransformForParent, resolveBoardElementWorldBounds, resolveBoardElementWorldTransform, shapeTextToBoardDocumentTextStyle } from "@univerjs-pro/boards";
import { BooleanNumber, CommandType, DependentOn, Disposable, HorizontalAlign, ICommandService, IConfigService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, Tools, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createInternalEditorID, generateRandomId, merge, sequenceExecute } from "@univerjs/core";
import { ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTypeEnum } from "@univerjs-pro/engine-shape";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { B, Cn, J, K, Nn, On, Pn, Qt, W, X, Xn, Xt, Y, Zt, an, bt, en, er, fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F2, jt, nn, on, q, rn, tn, un, z } from "./internal-core-endo.js";
import { U } from "./boards-mind-mind-map-connector-meta.js";
import { G } from "./boards-mind-mind-map-element.js";
import { H } from "./boards-mind-mind-map-node-meta.js";
import { nt } from "./boards-mind-mind-map-branch-line-type-for-structure.js";
import { P } from "./boards-mind-mind-map-mode-id.js";
import { V } from "./boards-mind-mind-map-container-meta.js";
import { Qn } from "./boards-mind-mind-map-layout-preview.js";
import { br, dr, fr, gr, hr, mr, pr, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73, vr, yr } from "./boards-mind-mind-map-node-operation.js";
import { Bt } from "./boards-mind-imind-map-clipboard.js";
import { cr, lr } from "./boards-mind-add-mind-map-child-operation.js";
function ln(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461352, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461353, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461354, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461355, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461356, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461357 = un(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461352)) {
  Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253.element);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254.structureScopeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461352 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254.parentNodeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461353 ? {
      data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253,
      meta: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254
    } : null;
  }).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257).forEach(({
    data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258,
    meta: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259
  }) => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260 = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259.childNodeId);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260 && (bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461354, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461355, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461356), bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260.data, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461354, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461355, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461356), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461357.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260.data["elementId"]) ?? []).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 => {
      bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461354, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461355, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461356);
    }), ln(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461351, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461352, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260.data["element"].id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461354 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260.meta["collapsed"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461355, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461356, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461357));
  });
}
function bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461441, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461442, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB43 = {
    ...Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461441.element),
    visible: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461442
  };
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461443.push({
    id: G.id,
    params: {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461441.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461441.subUnitId,
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461441.elementId,
      element: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB43,
      transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461441.transform
    }
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.unshift({
    id: G.id,
    params: {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461441.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461441.subUnitId,
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461441.elementId,
      element: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461441.element),
      transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461441.transform
    }
  });
}
function xn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461449, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461450, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461451, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461452) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461453;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461454 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461449.element);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461454.custom = {
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461454.custom ?? {}),
    mindmap: {
      ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461453 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461454.custom) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461453.mindmap) ?? {}),
      collapsed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461450
    }
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461451.push({
    id: G.id,
    params: {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461449.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461449.subUnitId,
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461449.elementId,
      element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461454,
      transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461449.transform
    }
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461452.unshift({
    id: G.id,
    params: {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461449.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461449.subUnitId,
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461449.elementId,
      element: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461449.element),
      transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461449.transform
    }
  });
}
function Ln(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461631, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461632, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461633) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461634 = Cn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461631, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461632, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461633),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461634.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367 => !!H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367.element)).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368.elementId));
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461634.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369 => {
    if (H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369.element)) return true;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369.element);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370 && var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370.parentNodeId) && var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370.childNodeId)) return true;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371 = W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369.element);
    return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371 && var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371.ownerNodeId);
  }).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375 => Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375.element));
}
function Rn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461639, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461640) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461640 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461640[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461639]) ?? generateRandomId(6);
}
function zn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461643, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461644) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461643.kind === "free") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461643;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461645 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461644.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461643.shapeId);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461645 ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461643,
    shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461645
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461643;
}
function Bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461649, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461650) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461652;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461653 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461649),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461654 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461649);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461654.id = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461650.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461654.parentId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461650.scopeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461654.transform = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461654.transform,
    left: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461654.transform["left"] ?? 0) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461650.deltaX,
    top: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461654.transform["top"] ?? 0) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461650.deltaY
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461654.custom = {
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461654.custom ?? {}),
    structured: {
      ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461651 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461654.custom) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461651.structured) ?? {}),
      modeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461653 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461653.modeId,
      semanticRole: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461653 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461653.semanticRole,
      structureScopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461650.scopeId
    },
    mindmap: {
      ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461652 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461654.custom) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461652.mindmap) ?? {}),
      parentNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461650.parentNodeId,
      orderKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461650.orderKey,
      collapsed: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461653 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461653.collapsed) ?? false,
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461650.parentNodeId === null ? null : {
        side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461650.side ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461653 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461653.side) ?? "right"
      })
    }
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461650.parentNodeId === null && delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461654.custom["mindmap"].side, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461654;
}
function Vn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461661, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461662) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461663;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461664 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461661),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461665 = offsetBoardConnectorGeometry(Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461661), {
      x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461662.deltaX,
      y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461662.deltaY
    });
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461665.id = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461662.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461665.parentId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461662.scopeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461665.transform = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461665.transform,
    left: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461665.transform["left"] ?? 0) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461662.deltaX,
    top: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461665.transform["top"] ?? 0) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461662.deltaY
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461665.connectorData = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461665.connectorData,
    start: zn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461665.connectorData["start"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461662.idMap),
    end: zn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461665.connectorData["end"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461662.idMap)
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461665.custom = {
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461665.custom ?? {}),
    structured: {
      ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461663 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461665.custom) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461663.structured) ?? {}),
      modeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461664 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461664.modeId,
      semanticRole: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461664 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461664.semanticRole,
      structureScopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461662.scopeId
    },
    mindmap: {
      managed: true,
      parentNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461662.parentNodeId,
      childNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461662.childNodeId
    }
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461665;
}
function Hn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461671, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461672) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461673, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461675 = W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461671),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461671);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676.id = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461672.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676.parentId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461672.scopeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676.transform = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676.transform,
    left: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676.transform["left"] ?? 0) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461672.deltaX,
    top: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676.transform["top"] ?? 0) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461672.deltaY
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676.custom = {
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676.custom ?? {}),
    structured: {
      ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461673 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676.custom) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461673.structured) ?? {}),
      modeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461675 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461675.modeId,
      semanticRole: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461675 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461675.semanticRole,
      structureScopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461672.scopeId
    },
    mindmap: {
      ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676.custom) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674.mindmap) ?? {}),
      ownerNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461672.ownerNodeId
    }
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676;
}
function tr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461783, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461783 === undefined || Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461783) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461783 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784.min && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461783 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784.max;
}
function nr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788) {
  if (!Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.left) || !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.top) || !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.width) || !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.height) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.width <= 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.height <= 0 || !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788 < 0) return null;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D120 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.width - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788 * 2,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D121 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.height - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788 * 2;
  return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D120 > 0 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D121 > 0 ? {
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788,
    width: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D120,
    height: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D121
  } : null;
}
function rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461792) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461792.width <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791.width && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461792.height <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791.height;
}
function ir(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461797) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461798 = q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796.structureKind ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795.layout["structureKind"]);
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795.layout,
    direction: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796.direction ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461798 === "mindmap-horizontal" ? "both" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795.layout["direction"]),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796.structureKind === undefined ? null : {
      structureKind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796.structureKind
    }),
    branchLineType: nt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461798, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796.branchLineType ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795.layout["branchLineType"]),
    horizontalGap: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461797 ? P.horizontalGap["min"] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796.horizontalGap ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795.layout["horizontalGap"],
    siblingGap: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461797 ? P.siblingGap["min"] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796.siblingGap ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795.layout["siblingGap"],
    branchGap: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461797 ? P.branchGap["min"] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796.branchGap ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795.layout["branchGap"]
  };
}
function ar(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461803, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461804, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461805) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461806;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461807 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461803[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461804.scopeId],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461808 = V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461807 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461807.element);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461807 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461808) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461809 = ir(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461808, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461804, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461805),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461810 = q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461809.structureKind),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461811 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461809.direction,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB51 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461803
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461812 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461807.element);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461812.custom = {
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461812.custom ?? {}),
    mindmap: {
      ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461806 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461812.custom) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461806.mindmap) ?? {}),
      layout: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461809,
      structureRevision: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461808.structureRevision ?? 0) + 1
    }
  }, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB51[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461804.scopeId] = X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461807, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461812);
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A82 = Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461803).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472.element);
      return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473.structureScopeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461804.scopeId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473.parentNodeId !== null ? {
        data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472,
        meta: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46473
      } : null;
    }).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46476),
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5916 = new Map();
  var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A82.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477 => {
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5916.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477.meta["parentNodeId"], [...(var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5916.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477.meta["parentNodeId"]) ?? []), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46477]);
  }), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5916.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46479.sort(Qt));
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5917 = new Map(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461813 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481) => {
      (var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5916.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46480) ?? []).forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649) => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461811 === "left" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461811 === "right" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461811 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648.meta["parentNodeId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461808.rootNodeId ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461810 === "mindmap-horizontal" ? fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649, "right", "left") : en(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461810, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648.meta["side"]) : tn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46481, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461810);
        var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5917.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648.data["elementId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461813(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648.data["elementId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650);
      });
    };
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461813(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461808.rootNodeId), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A82.forEach(({
    data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484,
    meta: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485
  }) => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486 = On(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484, {
      scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461804.scopeId,
      parentNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485.parentNodeId,
      orderKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485.orderKey,
      side: var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5917.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484.elementId) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46485.side ?? "right"
    });
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB51[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484.elementId] = X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46484, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46486);
  }), Qn(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB51, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461804.scopeId);
}
function or(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461825, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461826, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461827) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461828 = resolveBoardElementWorldBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461825, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461826),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461829 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461825[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461826];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461828 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461829) return null;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D124 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461827.left + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461827.width - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461828.width) / 2 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461828.left,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D125 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461827.top + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461827.height - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461828.height) / 2 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461828.top,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830 = Pn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461829, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D124, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D125);
  return {
    elementData: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461825,
      [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461826]: X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461829, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830)
    },
    bounds: {
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461828.left + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D124,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461828.top + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D125,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461828.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461828.height
    }
  };
}
function sr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461837, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461838, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461839) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A84 = [],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A85 = [];
  return Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461837).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491;
    if (!Nn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461839)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461838[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490.elementId]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491.element;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492 || on(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490.element, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493 = Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492);
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A84.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493.redoMutation), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A85.unshift(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493.undoMutation);
  }), {
    redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A84,
    undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A85
  };
}
function Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462111, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462112 = null, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462113 = 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462114) {
  return {
    success: false,
    fits: false,
    bounds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462112,
    scale: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462113,
    reason: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462111,
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462114 ? {
      requiredBounds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462114
    } : null)
  };
}
function xr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462119, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462121) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462122 = ar(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462119, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120, false),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462123 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462122 && resolveBoardElementWorldBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462122, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120.scopeId);
  return (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462123 || !rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462121, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462123)) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120.compact !== false && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462122 = ar(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462119, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120, true), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462123 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462122 && resolveBoardElementWorldBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462122, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462120.scopeId)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462122 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462123 ? {
    elementData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462122,
    bounds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462123
  } : null;
}
function Sr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462129) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462130;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462131 = V((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462130 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462129.preview[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462129.params["scopeId"]]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462130.element);
  if (!B(q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462131 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462131.layout["structureKind"]))) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462132 = er({
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462129.params["unitId"],
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462129.params["subUnitId"],
    scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462129.params["scopeId"],
    elementData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462129.elementData,
    elementOrder: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462129.elementOrder
  });
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462132 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462129.mutations["redoMutations"].push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462132.redoMutation), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462129.mutations["undoMutations"].unshift(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462132.undoMutation));
}
const Cr = {
    id: "board.command.mind-map.reflow",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462137, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462139;
      if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138.unitId) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138.subUnitId || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138.scopeId) return Q("invalid-options");
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D132 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138.padding ?? 0,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462140 = nr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138.bounds, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D132);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462140 || !tr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138.horizontalGap, P.horizontalGap) || !tr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138.siblingGap, P.siblingGap) || !tr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138.branchGap, P.branchGap)) return Q("invalid-options");
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462141 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462137.get(IBoardElementService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462142 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462141.getElementData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138.subUnitId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462143 = resolveBoardElementWorldBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462142, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138.scopeId);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462143 || !V((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462139 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462142[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138.scopeId]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462139.element)) return Q("mind-map-missing", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462143);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462144 = xr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462142, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462140);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462144) return Q("mind-map-missing", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462143);
      if (!rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462140, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462144.bounds)) return Q("bounds-too-small", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462143, Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462140.width / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462144.bounds["width"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462140.height / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462144.bounds["height"]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462144.bounds);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462145 = or(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462144.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138.scopeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462140);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462145) return Q("mind-map-missing", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462143);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462146 = sr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462142, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462145.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138.scopeId);
      return Sr({
        elementData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462142,
        elementOrder: [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462141.getElementOrder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138.subUnitId)],
        mutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462146,
        params: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138,
        preview: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462145.elementData
      }), J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462137, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462138.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462146) ? {
        success: true,
        fits: true,
        bounds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462145.bounds,
        scale: 1
      } : Q("execution-failed", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462143);
    }
  },
  wr = {
    id: "board.operation.mind-map.change-branch-line-type",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462157, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462158) => !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462158 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462158.unitId) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462158.subUnitId || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462158.scopeId || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462158.branchLineType ? false : br.handler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462157, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462158.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462158.subUnitId,
      scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462158.scopeId,
      branchLineType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462158.branchLineType
    })
  },
  Tr = {
    id: "board.operation.mind-map.copy-node",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462159, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462160) => {
      if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462160 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462160.unitId) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462160.subUnitId || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462160.nodeId) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462161 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462159.get(IBoardElementService).getElementData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462160.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462160.subUnitId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462162 = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462161, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462160.nodeId);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462162) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462163 = Ln(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462161, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462162.meta["structureScopeId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462160.nodeId);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462163.length ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462159.get(Bt).setPayload({
        rootNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462160.nodeId,
        elements: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462163
      }), true) : false;
    }
  },
  Er = {
    id: "board.operation.mind-map.paste-node",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462169, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462170) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462171, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462172, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462173, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462174, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462175;
      if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462170 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462170.unitId) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462170.subUnitId || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462170.targetNodeId) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462176 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462169.get(Bt).getPayload();
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462176) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462177 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462169.get(IBoardElementService).getElementData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462170.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462170.subUnitId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462178 = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462177, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462170.targetNodeId);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462178) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462179 = new Map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462176.elements["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516])).get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462176.rootNodeId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462180 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462179);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462179 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462180) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462181 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462176.elements["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517 => !!H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517)),
        var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5920 = new Map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462181.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518.id, Rn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462170.idMap)]));
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462176.elements["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519 => {
        (U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519) || W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519)) && var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5920.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519.id, Rn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46519.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462170.idMap));
      });
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462182 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5920.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462176.rootNodeId);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462182) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462183 = Xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462177, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462178.meta["structureScopeId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462170.targetNodeId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462184 = V((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462171 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462177[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462178.meta["structureScopeId"]]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462171.element),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462185 = nn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462178.meta, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462180.side),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462186 = rn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462178.data["element"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462185, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462183.length),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D134 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462186.left - (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462179.transform["left"] ?? 0),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D135 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462186.top - (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462179.transform["top"] ?? 0),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462187 = Bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462179, {
          id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462182,
          scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462178.meta["structureScopeId"],
          parentNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462170.targetNodeId,
          orderKey: Zt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462183),
          side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462185,
          deltaX: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D134,
          deltaY: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D135
        }),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462188 = jt({
          nodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462182,
          connectorId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462170.incomingConnectorId ?? generateRandomId(6),
          scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462178.meta["structureScopeId"],
          parentNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462178.data["element"],
          orderKey: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462172 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462187)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462172.orderKey) ?? Zt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462183),
          side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462185,
          branchLineType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462184 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462173 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462184.layout) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462173.branchLineType,
          treeRootTrunk: z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462184 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462174 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462184.layout) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462174.structureKind) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462178.meta["parentNodeId"] === null,
          timelineRootStructureKind: B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462184 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462175 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462184.layout) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462175.structureKind) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462178.meta["parentNodeId"] === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462184.layout["structureKind"] : undefined,
          left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462187.transform["left"] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462186.left,
          top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462187.transform["top"] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462186.top
        }).connector,
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A114 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462181.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46521.id !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462176.rootNodeId).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522 => {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46523 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46524 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5920.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522.id),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46523 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46523.parentNodeId ? var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5920.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46523.parentNodeId) : undefined;
          return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46523 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46524 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525 ? null : Bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46522, {
            id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46524,
            scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462178.meta["structureScopeId"],
            parentNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46525,
            orderKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46523.orderKey,
            side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46523.side,
            deltaX: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D134,
            deltaY: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D135
          });
        }).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46530),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A115 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462176.elements["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531 => {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531);
          if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532 || !("connectorData" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531)) return null;
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5920.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531.id),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5920.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532.parentNodeId),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46535 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5920.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46532.childNodeId);
          return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46535 ? null : Vn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46531, {
            id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46533,
            scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462178.meta["structureScopeId"],
            parentNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46534,
            childNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46535,
            idMap: var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5920,
            deltaX: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D134,
            deltaY: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D135
          });
        }).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46541),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A116 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462176.elements["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542 => {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543 = W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5920.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542.id),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543 ? var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5920.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543.ownerNodeId) : undefined;
          return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46543 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545 ? null : Hn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46542, {
            id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544,
            scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462178.meta["structureScopeId"],
            ownerNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46545,
            deltaX: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D134,
            deltaY: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D135
          });
        }).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46550);
      return J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462169, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462170.unitId, an({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462170.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462170.subUnitId,
        elements: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462187, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A114, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462188, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A115, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A116]
      }));
    }
  },
  Dr = {
    id: "board.operation.mind-map.paste-as-new",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462209, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210) => {
      if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210.unitId) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210.subUnitId || !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210.left) || !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210.top)) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462211 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462209.get(Bt).getPayload();
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462211) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462212 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462209.get(IBoardElementService).getElementData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210.subUnitId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462213 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210.containerId ?? generateRandomId(6);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462212[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462213]) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214 = new Map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462211.elements["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46551])).get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462211.rootNodeId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462215 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462215) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462216 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462211.elements["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552 => !!H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46552)),
        var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5922 = new Map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462216.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553.id, Rn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46553.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210.idMap)]));
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462211.elements["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554 => {
        (U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554) || W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554)) && var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5922.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554.id, Rn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46554.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210.idMap));
      });
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462217 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5922.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462211.rootNodeId);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462217) return false;
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D138 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210.left - (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214.transform["left"] ?? 0),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D139 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210.top - (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214.transform["top"] ?? 0),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462218 = Bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462214, {
          id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462217,
          scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462213,
          parentNodeId: null,
          orderKey: "a0",
          deltaX: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D138,
          deltaY: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D139
        }),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A120 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462216.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46556.id !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462211.rootNodeId).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557 => {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5922.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557.id),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558.parentNodeId ? var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5922.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558.parentNodeId) : undefined;
          return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560 ? null : Bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46557, {
            id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46559,
            scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462213,
            parentNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560,
            orderKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558.orderKey,
            side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46558.side,
            deltaX: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D138,
            deltaY: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D139
          });
        }).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46565 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46565),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A121 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462211.elements["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566 => {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566);
          if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567 || !("connectorData" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566)) return null;
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5922.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566.id),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46569 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5922.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.parentNodeId),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5922.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567.childNodeId);
          return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46569 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570 ? null : Vn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566, {
            id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568,
            scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462213,
            parentNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46569,
            childNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570,
            idMap: var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5922,
            deltaX: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D138,
            deltaY: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D139
          });
        }).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46576 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46576),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A122 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462211.elements["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46577 => {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578 = W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46577),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5922.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46577.id),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578 ? var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5922.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578.ownerNodeId) : undefined;
          return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580 ? null : Hn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46577, {
            id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579,
            scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462213,
            ownerNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580,
            deltaX: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D138,
            deltaY: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D139
          });
        }).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A123 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462218, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A120],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462219 = bt({
          id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462213,
          rootNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462217,
          ...Xn(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A123)
        });
      return J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462209, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210.unitId, an({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462210.subUnitId,
        elements: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462219, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A123, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A121, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A122]
      }));
    }
  },
  Or = {
    id: "board.operation.mind-map.toggle-collapse",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462231, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462232) => {
      if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462232 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462232.unitId) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462232.subUnitId || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462232.nodeId) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462233 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462231.get(IBoardElementService).getElementData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462232.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462232.subUnitId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462234 = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462233, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462232.nodeId);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462234) return false;
      let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A12 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462232.collapsed ?? !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462234.meta["collapsed"],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A128 = [],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A129 = [];
      return xn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462234.data, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A12, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A128, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A129), ln(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462233, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462234.meta["structureScopeId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462232.nodeId, !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A12, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A128, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A129), J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462231, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462232.unitId, {
        redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A128,
        undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A129
      });
    }
  },
  kr = [cr, lr, dr, fr, pr, mr, hr, gr, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73, vr, yr, Cr, wr, br, Tr, Er, Dr, Or],
  Ar = /<!\s*(doctype|entity)\b/i,
  jr = new Set(["text", "title"]);
export { Cr as ReflowMindMapCommand, wr as ChangeMindMapBranchLineTypeOperation, Tr as CopyMindMapNodeOperation, Er as PasteMindMapNodeOperation, Dr as PasteMindMapAsNewMindMapOperation, Or as ToggleMindMapNodeCollapseOperation };
export { kr, jr, Ar };
