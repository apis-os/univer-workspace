import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { Ea, Go, Qa, fs, id, ko } from "./internal-core-endo.js";
import { ec } from "./boards-board-unit-permission-actions.js";
import { oc } from "./boards-board-permission-value.js";
import { L } from "./boards-iboard-element.js";
import { M } from "./boards-board-element-type.js";
import { Q } from "./boards-board-connector-element-data.js";
function Jo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463978, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463979) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463980 = Go(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463978, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463979.subUnitId);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463980 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463980.elements[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463979.element["id"]]) return false;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB139 = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463980.elements
  };
  return delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB139[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463979.element["id"]], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463980.elements = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB139, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463980.elementOrder = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463980.elementOrder["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461026 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461026 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463979.element["id"]), true;
}
function Xo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463990, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463991, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463992) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463993 = Go(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463990, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463991);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463993) return false;
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929952 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463993.elementOrder);
  return var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929952.size !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463992.length || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463992.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031 => !var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929952.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461031)) ? false : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463993.elementOrder = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463992], true);
}
const lc = {
    type: CommandType.COMMAND,
    id: "board.command.set-permission",
    handler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464482, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464483) {
      return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464483 || !ec.includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464483.action) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464483.objectId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464483.unitId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464483.action !== UnitAction.Edit ? false : (oc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464482.get(IPermissionService), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464483.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464483.objectId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464483.action, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464483.value), true);
    }
  },
  uc = {
    id: "board.command.update-element",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464486, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464487) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464487) return false;
      let {
        historyId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464488,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464489,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464490,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464491
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464487;
      return fs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464486, {
        historyId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464488,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464489,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464490,
        updates: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464491]
      });
    }
  },
  dc = {
    id: "board.mutation.remove-element-only",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464498, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464499) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464500;
      let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464501,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464502,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464503,
        allowLockedParent: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464504
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464499;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464503) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464505 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464498.get(IUniverInstanceService).getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464501, UniverInstanceType.UNIVER_BOARD);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464505) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464498.get(L),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464507 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506.getElementByParam({
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464501,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464502,
          elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464503
        });
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464507 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464507.element["locked"] === true) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464508 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506.getElementData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464501, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464502),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464509 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464507.element["parentId"] ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464500 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464508[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464507.element["parentId"]]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464500.element : undefined;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464504 && ko(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464508, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464507.element) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464504 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464509 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464509.type) === M.Container && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464509.containerData["behavior"].membershipLocked || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464507.element["type"] === M.Container && Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464508).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461262 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461262.element["parentId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464503) || Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464508).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461263 => Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461263) && Qa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461263.element).includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464503))) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464510 = Ea(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506.getBatchRemoveElementOp([{
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464501,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464502,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464503
      }]));
      return Jo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464505, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464507) ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506.applyElementJson1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464501, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464502, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464510.redo), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506.removeElementNotification([{
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464501,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464502,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464503
      }]), true) : false;
    }
  },
  fc = {
    id: "board.mutation.set-element-order",
    type: CommandType.MUTATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464524, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464525) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464525 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464525.elementIds["length"] === 0) return false;
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464526,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464527,
          elementIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464528
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464525,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464529 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464524.get(IUniverInstanceService).getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464526, UniverInstanceType.UNIVER_BOARD);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464529) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464530 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464524.get(L);
      return Xo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464529, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464527, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464528) ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464530.setElementOrder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464526, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464527, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464528), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464530.orderUpdateNotification({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464526,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464527,
        elementIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464528
      }), true) : false;
    }
  };
export { lc as SetBoardPermissionCommand, uc as UpdateBoardElementCommand, dc as RemoveBoardElementOnlyMutation, fc as SetBoardElementOrderMutation };
