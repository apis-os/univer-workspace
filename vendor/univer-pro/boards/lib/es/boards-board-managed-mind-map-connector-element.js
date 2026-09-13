import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { ru } from "./internal-core-endo.js";
function ou(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465222) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465223, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465224;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465225 = ru(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465222);
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465225 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465223 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465225.structured) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465223.modeId) === "mindmap" && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465224 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465225.mindmap) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465224.managed) === true;
}
export { ou as isBoardManagedMindMapConnectorElement };
