import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { id } from "./internal-core-endo.js";
import { Gr } from "./boards-analyze-board-model-layout.js";
const qr = {
  id: "board.command.insert-chart",
  type: CommandType.COMMAND,
  handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463080, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463081) => {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463081) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463082 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463080.get(Gr).getInsertChartMutationInfos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463081);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463082 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463082.redoMutations["length"] === 0) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463083 = sequenceExecute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463082.redoMutations, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463080.get(ICommandService));
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463083.result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463080.get(IUndoRedoService).pushUndoRedo({
      unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463081.unitId,
      redoMutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463082.redoMutations,
      undoMutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463082.undoMutations
    }), true) : (Jr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463082.rollbackMutationGroups["slice"](0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463083.index).reverse(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463080.get(ICommandService)), false);
  }
};
function Jr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463088, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463089) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463088.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856 => {
    sequenceExecute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463089);
  });
}
export { qr as InsertBoardChartCommand };
