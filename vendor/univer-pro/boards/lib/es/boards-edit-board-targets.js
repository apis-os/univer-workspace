import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { ac } from "./boards-board-permission-value.js";
function cc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464476, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464477, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464478) {
  return ac(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464476, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464477, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464477, UnitAction.Edit) && Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464478).every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461261 => ac(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464476, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464477, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461261, UnitAction.Edit));
}
export { cc as canEditBoardTargets };
