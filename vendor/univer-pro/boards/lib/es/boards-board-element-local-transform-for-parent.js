import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { M } from "./boards-board-element-type.js";
import { H } from "./boards-board-element-world-transform.js";
import { qn } from "./internal-core-endo.js";
function W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462824, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462825) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462826;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462827 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462825.parentId ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462824[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462825.parentId] : undefined,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462828 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462825.parentId && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462827 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462827.element["type"]) === M.Container ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462826 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462824, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462825.parentId)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462826.worldTransform : null;
  return qn({
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462825.worldTransform,
    left: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462825.worldTransform["left"] ?? 0) - ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462828 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462828.left) ?? 0),
    top: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462825.worldTransform["top"] ?? 0) - ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462828 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462828.top) ?? 0)
  });
}
export { W as resolveBoardElementLocalTransformForParent };
