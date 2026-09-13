import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { Mo, X, id, ki, wd, wi } from "./internal-core-endo.js";
import { Ti } from "./boards-board-swimlane-data.js";
import { L } from "./boards-iboard-element.js";
import { M } from "./boards-board-element-type.js";
import { var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217 } from "./boards-board-element.js";
const Td = {
  id: "board.operation.set-swimlane-lanes",
  type: CommandType.OPERATION,
  handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465802, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465803) => {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465803 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465803.containerId || !wi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465803.swimlane)) return false;
    let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465804,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465805,
        containerId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465806
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465803,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465807 = Ti(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465803.swimlane),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465808 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465802.get(L).getElementData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465804, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465805),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465809 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465808[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465806],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465810 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465809 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465809.element;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465809 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465810 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465810.type) !== M.Container || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465810.locked === true || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465810.containerData["kind"] !== "swimlane" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465810.containerData["swimlane"] || ki(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465810.containerData["swimlane"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465807)) return false;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB191 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465803.transform ? {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465810.transform,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465803.transform
      } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465810.transform,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465811 = X({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465810,
        transform: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB191,
        containerData: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465810.containerData,
          swimlane: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465807)
        }
      }),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB192 = {
        id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465804,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465805,
          elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465806,
          element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465811,
          transform: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB191 && {
            ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB191
          }
        }
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465812 = wd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465804, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465805, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465808, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465809, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465811),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A266 = [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB192, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465812.redoMutations];
    if (!Mo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465808, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A266)) return false;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB193 = {
        id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465804,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465805,
          elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465806,
          element: X(Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465810)),
          transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465809.transform ? {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465809.transform
          } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465809.transform
        }
      },
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A267 = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465812.undoMutations, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB193];
    return sequenceExecute(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A266, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465802.get(ICommandService)).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465802.get(IUndoRedoService).pushUndoRedo({
      unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465804,
      redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A266,
      undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A267
    }), true) : false;
  }
};
export { Td as SetBoardSwimlaneLanesOperation };
