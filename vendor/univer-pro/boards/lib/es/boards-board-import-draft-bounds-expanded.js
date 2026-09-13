import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { uu } from "./internal-core-endo.js";
import { fu } from "./boards-board-import-draft-bounds.js";
import { q } from "./boards-board-rect-right.js";
import { J } from "./boards-board-rect-bottom.js";
function pu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465256) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465256.bounds) return false;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465257 = uu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465256.bounds),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465258 = fu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465256);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465258.left < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465257.left || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465258.top < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465257.top || q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465258) > q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465257) || J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465258) > J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465257);
}
export { pu as isBoardImportDraftBoundsExpanded };
