import{BooleanNumber,ColorKit,CommandType,CustomCommandExecutionError,DependentOn,Disposable,DrawingTypeEnum,GridType,HorizontalAlign,ICommandService,IConfigService,IPermissionService,IUndoRedoService,IUniverInstanceService,Inject,Injector,PermissionStatus,Plugin,Tools,UnitModel,UniverInstanceType,VerticalAlign,WrapStrategy,createIdentifier,createParagraphId,createSectionId,generateRandomId,merge,normalizeDrawingOrderIndex,sequenceExecute,toDisposable}from"@univerjs/core";
import{BehaviorSubject,Subject,map,merge as mergeLocal,mergeMap}from"rxjs";
import{UnitDrawingService}from"@univerjs/drawing";
import{IShapeHostAdapterRegistry,ShapeArrowSizeEnum,ShapeArrowTypeEnum,ShapeFillEnum,ShapeLineCapEnum,ShapeLineDashEnum,ShapeLineJoinEnum,ShapeLineTypeEnum,ShapeOperatorEnum,ShapeTextAutoFitType,ShapeTextDirection,ShapeTextWrapType,ShapeTypeEnum,UniverShapePlugin,canApplyShapeFormulaLastValue,computeConnectorRouteLayout,createUniqueShapeName,isConnectorShape,isCurvedConnectorShape,resolveConnectorRoutePoints,resolveShapeConnectionPoint,resolveShapeDefaultInsertSize}from"@univerjs-pro/engine-shape";
import{UnitAction,UnitObject}from"@univerjs/protocol";
import{UniverLicensePlugin}from"@univerjs-pro/license";
const M={Placeholder:"placeholder",Text:"text",Shape:"shape",Image:"image",Chart:"chart",Table:"table",Diagram:"diagram",Media:"media",Group:"group",Connector:"connector",Container:"container"},je={Title:"title",CenterTitle:"centerTitle",Subtitle:"subtitle",Body:"body",Text:"text",Object:"object",Picture:"picture",Chart:"chart",Table:"table",Diagram:"diagram",Media:"media",SlideNumber:"slideNumber",Date:"date",Footer:"footer",Header:"header"},Me={Audio:"audio",Video:"video"};

export { M as BoardElementType, je as BoardPlaceholderType, Me as BoardMediaType };
