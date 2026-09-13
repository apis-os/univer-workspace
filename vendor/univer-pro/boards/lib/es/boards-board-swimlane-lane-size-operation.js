import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { Mo, X, id, ki, wd } from "./internal-core-endo.js";
import { L } from "./boards-iboard-element.js";
import { M } from "./boards-board-element-type.js";
import { Ti } from "./boards-board-swimlane-data.js";
import { var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217 } from "./boards-board-element.js";
function Ed(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465824) {
  return Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465824) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465824 >= 0;
}
function Dd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465826) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465827;
  return [...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465827 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465826.containerData["swimlane"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465827.lanes) ?? [])].sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461786, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461786.order - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.order);
}
function Od(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465830, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465831, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465832) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465833;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465834 = Dd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465830),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465835 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465834[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465834.length - 1];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465835 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465835.id !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465831.id || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465831.collapsed === true) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465830.transform;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D287 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465832 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465831.size;
  return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D287 === 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465830.transform : ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465833 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465830.containerData["swimlane"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465833.orientation) === "horizontal" ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465830.transform,
    height: Math.max(0, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465830.transform["height"] ?? 0) + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D287)
  } : {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465830.transform,
    width: Math.max(0, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465830.transform["width"] ?? 0) + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D287)
  };
}
function kd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465842, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465843, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465844) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465845 = Dd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465842),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D289 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465845.findIndex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465843),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465846 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465845[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D289];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465846 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465846.locked === true || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465844 < (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465846.minSize ?? 0)) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465847 = Od(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465842, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465846, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465844),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465848 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465845[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D289 + 1],
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D290 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465844 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465846.size,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465849 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465842.containerData["swimlane"].lanes["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461789 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461789.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465843 ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461789,
      size: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465844
    } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461789);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465848) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465848.locked === true || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465848.collapsed === true) return null;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D44 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465848.size - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D290;
    return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D44 < (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465848.minSize ?? 0) ? null : {
      transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465847,
      lanes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465849.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465848.id ? {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393,
        size: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D44
      } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46393)
    };
  }
  return {
    transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465847,
    lanes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465849
  };
}
const Ad = {
  id: "board.operation.set-swimlane-lane-size",
  type: CommandType.OPERATION,
  handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465858, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465859) => {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465859 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465859.containerId || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465859.laneId || !Ed(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465859.size)) return false;
    let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465860,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465861,
        containerId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465862,
        laneId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465863,
        size: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465864
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465859,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465865 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465858.get(L).getElementData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465860, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465861),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465866 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465865[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465862],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465867 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465866 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465866.element;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465866 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465867 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465867.type) !== M.Container || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465867.locked === true || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465867.containerData["kind"] !== "swimlane" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465867.containerData["swimlane"]) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465868 = kd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465867, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465863, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465864);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465868) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465869 = Ti({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465867.containerData["swimlane"],
      lanes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465868.lanes
    });
    if (ki(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465867.containerData["swimlane"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465869)) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465870 = X({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465867,
        transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465868.transform,
        containerData: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465867.containerData,
          swimlane: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465869
        }
      }),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB197 = {
        id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465860,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465861,
          elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465862,
          element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465870,
          transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465868.transform ? {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465868.transform
          } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465868.transform
        }
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465871 = wd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465860, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465861, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465865, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465866, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465870),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A270 = [var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB197, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465871.redoMutations];
    if (!Mo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465865, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A270)) return false;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB198 = {
        id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465860,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465861,
          elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465862,
          element: X(Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465867)),
          transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465866.transform ? {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465866.transform
          } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465866.transform
        }
      },
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A271 = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465871.undoMutations, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB198];
    return sequenceExecute(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A270, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465858.get(ICommandService)).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465858.get(IUndoRedoService).pushUndoRedo({
      unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465860,
      redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A270,
      undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A271
    }), true) : false;
  }
};
export { Ad as SetBoardSwimlaneLaneSizeOperation };
