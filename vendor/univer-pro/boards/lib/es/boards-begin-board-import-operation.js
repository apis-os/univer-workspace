import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { id } from "./internal-core-endo.js";
import { ml } from "./boards-begin-board-export-operation.js";
const gl = {
    id: "board.operation.begin-import",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464920, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464921) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464921 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464920.get(ml).beginImport(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464921) : false
  },
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466257 = createIdentifier("board.mind-map-adapter.service");
export { gl as BeginBoardImportOperation, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466257 as IBoardMindMapAdapterService };
