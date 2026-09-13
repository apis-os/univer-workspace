import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { Y, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB216 } from "./boards-board-container-corner-adjust.js";
import { ha, id } from "./internal-core-endo.js";
import { Si } from "./boards-board-swimlane-orientation.js";
import { fa } from "./boards-board-container-element.js";
import { Ti } from "./boards-board-swimlane-data.js";
function pa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463514, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463515, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463516) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463515 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463515.length ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463515 : Array.from({
    length: Y.laneCount
  }, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46925, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46926) => ({
    id: "lane-" + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46926 + 1),
    title: "Lane " + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46926 + 1),
    size: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463516
  }))).map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46928) => ({
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927.id ?? generateRandomId(6),
    title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927.title ?? "Lane " + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46928 + 1),
    order: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46928,
    size: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927.size ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463516,
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927.minSize === undefined ? {} : {
      minSize: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927.minSize
    }),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927.locked === undefined ? {} : {
      locked: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927.locked
    }),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927.collapsed === undefined ? {} : {
      collapsed: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927.collapsed
    })
  }));
}
function ma(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463520, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463521) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463522;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463523 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463520 === "horizontal" ? Y.horizontalLaneSize : Y.verticalLaneSize;
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463522 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463521.lanes) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463522.length) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463523;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D219 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463520 === "horizontal" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463521.height === undefined ? undefined : Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463521.height - var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB216.headerSize) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463521.width === undefined ? undefined : Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463521.width);
  return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D219 === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463523 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D219 / Y.laneCount;
}
function ga(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463538) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463539 = Si(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463538.orientation),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463540 = pa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463539, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463538.lanes, ma(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463539, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463538)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463541 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB216.headerSize,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463542 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463539 === "vertical" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463540.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46930) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46930.size, 0) : Y.horizontalWidth,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB43 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463539 === "horizontal" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463541 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463540.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932.size, 0) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463541 + Y.verticalHeight,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463543 = fa({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463538,
      title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463538.title ?? Y.title,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463538.width ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463542,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463538.height ?? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB43
    }),
    {
      adjustValues: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463544,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463545
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463543.containerData["shapeData"];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463543.containerData = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463543.containerData,
    kind: "swimlane",
    padding: {
      ...Y.padding
    },
    shapeData: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463545,
      shapeType: ShapeTypeEnum.Rect
    },
    swimlane: Ti({
      orientation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463539,
      headerSize: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463538.headerSize ?? ha(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463539, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463538),
      laneGap: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463538.laneGap ?? Y.laneGap,
      collapsedLaneSize: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463538.collapsedLaneSize ?? Y.collapsedLaneSize,
      lanes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463540
    })
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463543;
}
export { ga as createBoardSwimlaneElement };
