import{ArrangeTypeEnum,BooleanNumber,CommandType,CustomCommandExecutionError,DependentOn,Disposable,DrawingTypeEnum,HorizontalAlign,ICommandService,IConfigService,IPermissionService,IResourceManagerService,IUndoRedoService,IUniverInstanceService,Inject,Injector,LocaleType,PermissionStatus,Plugin,Tools,UnitModel,UniverInstanceType,VerticalAlign,createIdentifier,createParagraphId,generateRandomId,getDrawingOrderIndex,merge,normalizeDrawingOrderIndex,sequenceExecute,shallowEqual}from'@univerjs/core';
import{UnitDrawingService}from'@univerjs/drawing';
import{IShapeHostAdapterRegistry,ShapeFillEnum,ShapeLineTypeEnum,ShapeModel,ShapeTextAutoFitType,ShapeTextWrapType,ShapeTypeEnum,UniverShapePlugin,applyDocumentToShapeText,applySmartArtOperation,canApplyShapeFormulaLastValue,convertSmartArtToShapes,createDefaultInsertedShapeData,createUniqueShapeName,isConnectorShape,isSmartArtShapeData,normalizeShapeTextData}from'@univerjs-pro/engine-shape';
import{transformObjectOutOfGroup}from'@univerjs/engine-render';
import{UnitAction,UnitObject}from'@univerjs/protocol';
import{BehaviorSubject,Subject,map,merge as mergeLocal,mergeMap}from'rxjs';
import{UniverLicensePlugin}from'@univerjs-pro/license';
const Xr='UNIVER_EMBED_SLIDES_FLOATING',Zr="UNIVER_EMBED_SLIDES_PAGE";

export { Xr as EMBED_SLIDES_FLOATING_CUSTOM_KEY };

export { Zr };
