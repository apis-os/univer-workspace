import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F4, hi } from "./internal-core-endo.js";
function bi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463234, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463235) {
  let {
      containerData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463236
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463234,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D187 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463236.titleVisible === false ? 0 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463236.headerSize ?? 0,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB107 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F4(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463234) ? {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463236.padding,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB108 = {
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463235.left + var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB107.left,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463235.top + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D187 + var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB107.top,
      width: Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463235.width - var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB107.left - var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB107.right),
      height: Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463235.height - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D187 - var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB107.top - var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB107.bottom)
    },
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D188 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463236.capturePolicy["expelHysteresis"] ?? 0;
  return {
    outerBounds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463235,
    headerBounds: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D187 > 0 ? {
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463235.left,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463235.top,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463235.width,
      height: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D187
    } : null,
    contentBounds: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB108,
    expandedContentBounds: hi(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB108, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D188)
  };
}
export { bi as resolveBoardContainerBounds };
