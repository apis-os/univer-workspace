import{ArrangeTypeEnum,BooleanNumber,CommandType,CustomCommandExecutionError,DependentOn,Disposable,DrawingTypeEnum,HorizontalAlign,ICommandService,IConfigService,IPermissionService,IResourceManagerService,IUndoRedoService,IUniverInstanceService,Inject,Injector,LocaleType,PermissionStatus,Plugin,Tools,UnitModel,UniverInstanceType,VerticalAlign,createIdentifier,createParagraphId,generateRandomId,getDrawingOrderIndex,merge,normalizeDrawingOrderIndex,sequenceExecute,shallowEqual}from'@univerjs/core';
import{UnitDrawingService}from'@univerjs/drawing';
import{IShapeHostAdapterRegistry,ShapeFillEnum,ShapeLineTypeEnum,ShapeModel,ShapeTextAutoFitType,ShapeTextWrapType,ShapeTypeEnum,UniverShapePlugin,applyDocumentToShapeText,applySmartArtOperation,canApplyShapeFormulaLastValue,convertSmartArtToShapes,createDefaultInsertedShapeData,createUniqueShapeName,isConnectorShape,isSmartArtShapeData,normalizeShapeTextData}from'@univerjs-pro/engine-shape';
import{transformObjectOutOfGroup}from'@univerjs/engine-render';
import{UnitAction,UnitObject}from'@univerjs/protocol';
import{BehaviorSubject,Subject,map,merge as mergeLocal,mergeMap}from'rxjs';
import{UniverLicensePlugin}from'@univerjs-pro/license';
import { Xr } from "./slides-embed-slides-floating-custom-key.js";
import { Qr } from "./slides-embed-slides-custom-data.js";
function ei(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462322){return{'id':var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462322.hostAnchorId,'type':'text','name':var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462322.embedId,'text':'','transform':{'left':var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462322.left??96,'top':var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462322.top??72,'width':var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462322.width??560,'height':var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462322.height??315},'custom':{[Xr]:Qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462322)}};}

export { ei as createEmbedSlidesFloatingElement };
