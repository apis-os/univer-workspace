import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { id } from "./internal-core-endo.js";
import { L } from "./boards-iboard-element.js";
import { ol } from "./boards-add-board-elements-mutation-infos.js";
const al = {
  id: "board.operation.add-elements",
  type: CommandType.OPERATION,
  handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464874, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464875) => {
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464875) return false;
    let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464876,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464877
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464875,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464878 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464874.get(L),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464879 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464878.getElementData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464876, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464877),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464880 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464878.getElementOrder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464876, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464877),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464881 = ol({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464875,
        elementData: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464879,
        elementOrder: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464880
      });
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464881) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464882 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464874.get(ICommandService);
    return sequenceExecute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464881.redoMutations, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464882).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464874.get(IUndoRedoService).pushUndoRedo({
      unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464876,
      redoMutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464881.redoMutations,
      undoMutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464881.undoMutations
    }), true) : false;
  }
};
export { al as AddBoardElementsOperation };
