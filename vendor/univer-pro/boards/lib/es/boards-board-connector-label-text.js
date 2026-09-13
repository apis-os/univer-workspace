import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { Va } from "./boards-board-connector-label-document-data.js";
function Ha(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463636) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463637;
  if (typeof (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463636 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463636.content) == "string") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463636.content;
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB47 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463637 = Va(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463636)) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463637 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463637.body) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463637.dataStream) ?? "";
  return (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB47.endsWith("\x0d\x0a") ? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB47.slice(0, -2) : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB47).replace(/\r/g, "\x0a");
}
export { Ha as getBoardConnectorLabelText };
