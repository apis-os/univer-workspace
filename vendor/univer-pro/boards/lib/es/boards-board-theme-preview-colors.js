import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { gt } from "./boards-board-theme-presets.js";
function wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462432, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462433) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462434;
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462432 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462434 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462432.colorScheme) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462434[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462433]) ?? gt[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462433];
}
function Tt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462438) {
  if (!(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462438 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462438 != "object")) {
    if ("color" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462438 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462438.color == "string") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462438.color;
    if ("gradientStops" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462438 && Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462438.gradientStops)) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462438.gradientStops["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692 => !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692 == "object" && "color" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692.color == "string"));
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186.color;
    }
  }
}
function Et(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462440) {
  if (!(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462440 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462440 != "object")) return "color" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462440 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462440.color == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462440.color : undefined;
}
function Dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462442) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462444;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462445 = wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462442, "acc1"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462446 = wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462442, "acc2"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462447 = wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462442, "acc3"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462448 = wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462442, "acc4"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462449 = wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462442, "acc5"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462450 = wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462442, "acc6"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462451 = wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462442, "dk1"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462452 = Tt((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462443 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462442.fmtScheme) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462443.fillStyleLst[1]) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462445,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462453 = Et((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462444 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462442.fmtScheme) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462444.lnStyleLst[1]) ?? wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462442, "dk2");
  return {
    background: wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462442, "lt1"),
    text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462451,
    muted: wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462442, "lt2"),
    accent1: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462445,
    accent2: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462446,
    accent3: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462447,
    accent4: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462448,
    accent5: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462449,
    accent6: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462450,
    accents: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462445, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462446, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462447, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462448, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462449, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462450],
    defaultStyleColors: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462452, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462453, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462451]
  };
}
export { Dt as resolveBoardThemePreviewColors };
