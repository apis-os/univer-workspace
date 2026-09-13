import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { Li, Ni } from "./internal-core-endo.js";
function Ii(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463308, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463309) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463310 = Ni(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463308, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463309);
  return Li(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463310 ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463308,
    containerData: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463308.containerData,
      swimlane: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463310
    }
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463308, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463309);
}
export { Ii as resolveBoardSwimlaneLaneRegionsInFilledBounds };
