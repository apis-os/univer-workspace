import{BooleanNumber,ColorKit,CommandType,CustomCommandExecutionError,DependentOn,Disposable,DrawingTypeEnum,GridType,HorizontalAlign,ICommandService,IConfigService,IPermissionService,IUndoRedoService,IUniverInstanceService,Inject,Injector,PermissionStatus,Plugin,Tools,UnitModel,UniverInstanceType,VerticalAlign,WrapStrategy,createIdentifier,createParagraphId,createSectionId,generateRandomId,merge,normalizeDrawingOrderIndex,sequenceExecute,toDisposable}from"@univerjs/core";
import{BehaviorSubject,Subject,map,merge as mergeLocal,mergeMap}from"rxjs";
import{UnitDrawingService}from"@univerjs/drawing";
import{IShapeHostAdapterRegistry,ShapeArrowSizeEnum,ShapeArrowTypeEnum,ShapeFillEnum,ShapeLineCapEnum,ShapeLineDashEnum,ShapeLineJoinEnum,ShapeLineTypeEnum,ShapeOperatorEnum,ShapeTextAutoFitType,ShapeTextDirection,ShapeTextWrapType,ShapeTypeEnum,UniverShapePlugin,canApplyShapeFormulaLastValue,computeConnectorRouteLayout,createUniqueShapeName,isConnectorShape,isCurvedConnectorShape,resolveConnectorRoutePoints,resolveShapeConnectionPoint,resolveShapeDefaultInsertSize}from"@univerjs-pro/engine-shape";
import{UnitAction,UnitObject}from"@univerjs/protocol";
import{UniverLicensePlugin}from"@univerjs-pro/license";
import { id } from "./internal-core-endo.js";
import { Cl } from "./boards-begin-board-pen-operation.js";
import { cl } from "./boards-add-board-element-operation.js";
const Tl={id:"board.operation.begin-resources",type:CommandType.OPERATION,handler:(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464926,var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464927)=>var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464927?var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464926.get(Cl).beginResourcesPanel(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464927):false},El={id:"board.operation.begin-swimlane",type:CommandType.OPERATION,handler:(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464928,var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464929)=>var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464929?var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464928.get(cl).beginSwimlaneMode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464929):false},Dl=createIdentifier("board.translate-adapter.service");

export { Tl as BeginBoardResourcesOperation, El as BeginBoardSwimlaneOperation };

export { Dl };
