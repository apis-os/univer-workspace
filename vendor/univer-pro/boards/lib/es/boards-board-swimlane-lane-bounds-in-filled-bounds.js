import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { Ni, Pi } from "./internal-core-endo.js";
function Fi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463302, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463303) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463304 = Ni(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463302, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463303);
  return Pi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463304 ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463302,
    containerData: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463302.containerData,
      swimlane: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463304
    }
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463302, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463303);
}
export { Fi as resolveBoardSwimlaneLaneBoundsInFilledBounds };
