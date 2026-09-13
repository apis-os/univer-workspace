import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { Vn } from "./boards-board-container-element-data.js";
function Bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462764) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462764 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462764.element["parentId"];
}
function V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462768, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462769) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A46 = [],
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929924 = new Set([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462769]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462770 = Bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462768[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462769]);
  for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462770 && !var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929924.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462770);) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462768[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462770];
    if (!Vn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219)) break;
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A46.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462770), var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929924.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462770), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462770 = Bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219);
  }
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A46;
}
export { V as resolveBoardElementParentChain };
