import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { id } from "./internal-core-endo.js";
import { al } from "./boards-add-board-elements-operation.js";
const sl = {
    id: "board.operation.add-element",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464914, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464915) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464915 ? al.handler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464914, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464915.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464915.subUnitId,
      elements: [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464915.element],
      insertIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464915.insertIndex,
      fitContainerId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464915.fitContainerId
    }) : false
  },
  cl = createIdentifier("board.container-adapter.service");
export { sl as AddBoardElementOperation, cl as IBoardContainerAdapterService };
