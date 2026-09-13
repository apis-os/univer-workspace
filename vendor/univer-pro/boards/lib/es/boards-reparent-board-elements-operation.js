import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { M } from "./boards-board-element-type.js";
import { U } from "./boards-board-element-world-bounds.js";
import { Ui } from "./boards-board-swimlane-lane-for-rect-in-filled-bounds.js";
import { Fi } from "./boards-board-swimlane-lane-bounds-in-filled-bounds.js";
import { Ec, G, Mo, Sc, X, Xn, ed, id, yi } from "./internal-core-endo.js";
import { L } from "./boards-iboard-element.js";
import { Wn } from "./boards-would-board-container-cycle.js";
import { var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217 } from "./boards-board-element.js";
import { H } from "./boards-board-element-world-transform.js";
import { W } from "./boards-board-element-local-transform-for-parent.js";
import { Q } from "./boards-board-connector-element-data.js";
import { oo } from "./boards-board-connector-parent-scope.js";
function Wu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465512, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465513) {
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465512,
    transform: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465512.transform,
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465513.left,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465513.top,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465513.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465513.height,
      rotation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465513.angle,
      flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465513.flipX,
      flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465513.flipY
    }
  };
}
function Gu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465516, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465517) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465516.left !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465517.left || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465516.top !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465517.top || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465516.width !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465517.width || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465516.height !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465517.height;
}
function Ku(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465520) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465520.left === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465520.top === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465520.width === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465520.height === undefined ? null : {
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465520.left,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465520.top,
    width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465520.width,
    height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465520.height
  };
}
function qu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465522) {
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465522 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465522.element["type"] !== M.Container || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465522.hidden === true || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465522.element["visible"] === false || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465522.element["locked"] === true || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465522.element["selectable"] === false || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465522.element["containerData"].behavior["membershipLocked"];
}
function Ju(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465524, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465525, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465526) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465524 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465524.element["type"] !== M.Container) return false;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465527 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465524.element["containerData"].behavior;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465527.acceptsChildren ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465525.every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461668 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461669;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461670 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461669 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465526[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461668]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461669.element;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461670 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461670.type !== M.Container || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465527.acceptsContainer && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465527.allowNested : false;
  }) : false;
}
function Yu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465532) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465532 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465532.element["type"]) === M.Container && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465532.element["containerData"].behavior["membershipLocked"];
}
function Xu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465534, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465535) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465536;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465537 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465536 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465534[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465535]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465536.element["parentId"],
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299120 = new Set([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465535]);
  for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465537;) {
    if (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299120.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465537)) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465534[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465537];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384.element["type"] !== M.Container) return false;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384.hidden === true || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384.element["visible"] === false || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384.element["locked"] === true || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384.element["selectable"] === false) return true;
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299120.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465537), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465537 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384.element["parentId"];
  }
  return false;
}
function Zu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465542, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465543) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A252 = [];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465543.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674 => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465542[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674] && !var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A252.includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674) && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A252.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461674);
  }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A252;
}
function Qu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465546, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465547, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465548) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465549;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465550 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465549 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465546[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465547]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465549.element["parentId"],
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299122 = new Set([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465547]);
  for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465550;) {
    if (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299122.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465550)) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465546[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465550];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385.element["type"] !== M.Container) return false;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465548.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465550)) return true;
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299122.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465550), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465550 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385.element["parentId"];
  }
  return false;
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F10(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465556, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465557) {
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299124 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465557);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465557.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676 => !Qu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465556, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461676, var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299124));
}
function td(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465568, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465569) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465569.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461677 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461678;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461679 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461677.params;
    return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461679.elementId && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461678 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465568[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461679.elementId]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461678.element["locked"]) === true;
  });
}
function nd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465572, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465573, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465574, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465575) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465576, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465577, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465578;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465574) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465579 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465576 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465572[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465574]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465576.element;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465573.laneId && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465579 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465579.type) === M.Container && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465579.containerData["kind"] === "swimlane" && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465577 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465579.containerData["swimlane"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465577.lanes["some"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461683.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465573.laneId)) === true) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465573.laneId;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465580 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465572, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465574);
  if (!((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465579 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465579.type) !== M.Container || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465579.containerData["kind"] !== "swimlane" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465575 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465580)) return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465578 = Ui(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465579, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465580, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465575)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465578.lane["id"];
}
function rd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465590, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465591, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465592, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465593, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465594) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465595, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465596, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465597;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465598 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465595 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465590[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465592]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465595.element,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465599 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465590, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465592);
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465598 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465598.type) !== M.Container || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465598.containerData["kind"] !== "swimlane" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465598.containerData["swimlane"] || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465599) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465600 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465596 = Fi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465598, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465599).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461684 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461684.lane["id"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465593)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465596.bounds;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465600) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465601 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465591.parentId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465592 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465598 : undefined,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465602 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465601 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465599 : null,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465603 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465601 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465601.type) === M.Container && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465601.containerData["kind"] === "swimlane" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465591.laneId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465602 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465597 = Fi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465601, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465602).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461685 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461685.lane["id"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465591.laneId)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465597.bounds : undefined;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465603 ? {
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465600.left - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465603.left,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465600.top - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465603.top
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465598.containerData["swimlane"].orientation === "horizontal" ? {
    x: 0,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465594.top >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465600.top && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465594.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465594.height <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465600.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465600.height ? 0 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465600.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465600.height / 2 - (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465594.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465594.height / 2)
  } : {
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465594.left >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465600.left && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465594.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465594.width <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465600.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465600.width ? 0 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465600.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465600.width / 2 - (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465594.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465594.width / 2),
    y: 0
  };
}
const ad = {
  id: "board.operation.reparent-elements",
  type: CommandType.OPERATION,
  handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465632, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465633) => {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465633 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465633.elementIds["length"] === 0) return false;
    let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465634,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465635,
        parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465636,
        laneId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465637
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465633,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465638 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465632.get(L).getElementData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465634, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465635);
    if (new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465633.elementIds).size !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465633.elementIds["length"] || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465633.elementIds["some"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461701 => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465638[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461701])) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465639 = Zu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465638, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465633.elementIds);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465639.length === 0) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465640 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F10(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465638, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465639);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465637 !== undefined && id(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465638, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465640, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465636, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465637) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465640.length === 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465640.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461702 => Xu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465638, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461702)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465640.includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465636 ?? "")) return false;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465636) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461703 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465638[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465636];
      if (qu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461703) || !Ju(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461703, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465640, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465638)) return false;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465640.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461704 => Wn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465638, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461704, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465636)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465640.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461705 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461706 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465638[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461705],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461707 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461706 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461706.element["parentId"];
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461707 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465636 && Yu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461707 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465638[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461707] : undefined);
    })) return false;
    let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5966 = new Map(),
      var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5967 = new Map(),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB183 = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465638
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465641 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461711, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461712, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461713) => {
        if (var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5966.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461711.elementId, {
          id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465634,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465635,
            elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461711.elementId,
            element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461712,
            transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461713
          }
        }), !var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5967.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461711.elementId)) {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465638[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461711.elementId] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461711;
          var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5967.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461711.elementId, {
            id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217.id,
            params: {
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465634,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465635,
              elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461711.elementId,
              element: X(Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387.element)),
              transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387.transform ? {
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387.transform
              } : undefined
            }
          });
        }
        ed(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB183, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461711, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461712, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461713);
      };
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465640.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461717 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461718;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465638[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461717];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719.element["parentId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465636 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465637 === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719.element["laneId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465637)) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461720 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461718 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465638, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461717)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461718.worldTransform;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461720) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461721 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465638, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461717),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465637 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465636 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461721 ? rd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465638, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719.element, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465636, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465637, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461721) : {
          x: 0,
          y: 0
        };
      if (!var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29) return;
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB30 = {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461720,
          left: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461720.left ?? 0) + var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29.x,
          top: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461720.top ?? 0) + var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB29.y
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461722 = G(W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465638, {
          parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465636,
          worldTransform: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB30
        })),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723 = Wu({
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719.element,
          parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465636,
          laneId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465637 ?? nd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465638, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719.element, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465636, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461721)
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461722);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465641(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461722);
    });
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465642 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465636 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB183[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465636] : undefined;
    if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465642 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465642.element["type"]) === M.Container && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465642.element["containerData"].behavior["autoResize"]) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461731 = U(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB183, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465636);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461731) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388 = yi([Sc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465642.element, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461731), ...Object.values(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB183).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173.element["parentId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465636 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46173.element["type"] !== M.Connector).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174 => U(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB183, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46174.elementId)).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46175)]),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388 ? Ec(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465642.element, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461731, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388) : null;
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389 && Gu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461731, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389)) {
          let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B594 = new Map();
          Object.values(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB183).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660 => {
            var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661;
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660.element["parentId"] !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465636) return;
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 = H(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB183, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660.elementId)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.worldTransform;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 && var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B594.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4660.elementId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662);
          });
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176 = G(W(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB183, {
            parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465642.element["parentId"],
            worldTransform: Xn({
              left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389.left,
              top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389.top,
              width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389.width,
              height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389.height,
              angle: G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465642.element["transform"]).angle,
              flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465642.element["transform"].flipX,
              flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465642.element["transform"].flipY
            })
          }));
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465641(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465642, Wu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465642.element, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46176), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B594.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667) => {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB183[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667];
            if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668) return;
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669 = G(W(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB183, {
              parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465636,
              worldTransform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666
            }));
            if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668.element["transform"].left === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669.left && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668.element["transform"].top === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669.top && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668.element["transform"].width === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669.width && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668.element["transform"].height === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669.height && G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668.element["transform"]).angle === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669.angle) return;
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670 = Ku(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671 = Wu({
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668.element,
                laneId: nd(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB183, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668.element, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465636, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670)
              }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669);
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465641(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669);
          });
        }
      }
    }
    Object.values(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB183).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461733;
      if (!Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732)) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461734 = oo(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB183, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732.element);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732.element["parentId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461734.parentId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732.element["laneId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461734.laneId) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461735 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461733 = H(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB183, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732.elementId)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461733.worldTransform;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461735) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736 = G(W(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB183, {
          parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461734.parentId,
          worldTransform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461735
        })),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461737 = Wu({
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732.element,
          parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461734.parentId,
          laneId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461734.laneId
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465641(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461737, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736);
    });
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465643 = Array.from(var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5966.values()),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465644 = Array.from(var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5967.values()).reverse();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465643.length === 0 || td(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465638, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465643) || !Mo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465638, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465643) || !sequenceExecute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465643, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465632.get(ICommandService)).result ? false : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465632.get(IUndoRedoService).pushUndoRedo({
      unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465634,
      redoMutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465643,
      undoMutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465644
    }), true);
  }
};
export { ad as ReparentBoardElementsOperation };
