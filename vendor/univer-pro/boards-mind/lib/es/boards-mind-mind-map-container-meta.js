import { AddBoardElementMutation, BOARD_MIND_MAP_CONNECTOR_ROLE, BOARD_MIND_MAP_CONTAINER_ROLE, BOARD_MIND_MAP_DECORATION_ROLE, BOARD_MIND_MAP_MODE_ID, BOARD_MIND_MAP_NODE_ROLE, BoardElementType, IBoardElementService, RemoveBoardElementMutation, SetBoardElementOrderMutation, UniverBoardsPlugin, createAddBoardElementsMutationInfos, createBoardConnectorElement, createBoardContainerElement, createBoardTextBoxShapeElement, createBoardTextBoxShapeTextData, mergeBoardRichTextDocument, offsetBoardConnectorGeometry, resolveBoardElementLocalTransformForParent, resolveBoardElementWorldBounds, resolveBoardElementWorldTransform, shapeTextToBoardDocumentTextStyle } from "@univerjs-pro/boards";
import { BooleanNumber, CommandType, DependentOn, Disposable, HorizontalAlign, ICommandService, IConfigService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, Tools, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createInternalEditorID, generateRandomId, merge, sequenceExecute } from "@univerjs/core";
import { ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTypeEnum } from "@univerjs-pro/engine-shape";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { k, ye } from "./boards-mind-mind-map-mode-id.js";
function V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461128;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461129 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127.custom;
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461129 || ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461128 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461129.structured) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461128.modeId) !== k || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461129.structured["semanticRole"] !== ye || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461129.structured["structureScopeId"] != "string" ? null : {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461129.mindmap,
    modeId: k,
    structureScopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461129.structured["structureScopeId"],
    semanticRole: ye
  };
}
export { V as getMindMapContainerMeta };
