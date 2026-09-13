import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { Li, Ni } from "./internal-core-endo.js";
import { gi } from "./boards-contains-board-rect.js";
function Hi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463354, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463355, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463356) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463357 = Li(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463354, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463355).find(({
    contentBounds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906
  }) => gi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463356));
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463357 ? {
    lane: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463357.lane,
    bounds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463357.bounds
  } : null;
}
function Ui(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463362, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463363, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463364) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463365 = Ni(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463362, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463363);
  return Hi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463365 ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463362,
    containerData: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463362.containerData,
      swimlane: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463365
    }
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463362, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463363, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463364);
}
export { Ui as resolveBoardSwimlaneLaneForRectInFilledBounds };
