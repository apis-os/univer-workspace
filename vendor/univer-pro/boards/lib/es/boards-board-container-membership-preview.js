import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { Vn } from "./boards-board-container-element-data.js";
import { V } from "./boards-board-element-parent-chain.js";
import { M } from "./boards-board-element-type.js";
import { Wn } from "./boards-would-board-container-cycle.js";
import { Ec, Sc, fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F8, gc, hi, vi, xc, yi } from "./internal-core-endo.js";
import { Ui } from "./boards-board-swimlane-lane-for-rect-in-filled-bounds.js";
import { gi } from "./boards-contains-board-rect.js";
import { Ii } from "./boards-board-swimlane-lane-regions-in-filled-bounds.js";
import { U } from "./boards-board-element-world-bounds.js";
import { bi } from "./boards-board-container-bounds.js";
function hc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464542, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464543) {
  return Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464542).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461280 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461280.element["parentId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464543).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461281 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461281.elementId);
}
function vc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464562, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464563, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464564, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464565, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464566, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464567) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464562.containerData["capturePolicy"].enabled || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464562.containerData["behavior"].autoCapture || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464562.containerData["behavior"].acceptsChildren) return true;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464568 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464563 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464563.element["parentId"],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464569 = Vn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464568 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464564[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464568] : undefined);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464568 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464569 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464568 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464566 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464567.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464565) && !(V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464564, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464566).includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464568) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464562.containerData["capturePolicy"].allowCaptureFromAncestorContainer === true : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464562.containerData["capturePolicy"].allowCaptureFromSiblingContainer) ? true : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464563 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464563.element["type"]) === M.Container ? !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464562.containerData["behavior"].acceptsContainer || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464562.containerData["behavior"].allowNested || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464562.containerData["capturePolicy"].allowCaptureContainer || Wn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464564, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464565, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464566) : false;
}
function yc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464578, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464579) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464578 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464579 === true;
}
function bc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464582, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464583, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464584, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464585) {
  return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464582 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464584 !== true || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464585) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464582.width > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464583.width || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464582.height > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464583.height);
}
function Cc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464596, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464597, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464598, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464599) {
  return xc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464596) ? !!Ui(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464596, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464597, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464599) : gi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464598, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464599);
}
function wc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464604, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464605, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464606, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464607) {
  if (!xc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464604)) return gi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464606, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464607);
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D249 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464604.containerData["capturePolicy"].expelHysteresis ?? 0;
  return Ii(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464604, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464605).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461283 => gi(hi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461283.contentBounds, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D249), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464607));
}
function Tc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464612, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464613, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464614, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464615) {
  return xc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464612) ? Ii(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464612, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464613).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461284 => vi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461284.contentBounds, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464615)) : vi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464614, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464615);
}
function Dc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464631 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630.elementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630.containerId];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464631 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464631.element["type"] !== M.Container) return {
    activeContainerId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630.containerId,
    previewOuterBounds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630.previewOuterBounds ?? {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    },
    previewContentBounds: {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    },
    retainedChildIds: [],
    expelChildIds: [],
    captureChildIds: [],
    forcedCaptureChildIds: [],
    blockedChildIds: []
  };
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464632 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464631.element,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A61 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464631.hidden !== true && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464632.visible !== false && !gc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464631) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464632.locked !== true && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464632.selectable !== false && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464632.containerData["behavior"].membershipLocked,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB159 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630.previewOuterBounds ?? U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630.containerId) ?? {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464633 = bi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464632, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB159),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464634 = Sc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464632, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB159),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464635 = xc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464632) ? hi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464634, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464632.containerData["capturePolicy"].expelHysteresis ?? 0) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464633.expandedContentBounds,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A184 = [],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A185 = [],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A186 = [],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A187 = [],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A188 = [],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A189 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464634],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464636 = hc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630.containerId),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464637 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464632.containerData["behavior"].membershipLocked,
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929976 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630.allowCaptureFromParentedCandidateIds ?? []),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929977 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630.forceCaptureCandidateIds ?? []),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929978 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630.autosizeCaptureCandidateIds ?? []),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464638 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461285 => {
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A186.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461285), var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929977.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461285) && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A188.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461285);
    };
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464636.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461287 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461288 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630.elementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461287];
    if (fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F8(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461288, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630.containerId)) {
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A184.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461287);
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461287);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289) {
      if (yc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464637, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630.preserveDirectChildren)) {
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A184.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461287), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A189.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289);
        return;
      }
      (xc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464632) && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461288.element["laneId"] ? gi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464635, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289) : wc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464632, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB159, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464635, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461289)) ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A184.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461287) : var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A185.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461287);
    }
  }), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630.candidateElementIds ?? []).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293 => {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630.containerId || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464636.includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293)) return;
    if (!var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A61) {
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A187.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293);
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630.elementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293];
    if (fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F8(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630.elementData, undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464632.containerData["capturePolicy"].allowCaptureLockedObjects === true)) {
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A187.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293);
      return;
    }
    if (vc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464632, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461294, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630.containerId, var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929976)) {
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A187.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293);
      return;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630.elementData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295) {
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A187.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293);
      return;
    }
    if (Cc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464632, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB159, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464634, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295)) {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464638(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293);
      return;
    }
    let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464632.containerData["kind"] !== "swimlane" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464632.containerData["swimlane"];
    if (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929978.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293) && var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464632.containerData["behavior"].autoResize && gi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464633.outerBounds, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295)) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283 = yi([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464634, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295]);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464638(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A189.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283);
        return;
      }
    }
    let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A9 = var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929978.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295.width > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464634.width || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295.height > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464634.height;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464632.containerData["behavior"].autoResize && Tc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464632, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB159, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464634, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295) && var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A9) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284 = yi([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464634, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461295]);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464638(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A189.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284);
        return;
      }
    }
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A187.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461293);
  });
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464639 = yi(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A189),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464640 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464639 ? Ec(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464632, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB159, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464639) : undefined,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464641 = bc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464640, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB159, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630.preserveDirectChildren, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464632.containerData["behavior"].autoResize);
  return {
    activeContainerId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630.containerId,
    previewOuterBounds: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB159,
    previewContentBounds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464634,
    retainedChildIds: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A184,
    expelChildIds: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A185,
    captureChildIds: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A186,
    forcedCaptureChildIds: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A188,
    blockedChildIds: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A187,
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464641 ? {
      expandedOuterBounds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464640
    } : {})
  };
}
export { Dc as resolveBoardContainerMembershipPreview };
