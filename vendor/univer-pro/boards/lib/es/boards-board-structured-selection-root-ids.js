import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { lo } from "./boards-board-structured-diagram-element.js";
import { so } from "./boards-board-structural-container.js";
import { M } from "./boards-board-element-type.js";
function uo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463762) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463763;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463764 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463762 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463762.custom;
  return lo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463762) && typeof (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463764 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463763 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463764.structured) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463763.structureScopeId) == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463764.structured["structureScopeId"] : null;
}
function fo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463768) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463768 && "element" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463768 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463768.element : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463768;
}
function po(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463770, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463771) {
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929940 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463771),
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5930 = new Map(),
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5931 = new Map();
  Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463770).forEach(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46970, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971]) => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46972 = fo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46973 = uo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46972);
    if (!(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46972 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46973)) {
      if (so(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46972)) {
        var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5930.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46973, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46970);
        return;
      }
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46972.type !== M.Connector) {
        let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5931.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46973) ?? [];
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46970), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5931.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46973, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A);
      }
    }
  });
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929941 = new Set();
  if (var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5931.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46978, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46979) => {
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5930.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46979) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46978.length > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46978.every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929940.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239)) && var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929941.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46979);
  }), var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929941.size === 0) return [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463771];
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A124 = [],
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929942 = new Set();
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463771.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46983 = uo(fo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463770[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982])),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46983 && var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929941.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46983) ? var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5930.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46983) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982;
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929942.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984) || (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929942.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A124.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984));
  }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A124;
}
export { po as resolveBoardStructuredSelectionRootIds };
