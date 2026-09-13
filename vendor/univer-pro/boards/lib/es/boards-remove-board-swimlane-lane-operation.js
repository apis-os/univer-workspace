import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { No, Qa, X, fi, id, tn } from "./internal-core-endo.js";
import { var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217 } from "./boards-board-element.js";
import { U } from "./boards-board-element-world-bounds.js";
import { Fi } from "./boards-board-swimlane-lane-bounds-in-filled-bounds.js";
import { M } from "./boards-board-element-type.js";
import { ni } from "./boards-offset-board-connector-geometry.js";
import { Q } from "./boards-board-connector-element-data.js";
import { L } from "./boards-iboard-element.js";
import { ws } from "./boards-remove-board-element.js";
import { Ss } from "./boards-add-board-element.js";
function Eu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465328) {
  return [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465328].sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461610, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461610.order - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461611.order).map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461612, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461613) => ({
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461612,
    order: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461613
  }));
}
function Du(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465330, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465331) {
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5962 = new Map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465331.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461614 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461614.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461614]));
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465330.lanes["some"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461615 => {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461615.locked !== true) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461616 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5962.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461615.id);
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461616 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461616.title !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461615.title || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461616.order !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461615.order || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461616.size !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461615.size || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461616.minSize !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461615.minSize || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461616.locked !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461615.locked || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461616.collapsed !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461615.collapsed;
  });
}
function Ou(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465334, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465335, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465336, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465337, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465338 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465336.transform) {
  return {
    id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217.id,
    params: {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465334,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465335,
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465336.elementId,
      element: X(Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465337)),
      transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465338 && {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465338
      }
    }
  };
}
function ku(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465344) {
  return {
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465344.left ?? 0,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465344.top ?? 0,
    width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465344.width ?? 0,
    height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465344.height ?? 0,
    angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465344.rotation ?? 0,
    flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465344.flipX,
    flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465344.flipY
  };
}
function Au(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465346, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465347, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465348, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465349, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465350, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465351) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465352, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465353;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465351) return {
    x: 0,
    y: 0
  };
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465354 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465346, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465347);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465354) return {
    x: 0,
    y: 0
  };
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465355 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465352 = Fi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465348, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465354).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461619 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461619.lane["id"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465350)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465352.bounds,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465356 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465353 = Fi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465349, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465354).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461620 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461620.lane["id"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465351)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465353.bounds;
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465355 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465356 ? {
    x: 0,
    y: 0
  } : {
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465356.left - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465355.left,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465356.top - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465355.top
  };
}
function ju(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465368, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465369, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465370) {
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A63 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465370.x !== 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465370.y !== 0;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465368.element["type"] === M.Connector) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB25 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A63 ? ni({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465368.element,
      laneId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465369,
      transform: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465368.element["transform"],
        left: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465368.element["transform"].left ?? 0) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465370.x,
        top: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465368.element["transform"].top ?? 0) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465370.y
      }
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465370) : {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465368.element,
      laneId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465369
    };
    return {
      element: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB25,
      transform: fi(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB25.transform)
    };
  }
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB175 = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465368.element,
    laneId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465369,
    transform: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A63 ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465368.element["transform"],
      left: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465368.element["transform"].left ?? 0) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465370.x,
      top: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465368.element["transform"].top ?? 0) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465370.y
    } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465368.element["transform"]
  };
  return {
    element: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB175,
    transform: var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A63 ? ku(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB175.transform) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465368.transform
  };
}
function Mu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465374, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465375, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465376) {
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299112 = new Set(),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A234 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465376.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461621 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461621.elementId);
  return tn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465374, [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465375], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A234).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461622 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299112.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461622)), Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465374).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461623 => {
    !Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461623) || var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299112.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461623.elementId) || Qa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461623.element).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299112.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382)) && var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299112.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461623.elementId);
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465375.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461625 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299112.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461625));
}
const Nu = {
  id: "board.operation.remove-swimlane-lane",
  type: CommandType.OPERATION,
  handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465380, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465381) => {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465381 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465381.containerId || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465381.laneId) return false;
    let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465382,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465383,
        containerId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465384,
        laneId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465385
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465381,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB49 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465381.contentPolicy ?? "reject",
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465386 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465380.get(L),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465387 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465386.getElementData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465382, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465383),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465388 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465387[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465384],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465389 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465388 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465388.element;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465388 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465389 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465389.type) !== M.Container || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465389.locked === true || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465389.containerData["behavior"].membershipLocked || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465389.containerData["kind"] !== "swimlane" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465389.containerData["swimlane"]) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465390 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465389.containerData["swimlane"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465391 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465390.lanes["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461626 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461626.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465385);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465391 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465391.locked === true || var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB49 === "move-to-lane" && (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465381.targetLaneId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465381.targetLaneId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465385 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465390.lanes["some"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461627 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461627.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465381.targetLaneId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461627.locked !== true))) return false;
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A236 = Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465387).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461628 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461628.element["parentId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465384 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461628.element["laneId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465385);
    if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A236.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461629 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461629.element["locked"] === true) || var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A236.length > 0 && var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB49 !== "promote-to-pool" && var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB49 !== "move-to-lane" && var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB49 !== "delete-content") return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465392 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465386.getElementOrder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465382, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465383),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465393 = Eu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465390.lanes["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461630 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461630.id !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465385));
    if (Du(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465390, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465393)) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465394 = X({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465389,
        containerData: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465389.containerData,
          swimlane: {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465390,
            lanes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465393
          }
        }
      }),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB177 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB49 === "move-to-lane" ? Au(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465387, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465384, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465389, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465394, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465385, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465381.targetLaneId) : {
        x: 0,
        y: 0
      },
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A237 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB49 === "delete-content" ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A236.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461631 => ({
        id: ws.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465382,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465383,
          elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461631.elementId,
          elementType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461631.element["type"],
          ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461631.element["type"] === M.Container ? {
            containerKind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461631.element["containerData"].kind
          } : {})
        }
      })) : var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A236.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461632 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461633 = ju(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461632, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB49 === "move-to-lane" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465381.targetLaneId : undefined, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB177);
        return Ou(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465382, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465383, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461632, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461633.element, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461633.transform);
      }),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A238 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB49 === "delete-content" ? Mu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465387, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465392, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A236).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461636 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465387[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461636]).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461637 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461637).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461638 => ({
        id: Ss.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465382,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465383,
          element: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461638.element)
        }
      })) : var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A236.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461639 => Ou(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465382, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465383, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461639, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461639.element)).reverse();
    return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A237.push(Ou(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465382, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465383, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465388, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465394)), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A238.unshift(Ou(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465382, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465383, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465388, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465389)), !No(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465387, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A237) || !sequenceExecute(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A237, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465380.get(ICommandService)).result ? false : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465380.get(IUndoRedoService).pushUndoRedo({
      unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465382,
      redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A237,
      undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A238
    }), true);
  }
};
export { Nu as RemoveBoardSwimlaneLaneOperation };
