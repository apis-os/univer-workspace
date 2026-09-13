import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { H } from "./boards-board-element-world-transform.js";
import { W } from "./boards-board-element-local-transform-for-parent.js";
import { Ec, Mo, Sc, X, gd, id, yi } from "./internal-core-endo.js";
import { L } from "./boards-iboard-element.js";
import { M } from "./boards-board-element-type.js";
import { U } from "./boards-board-element-world-bounds.js";
import { var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217 } from "./boards-board-element.js";
function cd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465680, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465681) {
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465680,
    containerData: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465680.containerData,
      behavior: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465680.containerData["behavior"],
        membershipLocked: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465681,
        autoResize: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465681 ? true : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465680.containerData["behavior"].autoResize
      }
    }
  };
}
function ld(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465684) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465684 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465684.rotation) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465684 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465684.angle) ?? 0;
}
function ud(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465686) {
  return {
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465686.left ?? 0,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465686.top ?? 0,
    width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465686.width ?? 0,
    height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465686.height ?? 0,
    angle: ld(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465686),
    flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465686.flipX,
    flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465686.flipY
  };
}
function dd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465688, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465689) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465690;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465691 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465690 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465688, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465689)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465690.worldTransform;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465691 ? ud(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465691) : null;
}
function fd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465696, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465697, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465698) {
  return ud(W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465696, {
    parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465697,
    worldTransform: {
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465698.left,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465698.top,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465698.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465698.height,
      rotation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465698.angle,
      flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465698.flipX,
      flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465698.flipY
    }
  }));
}
function pd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465702, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465703) {
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465702,
    transform: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465702.transform,
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465703.left,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465703.top,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465703.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465703.height,
      rotation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465703.angle,
      flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465703.flipX,
      flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465703.flipY
    }
  };
}
function md(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465706, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465707) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465707.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461744 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461745;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461744.params;
    return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746.elementId && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461745 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465706[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746.elementId]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461745.element["locked"]) === true;
  });
}
function hd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465710, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465711) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465710.left !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465711.left || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465710.top !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465711.top || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465710.width !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465711.width || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465710.height !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465711.height;
}
const var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB218 = {
    id: "board.operation.set-container-membership-lock",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465728, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465729) => {
      if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465729 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465729.containerId)) return false;
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465730,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465731,
          containerId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465732,
          membershipLocked: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465733
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465729,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465734 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465728.get(L),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465735 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465734.getElementByParam({
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465730,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465731,
          elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465732
        });
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465735 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465735.element["type"] !== M.Container || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465735.element["locked"] || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465735.element["containerData"].behavior["membershipLocked"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465733) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465736 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465734.getElementData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465730, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465731),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465737 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465736, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465732),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB185 = {
          ...cd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465735.element, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465733),
          laneId: gd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465736, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465735.element["parentId"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465737)
        },
        var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5970 = new Map(),
        var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5971 = new Map(),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB186 = {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465736
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465738 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461750, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461751, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461752) => {
          var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5970.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461750.elementId, {
            id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217.id,
            params: {
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465730,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465731,
              elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461750.elementId,
              element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461751,
              transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461752
            }
          }), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5971.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461750.elementId) || var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5971.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461750.elementId, {
            id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217.id,
            params: {
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465730,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465731,
              elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461750.elementId,
              element: X(Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461750.element)),
              transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461750.transform ? {
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461750.transform
              } : undefined
            }
          }), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB186[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461750.elementId] = {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461750,
            element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461751,
            transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461752
          };
        };
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465738(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465735, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB185, undefined), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465733 && var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB185.containerData["behavior"].autoResize) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461756 = U(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB186, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465732);
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461756) {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390 = Sc(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB185, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461756),
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = Object.values(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB186).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46177.element["parentId"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465732),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391 = yi([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46178.element["type"] !== M.Connector).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179 => U(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB186, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46179.elementId)).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46180)]),
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391 ? Ec(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB185, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461756, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391) : null;
          if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392 && hd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461756, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392)) {
            let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B595 = new Map();
            var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678 => {
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679 = dd(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB186, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678.elementId);
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679 && var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B595.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678.elementId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679);
            });
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181 = fd(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB186, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB185.parentId, {
                left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392.left,
                top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392.top,
                width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392.width,
                height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392.height,
                angle: ld(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB185.transform),
                flipX: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB185.transform["flipX"],
                flipY: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB185.transform["flipY"]
              }),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182 = pd({
                ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB185,
                laneId: gd(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB186, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB185.parentId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392)
              }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181);
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465738(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB186[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465732], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46181), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B595.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683) => {
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB186[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683];
              if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684) return;
              let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685 = fd(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB186, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465732, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682),
                var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 = pd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684.element, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685);
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465738(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685);
            });
          }
        }
      }
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465739 = Array.from(var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5970.values()),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465740 = Array.from(var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5971.values()).reverse();
      return md(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465736, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465739) || !Mo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465736, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465739) || !sequenceExecute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465739, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465728.get(ICommandService)).result ? false : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465728.get(IUndoRedoService).pushUndoRedo({
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465730,
        redoMutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465739,
        undoMutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465740
      }), true);
    }
  },
  vd = ["description", "locked", "name", "selectable", "visible"];
export { var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB218 as SetBoardContainerMembershipLockOperation };
export { vd };
