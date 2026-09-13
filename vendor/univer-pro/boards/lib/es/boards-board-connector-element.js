import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { id } from "./internal-core-endo.js";
import { M } from "./boards-board-element-type.js";
function aa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463416) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463416.kind === "free";
}
function oa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463418) {
  return aa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463418) ? {
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463418.x,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463418.y
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463418.fallbackPoint ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463418.fallbackPoint
  } : null;
}
function sa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463420, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463421, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463422 = [], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463423, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463424) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463426;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A102 = [],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463427 = oa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463420);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463427 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A102.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463427), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463422.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46913 => var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A102.push({
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46913.x,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46913.y
  }));
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463428 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463423 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463423.routePoints;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463428 == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463428.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46914 => var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A102.push({
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46914.x,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46914.y
  })), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463424 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463425 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463424.anchors) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463425.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46915 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46915.kind === "manual").forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46916 => var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A102.push({
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46916.x,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46916.y
  })), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463424 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463426 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463424.controls) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463426.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46917 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46917.kind === "manual").forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46918 => var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A102.push({
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46918.x,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46918.y
  }));
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463429 = oa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463421);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463429 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A102.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463429), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A102.length === 0) return null;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D211 = Math.min(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A102.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919.x)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D212 = Math.min(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A102.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920.y)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D213 = Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A102.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921.x)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D214 = Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A102.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46922 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46922.y));
  return {
    left: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D211,
    top: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D212,
    width: Math.max(1, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D213 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D211),
    height: Math.max(1, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D214 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D212),
    rotation: 0
  };
}
function la(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463446) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463447, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463448, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463449, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463450, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463451, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463452, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463453, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463454, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463455, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463456, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463457;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463458 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463447 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463446.orthogonalData) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463447.routePoints,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A104 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463458 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463458.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923.kind === "manual"),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A105 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463448 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463446.waypoints) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463448.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46924 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46924.kind === "manual")) ?? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A104,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A106 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463446.labels ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463446.label ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463446.label] : undefined),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB115 = {
      start: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463446.start,
      end: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463446.end,
      routing: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463446.routing ?? "orthogonal",
      routingMode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463446.routingMode ?? (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A105 != null && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A105.length ? "manual" : "auto"),
      waypoints: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A105,
      style: {
        stroke: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463449 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463446.style) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463449.stroke) ?? "#1f2937",
        strokeWidth: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463450 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463446.style) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463450.strokeWidth) ?? 2,
        opacity: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463451 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463446.style) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463451.opacity,
        dash: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463452 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463446.style) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463452.dash,
        startMarker: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463453 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463446.style) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463453.startMarker,
        endMarker: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463454 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463446.style) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463454.endMarker,
        cornerStyle: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463455 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463446.style) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463455.cornerStyle) ?? "rounded",
        lineJump: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463456 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463446.style) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463456.lineJump,
        animation: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463457 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463446.style) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463457.animation
      },
      labels: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A106
    };
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463446.orthogonalData && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB115.orthogonalData = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463446.orthogonalData,
    routePoints: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463458
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463446.curveData && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB115.curveData = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463446.curveData);
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB116 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463446.transform ?? sa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463446.start, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463446.end, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A105, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB115.orthogonalData, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463446.curveData) ?? {
    left: 0,
    top: 0,
    width: 1,
    height: 1,
    rotation: 0
  };
  return {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463446.id ?? generateRandomId(6),
    type: M.Connector,
    transform: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB116,
    connectorData: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB115
  };
}
export { la as createBoardConnectorElement };
