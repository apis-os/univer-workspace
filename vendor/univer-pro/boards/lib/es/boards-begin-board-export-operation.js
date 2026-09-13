import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { id } from "./internal-core-endo.js";
import { dl } from "./boards-begin-board-container-operation.js";
const pl = {
    id: "board.operation.begin-export",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464918, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464919) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464919 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464918.get(dl).beginExport(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464919) : false
  },
  ml = createIdentifier("board.import-adapter.service");
export { pl as BeginBoardExportOperation, ml as IBoardImportAdapterService };
