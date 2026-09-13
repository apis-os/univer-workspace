import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { Mo, Pc, id } from "./internal-core-endo.js";
import { L } from "./boards-iboard-element.js";
function Ac(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464662, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464663) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464663.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461318 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461319;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461320 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461318.params;
    return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461320.elementId && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461319 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464662[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461320.elementId]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461319.element["locked"]) === true;
  });
}
const Nc = {
  id: "board.operation.fit-container-to-content",
  type: CommandType.OPERATION,
  handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464686, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464687) => {
    if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464687 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464687.containerId)) return false;
    let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464688,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464689,
        containerId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464690
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464687,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464691 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464686.get(L),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464692 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464691.getElementData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464688, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464689),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464693 = Pc({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464688,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464689,
        containerId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464690,
        elementData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464692,
        elementOrder: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464691.getElementOrder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464688, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464689)
      });
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464693 || Ac(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464692, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464693.redoMutations) || !Mo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464692, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464693.redoMutations)) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464694 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464686.get(ICommandService);
    return sequenceExecute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464693.redoMutations, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464694).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464686.get(IUndoRedoService).pushUndoRedo({
      unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464688,
      redoMutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464693.redoMutations,
      undoMutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464693.undoMutations
    }), true) : false;
  }
};
export { Nc as FitBoardContainerToContentOperation };
