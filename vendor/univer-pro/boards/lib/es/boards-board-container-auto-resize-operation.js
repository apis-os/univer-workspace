import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { Mo, id } from "./internal-core-endo.js";
import { L } from "./boards-iboard-element.js";
import { M } from "./boards-board-element-type.js";
import { var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217 } from "./boards-board-element.js";
function od(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465658, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465659) {
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465658,
    containerData: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465658.containerData,
      behavior: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465658.containerData["behavior"],
        autoResize: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465659
      }
    }
  };
}
const sd = {
  id: "board.operation.set-container-auto-resize",
  type: CommandType.OPERATION,
  handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465662, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465663) => {
    if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465663 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465663.containerId)) return false;
    let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465664,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465665,
        containerId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465666,
        autoResize: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465667
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465663,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465668 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465662.get(L),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465669 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465668.getElementByParam({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465664,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465665,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465666
      });
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465669 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465669.element["type"] !== M.Container || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465669.element["locked"] || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465669.element["containerData"].behavior["autoResize"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465667 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465669.element["containerData"].behavior["membershipLocked"] && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465667) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465670 = od(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465669.element, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465667),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A254 = [{
        id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465664,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465665,
          elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465666,
          element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465670,
          transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465669.transform
        }
      }],
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A255 = [{
        id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465664,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465665,
          elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465666,
          element: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465669.element),
          transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465669.transform ? {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465669.transform
          } : undefined
        }
      }];
    return !Mo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465668.getElementData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465664, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465665), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A254) || !sequenceExecute(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A254, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465662.get(ICommandService)).result ? false : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465662.get(IUndoRedoService).pushUndoRedo({
      unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465664,
      redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A254,
      undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A255
    }), true);
  }
};
export { sd as SetBoardContainerAutoResizeOperation };
