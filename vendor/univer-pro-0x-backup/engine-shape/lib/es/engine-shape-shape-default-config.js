import{combineDrawingEffectFilter,createDrawingEffectFilter,expandDrawingEffectBounds}from'@univerjs/engine-render';
import{BooleanNumber,DependentOn,HorizontalAlign,IConfigService,ImageSourceType,Inject,Injector,JSONX,Plugin,RichTextBuilder,RichTextValue,TextX,Tools,UniverInstanceType,VerticalAlign,createIdentifier,generateRandomId,getSingleDataStreamChange,merge,toDisposable}from'@univerjs/core';
import{UniverLicensePlugin}from'@univerjs-pro/license';
import{HostExternalReferenceModel}from'@univerjs-pro/engine-formula';
const q={'fillType':2,'fill':'#156082','fillOpacity':1,'gradientType':1,'gradientAngle':0,'gradientEndColor':"#ffffff",'lineType':2,'stroke':"#000000",'strokeWidth':1,'strokeOpacity':1,'cornerRadius':0,'sketchType':1,'cxnPointRadius':4,'cxnPointFill':"#FFFFFF",'cxnPointStroke':"#4472C4",'cxnPointStrokeWidth':2,'adjHandleSize':4,'adjHandleFill':"#FFFF00",'adjHandleStroke':"#FFD700",'adjHandleStrokeWidth':1,'lineDashType':1,'lineCapType':1,'lineJoinType':1,'shapeText':{'padding':4,'fontSize':14,'fontFamily':"Arial",'color':"#000000",'bold':false,'italic':false,'underline':false}};

export { q as ShapeDefaultConfig };
