import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { H } from "./boards-board-element-world-transform.js";
function Kn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462796) {
  return {
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462796.width >= 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462796.left : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462796.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462796.width,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462796.height >= 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462796.top : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462796.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462796.height,
    width: Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462796.width),
    height: Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462796.height)
  };
}
function U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462818, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462819) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462820 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462818, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462819);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462820 ? Kn({
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462820.worldTransform["left"] ?? 0,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462820.worldTransform["top"] ?? 0,
    width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462820.worldTransform["width"] ?? 0,
    height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462820.worldTransform["height"] ?? 0
  }) : null;
}
export { U as resolveBoardElementWorldBounds };
