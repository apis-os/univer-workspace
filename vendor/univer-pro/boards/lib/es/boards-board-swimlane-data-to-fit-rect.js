import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { q } from "./boards-board-rect-right.js";
import { J } from "./boards-board-rect-bottom.js";
import { Ti } from "./boards-board-swimlane-data.js";
import { Ii } from "./boards-board-swimlane-lane-regions-in-filled-bounds.js";
import { gi } from "./boards-contains-board-rect.js";
function ji(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463276, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463277) {
  return Math.max(0, Math.min(q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463276), q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463277)) - Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463276.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463277.left)) * Math.max(0, Math.min(J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463276), J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463277)) - Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463276.top, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463277.top));
}
function Wi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463370, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463371, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463372) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463373;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463374 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463370.containerData["kind"] === "swimlane" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463370.containerData["swimlane"] : undefined;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463374) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463375 = Ti(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463374),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463376 = Ii({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463370,
      containerData: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463370.containerData,
        swimlane: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463375
      }
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463371),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463377 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463376.find(({
      contentBounds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907
    }) => gi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463372));
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463377) return {
    laneId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463377.lane["id"],
    swimlane: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463375
  };
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463378 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463373 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463376.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908 => ({
    region: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908,
    area: ji(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908.contentBounds, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463372)
  })).filter(({
    area: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46909
  }) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46909 > 0).sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46910, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46911) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46911.area - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46910.area)[0]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463373.region;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463378 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463378.lane["locked"] === true || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463378.lane["collapsed"] === true) return null;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D209 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463375.orientation === "vertical" ? Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463378.lane["size"], q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463372) - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463378.bounds["left"]) : Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463378.lane["size"], J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463372) - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463378.bounds["top"]);
  return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D209 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463378.lane["size"] ? null : {
    laneId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463378.lane["id"],
    swimlane: Ti({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463375,
      lanes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463375.lanes["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46912 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46912.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463378.lane["id"] ? {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46912,
        size: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D209
      } : {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46912
      })
    })
  };
}
export { Wi as resolveBoardSwimlaneDataToFitRect };
