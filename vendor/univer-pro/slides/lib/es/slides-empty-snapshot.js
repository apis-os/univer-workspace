import{ArrangeTypeEnum,BooleanNumber,CommandType,CustomCommandExecutionError,DependentOn,Disposable,DrawingTypeEnum,HorizontalAlign,ICommandService,IConfigService,IPermissionService,IResourceManagerService,IUndoRedoService,IUniverInstanceService,Inject,Injector,LocaleType,PermissionStatus,Plugin,Tools,UnitModel,UniverInstanceType,VerticalAlign,createIdentifier,createParagraphId,generateRandomId,getDrawingOrderIndex,merge,normalizeDrawingOrderIndex,sequenceExecute,shallowEqual}from'@univerjs/core';
import{UnitDrawingService}from'@univerjs/drawing';
import{IShapeHostAdapterRegistry,ShapeFillEnum,ShapeLineTypeEnum,ShapeModel,ShapeTextAutoFitType,ShapeTextWrapType,ShapeTypeEnum,UniverShapePlugin,applyDocumentToShapeText,applySmartArtOperation,canApplyShapeFormulaLastValue,convertSmartArtToShapes,createDefaultInsertedShapeData,createUniqueShapeName,isConnectorShape,isSmartArtShapeData,normalizeShapeTextData}from'@univerjs-pro/engine-shape';
import{transformObjectOutOfGroup}from'@univerjs/engine-render';
import{UnitAction,UnitObject}from'@univerjs/protocol';
import{BehaviorSubject,Subject,map,merge as mergeLocal,mergeMap}from'rxjs';
import{UniverLicensePlugin}from'@univerjs-pro/license';
import { Xe } from "./slides-slide-by-layout.js";
import { Ze } from "./slides-default-slide-document-layers.js";
var ii='@univerjs-pro/slides',ai="1.0.0-insiders.20260907-70fc579";function oi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462340=generateRandomId(6),var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462341=LocaleType.EN_US,var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462342="Untitled Presentation"){let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462343=Xe({'layoutType':'titleAndBody','name':"Slide 1"});return{'id':var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462340,'name':var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462342,'appVersion':ai,'locale':var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462341,'defaultPageSize':{'width':960,'height':540},'slideOrder':[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462343.id],'slides':{[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462343.id]:var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462343},'activeSlideId':var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462343.id,...Ze()};}

export { oi as getSlidesEmptySnapshot };

export { ii, ai };
