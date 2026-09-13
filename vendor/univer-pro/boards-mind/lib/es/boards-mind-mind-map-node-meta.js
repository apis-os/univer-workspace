import { AddBoardElementMutation, BOARD_MIND_MAP_CONNECTOR_ROLE, BOARD_MIND_MAP_CONTAINER_ROLE, BOARD_MIND_MAP_DECORATION_ROLE, BOARD_MIND_MAP_MODE_ID, BOARD_MIND_MAP_NODE_ROLE, BoardElementType, IBoardElementService, RemoveBoardElementMutation, SetBoardElementOrderMutation, UniverBoardsPlugin, createAddBoardElementsMutationInfos, createBoardConnectorElement, createBoardContainerElement, createBoardTextBoxShapeElement, createBoardTextBoxShapeTextData, mergeBoardRichTextDocument, offsetBoardConnectorGeometry, resolveBoardElementLocalTransformForParent, resolveBoardElementWorldBounds, resolveBoardElementWorldTransform, shapeTextToBoardDocumentTextStyle } from "@univerjs-pro/boards";
import { BooleanNumber, CommandType, DependentOn, Disposable, HorizontalAlign, ICommandService, IConfigService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, Tools, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createInternalEditorID, generateRandomId, merge, sequenceExecute } from "@univerjs/core";
import { ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTypeEnum } from "@univerjs-pro/engine-shape";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { A, k } from "./boards-mind-mind-map-mode-id.js";
function H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461133) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461134;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461135 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461133 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461133.custom;
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461135 || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461134 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461135.structured) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461134.modeId) !== k || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461135.structured["semanticRole"] !== A || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461135.structured["structureScopeId"] != "string" ? null : {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461135.mindmap,
    modeId: k,
    structureScopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461135.structured["structureScopeId"],
    semanticRole: A
  };
}
export { H as getMindMapNodeMeta };
