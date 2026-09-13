import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { qn } from "./internal-core-endo.js";
import { M } from "./boards-board-element-type.js";
import { V } from "./boards-board-element-parent-chain.js";
function Jn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462800) {
  return qn({
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462800.element["transform"],
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462800.transform ?? {})
  });
}
function Yn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462802, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462803) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462802.element["type"] === M.Container ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462803,
    rotation: 0
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462803;
}
function H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462806, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462807) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462808 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462806[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462807];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462808) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462809 = V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462806, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462807),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462810 = Jn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462808),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462811 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462809.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46686) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46687 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462806[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46686];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46687) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688 = Jn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46687);
      return {
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685.left + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688.left ?? 0),
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46685.top + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46688.top ?? 0)
      };
    }, {
      left: 0,
      top: 0
    });
  return {
    elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462807,
    parentChain: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462809,
    localTransform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462810,
    worldTransform: Yn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462808, {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462810,
      left: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462810.left ?? 0) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462811.left,
      top: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462810.top ?? 0) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462811.top
    })
  };
}
export { H as resolveBoardElementWorldTransform };
