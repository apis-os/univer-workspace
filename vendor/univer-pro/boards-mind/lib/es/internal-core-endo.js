import { AddBoardElementMutation, BOARD_MIND_MAP_CONNECTOR_ROLE, BOARD_MIND_MAP_CONTAINER_ROLE, BOARD_MIND_MAP_DECORATION_ROLE, BOARD_MIND_MAP_MODE_ID, BOARD_MIND_MAP_NODE_ROLE, BoardElementType, IBoardElementService, RemoveBoardElementMutation, SetBoardElementOrderMutation, UniverBoardsPlugin, createAddBoardElementsMutationInfos, createBoardConnectorElement, createBoardContainerElement, createBoardTextBoxShapeElement, createBoardTextBoxShapeTextData, mergeBoardRichTextDocument, offsetBoardConnectorGeometry, resolveBoardElementLocalTransformForParent, resolveBoardElementWorldBounds, resolveBoardElementWorldTransform, shapeTextToBoardDocumentTextStyle } from "@univerjs-pro/boards";
import { BooleanNumber, CommandType, DependentOn, Disposable, HorizontalAlign, ICommandService, IConfigService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, Tools, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createInternalEditorID, generateRandomId, merge, sequenceExecute } from "@univerjs/core";
import { ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTypeEnum } from "@univerjs-pro/engine-shape";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { A, Ce, F, M, N, Se, be, j, k, ye } from "./boards-mind-mind-map-mode-id.js";
import { nt } from "./boards-mind-mind-map-branch-line-type-for-structure.js";
import { H } from "./boards-mind-mind-map-node-meta.js";
import { Xe } from "./boards-mind-compare-mind-map-order-key.js";
import { U } from "./boards-mind-mind-map-connector-meta.js";
import { G } from "./boards-mind-mind-map-element.js";
import { V } from "./boards-mind-mind-map-container-meta.js";
import { Qn } from "./boards-mind-mind-map-layout-preview.js";
import { Ge } from "./boards-mind-mind-map-node-host-size.js";
import { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462371, zt } from "./boards-mind-plugin.js";
function I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46627, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46629 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46627.transform,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D26 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46629.left ?? 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D27 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46629.top ?? 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46629.width ?? 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46629.height ?? 0;
  return {
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628 === "right" ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D26 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628 === "left" ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D26 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D26 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28 / 2,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628 === "bottom" ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D27 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46628 === "top" ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D27 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D27 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29 / 2
  };
}
function we(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635) {
  return {
    kind: "shapeSite",
    shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46633,
    connectionSiteId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634 === "top" ? 0 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634 === "right" ? 1 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46634 === "bottom" ? 2 : 3,
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635 ? {
      fallbackPoint: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46635
    } : null)
  };
}
function Te(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639.parentNode["transform"].left ?? 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639.parentNode["transform"].width ?? 0,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639.branchGap ?? N.branchGap;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46639.side === "right" ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46640;
}
function Ee(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46643) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46643.parentNode["transform"].top ?? 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D39 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46643.parentNode["transform"].height ?? 0,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46643.branchGap ?? N.branchGap;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46643.side === "bottom" ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D39 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46644;
}
function L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46647) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46647 === "left" ? {
    startSide: "left",
    endSide: "right"
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46647 === "top" ? {
    startSide: "top",
    endSide: "bottom"
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46647 === "bottom" ? {
    startSide: "bottom",
    endSide: "top"
  } : {
    startSide: "right",
    endSide: "left"
  };
}
function De(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649) {
  let {
      startSide: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46650,
      endSide: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46651
    } = L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649.side),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652 = I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649.parentNode, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46650),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653 = I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649.childNode, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46651),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654 = Te(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46655 = Ee(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB31 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649.idPrefix ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649.parentNode["id"] + "-" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649.childNode["id"];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649.side === "top" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649.side === "bottom" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652.x === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653.x && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649.forceTrunk ? [] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652.x === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653.x ? [{
    id: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB31 + "-route-0",
    kind: "manual",
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652.x,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46655
  }] : [{
    id: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB31 + "-route-0",
    kind: "manual",
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652.x,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46655
  }, {
    id: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB31 + "-route-1",
    kind: "manual",
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653.x,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46655
  }] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652.y === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653.y && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46649.forceTrunk ? [] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652.y === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653.y ? [{
    id: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB31 + "-route-0",
    kind: "manual",
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652.y
  }] : [{
    id: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB31 + "-route-0",
    kind: "manual",
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46652.y
  }, {
    id: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB31 + "-route-1",
    kind: "manual",
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46654,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46653.y
  }];
}
function Oe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46663) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665;
  let {
      startSide: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666,
      endSide: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667
    } = L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46663.side),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46668 = I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46663.parentNode, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46666),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46669 = I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46663.childNode, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46667),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46668, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46663.routePoints, ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46663.curveData) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46664.controls) ?? []), ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46663.curveData) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46665.anchors) ?? []), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46669],
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D42 = Math.min(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693.x)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D43 = Math.min(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.y)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D44 = Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695.x)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D45 = Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696.y));
  return {
    left: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D42,
    top: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D43,
    width: Math.max(1, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D44 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D42),
    height: Math.max(1, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D45 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D43),
    rotation: 0
  };
}
function ke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D50 = Math.min(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697.x)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D51 = Math.min(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698.y)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D52 = Math.max(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699.x)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53 = Math.max(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46677.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100.y));
  return {
    left: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D50,
    top: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D51,
    width: Math.max(1, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D52 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D50),
    height: Math.max(1, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D51),
    rotation: 0
  };
}
function R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46679 ?? N.branchLineType;
}
function Ae(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46681) {
  let {
      startSide: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682,
      endSide: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683
    } = L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46681.side),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684 = I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46681.parentNode, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46682),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685 = I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46681.childNode, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46683),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46681.side === "left" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46681.side === "right",
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58 = Math.abs(var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684.x : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684.y),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59 = Math.max(40, Math.min(72, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58 * 0.24)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D60 = Math.max(48, Math.min(96, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58 * 0.35)),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A ? {
      x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684.x + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46681.side === "right" ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59 : -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59),
      y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684.y + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684.y) * 0.55
    } : {
      x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684.x + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684.x) * 0.55,
      y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46684.y + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46681.side === "bottom" ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59 : -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D59)
    },
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A ? {
      x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685.x + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46681.side === "right" ? -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D60 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D60),
      y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685.y
    } : {
      x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685.x,
      y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685.y + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46681.side === "bottom" ? -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D60 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D60)
    };
  return {
    controls: [{
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46681.idPrefix + "-curve-control-0",
      segmentIndex: 0,
      kind: "manual",
      ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13
    }, {
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46681.idPrefix + "-curve-control-1",
      segmentIndex: 0,
      kind: "manual",
      ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14
    }],
    tension: 0.5
  };
}
function je(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46691) {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB33 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46691.side === "left" ? "left" : "right",
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB34 = "bottom",
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB35 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB33 === "left" ? "right" : "left",
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46692 = I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46691.parentNode, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB34),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46693 = I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46691.childNode, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB35),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46694 = R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46691.branchLineType),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8 = [{
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46691.idPrefix + "-route-0",
      kind: "manual",
      x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46692.x,
      y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46693.y
    }],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46694 === "curve" ? (() => {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 = Math.max(48, Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46693.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46692.y) / 2),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 = Math.max(48, Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46693.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46692.x) / 2);
      return {
        controls: [{
          id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46691.idPrefix + "-curve-control-0",
          segmentIndex: 0,
          kind: "manual",
          x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46692.x,
          y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46692.y + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7
        }, {
          id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46691.idPrefix + "-curve-control-1",
          segmentIndex: 0,
          kind: "manual",
          x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46693.x + (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB33 === "left" ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 : -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8),
          y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46693.y
        }],
        tension: 0.5
      };
    })() : undefined;
  return {
    startSide: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB34,
    endSide: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB35,
    startPoint: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46692,
    endPoint: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46693,
    routePoints: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8,
    curveData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695,
    transform: ke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46694 === "curve" ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46692, ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46695.controls) ?? []), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46693] : [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46692, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46693])
  };
}
function Me(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701) {
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701.structureKind === "timeline-horizontal",
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB39 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701.childSide === "right" ? "right" : "left",
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB40 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 ? "right" : "bottom",
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB41 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 ? "left" : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB39 === "left" ? "right" : "left",
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D64 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701.parentNode["transform"].left ?? 0) + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701.parentNode["transform"].width ?? 0) / 2,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701.previousAxisNode ? var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 ? I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701.previousAxisNode, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB40) : {
      x: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D64,
      y: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701.previousAxisNode["transform"].top ?? 0) + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701.previousAxisNode["transform"].height ?? 0) / 2
    } : I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701.parentNode, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB40),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46702 = I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701.childNode, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB41),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701.previousAxisNode ? {
      kind: "free",
      ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17
    } : undefined,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46703 = R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701.branchLineType),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 ? [] : [{
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701.idPrefix + "-route-0",
      kind: "manual",
      x: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D64,
      y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46702.y
    }],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46704 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46703 === "curve" ? (() => {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11 = Math.max(48, Math.abs(var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46702.x - var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17.x : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46702.y - var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17.y) / 2);
      return {
        controls: [{
          id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701.idPrefix + "-curve-control-0",
          segmentIndex: 0,
          kind: "manual",
          x: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17.x + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11 : var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17.x,
          y: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17.y : var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17.y + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11
        }, {
          id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46701.idPrefix + "-curve-control-1",
          segmentIndex: 0,
          kind: "manual",
          x: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46702.x - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46702.x,
          y: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A2 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46702.y : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46702.y - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11
        }],
        tension: 0.5
      };
    })() : undefined;
  return {
    startSide: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB40,
    endSide: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB41,
    startPoint: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17,
    endPoint: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46702,
    startEndpoint: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18,
    routePoints: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10,
    curveData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46704,
    transform: ke([var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17, ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46704 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46704.controls) ?? []), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46702])
  };
}
function Ne(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709.parentIsAxisNode) {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3 = "right",
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4 = "left",
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101 = I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709.parentNode, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102 = I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709.childNode, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103 = De({
        idPrefix: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709.idPrefix,
        parentNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709.parentNode,
        childNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709.childNode,
        side: "right"
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104 = R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709.branchLineType) === "curve" ? Ae({
        idPrefix: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709.idPrefix,
        parentNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709.parentNode,
        childNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709.childNode,
        side: "right"
      }) : undefined;
    return {
      startSide: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3,
      endSide: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4,
      startPoint: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101,
      endPoint: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102,
      routePoints: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103,
      curveData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104,
      transform: ke([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103, ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104.controls) ?? []), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102])
    };
  }
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB45 = "left",
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB21 = {
      x: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709.parentNode["transform"].left ?? 0) + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709.parentNode["transform"].width ?? 0) / 2,
      y: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709.parentNode["transform"].top ?? 0) + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709.parentNode["transform"].height ?? 0) / 2
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46710 = I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709.childNode, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB45),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB21.y === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46710.y ? [] : [{
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709.idPrefix + "-route-0",
      kind: "manual",
      x: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB21.x,
      y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46710.y
    }],
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22 = R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709.branchLineType) === "curve" ? {
      controls: [{
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709.idPrefix + "-curve-control-0",
        segmentIndex: 0,
        kind: "manual",
        x: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB21.x,
        y: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB21.y + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46710.y - var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB21.y) / 2
      }, {
        id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46709.idPrefix + "-curve-control-1",
        segmentIndex: 0,
        kind: "manual",
        x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46710.x - Math.max(48, Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46710.x - var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB21.x) / 2),
        y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46710.y
      }],
      tension: 0.5
    } : undefined;
  return {
    startSide: "left",
    endSide: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB45,
    startPoint: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB21,
    endPoint: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46710,
    startEndpoint: {
      kind: "free",
      ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB21
    },
    routePoints: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12,
    curveData: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22,
    transform: ke([var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB21, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12, ...((var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22 == null ? undefined : var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB22.controls) ?? []), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46710])
  };
}
function Pe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713) {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB47 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713.side === "left" ? "left" : "right";
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713.parentIsAxisNode) {
    let {
        startSide: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105,
        endSide: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106
      } = L(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB47),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107 = I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713.parentNode, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108 = I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713.childNode, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109 = De({
        idPrefix: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713.idPrefix,
        parentNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713.parentNode,
        childNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713.childNode,
        side: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB47
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110 = R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713.branchLineType) === "curve" ? Ae({
        idPrefix: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713.idPrefix,
        parentNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713.parentNode,
        childNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713.childNode,
        side: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB47
      }) : undefined;
    return {
      startSide: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105,
      endSide: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106,
      startPoint: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107,
      endPoint: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108,
      routePoints: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109,
      curveData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110,
      transform: ke([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109, ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.controls) ?? []), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108])
    };
  }
  let {
      startSide: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714,
      endSide: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46715
    } = L(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB47),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46716 = I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713.parentNode, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46717 = I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713.childNode, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46715),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46718 = De({
      idPrefix: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713.idPrefix,
      parentNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713.parentNode,
      childNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713.childNode,
      side: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB47,
      forceTrunk: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713.forceTrunk
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719 = R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713.branchLineType) === "curve" ? Ae({
      idPrefix: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713.idPrefix,
      parentNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713.parentNode,
      childNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713.childNode,
      side: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB47
    }) : undefined;
  return {
    startSide: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714,
    endSide: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46715,
    startPoint: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46716,
    endPoint: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46717,
    routePoints: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46718,
    curveData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719,
    transform: ke([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46716, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46718, ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719.controls) ?? []), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46717])
  };
}
const Ie = 1 / 0;
function Le(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46733) {
  return /[\u2E80-\u9FFF\uF900-\uFAFF\uFF00-\uFFEF]/u.test(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46733);
}
function Re(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D66 = 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D67 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46737 ? 1.08 : 1;
  return Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46735).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111 => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111 === "\x20" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111 === "\x09" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111 === "\u00a0" ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D66 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736 * 0.32 : Le(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111) ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D66 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736 : /[\.,:;'"`!|ilI\[\]\(\)]/u.test(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111) ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D66 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736 * 0.42 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D66 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736 * 0.72;
  }), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D66 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D67;
}
function ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46741) {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB49 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46741.replace(/\r\n/g, "\x0a").replace(/\r/g, "\x0a");
  return var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB49.length ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB49.split("\x0a") : [""];
}
function Be(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744) {
  return Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743 > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744;
}
function Ve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46748, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46749;
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 = !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747.parentNodeId);
  return {
    minWidth: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46748 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747.size) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46748.minWidth) ?? (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 ? F.rootWidth : F.nodeWidth),
    minHeight: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46749 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747.size) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46749.minHeight) ?? (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 ? F.rootHeight : F.nodeHeight)
  };
}
function He(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46754 = ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753.text),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D70 = Math.max(0, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46754.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113 => Re(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753.fontSize, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753.bold))),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D71 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753.fontSize * Se.lineHeightRatio,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46755 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753.minWidth >= F.rootWidth ? Se.root : Se.child,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46756 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46755.paddingX,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46755.paddingY,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758 = Be(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753.maxWidth ?? Ie, Ie),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46759 = Be(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753.maxHeight ?? 1 / 0, 1 / 0);
  return {
    width: Math.ceil(Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758, Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753.minWidth, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D70 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46756))),
    height: Math.ceil(Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46759, Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753.minHeight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46754.length * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D71 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757)))
  };
}
function Ue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46767) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46768, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46769;
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46767.text == "string") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46767.text;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46768 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46767.dataModel) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46768.doc,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46771 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46769 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770.body) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46769.dataStream;
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46771 == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46771.replace(/\r\n$/u, "").replace(/\n$/u, "").replace(/\r$/u, "") : "";
}
function We(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46777) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46778, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46778 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46777.custom) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46778.mindmap,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB25 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46777.shapeData["shapeText"] ?? {},
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6 = !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781.parentNodeId),
    {
      minHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46782,
      minWidth: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46783
    } = Ve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784 = typeof var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB25.fontSize == "number" ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB25.fontSize : var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6 ? M.root["fontSize"] : M.child["fontSize"];
  return He({
    bold: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB25.bold === true,
    fontSize: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784,
    maxHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781.size) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779.maxHeight,
    maxWidth: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781.size) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780.maxWidth,
    minHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46782,
    minWidth: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46783,
    text: Ue(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB25)
  });
}
const Ke = createInternalEditorID("BOARD_SHAPE_TEXT");
function qe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46803, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804) {
  return shapeTextToBoardDocumentTextStyle({
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46803,
    ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804.fontFamily) === undefined ? null : {
      fontFamily: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804.fontFamily
    }),
    ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804.fontSize) === undefined ? null : {
      fontSize: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804.fontSize
    }),
    ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804.color) === undefined ? null : {
      color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804.color
    }),
    ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804.bold) === undefined ? null : {
      bold: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804.bold
    }),
    ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804.italic) === undefined ? null : {
      italic: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804.italic
    }),
    ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804.underline) === undefined ? null : {
      underline: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804.underline
    }),
    ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804.strikethrough) === undefined ? null : {
      strikethrough: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804.strikethrough
    }),
    ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804.textFill) === undefined ? null : {
      textFill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804.textFill
    })
  });
}
function Je(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808 = createBoardTextBoxShapeTextData({
      bold: typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.shapeText["bold"] == "boolean" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.shapeText["bold"] : undefined,
      color: typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.shapeText["color"] == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.shapeText["color"] : undefined,
      fontFamily: typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.shapeText["fontFamily"] == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.shapeText["fontFamily"] : undefined,
      fontSize: typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.shapeText["fontSize"] == "number" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.shapeText["fontSize"] : undefined,
      horizontal: true,
      horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.horizontalAlign,
      id: Ke,
      italic: typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.shapeText["italic"] == "boolean" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.shapeText["italic"] : undefined,
      strikethrough: typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.shapeText["strikethrough"] == "boolean" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.shapeText["strikethrough"] : undefined,
      text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.text,
      textFill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.shapeText["textFill"],
      textStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.textStyle,
      underline: typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.shapeText["underline"] == "boolean" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.shapeText["underline"] : undefined,
      verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.verticalAlign,
      wrapStrategy: WrapStrategy.CLIP
    }),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB27 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808.dataModel && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808.dataModel == "object" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808.dataModel : {},
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46809 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB27.doc,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.documentData ? mergeBoardRichTextDocument(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46809, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.documentData) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46809;
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.shapeText,
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46808,
    isRichText: !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.documentData,
    dataModel: {
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807.currentDataModel ?? {}),
      ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB27,
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810 ? {
        doc: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810
      } : null)
    }
  };
}
const Ye = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
function Ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46819, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46820) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46819),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46820),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB55 = "";
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14 = 0;; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14 += 1) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821.length ? et(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14]) : 0,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822.length ? et(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14]) : 61;
    if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D < 0 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 < 0) return Ze(undefined, undefined);
    if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D > 1) return "" + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB55 + Ye[Math.floor((var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1) / 2)];
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB55 += Ye[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D];
  }
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46831) {
  return [...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46831 ?? "")].every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114 => et(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114) >= 0) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46831 ?? "" : "";
}
function et(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833 === undefined ? -1 : Ye.indexOf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833);
}
function z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835 === "tree-right" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835 === "tree-left" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835 === "tree-alternate";
}
function B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837 === "timeline-horizontal" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46837 === "timeline-vertical";
}
function rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46847, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46848) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46847.children["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115 => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115.side ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46847.parentId ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46848 : "right")) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46848);
}
function it(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46851) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46851.children;
}
function at(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46854, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46855) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853.collapsed) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853.height;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856 = rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46854);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856.length) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853.height;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116 => at(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46854, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46855));
  return Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46853.height, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118, 0) + Math.max(0, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14.length - 1) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46855);
}
function ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46861, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46864, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46865, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46866) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46865.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46861.id, {
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46864 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46861.height / 2
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46861.collapsed) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46867 = rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46861, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46867.length) return;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46867.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119 => at(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46866.siblingGap)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D76 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46864 - (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121, 0) + Math.max(0, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16.length - 1) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46866.siblingGap) / 2;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46867.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123) => {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862 === "right" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46861.width + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46866.horizontalGap : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46866.horizontalGap - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122.width,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A16[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123];
    ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D76 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124 / 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46865, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46866), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D76 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46866.siblingGap;
  });
}
function st(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46875, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46876, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46877) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46875.collapsed) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46875.width;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46878 = rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46875, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46876);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46878.length) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46875.width;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46878.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128 => st(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46876, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46877));
  return Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46875.width, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130, 0) + Math.max(0, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A18.length - 1) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46877);
}
function ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46884, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46885, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46886, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46887, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46888) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46887.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883.id, {
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46885 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883.width / 2,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46886
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883.collapsed) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46889 = rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46884);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46889.length) return;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A20 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46889.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 => st(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46884, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46888.siblingGap)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D78 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46885 - (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A20.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133, 0) + Math.max(0, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A20.length - 1) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46888.siblingGap) / 2,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB57 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46884 === "bottom" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46886 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46883.height + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46888.horizontalGap : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46886 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46888.horizontalGap;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46889.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135) => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A20[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135],
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46884 === "bottom" ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB57 : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB57 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.height;
    ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46884, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D78 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136 / 2, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46887, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46888), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D78 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46888.siblingGap;
  });
}
function lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46897, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46898) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46897.collapsed || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46897.children["length"]) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46897.height;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46899 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46897.children["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140 => lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46898));
  return Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46897.height, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46899.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46142, 0) + Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46899.length - 1) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46898.siblingGap);
}
function ut(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903.id, {
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903.height / 2
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903.collapsed || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903.children["length"]) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903.children["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143 => lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46143, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D80 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905 - (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46144 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145, 0) + Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908.length - 1) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907.siblingGap) / 2,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB59 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903.width + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907.horizontalGap;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903.children["forEach"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147) => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46147];
    ut(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB59, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D80 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148 / 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D80 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46148 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907.siblingGap;
  });
}
function dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46915, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46916, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46917, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46918, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46915.collapsed || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46915.children["length"]) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46915.children["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152 => lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920)),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB61 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154, 0) + Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921.length - 1) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920.siblingGap,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB62 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46916 === "top" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46918 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920.horizontalGap - var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB61 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46918 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46915.height + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920.horizontalGap,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB63 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46917 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46915.width + N.branchGap;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46915.children["forEach"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156) => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156];
    ut(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB63, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB62 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157 / 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920), var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB62 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920.siblingGap;
  });
}
function ft(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46930, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931) {
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B592 = new Map(),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB67 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46930.rootLeft + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929.width / 2;
  return var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B592.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929.id, {
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46930.rootLeft,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46930.rootTop
  }), ["top", "bottom"].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162 = rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.length) return;
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621 => st(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931.siblingGap)),
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB7 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623, 0) + Math.max(0, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1.length - 1) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931.siblingGap,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB67 - var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB7 / 2,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161 === "bottom" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46930.rootTop + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929.height + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931.horizontalGap : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46930.rootTop - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931.horizontalGap;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625],
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161 === "bottom" ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8 : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624.height;
      ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626 / 2, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2, var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B592, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D18 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931.siblingGap;
    });
  }), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B592;
}
function pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46935, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46936, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46937, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46938, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46939, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46940) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46936 === "top" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46936 === "bottom") {
    ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46935, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46936, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46937 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46935.width / 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46938, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46939, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46940);
    return;
  }
  ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46935, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46936, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46937, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46938 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46935.height / 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46939, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46940);
}
function mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46948, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949) {
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B594 = new Map(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950 = it(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB69 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46948.rootLeft + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947.width / 2,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951 = N.timelineAxisGap;
  var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B594.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947.id, {
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46948.rootLeft,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46948.rootTop
  });
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB70 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46948.rootTop + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947.height + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165 => {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165.side === "left" ? "left" : "right",
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166 = at(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949.siblingGap);
    pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11 === "left" ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB69 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949.horizontalGap - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165.width : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB69 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949.horizontalGap, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB70 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166 / 2 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46165.height / 2, var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B594, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949), var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB70 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46166 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949.siblingGap;
  }), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B594;
}
function ht(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46958, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46959) {
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B596 = new Map(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46960 = it(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB73 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46958.rootTop + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957.height / 2,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46961 = N.timelineAxisGap;
  var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B596.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957.id, {
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46958.rootLeft,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46958.rootTop
  });
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB74 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46958.rootLeft + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957.width + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46961;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46960.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169 => {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB13 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169.side === "bottom" ? "bottom" : "top",
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB73 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169.height / 2;
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B596.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169.id, {
      left: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB74,
      top: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20
    }), dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB13, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB74, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20, var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B596, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46959), var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB74 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46169.width + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46961;
  }), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B596;
}
function gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969) {
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B598 = new Map(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46970 = it(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB77 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968.rootLeft + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967.width / 2,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971 = N.timelineAxisGap;
  var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B598.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967.id, {
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968.rootLeft,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968.rootTop
  });
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB78 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968.rootTop + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967.height + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46970.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171 => {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB15 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171.side === "right" ? "right" : "left",
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB16 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB15 === "left" ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB77 - N.branchGap - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171.width : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB77 + N.branchGap;
    if (var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B598.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171.id, {
      left: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB16,
      top: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB78
    }), !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171.collapsed) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630 = rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB15),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 => at(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB15, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969.siblingGap)),
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462, 0) + Math.max(0, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.length - 1) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969.siblingGap,
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB78 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171.height / 2 - var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2 / 2;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464) => {
        let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB15 === "left" ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB16 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969.horizontalGap - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.width : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB16 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171.width + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969.horizontalGap,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464];
        ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB15, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 / 2, var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B598, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D4 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969.siblingGap;
      });
    }
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB78 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46171.height + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971;
  }), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B598;
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46977, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46978) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29 = {
      horizontalGap: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46978.horizontalGap ?? N.horizontalGap,
      siblingGap: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46978.siblingGap ?? N.siblingGap
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46979 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46978.structureKind ?? N.structureKind;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46979 === "mindmap-vertical") return ft(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46977, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46978, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46979 === "tree-right" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46979 === "tree-left" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46979 === "tree-alternate") return mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46977, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46978, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46979 === "timeline-horizontal") return ht(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46977, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46978, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46979 === "timeline-vertical") return gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46977, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46978, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29);
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5910 = new Map(),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB81 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46978.rootTop + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46977.height / 2;
  return ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46977, "right", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46978.rootLeft, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB81, var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5910, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29), ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46977, "left", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46978.rootLeft, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB81, var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5910, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5910;
}
function yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46988) {
  return {
    modeId: k,
    structureScopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987,
    semanticRole: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46988
  };
}
function bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46991) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46992 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46991.structureKind ?? N.structureKind,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993 = nt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46992, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46991.branchLineType),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994 = createBoardContainerElement({
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46991.id,
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46991.left,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46991.top,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46991.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46991.height,
      title: "Mind Map",
      fillColor: M.container["fillColor"],
      strokeColor: M.container["strokeColor"],
      strokeWidth: 0,
      membershipLocked: true
    });
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994.containerData = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994.containerData,
    titleVisible: false,
    shapeData: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994.containerData["shapeData"],
      fill: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994.containerData["shapeData"].fill,
        fillType: ShapeFillEnum.NoFill
      },
      stroke: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994.containerData["shapeData"].stroke,
        lineStrokeType: ShapeLineTypeEnum.NoLine
      }
    },
    behavior: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994.containerData["behavior"],
      acceptsChildren: true,
      acceptsContainer: false,
      allowNested: false,
      autoCapture: false,
      autoResize: false,
      membershipLocked: true,
      clipChildren: false,
      membershipAwareness: "structural"
    },
    capturePolicy: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994.containerData["capturePolicy"],
      enabled: false,
      allowCaptureContainer: false,
      allowCaptureFromAncestorContainer: false,
      allowCaptureFromSiblingContainer: false
    },
    custom: {
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994.containerData["custom"] ?? {})
    }
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994.custom = {
    structured: yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46991.id, ye),
    mindmap: {
      presentation: "implicit",
      boundsMode: "auto-fit",
      rootNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46991.rootNodeId,
      layout: {
        ...N,
        structureKind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46992,
        branchLineType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993
      },
      themeId: "default",
      structureRevision: 1
    }
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994;
}
function xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461000 = createBoardTextBoxShapeElement({
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.id,
      parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.parentId,
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.left,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.top,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.height,
      text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.text,
      horizontal: true
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.parentNodeId ? M.child : M.root,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461002 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001.fillColor,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001.strokeColor,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461004 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001.textColor,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461005 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001.fontSize,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB31 = {
      fs: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461005,
      cl: {
        rgb: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461004
      }
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461006 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.parentNodeId ? HorizontalAlign.LEFT : HorizontalAlign.CENTER,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007 = VerticalAlign.MIDDLE,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB32 = {
      ...Je({
        horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461006,
        shapeText: {
          color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461004,
          fontSize: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461005
        },
        text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.text,
        documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.textData,
        textStyle: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB31,
        verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007
      }),
      fontSize: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461005,
      color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461004,
      horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461006,
      verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007
    };
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461000.shapeData = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461000.shapeData,
    shapeType: ShapeTypeEnum.RoundRect,
    fill: {
      fillType: ShapeFillEnum.SolidFill,
      color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461002
    },
    stroke: {
      lineStrokeType: ShapeLineTypeEnum.SolidLine,
      color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003,
      width: 2
    },
    textRectPadding: {
      ...Ce
    },
    isTextBox: true,
    shapeText: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB32
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461000.custom = {
    structured: yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.scopeId, A),
    mindmap: {
      parentNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.parentNodeId,
      orderKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.orderKey,
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.side ? {
        side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.side
      } : null),
      collapsed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.collapsed ?? false,
      size: {
        minWidth: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.parentNodeId ? F.nodeWidth : F.rootWidth,
        minHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.parentNodeId ? F.nodeHeight : F.rootHeight
      },
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.foreignAttributes ? {
        foreignAttributes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.foreignAttributes
      } : null),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.branchColorKey ? {
        branchColorKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999.branchColorKey
      } : null)
    }
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461000;
}
function St(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461017) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461018;
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8 = !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461017.parentNodeId,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB35 = {
      width: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8 ? F.rootWidth : F.nodeWidth,
      height: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8 ? F.rootHeight : F.nodeHeight
    },
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461018 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461017.textData) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461018 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461018.body) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461018.textRuns) ?? [],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461019 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8 ? M.root["fontSize"] : M.child["fontSize"],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461020 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175;
      return Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173, ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174.ts) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175.fs) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173);
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461019);
  return He({
    bold: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A22.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180;
      return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179.ts) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180.bl) === BooleanNumber.TRUE;
    }),
    fontSize: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461020,
    minWidth: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB35.width,
    minHeight: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB35.height,
    text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461017.text
  });
}
function Ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461026 = R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.branchLineType),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.parentNode),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.timelineRootStructureKind ? Me({
      idPrefix: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.id,
      parentNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.parentNode,
      childNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.childNode,
      previousAxisNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.timelinePreviousAxisNode,
      structureKind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.timelineRootStructureKind,
      childSide: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.side,
      branchLineType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461026
    }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.timelineHorizontalRootNodeId && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027.parentNodeId) !== null ? Ne({
      idPrefix: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.id,
      parentNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.parentNode,
      childNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.childNode,
      parentIsAxisNode: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027.parentNodeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.timelineHorizontalRootNodeId,
      branchLineType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461026
    }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.timelineVerticalRootNodeId && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027.parentNodeId) !== null ? Pe({
      idPrefix: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.id,
      parentNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.parentNode,
      childNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.childNode,
      parentIsAxisNode: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027.parentNodeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.timelineVerticalRootNodeId,
      side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.side,
      branchLineType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461026,
      forceTrunk: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.forceTrunk
    }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.treeRootTrunk ? je({
      idPrefix: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.id,
      parentNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.parentNode,
      childNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.childNode,
      side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.side,
      branchLineType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461026
    }) : null,
    {
      startSide: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029,
      endSide: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028 ?? L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.side),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028.startPoint) ?? I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.parentNode, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461032 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028.endPoint) ?? I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.childNode, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028.routePoints) ?? De({
      idPrefix: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.id,
      parentNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.parentNode,
      childNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.childNode,
      side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.side,
      forceTrunk: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.forceTrunk
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028.curveData) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461026 === "curve" ? Ae({
      idPrefix: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.id,
      parentNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.parentNode,
      childNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.childNode,
      side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.side
    }) : undefined),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035 = createBoardConnectorElement({
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.id,
      start: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028.startEndpoint) ?? we(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.parentNode["id"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031),
      end: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028.endEndpoint) ?? we(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.childNode["id"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461032),
      routing: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461026 === "curve" ? "curve" : "orthogonal",
      routingMode: "manual",
      waypoints: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461026 === "curve" ? [] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033,
      orthogonalData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461026 === "curve" ? undefined : {
        routePoints: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033
      },
      curveData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034,
      transform: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028.transform) ?? Oe({
        parentNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.parentNode,
        childNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.childNode,
        side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.side,
        routePoints: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461033,
        curveData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034
      }),
      style: {
        stroke: M.connector["strokeColor"],
        strokeWidth: 2,
        opacity: 1,
        cornerStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461026 === "orthogonal" ? "miter" : "rounded"
      }
    });
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035.parentId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.scopeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035.custom = {
    structured: yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.scopeId, j),
    mindmap: {
      managed: true,
      parentNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.parentNode["id"],
      childNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461025.childNode["id"]
    }
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035;
}
function wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461048) {
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047,
    transform: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047.transform,
      left: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047.transform["left"] ?? 0) - (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461048.transform["left"] ?? 0),
      top: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047.transform["top"] ?? 0) - (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461048.transform["top"] ?? 0)
    }
  };
}
function Tt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051) {
  return B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051.structureKind) ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051.container, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051.connectors, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051.nodes] : [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051.container, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051.nodes, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051.connectors];
}
function jt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119) {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB89 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119.text ?? "Add\x20text",
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461120 = St({
      parentNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119.parentNode["id"],
      text: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB89,
      textData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119.textData
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121 = xt({
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119.nodeId ?? generateRandomId(6),
      scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119.scopeId,
      parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119.scopeId,
      parentNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119.parentNode["id"],
      orderKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119.orderKey,
      side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119.side,
      text: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB89,
      textData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119.textData,
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119.left,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119.top,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461120.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461120.height,
      branchColorKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119.branchColorKey
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461122 = Ct({
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119.connectorId ?? generateRandomId(6),
      scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119.scopeId,
      parentNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119.parentNode,
      childNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121,
      side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119.side,
      branchLineType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119.branchLineType,
      treeRootTrunk: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119.treeRootTrunk,
      timelineRootStructureKind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119.timelineRootStructureKind,
      timelineHorizontalRootNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119.timelineRootStructureKind === "timeline-horizontal" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119.parentNode["id"] : undefined,
      timelineVerticalRootNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119.timelineRootStructureKind === "timeline-vertical" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119.parentNode["id"] : undefined
    });
  return {
    node: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121,
    connector: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461122,
    elements: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461119.timelineRootStructureKind ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461122, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121] : [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461121, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461122]
  };
}
function W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461146;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461147 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461145.custom;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461147 || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461146 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461147.structured) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461146.modeId) !== k || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461147.structured["semanticRole"] !== be || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461147.structured["structureScopeId"] != "string") return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461148 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461147.mindmap;
  return typeof (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461148 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461148.ownerNodeId) != "string" || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461148.offsetX != "number" || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461148.offsetY != "number" ? null : {
    ownerNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461148.ownerNodeId,
    offsetX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461148.offsetX,
    offsetY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461148.offsetY,
    modeId: k,
    structureScopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461147.structured["structureScopeId"],
    semanticRole: be
  };
}
const Ht = M.root["fillColor"],
  Ut = M.root["strokeColor"],
  Wt = M.root["textColor"],
  Gt = M.root["fontSize"],
  Kt = M.child["fillColor"],
  qt = M.child["strokeColor"],
  Jt = M.child["textColor"],
  Yt = M.child["fontSize"];
function K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461219, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461220) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461219[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461220],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461222 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221.element);
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461222 ? null : {
    data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461221,
    meta: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461222
  };
}
function Xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461227, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461228, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461229) {
  return Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461227).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237.element);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238.structureScopeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461228 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238.parentNodeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461229 ? {
      data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237,
      meta: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238
    } : null;
  }).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241).sort(Qt);
}
function Zt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461234;
  return Ze((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461234 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233.length - 1]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461234.meta["orderKey"], undefined);
}
function Qt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238) {
  return Xe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237.meta["orderKey"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238.meta["orderKey"]) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237.data["elementId"].localeCompare(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238.data["elementId"]);
}
function q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461241) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461241 ?? N.structureKind;
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461243, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461244, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461243 % 2 == 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461244 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461245;
}
function en(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249 === "mindmap-vertical" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251 === "top" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251 === "bottom" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251 : "bottom" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249 === "tree-left" ? "left" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249 === "tree-right" ? "right" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249 === "tree-alternate" ? fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250, "left", "right") : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249 === "timeline-horizontal" ? fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250, "top", "bottom") : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461249 === "timeline-vertical" ? fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461250, "left", "right") : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251 === "left" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251 === "right" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461251 : "right";
}
function tn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461255, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461255 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256 === "mindmap-vertical" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461256 === "timeline-horizontal" ? "bottom" : "right");
}
function nn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461260, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461261 = N.structureKind, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461262 = 0) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461260 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259.parentNodeId ? tn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461259.side, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461261) : en(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461261, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461262));
}
function rn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461267, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461268, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461269) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D86 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461267.transform["left"] ?? 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D87 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461267.transform["top"] ?? 0,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461270 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461267.transform["width"] ?? F.nodeWidth,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461271 = F.nodeWidth,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461272 = F.nodeHeight,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461273 = N.horizontalGap,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461274 = N.siblingGap;
  return {
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461268 === "right" ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D86 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461270 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461273 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D86 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461273 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461271,
    top: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D87 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461269 * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461272 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461274)
  };
}
function an(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461283) {
  return {
    redoMutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461283.elements["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242 => ({
      id: AddBoardElementMutation.id,
      params: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461283.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461283.subUnitId,
        element: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242),
        allowLockedParent: true
      }
    })),
    undoMutations: [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461283.elements].reverse().map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243 => ({
      id: RemoveBoardElementMutation.id,
      params: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461283.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461283.subUnitId,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243.id,
        allowLockedParent: true
      }
    }))
  };
}
function J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461285, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461286, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461287, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461288 = {}) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461287.redoMutations["length"] === 0) return true;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461285.get(ICommandService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461290 = sequenceExecute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461287.redoMutations, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461290.result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461288.skipUndo || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461285.get(IUndoRedoService).pushUndoRedo({
    unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461286,
    redoMutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461287.redoMutations,
    undoMutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461287.undoMutations
  }), true) : (sn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461287.undoMutations, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461290.index), false);
}
function on(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298) {
  if (Object.is(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298)) return true;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297 != "object" || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298 != "object") return false;
  if (Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297) || Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298)) return Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297) && Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297.length === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298.length && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297.every((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245) => on(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245]));
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461299 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461297,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461300 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461298,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A48 = Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461299).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461299[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246] !== undefined),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A49 = Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461300).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461300[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247] !== undefined);
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A48.length === var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A49.length && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A48.every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248 => Object.prototype["hasOwnProperty"].call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461300, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248) && on(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461299[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461300[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248]));
}
function sn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461305, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461306, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461307) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461307 < 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461306.length : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461307;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461306.slice(-var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461308).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249 => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461305.syncExecuteCommand(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249.params);
  });
}
function un(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461365, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461366) {
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5914 = new Map();
  return Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461365).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265 = W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264.element);
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265.structureScopeId) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461366) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5914.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265.ownerNodeId);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264) : var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5914.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265.ownerNodeId, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264]);
  }), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5914;
}
function dn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461369, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461370, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461371, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461372 = new Set(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461373 = un(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461369, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461370)) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461372.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461371), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461373.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461371) ?? []).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461372.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270.elementId);
  }), Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461369).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272.element);
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273.structureScopeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461370 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273.childNodeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461371 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461372.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272.elementId);
  }), Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461369).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276.element);
    (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277.structureScopeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461370 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277.parentNodeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461371 && (Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461369).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635.element);
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636.structureScopeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461370 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636.parentNodeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461371 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636.childNodeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276.elementId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461372.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635.elementId);
    }), dn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461369, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461370, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276.elementId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461372, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461373));
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461372;
}
function fn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461379, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461380, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461381) {
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280 of Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461379)) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280.element);
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639.structureScopeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461380 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639.childNodeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461381) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280;
  }
  return null;
}
function gn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461411, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461412, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461413, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461414) {
  try {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281 = new ShapeModel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461411, "mind-map-node-size-probe", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461412);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281.updateContext({
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461413,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461414
    });
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281.getShapeTextRect({
      left: 0,
      top: 0,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461413,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461414
    });
    return Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282.width) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282.width > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282.width : null;
  } catch {
    return null;
  }
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F3(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461420, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419.shapeData["shapeType"]) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419.transform;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419.transform["width"] ?? F.nodeWidth,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419.transform["height"] ?? F.nodeHeight;
  if (!Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422) || !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422 <= 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423 <= 0) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419.transform;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461424 = gn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419.shapeData["shapeType"] ?? ShapeTypeEnum.RoundRect, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419.shapeData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461425 = gn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461420, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423);
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461424 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461425 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461425 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461424 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419.transform : {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419.transform,
    width: Math.ceil(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461424 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461425)
  };
}
function vn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461433) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461433 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461433.fontSize) !== undefined || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461433 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461433.bold) !== undefined;
}
function yn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461435, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461436) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461436) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461435.transform;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461437 = We(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461435),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D90 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461435.transform["width"] ?? 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D91 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461435.transform["height"] ?? 0;
  return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D90 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461437.width && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D91 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461437.height ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461435.transform : {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461435.transform,
    width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461437.width,
    height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461437.height
  };
}
function Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461461, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461462) {
  return {
    redoMutation: {
      id: G.id,
      params: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461461.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461461.subUnitId,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461461.elementId,
        element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461462,
        transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461462.transform
      }
    },
    undoMutation: {
      id: G.id,
      params: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461461.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461461.subUnitId,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461461.elementId,
        element: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461461.element),
        transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461461.transform
      }
    }
  };
}
function Cn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461476, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461477) {
  return [...dn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461476, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461477)].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461475[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283]).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284);
}
function wn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461481, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461482, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461483, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461484, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461485, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461486, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461487) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461485) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461485;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A52 = Xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461481, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461482, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461483).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285.data["elementId"] !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461484),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D94 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461486 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A52.findIndex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286.data["elementId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461486) : -1;
  if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D94 >= 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461487) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461487 === "before" ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A52[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D94 - 1] : var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A52[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D94],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461487 === "before" ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A52[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D94] : var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A52[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D94 + 1];
    return Ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287.meta["orderKey"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288.meta["orderKey"]);
  }
  return Zt(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A52);
}
function Tn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461497 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461495.element),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498 = R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.branchLineType),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461499 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.parentNode),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461500 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.timelineRootStructureKind ? En(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.parentNode["id"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.childNode["id"]) : undefined,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461501 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.timelineRootStructureKind ? Me({
      idPrefix: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461497.id,
      parentNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.parentNode,
      childNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.childNode,
      previousAxisNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461500,
      structureKind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.timelineRootStructureKind,
      childSide: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.side,
      branchLineType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498
    }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.timelineHorizontalRootNodeId && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461499 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461499.parentNodeId) !== null ? Ne({
      idPrefix: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461497.id,
      parentNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.parentNode,
      childNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.childNode,
      parentIsAxisNode: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461499 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461499.parentNodeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.timelineHorizontalRootNodeId,
      branchLineType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498
    }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.timelineVerticalRootNodeId && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461499 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461499.parentNodeId) !== null ? Pe({
      idPrefix: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461497.id,
      parentNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.parentNode,
      childNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.childNode,
      parentIsAxisNode: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461499 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461499.parentNodeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.timelineVerticalRootNodeId,
      side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.side,
      branchLineType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498,
      forceTrunk: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.forceTrunk
    }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.treeRootTrunk ? je({
      idPrefix: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461497.id,
      parentNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.parentNode,
      childNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.childNode,
      side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.side,
      branchLineType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498
    }) : null,
    {
      startSide: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502,
      endSide: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461503
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461501 ?? L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.side),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461504 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461501 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461501.routePoints) ?? De({
      idPrefix: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461497.id,
      parentNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.parentNode,
      childNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.childNode,
      side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.side,
      forceTrunk: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.forceTrunk
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461505 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461501 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461501.curveData) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498 === "curve" ? Ae({
      idPrefix: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461497.id,
      parentNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.parentNode,
      childNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.childNode,
      side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.side
    }) : undefined),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461501 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461501.transform) ?? Oe({
      parentNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.parentNode,
      childNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.childNode,
      side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.side,
      routePoints: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461504,
      curveData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461505
    });
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461497.transform = resolveBoardElementLocalTransformForParent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.elementData, {
    parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461497.parentId,
    worldTransform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461497.connectorData = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461497.connectorData,
    start: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461501 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461501.startEndpoint) ?? we(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.parentNode["id"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461501 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461501.startPoint) ?? I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.parentNode, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502)),
    end: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461501 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461501.endEndpoint) ?? we(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.childNode["id"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461503, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461501 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461501.endPoint) ?? I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461496.childNode, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461503)),
    routing: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498 === "curve" ? "curve" : "orthogonal",
    routingMode: "manual",
    waypoints: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498 === "curve" ? [] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461504,
    orthogonalData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498 === "curve" ? undefined : {
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461497.connectorData["orthogonalData"] ?? {}),
      routePoints: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461504
    },
    curveData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461505,
    style: {
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461497.connectorData["style"] ?? {}),
      cornerStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498 === "orthogonal" ? "miter" : "rounded"
    }
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498 !== "curve" && delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461497.connectorData["curveData"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461498 === "curve" && delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461497.connectorData["orthogonalData"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461497;
}
function En(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461519, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461520, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461521) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461522;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461523 = H((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461522 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461519[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461520]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461522.element);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461523) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461524 = Xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461519, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461523.structureScopeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461520),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D96 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461524.findIndex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289.data["elementId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461521);
  if (!(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D96 <= 0)) return Jn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461519, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461524[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D96 - 1].data["elementId"]) ?? undefined;
}
function Dn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461531, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461532, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461533, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461534) {
  return Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461531).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290.element);
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291.structureScopeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461532 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291.parentNodeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461533 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291.side ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461534) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461534;
  }).length;
}
function On(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461539, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461540) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461541, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461542;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461543 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461539.element),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461539.element);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544.parentId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461540.scopeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544.custom = {
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544.custom ?? {}),
    structured: {
      ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461541 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544.custom) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461541.structured) ?? {}),
      modeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461543 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461543.modeId,
      semanticRole: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461543 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461543.semanticRole,
      structureScopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461540.scopeId
    },
    mindmap: {
      ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461542 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544.custom) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461542.mindmap) ?? {}),
      parentNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461540.parentNodeId,
      orderKey: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461540.orderKey,
      collapsed: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461543 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461543.collapsed) ?? false,
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461540.root ? null : {
        side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461540.side ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461543 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461543.side) ?? "right"
      })
    }
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461540.root && (delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544.custom["mindmap"].side, "shapeData" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544)) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461545;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544.shapeData["shapeText"] ?? {},
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.dataModel && typeof var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.dataModel == "object" ? Tools.deepClone(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.dataModel) : {},
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB29 = typeof var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.text == "string" ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.text : "",
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294 = HorizontalAlign.CENTER,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295 = VerticalAlign.MIDDLE,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296 = Je({
        currentDataModel: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5,
        horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294,
        shapeText: {
          ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4,
          color: Wt,
          fontSize: Gt
        },
        text: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB29,
        textStyle: qe({
          ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4,
          color: Wt,
          fontSize: Gt
        }, undefined),
        verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295
      }),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6 = {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296,
        color: Wt,
        fontSize: Gt,
        horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294,
        verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295
      };
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544.shapeData = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544.shapeData,
      fill: {
        fillType: ShapeFillEnum.SolidFill,
        color: Ht
      },
      stroke: {
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544.shapeData["stroke"] ?? {}),
        lineStrokeType: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461545 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544.shapeData["stroke"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461545.lineStrokeType) ?? ShapeLineTypeEnum.SolidLine,
        color: Ut
      },
      textRectPadding: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544.shapeData["textRectPadding"] ?? {
        ...Ce
      },
      shapeText: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544.custom["mindmap"] = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544.custom["mindmap"],
      size: {
        minWidth: F.rootWidth,
        minHeight: F.rootHeight
      }
    };
  }
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461540.demoteToChild && "shapeData" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461546;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544.shapeData["shapeText"] ?? {},
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7.dataModel && typeof var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7.dataModel == "object" ? Tools.deepClone(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7.dataModel) : {},
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB30 = typeof var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7.text == "string" ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7.text : "",
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297 = HorizontalAlign.LEFT,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298 = VerticalAlign.MIDDLE,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299 = Je({
        currentDataModel: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8,
        horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297,
        shapeText: {
          ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7,
          color: Jt,
          fontSize: Yt
        },
        text: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB30,
        textStyle: qe({
          ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7,
          color: Jt,
          fontSize: Yt
        }, undefined),
        verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298
      }),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9 = {
        ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299,
        color: Jt,
        fontSize: Yt,
        horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297,
        verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298
      };
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544.shapeData = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544.shapeData,
      fill: {
        fillType: ShapeFillEnum.SolidFill,
        color: Kt
      },
      stroke: {
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544.shapeData["stroke"] ?? {}),
        lineStrokeType: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461546 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544.shapeData["stroke"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461546.lineStrokeType) ?? ShapeLineTypeEnum.SolidLine,
        color: qt
      },
      textRectPadding: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544.shapeData["textRectPadding"] ?? {
        ...Ce
      },
      shapeText: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB9
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544.custom["mindmap"] = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544.custom["mindmap"],
      size: {
        minWidth: F.nodeWidth,
        minHeight: F.nodeHeight
      }
    };
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461544;
}
function Nn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461591, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461593 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461591.element);
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461593 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461593.structureScopeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592) return true;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461594 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461591.element);
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461594 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461594.structureScopeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592) return true;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461595 = W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461591.element);
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461595 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461595.structureScopeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461591.element["id"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592;
}
function Pn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461601, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461602, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461603) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461604 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461601.element);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461604.transform = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461604.transform,
    left: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461604.transform["left"] ?? 0) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461602,
    top: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461604.transform["top"] ?? 0) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461603
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461604;
}
function Fn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461609, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461610) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461609[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461610.scopeId],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461612 = V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611.element);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461612) return null;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56 = [],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A57 = [],
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB45 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461609
    },
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461610.excludeElementIds ?? []),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461613 = Pn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461610.deltaX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461610.deltaY),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461614 = Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461613);
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461614.redoMutation), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A57.unshift(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461614.undoMutation), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB45[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611.elementId] = X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461613), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461610.preserveExcludedWorldTransforms && Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461609).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336.elementId) && Nn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461610.scopeId) && In(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461609, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461610.scopeId, var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299)).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338 = Pn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337, -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461610.deltaX, -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461610.deltaY),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339 = Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338);
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339.redoMutation), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A57.unshift(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339.undoMutation), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB45[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337.elementId] = X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338);
  }), Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461609).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343.element);
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349.structureScopeId) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461610.scopeId || !("connectorData" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343.element)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350 = Jn(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB45, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349.parentNodeId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351 = Jn(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB45, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349.childNodeId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353 = Tn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343, {
        parentNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350,
        childNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351,
        side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352.side ?? "right",
        elementData: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB45,
        branchLineType: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461612.layout) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344.branchLineType,
        treeRootTrunk: z((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461612.layout) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345.structureKind) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349.parentNodeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461612.rootNodeId,
        timelineRootStructureKind: B((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461612.layout) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346.structureKind) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349.parentNodeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461612.rootNodeId ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461612.layout["structureKind"] : undefined,
        timelineHorizontalRootNodeId: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461612.layout) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347.structureKind) === "timeline-horizontal" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461612.rootNodeId : undefined,
        timelineVerticalRootNodeId: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461612.layout) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348.structureKind) === "timeline-vertical" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461612.rootNodeId : undefined,
        forceTrunk: Dn(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB45, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349.structureScopeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349.parentNodeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352.side ?? "right") > 1
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354 = Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353);
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354.redoMutation), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A57.unshift(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354.undoMutation), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB45[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343.elementId] = X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353);
  }), {
    redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A56,
    undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A57
  };
}
function In(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461621, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461622, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461623, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461624) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461625 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461621.element["parentId"];
  for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461625;) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461622[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461625];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647) return false;
    if (Nn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461623) && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461624.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.elementId)) return true;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461625 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.element["parentId"];
  }
  return false;
}
function Un(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461684) {
  return Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376.element);
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377.structureScopeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461684 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377.parentNodeId === null ? {
      data: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376,
      meta: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377
    } : null;
  }).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380) ?? null;
}
function Wn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461687) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461687.element["transform"].height ?? F.nodeHeight;
}
function Gn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461689) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461689.element["transform"].width ?? F.nodeWidth;
}
function Kn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461691, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461693) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461691.element);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694.transform = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694.transform,
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461692,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461693
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461694;
}
function X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461699, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461700) {
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461699,
    element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461700,
    transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461700.transform
  };
}
function qn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461703, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461704, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461705) {
  return {
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461703,
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461704,
    elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461705.id,
    element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461705,
    transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461705.transform,
    hidden: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461705.visible === false
  };
}
function Jn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461709, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461710) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461711;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461712 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461709[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461710],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461713 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461712 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461712.element);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461712 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461713) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461711 = resolveBoardElementWorldTransform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461709, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461710)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461711.worldTransform;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714 ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461712.element,
    transform: {
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461712.element["transform"] ?? {}),
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461714
    }
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461712.element;
}
function Yn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461721, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461722, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723) {
  return {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461722.data["elementId"],
    parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461722.meta["parentNodeId"],
    side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461722.meta["side"],
    collapsed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461722.meta["collapsed"],
    width: Gn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461722.data),
    height: Wn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461722.data),
    children: Xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461721, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461722.meta["structureScopeId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461722.data["elementId"]).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381 => Yn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461721, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723))
  };
}
function Xn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461727) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A60 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461727.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382 => !!H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461728 = F.containerPadding,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D102 = Math.min(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A60.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383.transform["left"] ?? 0)) - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461728,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D103 = Math.min(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A60.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384.transform["top"] ?? 0)) - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461728,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB95 = Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A60.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385 => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385.transform["left"] ?? 0) + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385.transform["width"] ?? F.nodeWidth))) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461728,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB96 = Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A60.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386 => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386.transform["top"] ?? 0) + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386.transform["height"] ?? F.nodeHeight))) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461728;
  return {
    left: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D102,
    top: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D103,
    width: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB95 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D102,
    height: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB96 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D103
  };
}
function Zn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461731, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461733;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461734 = Un(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461731, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461735 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461731[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461734 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461735) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736 = V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461735.element),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461737 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736.layout) ?? N,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D106 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461734.data["element"].transform["left"] ?? 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D107 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461734.data["element"].transform["top"] ?? 0,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461738 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461733 = resolveBoardElementWorldTransform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461731, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461733.worldTransform) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461735.element["transform"],
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D108 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461738.left ?? 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D109 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461738.top ?? 0,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461739 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F1(Yn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461731, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461734, {
      rootNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736.rootNodeId,
      structureKind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461737.structureKind
    }), {
      rootLeft: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D106,
      rootTop: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D107,
      structureKind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461737.structureKind,
      horizontalGap: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461737.horizontalGap,
      siblingGap: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461737.siblingGap
    }),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A62 = Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461731).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387.element);
      return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388.structureScopeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387.element["visible"] !== false;
    }),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A63 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A62.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461739.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391.elementId);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392 ? Kn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D108 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392.left, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D109 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392.top) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391.element;
    });
  if (!var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A63.length) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461740 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461735.element),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461741 = Xn(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A63);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461740.transform = resolveBoardElementLocalTransformForParent(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461731, {
    parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461740.parentId,
    worldTransform: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461740.transform,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461741
    }
  });
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47 = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461731
  };
  var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732] = X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461735, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461740);
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A64 = [];
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A62.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461739.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395.elementId);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397 = Kn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D108 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396.left, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D109 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396.top);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397.transform = resolveBoardElementLocalTransformForParent(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47, {
      parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397.parentId,
      worldTransform: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397.transform
      }
    }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A64.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395.elementId] = X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397);
  }), Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461731).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46402, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404 = W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401.element);
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404.structureScopeId) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404.ownerNodeId],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46402 = resolveBoardElementWorldTransform(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404.ownerNodeId)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46402.worldTransform,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403 = resolveBoardElementWorldTransform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461731, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401.elementId)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403.worldTransform;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401.element);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408.visible = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46405.element["visible"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408.transform = resolveBoardElementLocalTransformForParent(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47, {
      parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408.parentId,
      worldTransform: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46407,
        left: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406.left ?? 0) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404.offsetX,
        top: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46406.top ?? 0) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404.offsetY
      }
    }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A64.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401.elementId] = X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408);
  }), Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461731).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417.element);
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.structureScopeId) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732 || !("connectorData" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417.element)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419 = Jn(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.parentNodeId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420 = Jn(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.childNodeId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422 = Tn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417, {
      parentNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419,
      childNode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420,
      side: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421.side ?? "right",
      elementData: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47,
      branchLineType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461737.branchLineType,
      treeRootTrunk: z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461737.structureKind) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.parentNodeId === (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736.rootNodeId),
      timelineRootStructureKind: B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461737.structureKind) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.parentNodeId === (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736.rootNodeId) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461737.structureKind : undefined,
      timelineHorizontalRootNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461737.structureKind === "timeline-horizontal" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736.rootNodeId : undefined,
      timelineVerticalRootNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461737.structureKind === "timeline-vertical" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736.rootNodeId : undefined,
      forceTrunk: Dn(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.structureScopeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.parentNodeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421.side ?? "right") > 1
    });
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A64.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB47[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417.elementId] = X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46417, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422);
  }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A64.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461740), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A64;
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig11DC(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461759, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461760, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461761, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461762) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461763 = Qn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461759, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461760);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461763) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764 = resolveBoardElementWorldBounds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461763, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461761);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764) return null;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D114 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461762.left - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764.left,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D115 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461762.top - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764.top;
  return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D114 === 0 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D115 === 0 ? null : Fn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461763, {
    scopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461760,
    deltaX: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D114,
    deltaY: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D115
  });
}
function Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461771, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461772) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461773 = Zn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461771, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461772);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461773) return null;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A68 = [],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A69 = [];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461773.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461771[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433.id];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434 || on(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434.element, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435 = Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46434, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433);
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A68.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435.redoMutation), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A69.unshift(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46435.undoMutation);
  }), {
    redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A68,
    undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A69
  };
}
function er(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461778 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777.elementOrder["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777.elementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440.element;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441 = V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441.structureScopeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777.scopeId || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442.structureScopeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777.scopeId || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443.structureScopeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777.scopeId || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444 = W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46445)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46444.structureScopeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777.scopeId;
  });
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461778.length) return null;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A72 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461778.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454;
      return !!V((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777.elementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454.element);
    }),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A73 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461778.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458;
      return !!U((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777.elementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46458.element);
    }),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A74 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461778.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462;
      return !!H((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777.elementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46461]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46462.element);
    }),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A75 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461778.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466;
      return !!W((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777.elementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46465]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466.element);
    }),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A76 = [...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A72, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A73, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A74, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A75],
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D118 = 0,
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92994 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461778),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461779 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777.elementOrder["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92994.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469) ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A76[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D118++] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461779.every((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46470 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777.elementOrder[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46471]) ? null : {
    redoMutation: {
      id: SetBoardElementOrderMutation.id,
      params: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777.subUnitId,
        elementIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461779
      }
    },
    undoMutation: {
      id: SetBoardElementOrderMutation.id,
      params: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777.subUnitId,
        elementIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777.elementOrder
      }
    }
  };
}
function ur(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461851, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461853, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461854, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461855, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461856, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461857, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461858, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461859, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461860, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461861, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461862, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461863, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461864, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461865, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461866, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461867, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461869, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461870, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461871, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461872;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461873 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461851.data["element"]);
  if (!("shapeData" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461873)) return null;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB53 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461873.shapeData["shapeText"] ?? {},
    {
      autoFit: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461874,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461875
    } = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB53,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB54 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB53.dataModel && typeof var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB53.dataModel == "object" ? Tools.deepClone(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB53.dataModel) : {},
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461876 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461851.meta["parentNodeId"] ? HorizontalAlign.LEFT : HorizontalAlign.CENTER,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461877 = VerticalAlign.MIDDLE,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB53.horizontalAlign,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461879 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB53.verticalAlign,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461880 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB54.ha,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461881 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB54.va,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461882 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461853 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461853.horizontalAlign) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461878 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461880 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461876,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461883 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461854 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461854.verticalAlign) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461879 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461881 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461877,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461884 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.shapeText ? Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.shapeText) : null,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461885 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461884 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461855 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461884.dataModel) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461855.doc,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB99 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461885 ? (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461856 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461885.body) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461856.dataStream) ?? "").replace(/\r\n$/, "").replace(/\r/g, "\x0a") : typeof (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461884 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461884.text) == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461884.text : undefined,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB100 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.text ?? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB99 ?? (typeof var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB53.text == "string" ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB53.text : ""),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461886 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB54.doc,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A10 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB53.isRichText === true,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461887 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textData === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.text === undefined && var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A10 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461886 : undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textData ?? undefined,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461888 = qe(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB53, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461889 = Je({
      currentDataModel: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB54,
      documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461887,
      horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461882,
      shapeText: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461875,
        ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461857 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461857.color) === undefined ? null : {
          color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle["color"]
        }),
        ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461858 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461858.fontFamily) === undefined ? null : {
          fontFamily: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle["fontFamily"]
        }),
        ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461859 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461859.fontSize) === undefined ? null : {
          fontSize: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle["fontSize"]
        }),
        ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461860 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461860.bold) === undefined ? null : {
          bold: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle["bold"]
        }),
        ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461861 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461861.italic) === undefined ? null : {
          italic: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle["italic"]
        }),
        ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461862 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461862.underline) === undefined ? null : {
          underline: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle["underline"]
        }),
        ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461863 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461863.strikethrough) === undefined ? null : {
          strikethrough: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle["strikethrough"]
        }),
        ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461864 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461864.textFill) === undefined ? null : {
          textFill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle["textFill"]
        })
      },
      text: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB100,
      textStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461888,
      verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461883
    }),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB55 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461875,
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461884 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461889),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461884 ? {
        text: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB100
      } : {
        horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461882,
        verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461883
      }),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.text === undefined ? null : {
        text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.text
      }),
      ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461865 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461865.color) === undefined ? null : {
        color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle["color"]
      }),
      ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461866 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461866.fontFamily) === undefined ? null : {
        fontFamily: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle["fontFamily"]
      }),
      ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461867 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461867.fontSize) === undefined ? null : {
        fontSize: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle["fontSize"]
      }),
      ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461868.bold) === undefined ? null : {
        bold: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle["bold"]
      }),
      ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461869 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461869.italic) === undefined ? null : {
        italic: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle["italic"]
      }),
      ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461870 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461870.underline) === undefined ? null : {
        underline: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle["underline"]
      }),
      ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461871 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461871.strikethrough) === undefined ? null : {
        strikethrough: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle["strikethrough"]
      }),
      ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461872 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461872.textFill) === undefined ? null : {
        textFill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle["textFill"]
      })
    };
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461873.shapeData = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461873.shapeData,
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.shapeType === undefined ? null : {
      shapeType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.shapeType
    }),
    fill: {
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461873.shapeData["fill"] ?? {}),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.fill ?? {
        fillType: ShapeFillEnum.SolidFill
      }),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.fillColor === undefined ? null : {
        color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.fillColor
      })
    },
    stroke: {
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461873.shapeData["stroke"] ?? {}),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.stroke ?? {
        lineStrokeType: ShapeLineTypeEnum.SolidLine
      }),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.strokeColor === undefined ? null : {
        color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.strokeColor
      })
    },
    textRectPadding: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461873.shapeData["textRectPadding"] ?? {
      ...Ce
    },
    isTextBox: true,
    shapeText: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB55
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.foreignAttributes !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461890;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461890 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461873.custom) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461890.mindmap;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498 || !Object.prototype["hasOwnProperty"].call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498, "parentNodeId")) return null;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10 = {
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498.foreignAttributes ?? {})
    };
    Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.foreignAttributes).forEach(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655]) => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655 == null ? delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654] : var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655;
    });
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498,
      ...(Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10).length > 0 ? {
        foreignAttributes: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10
      } : {
        foreignAttributes: undefined
      })
    };
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11.foreignAttributes || delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11.foreignAttributes, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461873.custom = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461873.custom,
      mindmap: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB11
    };
  }
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461873.transform = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F3(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461851.data["element"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461873.shapeData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.shapeType), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461873.transform = yn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461873, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.text !== undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textData !== undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.shapeText !== undefined || vn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.textStyle));
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461891 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.hostSize ? Ge(X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461851.data, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461873), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852.hostSize) : null;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461891 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461873.transform = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461873.transform,
    width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461891.width,
    height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461891.height
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461873;
}
var var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB107 = "@univerjs-pro/boards-mind",
  ei = "1.0.0-insiders.20260907-70fc579";
function ni(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462353, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462354) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46613, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46614) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462354(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46613, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46614, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462353);
  };
}
function ri(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462357, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462358, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462359, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462360) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462362 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462358 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462360 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462360 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462358, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462359) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462360,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462363;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462362 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462357, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462358, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462359, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462360);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D142 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462357.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D142 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D142--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462363 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462357[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D142]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462362 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462363(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462362) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462363(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462358, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462359, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462362) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462363(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462358, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462359)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462362);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462361 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462362 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462358, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462359, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462362), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462362;
}
zt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462371, "pluginName", "UNIVER_BOARDS_MIND_PLUGIN"), zt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462371, "packageName", var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB107), zt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462371, "version", ei), zt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462371, "type", UniverInstanceType.UNIVER_BOARD), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462371 = ri([DependentOn(UniverLicensePlugin, UniverBoardsPlugin), ni(1, Inject(Injector)), ni(2, ICommandService), ni(3, IConfigService)], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462371);
export { Ve, et, Ze, St, fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F1, z, B, xt, Ct, bt, wt, Tt, W, K, Xt, q, nn, rn, wn, jt, an, qn, Z, fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig11DC, J, ur, fn, un, Cn, X, Qt, fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F2, en, tn, On, Pn, Nn, on, Y, er, Zt, Xn, L, we, dn, Fn, Zn };
