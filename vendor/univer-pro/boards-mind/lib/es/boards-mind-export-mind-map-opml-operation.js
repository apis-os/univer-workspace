import { AddBoardElementMutation, BOARD_MIND_MAP_CONNECTOR_ROLE, BOARD_MIND_MAP_CONTAINER_ROLE, BOARD_MIND_MAP_DECORATION_ROLE, BOARD_MIND_MAP_MODE_ID, BOARD_MIND_MAP_NODE_ROLE, BoardElementType, IBoardElementService, RemoveBoardElementMutation, SetBoardElementOrderMutation, UniverBoardsPlugin, createAddBoardElementsMutationInfos, createBoardConnectorElement, createBoardContainerElement, createBoardTextBoxShapeElement, createBoardTextBoxShapeTextData, mergeBoardRichTextDocument, offsetBoardConnectorGeometry, resolveBoardElementLocalTransformForParent, resolveBoardElementWorldBounds, resolveBoardElementWorldTransform, shapeTextToBoardDocumentTextStyle } from "@univerjs-pro/boards";
import { BooleanNumber, CommandType, DependentOn, Disposable, HorizontalAlign, ICommandService, IConfigService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, Tools, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createInternalEditorID, generateRandomId, merge, sequenceExecute } from "@univerjs/core";
import { ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTypeEnum } from "@univerjs-pro/engine-shape";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { H } from "./boards-mind-mind-map-node-meta.js";
import { Xe } from "./boards-mind-compare-mind-map-order-key.js";
import { qr } from "./boards-mind-import-mind-map-opml-operation.js";
function Vr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462277) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462277.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function Hr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462279) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462279 ? Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462279).map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590]) => "\x20" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46589 + "=\x22" + Vr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590) + "\x22").join("") : "";
}
function Ur(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462281, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462282) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462283 = " "["repeat"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462282),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB105 = 'text="' + Vr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462281.text) + "\x22" + Hr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462281.foreignAttributes);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462281.children["length"] ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462283 + "<outline " + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB105 + ">", ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462281.children["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591 => Ur(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462282 + 1)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462283 + "</outline>"].join("\x0a") : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462283 + "<outline " + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB105 + " />";
}
function Wr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462287) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462288 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462287.title ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462287.root["text"],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A136 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462287.root["children"].length ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462287.root["children"] : [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462287.root];
  return ['<?xml version="1.0" encoding="UTF-8"?>', "<opml\x20version=\x222.0\x22>", " <head>", " <title>" + Vr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462288) + "</title>", " </head>", " <body>", ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A136.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592 => Ur(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592, 2)), "\x20\x20</body>", "</opml>"].join("\x0a");
}
function Jr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462327) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462328 = "shapeData" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462327 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462327.shapeData["shapeText"] : undefined;
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462328 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462328.text) ?? "Add text";
}
function Yr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462331, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462332, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462333) {
  return Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462331).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596.element);
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597.structureScopeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462332 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46597.parentNodeId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462333;
  }).sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601) => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600.element),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601.element);
    return Xe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46602.orderKey, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46603.orderKey) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46600.elementId["localeCompare"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46601.elementId);
  });
}
function Xr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462337, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462338, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462339) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462340 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462339.element);
  return {
    text: Jr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462339.element),
    foreignAttributes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462340 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462340.foreignAttributes,
    collapsed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462340 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462340.collapsed,
    children: Yr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462337, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462338, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462339.elementId).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46608 => Xr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462337, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462338, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46608))
  };
}
const Zr = {
    id: "board.operation.mind-map.export-opml",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462345, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462346) => {
      if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462346 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462346.unitId) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462346.subUnitId || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462346.scopeId) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462347 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462345.get(IBoardElementService).getElementData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462346.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462346.subUnitId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462348 = Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462347).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609 => {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46609.element);
          return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610.structureScopeId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462346.scopeId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46610.parentNodeId === null;
        });
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462348 ? Wr({
        title: Jr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462348.element),
        root: Xr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462347, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462346.scopeId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462348)
      }) : false;
    }
  },
  Qr = [qr, Zr];
export { Zr as ExportMindMapOpmlOperation };
export { Qr };
