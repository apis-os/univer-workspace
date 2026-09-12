import{combineDrawingEffectFilter,createDrawingEffectFilter,expandDrawingEffectBounds}from'@univerjs/engine-render';
import{BooleanNumber,DependentOn,HorizontalAlign,IConfigService,ImageSourceType,Inject,Injector,JSONX,Plugin,RichTextBuilder,RichTextValue,TextX,Tools,UniverInstanceType,VerticalAlign,createIdentifier,generateRandomId,getSingleDataStreamChange,merge,toDisposable}from'@univerjs/core';
import{UniverLicensePlugin}from'@univerjs-pro/license';
import{HostExternalReferenceModel}from'@univerjs-pro/engine-formula';
const G=new Set(['line','straightConnector1','bentConnector2','bentConnector3',"bentConnector4","bentConnector5","curvedConnector2","curvedConnector3","curvedConnector4","curvedConnector5"]);function K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466350){return G.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466350);}

export { K as isConnectorShape };
