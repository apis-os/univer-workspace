import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { U } from "./boards-board-element-world-bounds.js";
import { uu, yi } from "./internal-core-endo.js";
function du(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465246) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465247 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465246.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461593, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461594) => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461593[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461594.id] = {
    unitId: "",
    subUnitId: "",
    elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461594.id,
    element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461594
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461593), {});
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465246.flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461595 => U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465247, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461595.id) ?? []);
}
function fu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465250) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465251 = yi(du(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465250.elements)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465252 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465250.bounds ? uu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465250.bounds) : null;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465252 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465251 ? uu(yi([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465252, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465251])) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465252 || uu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465251);
}
export { fu as resolveBoardImportDraftBounds };
