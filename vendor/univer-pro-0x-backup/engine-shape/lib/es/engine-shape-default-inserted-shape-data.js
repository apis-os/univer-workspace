import{combineDrawingEffectFilter,createDrawingEffectFilter,expandDrawingEffectBounds}from'@univerjs/engine-render';
import{BooleanNumber,DependentOn,HorizontalAlign,IConfigService,ImageSourceType,Inject,Injector,JSONX,Plugin,RichTextBuilder,RichTextValue,TextX,Tools,UniverInstanceType,VerticalAlign,createIdentifier,generateRandomId,getSingleDataStreamChange,merge,toDisposable}from'@univerjs/core';
import{UniverLicensePlugin}from'@univerjs-pro/license';
import{HostExternalReferenceModel}from'@univerjs-pro/engine-formula';
import { K } from "./engine-shape-connector-shape.js";
import { ce } from "./engine-shape-default-inserted-shape-style.js";
function le(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466356){return K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466356)?{'shapeType':var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466356}:{'shapeType':var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466356,'fill':{'fillType':2,'color':ce.fillColor},'stroke':{'lineStrokeType':2,'color':ce.strokeColor,'width':ce.strokeWidth},'shapeText':{'isHorizontal':true,'isRichText':false,'text':'','color':ce.textColor,'fontSize':ce.textFontSize}};}

export { le as createDefaultInsertedShapeData };
