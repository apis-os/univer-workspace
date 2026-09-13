import { AddBoardElementMutation, BOARD_MIND_MAP_CONNECTOR_ROLE, BOARD_MIND_MAP_CONTAINER_ROLE, BOARD_MIND_MAP_DECORATION_ROLE, BOARD_MIND_MAP_MODE_ID, BOARD_MIND_MAP_NODE_ROLE, BoardElementType, IBoardElementService, RemoveBoardElementMutation, SetBoardElementOrderMutation, UniverBoardsPlugin, createAddBoardElementsMutationInfos, createBoardConnectorElement, createBoardContainerElement, createBoardTextBoxShapeElement, createBoardTextBoxShapeTextData, mergeBoardRichTextDocument, offsetBoardConnectorGeometry, resolveBoardElementLocalTransformForParent, resolveBoardElementWorldBounds, resolveBoardElementWorldTransform, shapeTextToBoardDocumentTextStyle } from "@univerjs-pro/boards";
import { BooleanNumber, CommandType, DependentOn, Disposable, HorizontalAlign, ICommandService, IConfigService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, Tools, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createInternalEditorID, generateRandomId, merge, sequenceExecute } from "@univerjs/core";
import { ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTypeEnum } from "@univerjs-pro/engine-shape";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { Ze } from "./internal-core-endo.js";
function Qe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46827) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828;
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46827; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 += 1) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828 = Ze(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828, undefined);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828 ?? Ze(undefined, undefined);
}
export { Qe as getMindMapDefaultChildOrderKey };
