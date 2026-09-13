import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { id } from "./internal-core-endo.js";
import { Su } from "./boards-materialize-board-import-draft.js";
import { al } from "./boards-add-board-elements-operation.js";
import { hs } from "./boards-board-elements.js";
import { ks } from "./boards-remove-board-elements-operation.js";
const Cu = {
    id: "board.operation.insert-draft",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465318, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465319) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465319 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465319.draft["elements"].length === 0) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465320 = Su({
        draft: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465319.draft,
        containerName: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465319.containerName,
        position: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465319.position
      });
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465318.get(ICommandService).syncExecuteCommand(al.id, {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465319.unitId,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465319.subUnitId,
        elements: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465320.elements,
        insertIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465319.insertIndex
      }) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465320 : false;
    }
  },
  wu = {
    id: "board.operation.insert-table",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465324, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465325) => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465325 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465325.unitId || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465325.subUnitId || !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465325.left) || !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465325.top) ? false : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465324.get(hs).insertTable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465325)
  },
  Tu = {
    id: "board.operation.remove-element",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465326, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465327) => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465327 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465327.elementId ? false : ks.handler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465326, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465327.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465327.subUnitId,
      elementIds: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465327.elementId]
    })
  };
export { Cu as InsertBoardDraftOperation, wu as InsertBoardTableOperation, Tu as RemoveBoardElementOperation };
