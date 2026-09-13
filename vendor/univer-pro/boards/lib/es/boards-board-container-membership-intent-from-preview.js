import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
function pc() {
  return {
    retained: [],
    captured: [],
    expelled: [],
    autosized: [],
    blocked: []
  };
}
function mc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464538) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464539 = pc(),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929972 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464538.preview["forcedCaptureChildIds"]);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464538.preview["retainedChildIds"].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461264 => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464539.retained["push"]({
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461264,
      containerId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464538.containerId
    });
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464538.preview["captureChildIds"].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461266 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461267;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464539.captured["push"]({
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461266,
      fromParentId: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461267 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464538.elementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461266]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461267.element["parentId"],
      toParentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464538.containerId,
      forced: var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929972.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461266)
    });
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464538.preview["forcedCaptureChildIds"].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461270 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461271;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464538.preview["captureChildIds"].includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461270) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464539.captured["push"]({
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461270,
      fromParentId: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461271 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464538.elementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461270]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461271.element["parentId"],
      toParentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464538.containerId,
      forced: true
    });
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464538.preview["expelChildIds"].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461274 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461275;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464539.expelled["push"]({
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461274,
      fromParentId: ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461275 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464538.elementData[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461274]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461275.element["parentId"]) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464538.containerId,
      toParentId: undefined
    });
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464538.preview["blockedChildIds"].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461278 => {
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929972.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461278) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464539.blocked["push"]({
      elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461278,
      targetContainerId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464538.containerId,
      reason: "previewBlocked"
    });
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464538.preview["expandedOuterBounds"] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464539.autosized["push"]({
    containerId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464538.containerId,
    nextBounds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464538.preview["expandedOuterBounds"],
    reason: "autoResize"
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464539;
}
export { mc as resolveBoardContainerMembershipIntentFromPreview };
