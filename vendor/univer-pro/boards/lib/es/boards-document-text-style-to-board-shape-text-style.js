import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
function Yi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463396) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463397, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463398, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463399;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463396 ? {
    ...(typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463396.ff == "string" ? {
      fontFamily: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463396.ff
    } : null),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463396.fs === undefined ? null : {
      fontSize: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463396.fs
    }),
    ...(typeof ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463397 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463396.cl) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463397.rgb) == "string" ? {
      color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463396.cl["rgb"]
    } : null),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463396.bl === undefined ? null : {
      bold: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463396.bl === BooleanNumber.TRUE
    }),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463396.it === undefined ? null : {
      italic: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463396.it === BooleanNumber.TRUE
    }),
    ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463398 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463396.ul) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463398.s) === undefined ? null : {
      underline: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463396.ul["s"] === BooleanNumber.TRUE
    }),
    ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463399 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463396.st) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463399.s) === undefined ? null : {
      strikethrough: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463396.st["s"] === BooleanNumber.TRUE
    }),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463396.textFill === undefined ? null : {
      textFill: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463396.textFill
    })
  } : {};
}
export { Yi as documentTextStyleToBoardShapeTextStyle };
