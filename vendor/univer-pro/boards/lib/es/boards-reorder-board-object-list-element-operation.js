import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { M } from "./boards-board-element-type.js";
import { id } from "./internal-core-endo.js";
import { L } from "./boards-iboard-element.js";
import { var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217 } from "./boards-board-element.js";
import { fc } from "./boards-board-permission.js";
function Lu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465436, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465437, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465438) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D279 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465436.indexOf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465437),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D280 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465436.indexOf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465438);
  if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D279 < 0 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D280 < 0 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D279 === var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D280) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465436;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A250 = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465436],
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465439] = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A250.splice(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D279, 1),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D281 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A250.indexOf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465438);
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A250.splice(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D281 + +(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D279 < var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D280), 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465439), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A250;
}
function Ru(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465444, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465445) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465444.length === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465445.length && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465444.every((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461645, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461646) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461645 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465445[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461646]);
}
function zu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465448, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465449) {
  return Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465448).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461647 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461647.element).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461648 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461648.type === M.Group && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461648.children["includes"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465449));
}
function Bu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465452, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465453, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465454) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465455;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465456 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465455 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465452[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465454]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465455.element;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465456) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465457 = zu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465452, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465454);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465457) return {
    type: "group",
    parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465457.id,
    order: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465457.children,
    parentElement: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465457
  };
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465458 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465456.parentId;
  return {
    type: "order",
    parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465458,
    order: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465458 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465453.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461649 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461650;
      return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461650 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465452[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461649]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461650.element["parentId"]) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465458;
    }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465453.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461653 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461654;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461654 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465452[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461653]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461654.element;
      return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655.parentId && !zu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465452, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461653);
    })
  };
}
function Vu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465466, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465467, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465468, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465469) {
  return {
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465466,
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465467,
    elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465468,
    element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465469,
    allowInactiveTarget: true,
    allowLockedTarget: true
  };
}
function Hu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465474, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465475, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465476) {
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5964 = new Map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465476.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461659, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461660) => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461659, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461660])),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299118 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465475),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465477 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465475.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461661 => var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5964.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461661)).sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461662, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461663) => var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5964.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461662) - var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5964.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461663)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D285 = 0;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465474.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461664 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299118.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461664) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465477[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D285++] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461664);
}
const Uu = {
  id: "board.operation.reorder-object-list-element",
  type: CommandType.OPERATION,
  handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465482, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465483) => {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465483 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465483.sourceElementId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465483.targetElementId) return false;
    let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465484,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465485,
        sourceElementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465486,
        targetElementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465487
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465483,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465488 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465482.get(L),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465489 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465488.getElementData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465484, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465485),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465490 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465488.getElementOrder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465484, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465485),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465491 = Bu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465489, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465490, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465486),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465492 = Bu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465489, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465490, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465487);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465491 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465492 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465491.type !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465492.type || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465491.parentId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465492.parentId) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465493 = Lu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465491.order, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465486, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465487);
    if (Ru(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465491.order, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465493)) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465494 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465482.get(ICommandService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465495,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465496;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465491.type === "group" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465491.parentElement) {
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB26 = {
          ...Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465491.parentElement),
          children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465493
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461665 = Vu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465484, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465485, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465491.parentElement["id"], var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB26),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461666 = Vu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465484, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465485, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465491.parentElement["id"], Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465491.parentElement)),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461667 = Hu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465490, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465491.order, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465493);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465495 = [{
        id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217.id,
        params: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461665
      }, {
        id: fc.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465484,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465485,
          elementIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461667
        }
      }], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465496 = [{
        id: fc.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465484,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465485,
          elementIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465490
        }
      }, {
        id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217.id,
        params: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461666
      }];
    } else {
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB27 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465484,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465485,
          elementIds: Hu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465490, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465491.order, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465493)
        },
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB28 = {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465484,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465485,
          elementIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465490
        };
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465495 = [{
        id: fc.id,
        params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB27
      }], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465496 = [{
        id: fc.id,
        params: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB28
      }];
    }
    return sequenceExecute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465495, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465494).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465482.get(IUndoRedoService).pushUndoRedo({
      unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465484,
      redoMutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465495,
      undoMutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465496
    }), true) : false;
  }
};
export { Uu as ReorderBoardObjectListElementOperation };
