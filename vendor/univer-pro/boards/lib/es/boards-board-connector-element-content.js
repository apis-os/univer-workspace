import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { Z } from "./internal-core-endo.js";
import { Ge, He, Ke } from "./boards-board-connector-site.js";
import { M } from "./boards-board-element-type.js";
import { qa } from "./boards-board-connector-labels.js";
function Ua(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463640, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463641 = false) {
  if (!Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463640)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463640;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463642 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463640,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463643 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463640,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A51 = "text" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463642 || "documentData" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463642,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A52 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463641 || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A51 || "width" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463642 || "height" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463642 || "pathRatio" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463642 || "offset" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463642 || Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463640.style) && "lineBreak" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463640.style;
  if (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A51) {
    let {
      text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46939,
      documentData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46940,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46941
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463642;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463643 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46941,
      content: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46941.content === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46940 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46939 ?? "" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46941.content)
    };
  }
  if ("width" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463642 || "height" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463642 || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A51 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463642.content === undefined) {
    let {
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46942,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46943,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46944
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463643;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463643 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46944,
      layout: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46944.layout === undefined ? {
        mode: Ge.FixedSize,
        width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46942 === undefined ? 96 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46942,
        height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46943 === undefined ? 28 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46943
      } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46944.layout
    };
  }
  if ("pathRatio" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463643) {
    let {
      pathRatio: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463643;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463643 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945 !== undefined && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946.placement === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463643 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946,
      placement: {
        anchor: He.Path,
        pathRatio: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945
      }
    } : Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946.placement) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946.placement["anchor"] === He.Path && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946.placement["pathRatio"] === undefined && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463643 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946,
      placement: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46946.placement,
        pathRatio: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46945
      }
    }));
  }
  if (Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463640.style) && "lineBreak" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463640.style) {
    let {
      lineBreak: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46948
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463640.style;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463643 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463643,
      style: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46948,
        interruptLine: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46948.interruptLine === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46947 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46948.interruptLine
      }
    };
  }
  if (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A52 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463643.placement === undefined && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463643 = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463643,
    placement: {
      anchor: He.Auto
    }
  }), "offset" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463643) {
    let {
      offset: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463643;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463643 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949 !== undefined && Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950.placement) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950.placement["offset"] === undefined) {
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949) ? {
        x: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949.x,
        y: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949.y,
        space: Ke.Canvas
      } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46949;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463643 = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950,
        placement: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46950.placement,
          offset: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1
        }
      };
    }
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463643;
}
function Wa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463648) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463648.type !== M.Connector || !Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463648.connectorData) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463648.connectorData["labels"] !== undefined && !Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463648.connectorData["labels"])) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463648;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463649 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463648.connectorData["label"];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463648.connectorData["labels"] === undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463649 !== undefined && !Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463649)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463648;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A110 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463648.connectorData["labels"] ?? (Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463649) ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463649] : []),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A111 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A110.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951 => Ua(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46951, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463648.connectorData["labels"] === undefined && Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463649)));
  return !("label" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463648.connectorData) && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A111.every((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46952, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46953) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46952 === var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A110[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46953]) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463648 : {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463648,
    connectorData: qa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463648.connectorData, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A111)
  };
}
export { Wa as normalizeBoardConnectorElementContent };
