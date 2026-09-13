import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { Ec, G, No, Pc, Sc, X, fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F7, id, vi, vs, yi } from "./internal-core-endo.js";
import { M } from "./boards-board-element-type.js";
import { so } from "./boards-board-structural-container.js";
import { U } from "./boards-board-element-world-bounds.js";
import { H } from "./boards-board-element-world-transform.js";
import { W } from "./boards-board-element-local-transform-for-parent.js";
import { var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217 } from "./boards-board-element.js";
import { V } from "./boards-board-element-parent-chain.js";
import { gi } from "./boards-contains-board-rect.js";
import { Dc } from "./boards-board-container-membership-preview.js";
import { mc } from "./boards-board-container-membership-intent-from-preview.js";
import { Q } from "./boards-board-connector-element-data.js";
import { oo } from "./boards-board-connector-parent-scope.js";
import { Vn } from "./boards-board-container-element-data.js";
import { Wn } from "./boards-would-board-container-cycle.js";
import { Ui } from "./boards-board-swimlane-lane-for-rect-in-filled-bounds.js";
import { Ii } from "./boards-board-swimlane-lane-regions-in-filled-bounds.js";
import { Ss } from "./boards-add-board-element.js";
import { ws } from "./boards-remove-board-element.js";
function bs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464186, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464187) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A144 = Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464187).map(vs);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464186.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461128;
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461128 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127.name) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461128.trim();
    return var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11 ? (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A144.push(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127) : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127.name = createUniqueShapeName(fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F7(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A144), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A144.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127.name ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127.id), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461127);
  });
}
function Fc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464726, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464727) {
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929988 = new Set(Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464727)),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929989 = new Set();
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461357 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464726) {
    if (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929988.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461357.id) || var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929989.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461357.id)) return false;
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929989.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461357.id);
  }
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5948 = new Map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464726.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461358 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461358.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461358])),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464728 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461359 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461360, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461361;
      return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461360 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5948.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461359)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461360.parentId) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461361 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464727[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461359]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461361.element["parentId"]);
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464729 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461365 => {
      let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92998 = new Set([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461365.id]),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461366 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461365.parentId;
      for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461366;) {
        if (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92998.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461366)) return true;
        var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92998.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461366), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461366 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464728(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461366);
      }
      return false;
    };
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464726.every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461369 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461370;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461369.parentId) return true;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464729(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461369)) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461371 = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5948.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461369.parentId) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461370 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464727[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461369.parentId]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461370.element);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461371 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461371.type !== M.Container) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461372 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461371.containerData["behavior"],
      var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A13 = !var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5948.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461369.parentId),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461373 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A13 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464727[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461369.parentId] : undefined;
    return var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A13 && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461373 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461373.hidden) === true || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461371.visible === false || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461371.locked === true || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461371.selectable === false || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461372.membershipLocked) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461372.acceptsChildren ? false : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461369.type !== M.Container || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461372.acceptsContainer && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461372.allowNested;
  });
}
function Ic(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464734, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464735, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464736) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464734) return true;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464737 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464736[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464734],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464738 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464735.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461379 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461379.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464734) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464737 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464737.element);
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464738 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464738.type) === M.Container && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464737 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464737.hidden) !== true && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464738.visible !== false && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464738.locked !== true && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464738.selectable !== false;
}
function Lc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464744) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464744.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461380 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461381 = X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461380);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461381.type !== M.Container || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461381.containerData["behavior"].membershipLocked || so(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461381) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461381.containerData["behavior"].autoResize ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461381 : {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461381,
      containerData: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461381.containerData,
        behavior: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461381.containerData["behavior"],
          autoResize: true
        }
      }
    };
  });
}
function Rc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464746) {
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5950 = new Map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464746.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461384 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461384.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461384])),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A210 = [],
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929992 = new Set(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464747 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385 => {
      if (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929992.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385.id)) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461386 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385.parentId ? var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5950.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385.parentId) : undefined;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461386 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464747(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461386), var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929992.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385.id), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A210.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461385);
    };
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464746.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464747), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A210;
}
function zc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464750, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464751) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464752;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464751.laneId !== undefined) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464751.laneId;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464751.parentId) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464753 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464752 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464750[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464751.parentId]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464752.element;
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464753 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464753.type) !== M.Container || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464753.containerData["kind"] !== "swimlane") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464751.laneId;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464754 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464750, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464751.id),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464755 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464754 ? tl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464750, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464751.parentId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464754) : undefined;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464755) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464755;
}
function Bc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464762, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464763) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464763.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461389 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461390 = zc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464762, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461389);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461389.laneId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461390 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461389 : {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461389,
      laneId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461390
    };
  });
}
function Vc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464766, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464767, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464768) {
  return {
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464766,
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464767,
    elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464768.id,
    element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464768,
    transform: {
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464768.transform["left"],
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464768.transform["top"],
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464768.transform["width"],
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464768.transform["height"],
      angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464768.transform["rotation"] ?? 0,
      flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464768.transform["flipX"],
      flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464768.transform["flipY"]
    }
  };
}
function Hc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464772, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464773, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464774) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464774 === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464774 < 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464774 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464772.length) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464772.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464773);
    return;
  }
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464772.splice(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464774, 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464773);
}
function Uc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464778) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB163 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464778.elementData
    },
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A212 = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464778.elementOrder];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464778.orderedElements["forEach"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461393, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461394) => {
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB163[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461393.id] = Vc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464778.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464778.subUnitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461393), Hc(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A212, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461393.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464778.insertIndex === undefined ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464778.insertIndex + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461394);
  }), {
    elementData: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB163,
    elementOrder: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A212
  };
}
function Wc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464780, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464781) {
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464780,
    transform: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464780.transform,
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464781.left,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464781.top,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464781.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464781.height,
      rotation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464781.angle,
      flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464781.flipX,
      flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464781.flipY
    }
  };
}
function Gc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464784) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464784.left === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464784.top === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464784.width === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464784.height === undefined ? null : {
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464784.left,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464784.top,
    width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464784.width,
    height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464784.height
  };
}
function Kc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464786, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464787) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464786.left !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464787.left || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464786.top !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464787.top || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464786.width !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464787.width || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464786.height !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464787.height;
}
function qc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464790, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464791) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464790 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464790.left) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464791.left || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464790 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464790.top) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464791.top || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464790 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464790.width) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464791.width || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464790 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464790.height) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464791.height || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464790 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464790.angle) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464791.angle || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464790 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464790.flipX) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464791.flipX || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464790 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464790.flipY) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464791.flipY;
}
function Jc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464794) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D273 = Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464794.containerIds["length"]);
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37 < var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D273; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37++) {
    let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = false;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464794.containerIds["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464794.elementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113.element;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114.type !== M.Container || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114.containerData["behavior"].membershipLocked || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114.containerData["behavior"].autoResize) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464794.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464794.elementOrder["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466;
          return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464794.elementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.element["parentId"]) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112;
        }),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117 = yi([Sc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115), ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610;
          return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464794.elementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610.element["type"]) !== M.Connector;
        }).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 => U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464794.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613)).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614)]);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118 = Ec(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118.left === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115.left && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118.top === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115.top && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118.width === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115.width && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118.height === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115.height) return;
      let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59 = new Map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615 => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616;
          return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464794.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616.worldTransform];
        })),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119 = G(W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464794.elementData, {
          parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114.parentId,
          worldTransform: {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114.transform,
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118,
            rotation: 0
          }
        })),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120 = Wc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464794.elementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112] = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113,
        element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120,
        transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464794.redoMutations["push"]({
        id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464794.unitId,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464794.subUnitId,
          elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112,
          element: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120),
          transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119,
          ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114.locked === true ? {
            allowLockedTarget: true
          } : {})
        }
      }), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = true, var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620) => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464794.elementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620];
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619) return;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622 = G(W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464794.elementData, {
            parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112,
            worldTransform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619
          })),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623 = Gc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624 = Wc({
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621.element,
            laneId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623 ? tl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464794.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621.element["laneId"]
          }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464794.elementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620] = {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621,
          element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624,
          transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464794.redoMutations["push"]({
          id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464794.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464794.subUnitId,
            elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620,
            element: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624),
            transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622,
            ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4621.element["locked"] === true ? {
              allowLockedTarget: true
            } : {})
          }
        });
      });
    }), !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A) break;
  }
}
function Yc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796) {
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929994 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.addedElements["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461397 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461397.id)),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929995 = new Set();
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.addedElements["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461398 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461399 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461398.parentId;
    for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461399 && !var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929994.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461399);) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.elementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461399];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.element["type"] !== M.Container) break;
      var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929995.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461399), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461399 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130.element["parentId"];
    }
  });
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464797 = Array.from(var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929995).sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461402, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461403) => V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461403).length - V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461402).length),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D275 = Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464797.length);
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38 < var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D275; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38++) {
    let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1 = false;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464797.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.elementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.originalElementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132.element;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.type !== M.Container || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.containerData["behavior"].autoResize) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.elementOrder["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632;
          return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.elementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632.element["parentId"]) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131;
        }),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137 = yi([Sc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135), ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636;
          return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.elementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636.element["type"]) !== M.Connector;
        }).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639 => U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639)).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640)]);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138 = Ec(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137);
      if (!Kc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138)) return;
      let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B592 = new Map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641 => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642;
          return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642.worldTransform];
        })),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139 = G(W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.elementData, {
          parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.parentId,
          worldTransform: {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.transform,
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138,
            rotation: 0
          }
        })),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140 = Wc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.elementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131] = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132,
        element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140,
        transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.redoMutations["push"]({
        id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.unitId,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.subUnitId,
          elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131,
          element: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140),
          transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139
        }
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.undoMutations["unshift"]({
        id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.unitId,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.subUnitId,
          elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131,
          element: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133.element),
          transform: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133.transform)
        }
      }), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1 = true, var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B592.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646) => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.elementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646];
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645) return;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648 = G(W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.elementData, {
          parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131,
          worldTransform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645
        }));
        if (!qc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.transform, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648)) return;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649 = Wc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.element, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.elementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646] = {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647,
          element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649,
          transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.redoMutations["push"]({
          id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.subUnitId,
            elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646,
            element: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649),
            transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648
          }
        }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.undoMutations["unshift"]({
          id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.unitId,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796.subUnitId,
            elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646,
            element: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.element),
            transform: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.transform)
          }
        });
      });
    }), !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A1) break;
  }
}
function Xc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800) {
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929998 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.orderedElements["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461404 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461404.id)),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A214 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.orderedElements["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461405 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461405.type === M.Container).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461406 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461406.id),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A215 = [];
  var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A214.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461407 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461408 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.elementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461407];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461408 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461408.element["type"] !== M.Container || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461408.element["containerData"].behavior["membershipLocked"] || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461408.element["containerData"].behavior["autoCapture"]) return;
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13 = Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.elementData).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286 => !var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929998.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286)),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461409 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461407),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461409 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461408.element["containerData"].kind !== "swimlane" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461408.element["containerData"].behavior["autoResize"] ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287 => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288;
        if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.elementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287]) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288.element["parentId"]) return false;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287);
        return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289 && gi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461409, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289);
      }) : [],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461410 = Dc({
        containerId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461407,
        elementData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.elementData,
        candidateElementIds: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A13,
        autosizeCaptureCandidateIds: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A14
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461411 = mc({
        containerId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461407,
        elementData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.elementData,
        preview: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461410
      });
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461411.captured["length"] > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461411.autosized["length"] > 0) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461408.element,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461411.autosized[0].nextBounds,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295 = G(W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.elementData, {
          parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293.parentId,
          worldTransform: {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293.transform,
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294,
            rotation: 0
          }
        })),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296 = Wc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.redoMutations["push"]({
        id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.unitId,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.subUnitId,
          elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461407,
          element: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296),
          transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295
        }
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461408 = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461408,
        element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46296,
        transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.elementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461407] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461408;
    }
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461411.captured["forEach"](({
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297
    }) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.elementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46298.worldTransform,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302 = G(W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.elementData, {
          parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461407,
          worldTransform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300
        })),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303 = Wc({
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299.element,
          parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461407,
          laneId: tl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461407, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301)
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.redoMutations["push"]({
        id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.unitId,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.subUnitId,
          elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297,
          element: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303),
          transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302,
          ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299.element["locked"] === true ? {
            allowLockedTarget: true
          } : {})
        }
      }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A215.push({
        id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217.id,
        params: {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.unitId,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.subUnitId,
          elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297,
          element: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299.element),
          transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299.transform ? {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299.transform
          } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299.transform,
          ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299.element["locked"] === true ? {
            allowLockedTarget: true
          } : {})
        }
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.elementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46297] = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46299,
        element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303,
        transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302
      };
    });
  }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A215.length > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.undoMutations["unshift"](...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A215), Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.elementData).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461418;
    if (!Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417)) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419 = oo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417.element);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417.element["parentId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419.parentId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417.element["laneId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419.laneId) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461420 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461418 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417.elementId)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461418.worldTransform;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461420) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421 = G(W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.elementData, {
        parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419.parentId,
        worldTransform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461420
      })),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422 = Wc({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417.element,
        parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419.parentId,
        laneId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419.laneId
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.redoMutations["push"]({
      id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217.id,
      params: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.subUnitId,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417.elementId,
        element: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422),
        transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421
      }
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.undoMutations["unshift"]({
      id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217.id,
      params: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.subUnitId,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417.elementId,
        element: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417.element),
        transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417.transform ? {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417.transform
        } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417.transform
      }
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800.elementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417.elementId] = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461417,
      element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422,
      transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421
    };
  });
}
function Zc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464802, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464803) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464804;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464805 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464804 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464802[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464803]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464804.element["parentId"],
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299100 = new Set([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464803]);
  for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464805;) {
    if (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299100.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464805)) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464802[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464805];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311) return false;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311.hidden === true || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311.element["visible"] === false) return true;
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299100.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464805), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464805 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311.element["parentId"];
  }
  return false;
}
function Qc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464810, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464811) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464812;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464813 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464812 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464810[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464811]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464812.element["parentId"],
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299102 = new Set([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464811]);
  for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464813;) {
    if (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299102.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464813)) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464810[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464813];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312) return false;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312.element["type"] === M.Container && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312.element["containerData"].behavior["membershipLocked"]) return true;
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299102.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464813), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464813 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312.element["parentId"];
  }
  return false;
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F9(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464818, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464819, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464820) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464821, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464822;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464823 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464821 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464818[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464819]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464821.element,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464824 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464822 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464818[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464820]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464822.element["parentId"];
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464824 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464824 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464819 || !Vn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464818[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464824]) || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464823 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464823.type) !== M.Container ? true : V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464818, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464819).includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464824) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464823.containerData["capturePolicy"].allowCaptureFromAncestorContainer === true : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464823.containerData["capturePolicy"].allowCaptureFromSiblingContainer;
}
function el(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464832, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464833, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464834) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464835, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464836;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464837 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464835 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464832[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464833]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464835.element,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464838 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464836 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464832[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464834]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464836.element;
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464837 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464837.type) === M.Container ? fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F9(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464832, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464833, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464834) ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464838 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464838.type) !== M.Container || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464837.containerData["behavior"].acceptsContainer && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464837.containerData["behavior"].allowNested && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464837.containerData["capturePolicy"].allowCaptureContainer && !Wn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464832, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464834, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464833) : false : true;
}
function tl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464846, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464847, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464848) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464849, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464850;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464851 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464849 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464846[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464847]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464849.element,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464852 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464846, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464847);
  if (!(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464851 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464851.type !== M.Container || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464851.containerData["kind"] !== "swimlane" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464852)) return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464850 = Ui(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464851, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464852, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464848)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464850.lane["id"];
}
function nl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464860, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464861, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464862, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464863) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464860.containerData["kind"] === "swimlane" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464860.containerData["swimlane"] ? Ui(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464860, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464861, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464863) ? true : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464860.containerData["behavior"].autoResize && Ii(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464860, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464861).some(({
    contentBounds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461429
  }) => vi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461429, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464863) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464863.width > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461429.width || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464863.height > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461429.height)) : gi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464862, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464863) ? true : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464860.containerData["behavior"].autoResize && vi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464862, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464863) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464863.width > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464862.width || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464863.height > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464862.height);
}
function rl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464868) {
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299104 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464868.orderedElements["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461430 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461430.id));
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464868.orderedElements["some"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461431 => {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461431.type !== M.Container || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461431.containerData["behavior"].membershipLocked || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461431.containerData["behavior"].autoCapture || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461431.containerData["behavior"].acceptsChildren || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461431.containerData["capturePolicy"].enabled || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461431.visible === false || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461431.locked !== true && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461431.selectable !== false) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461432 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464868.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461431.id);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461432) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461433 = Sc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461431, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461432);
    return Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464868.elementData).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313 => !var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299104.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313)).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464868.elementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464868.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314);
      return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315.element["visible"]) !== false && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315.hidden) !== true && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315.element["locked"]) !== true && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315.element["selectable"]) !== false && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315.element["type"]) !== M.Connector && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315.element["type"]) !== M.Container || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315.element["containerData"].behavior["membershipLocked"]) && !Zc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464868.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314) && !Qc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464868.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314) && el(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464868.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461431.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314) && nl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461431, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461432, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461433, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316);
    });
  });
}
function il(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464870, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464871) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464871.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461437 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461438;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461437.id !== var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217.id) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461439 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461437.params;
    return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461439.elementId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461439.allowLockedTarget !== true && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461438 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464870[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461439.elementId]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461438.element["locked"]) === true;
  });
}
function ol(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464892) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464892.elements["length"] === 0) return null;
  let {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464893,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464894,
      insertIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464895,
      fitContainerId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464896,
      elementData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464897,
      elementOrder: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464898
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464892,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464899 = Lc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464892.elements);
  if (!Fc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464899, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464897) || !Ic(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464896, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464899, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464897)) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464900 = Rc(bs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464899, Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464897).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461443 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461443.element))),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464901 = Bc(Uc({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464893,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464894,
      elementData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464897,
      elementOrder: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464898,
      orderedElements: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464900,
      insertIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464895
    }).elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464900),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299106 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464901.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461444.id)),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A218 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464901.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461445, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461446) => ({
      id: Ss.id,
      params: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464893,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464894,
        element: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461445),
        insertIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464895 === undefined ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464895 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461446,
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461445.parentId && var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299106.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461445.parentId) ? {
          allowLockedParent: true
        } : {})
      }
    })),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A219 = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464901].reverse().map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461447 => ({
      id: ws.id,
      params: {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464893,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464894,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461447.id,
        elementType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461447.type,
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461447.type === M.Container ? {
          containerKind: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461447.containerData["kind"]
        } : {}),
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461447.parentId && var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299106.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461447.parentId) ? {
          allowLockedParent: true
        } : {}),
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461447.locked === true ? {
          allowLockedTarget: true
        } : {})
      }
    })),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464902 = Uc({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464893,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464894,
      elementData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464897,
      elementOrder: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464898,
      orderedElements: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464901,
      insertIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464895
    });
  if (Jc({
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464893,
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464894,
    elementData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464902.elementData,
    elementOrder: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464902.elementOrder,
    containerIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464901.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461448 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461448.type === M.Container && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461448.containerData["behavior"].membershipLocked && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461448.containerData["behavior"].autoResize).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461449 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461449.id),
    redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A218
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464896 || Yc({
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464893,
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464894,
    originalElementData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464897,
    elementData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464902.elementData,
    elementOrder: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464902.elementOrder,
    addedElements: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464901,
    redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A218,
    undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A219
  }), rl({
    elementData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464902.elementData,
    orderedElements: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464901
  })) return null;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464892.captureExistingElements !== false && Xc({
    unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464893,
    subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464894,
    elementData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464902.elementData,
    orderedElements: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464901,
    redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A218,
    undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A219
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464896) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461450 = Pc({
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464893,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464894,
      containerId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464896,
      elementData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464902.elementData,
      elementOrder: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464902.elementOrder
    });
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461450 && (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A218.push(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461450.redoMutations), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A219.unshift(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461450.undoMutations));
  }
  return il(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464897, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A218) || !No(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464897, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A218) ? null : {
    redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A218,
    undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A219
  };
}
export { ol as createAddBoardElementsMutationInfos };
