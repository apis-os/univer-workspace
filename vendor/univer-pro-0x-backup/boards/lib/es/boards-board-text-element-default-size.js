import{BooleanNumber,ColorKit,CommandType,CustomCommandExecutionError,DependentOn,Disposable,DrawingTypeEnum,GridType,HorizontalAlign,ICommandService,IConfigService,IPermissionService,IUndoRedoService,IUniverInstanceService,Inject,Injector,PermissionStatus,Plugin,Tools,UnitModel,UniverInstanceType,VerticalAlign,WrapStrategy,createIdentifier,createParagraphId,createSectionId,generateRandomId,merge,normalizeDrawingOrderIndex,sequenceExecute,toDisposable}from"@univerjs/core";
import{BehaviorSubject,Subject,map,merge as mergeLocal,mergeMap}from"rxjs";
import{UnitDrawingService}from"@univerjs/drawing";
import{IShapeHostAdapterRegistry,ShapeArrowSizeEnum,ShapeArrowTypeEnum,ShapeFillEnum,ShapeLineCapEnum,ShapeLineDashEnum,ShapeLineJoinEnum,ShapeLineTypeEnum,ShapeOperatorEnum,ShapeTextAutoFitType,ShapeTextDirection,ShapeTextWrapType,ShapeTypeEnum,UniverShapePlugin,canApplyShapeFormulaLastValue,computeConnectorRouteLayout,createUniqueShapeName,isConnectorShape,isCurvedConnectorShape,resolveConnectorRoutePoints,resolveShapeConnectionPoint,resolveShapeDefaultInsertSize}from"@univerjs-pro/engine-shape";
import{UnitAction,UnitObject}from"@univerjs/protocol";
import{UniverLicensePlugin}from"@univerjs-pro/license";
import { Zi } from "./boards-board-insert-default-size.js";
function ia(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463414=true){return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463414?{width:Zi.textBoxWidth,height:Zi.textBoxHeight}:{width:Zi.textBoxHeight,height:Zi.textBoxWidth};}

export { ia as resolveBoardTextElementDefaultSize };
