import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { id, ru } from "./internal-core-endo.js";
import { M } from "./boards-board-element-type.js";
import { fu } from "./boards-board-import-draft-bounds.js";
import { fa } from "./boards-board-container-element.js";
import { q } from "./boards-board-rect-right.js";
import { J } from "./boards-board-rect-bottom.js";
function su(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465230, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465231) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465232 = ru(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465230),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465233 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465232 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465232.structured,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465234 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465232 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465232.mindmap;
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465233 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465233.modeId) !== "mindmap" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465234) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465230;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465235 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592 == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465231.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461592,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB169 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465234,
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465233.semanticRole === "mindmap-container" ? {
        rootNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465235(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465234.rootNodeId)
      } : null),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465233.semanticRole === "mindmap-node" ? {
        parentNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465235(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465234.parentNodeId)
      } : null),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465233.semanticRole === "mindmap-tree-edge" ? {
        parentNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465235(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465234.parentNodeId),
        childNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465235(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465234.childNodeId)
      } : null),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465233.semanticRole === "mindmap-node-decoration" ? {
        ownerNodeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465235(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465234.ownerNodeId)
      } : null)
    };
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465230,
    custom: {
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465230.custom ?? {}),
      structured: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465233,
        structureScopeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465235(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465233.structureScopeId)
      },
      mindmap: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB169
    }
  };
}
function lu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465242) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465242 + "-" + generateRandomId(6);
}
function mu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465262) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465262 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465262.type) === M.Container;
}
function hu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465264, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465265) {
  return {
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465264.x + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465265.x,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465264.y + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465265.y
  };
}
function gu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465268, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465269, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465270) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465268.kind === "free" ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465268,
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465268.x + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465270.x,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465268.y + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465270.y
  } : {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465268,
    shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465269.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465268.shapeId) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465268.shapeId,
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465268.fallbackPoint ? {
      fallbackPoint: hu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465268.fallbackPoint, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465270)
    } : {})
  };
}
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF11(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465274, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465275) {
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465274,
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465274.x + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465275.x,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465274.y + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465275.y
  };
}
function vu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465278, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465279, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465280) {
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465278,
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465278.x + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465280.x,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465278.y + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465280.y,
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465278.endpoint ? {
      endpoint: gu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465278.endpoint, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465279, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465280)
    } : {})
  };
}
function yu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465284, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465285) {
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465284,
    x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465284.x + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465285.x,
    y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465284.y + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465285.y
  };
}
function bu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465288, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465289, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465290) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465291, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465292, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465293, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465294;
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465288,
    connectorData: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465288.connectorData,
      start: gu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465288.connectorData["start"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465289, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465290),
      end: gu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465288.connectorData["end"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465289, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465290),
      waypoints: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465291 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465288.connectorData["waypoints"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465291.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461596 => fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF11(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461596, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465290)),
      orthogonalData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465288.connectorData["orthogonalData"] ? {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465288.connectorData["orthogonalData"],
        routePoints: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465292 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465288.connectorData["orthogonalData"].routePoints) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465292.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461597 => fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF11(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461597, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465290))
      } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465288.connectorData["orthogonalData"],
      curveData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465288.connectorData["curveData"] ? {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465288.connectorData["curveData"],
        anchors: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465293 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465288.connectorData["curveData"].anchors) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465293.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461598 => vu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461598, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465289, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465290)),
        controls: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465294 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465288.connectorData["curveData"].controls) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465294.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461599 => yu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461599, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465290))
      } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465288.connectorData["curveData"]
    }
  };
}
function xu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465302, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465303) {
  return su(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465302.type === M.Group ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465302,
    children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465302.children["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461600 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465303.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461600) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461600)
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465302, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465303);
}
function Su(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465306) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465307 = fu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465306.draft),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465308 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465306.createId ?? lu,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465309 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465308("container"),
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5958 = new Map(),
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5959 = new Map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465306.draft["elements"].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461601 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461601.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461601]));
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465306.draft["elements"].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461602 => {
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5958.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461602.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465308(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461602.id));
  });
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465310 = fa({
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465309,
      title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465306.containerName ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465306.draft["title"],
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465306.position["left"],
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465306.position["top"],
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465307.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465307.height
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465311 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465310.containerData["padding"],
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D277 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465310.containerData["titleVisible"] === false ? 0 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465310.containerData["headerSize"] ?? 0;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465310.transform["width"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465307.width + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465311.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465311.right, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465310.transform["height"] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465307.height + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D277 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465311.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465311.bottom;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB171 = {
      x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465306.position["left"] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465311.left - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465307.left,
      y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465306.position["top"] + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D277 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465311.top - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465307.top
    },
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A232 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465306.draft["elements"].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461604 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461605 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461604),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461606 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461604.parentId ? var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5959.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461604.parentId) : undefined,
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A15 = !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461604.parentId && mu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461606) && var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5958.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461604.parentId);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461605.id = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5958.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461604.id), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461605.parentId = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A15 ? var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5958.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461604.parentId) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465309, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A15 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461605.transform = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461605.transform,
        left: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461605.transform["left"] ?? 0) + var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB171.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465306.position["left"],
        top: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461605.transform["top"] ?? 0) + var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB171.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465306.position["top"]
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461605.type === M.Connector && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461605 = bu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461605, var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5958, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB171)), xu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461605, var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5958);
    }),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB172 = {
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465306.position["left"],
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465306.position["top"],
      width: q({
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465306.position["left"],
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465306.position["top"],
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465310.transform["width"] ?? 0,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465310.transform["height"] ?? 0
      }) - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465306.position["left"],
      height: J({
        left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465306.position["left"],
        top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465306.position["top"],
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465310.transform["width"] ?? 0,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465310.transform["height"] ?? 0
      }) - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465306.position["top"]
    };
  return {
    containerId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465309,
    elements: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465310, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A232],
    elementIdMap: Object.fromEntries(var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5958),
    bounds: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB172
  };
}
export { Su as materializeBoardImportDraft };
