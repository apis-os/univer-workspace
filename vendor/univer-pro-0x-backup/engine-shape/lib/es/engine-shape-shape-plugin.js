import{combineDrawingEffectFilter,createDrawingEffectFilter,expandDrawingEffectBounds}from'@univerjs/engine-render';
import{BooleanNumber,DependentOn,HorizontalAlign,IConfigService,ImageSourceType,Inject,Injector,JSONX,Plugin,RichTextBuilder,RichTextValue,TextX,Tools,UniverInstanceType,VerticalAlign,createIdentifier,generateRandomId,getSingleDataStreamChange,merge,toDisposable}from'@univerjs/core';
import{UniverLicensePlugin}from'@univerjs-pro/license';
import{HostExternalReferenceModel}from'@univerjs-pro/engine-formula';
import { dg } from "./engine-shape-ishape-host-adapter-registry.js";
import { fg } from "./engine-shape-shape-host-adapter-registry.js";
import { gg } from "./engine-shape-iconnector-shape-host-adapter.js";
import { hg } from "./engine-shape-connector-shape-host-adapter.js";
const mh={};let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613046=class extends Plugin{constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466269=mh,var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466270,var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466271){super(),this._config=var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466269,this._injector=var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466270,this._configService=var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466271;let{...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466272}=merge({},mh,this._config);this._configService["setConfig"]('engine-shape.config',var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466272);}onStarting(){[[dg,{'useClass':fg}],[gg,{'useClass':hg}]].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461598=>this._injector["add"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461598));}};

export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613046 as UniverShapePlugin };
