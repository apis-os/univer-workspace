import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { Ea, Go, Qa, id, ko, tn } from "./internal-core-endo.js";
import { L } from "./boards-iboard-element.js";
import { M } from "./boards-board-element-type.js";
import { Q } from "./boards-board-connector-element-data.js";
import { ks } from "./boards-remove-board-elements-operation.js";
import { U } from "./boards-board-element-world-bounds.js";
import { In } from "./boards-board-shape-sequence-lifeline-data.js";
import { V } from "./boards-board-element-parent-chain.js";
function Yo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463984, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463985) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463985.length === 0) return false;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463986 = Go(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463984, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463985[0].subUnitId);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463986) return false;
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929950 = new Set();
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463985.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027 => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463986.elements[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027.element["id"]] && var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929950.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027.element["id"]);
  }), var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929950.size === 0) return false;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB141 = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463986.elements
  };
  return var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929950.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029 => delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB141[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463986.elements = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB141, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463986.elementOrder = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463986.elementOrder["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030 => !var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929950.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461030)), true;
}
function Cs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464228, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464229, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464230, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464231) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464229.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461134 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461135;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464231 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461134 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464230 ? false : ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461135 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464228[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461134]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461135.element["locked"]) === true;
  });
}
const ws = {
  id: "board.mutation.remove-element",
  type: CommandType.MUTATION,
  handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464236, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464237) => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464238;
    let {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464239,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464240,
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464241,
      allowLockedParent: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464242,
      allowLockedTarget: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464243
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464237;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464237.elementId) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464244 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464236.get(IUniverInstanceService).getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464239, UniverInstanceType.UNIVER_BOARD);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464244) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464245 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464236.get(L),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464246 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464245.getElementByParam({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464239,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464240,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464241
      });
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464246) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464247 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464246,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464248 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464245.getElementData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464239, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464240),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464249 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464247.element["parentId"] ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464238 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464248[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464247.element["parentId"]]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464238.element : undefined;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464242 && ko(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464248, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464247.element) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464242 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464249 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464249.type) === M.Container && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464249.containerData["behavior"].membershipLocked) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464250 = tn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464248, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464245.getElementOrder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464239, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464240), [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464241]);
    if (Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464248).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461138 => {
      !Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461138) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464250.includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461138.elementId) || Qa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461138.element).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464250.includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267)) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464250.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461138.elementId);
    }), Cs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464248, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464250, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464241, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464243)) return false;
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A146 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464250.length > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464250 : [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464241]).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461140 => ({
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464239,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464240,
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461140
      })),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464251 = Ea(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464245.getBatchRemoveElementOp(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A146)),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A147 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A146.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461141 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464245.getElementByParam(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461141)).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461142 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461142).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461143 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461143);
    return Yo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464244, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A147.length > 0 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A147 : [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464247]) ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464245.applyElementJson1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464239, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464240, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464251.redo), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464245.removeElementNotification(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A146), true) : false;
  }
};
const Ms = {
    id: "board.command.remove-element",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464338, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464339) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464339 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464339.elementId ? ks.handler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464338, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464339.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464339.subUnitId,
      elementIds: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464339.elementId]
    }) : false
  },
  Ns = {
    id: "board.command.resolve-capture-bounds",
    type: CommandType.COMMAND,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464340, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464341) => {
      if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464341 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464341.unitId) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464341.subUnitId) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464342 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464340.get(L),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464343 = Ps(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464342.getElementData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464341.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464341.subUnitId), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464342.getElementOrder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464341.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464341.subUnitId), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464341);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464343.ok ? {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464343,
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464341.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464341.subUnitId
      } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464343;
    }
  };
function Ps(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464348, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464349, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464350) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D237 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464350.padding ?? 0;
  if (!Number.isFinite(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D237) || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D237 < 0) return {
    code: "padding-invalid",
    ok: false
  };
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464350.region && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464350.elementIds) return {
    code: "selector-conflict",
    ok: false
  };
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464350.region) return Ls(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464350.region) ? {
    bounds: Rs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464350.region, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D237),
    ok: true,
    padding: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D237,
    region: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464350.region
    },
    selector: "region"
  } : {
    code: "region-invalid",
    ok: false
  };
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464350.elementIds) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464350.elementIds["length"] === 0) return {
      code: "elements-empty",
      ok: false
    };
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12 = [];
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464350.elementIds) {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464348[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279]) return {
        code: "element-missing",
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279,
        ok: false
      };
      if (!Is(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464348, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279)) return {
        code: "element-hidden",
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279,
        ok: false
      };
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111 = Fs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464348, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111 || !Ls(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111)) return {
        code: "element-unbounded",
        elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279,
        ok: false
      };
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111);
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461227 = zs(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A12);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461227 ? {
      bounds: Rs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461227, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D237),
      elementIds: [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464350.elementIds],
      ok: true,
      padding: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D237,
      selector: "elements"
    } : {
      code: "elements-empty",
      ok: false
    };
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464351 = zs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464349.flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461228 => {
    if (!Is(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464348, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461228)) return [];
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461229 = Fs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464348, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461228);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461229 && Ls(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461229) ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461229] : [];
  }));
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464351 ? {
    bounds: Rs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464351, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D237),
    ok: true,
    padding: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D237,
    selector: "content"
  } : {
    code: "content-empty",
    ok: false
  };
}
function Fs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464356, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464357) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464358;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464359 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464356, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464357),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464360 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464358 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464356[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464357]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464358.element;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464359 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464360 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464360.type) !== M.Shape) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464359;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464361 = In(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464360.shapeData);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464361 ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464359,
    height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464359.height + Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464361.minLifelineHeight, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464361.lifelineHeight)
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464359;
}
function Is(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464368, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464369) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464370 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464368[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464369];
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464370 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464370.element["visible"]) !== false && V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464368, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464369).every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461232 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464368[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461232]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461233.element["visible"]) !== false;
  });
}
function Ls(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464374) {
  return Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464374.left) && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464374.top) && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464374.width) && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464374.height) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464374.width > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464374.height > 0;
}
function Rs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464376, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464377) {
  return {
    left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464376.left - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464377,
    top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464376.top - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464377,
    width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464376.width + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464377 * 2,
    height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464376.height + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464377 * 2
  };
}
function zs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464380) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464380.length === 0) return null;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D239 = Math.min(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464380.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461236.left)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D240 = Math.min(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464380.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461237.top)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D241 = Math.max(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464380.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461238.width)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D242 = Math.max(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464380.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461239.height));
  return {
    left: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D239,
    top: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D240,
    width: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D241 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D239,
    height: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D242 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D240
  };
}
export { ws as RemoveBoardElementMutation, Ms as RemoveBoardElementCommand, Ns as ResolveBoardCaptureBoundsCommand };
