import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { id } from "./internal-core-endo.js";
import { Kd } from "./boards-wrap-board-elements-in-container-operation.js";
import { Ot } from "./boards-default-board-theme.js";
function qd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466016 = generateRandomId(6), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466017 = "Untitled Board", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466018) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466019 = generateRandomId(6),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB207 = {
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466019,
      pageType: "page",
      name: "Board",
      elementOrder: [],
      elements: {},
      background: {
        type: "none"
      }
    },
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A290 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466019],
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB208 = {
      [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466019]: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB207
    },
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB209 = {
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466016,
      name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466017,
      appVersion: "0.0.1",
      defaultPageSize: {
        ...Kd
      },
      pageOrder: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A290,
      pages: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB208,
      activePageId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466019,
      slideOrder: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A290,
      slides: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB208,
      activeSlideId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466019,
      theme: Ot
    };
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466018 != null && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB209.locale = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466018), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB209;
}
export { qd as getBoardsEmptySnapshot };
