import{CommandType,DEFAULT_STYLES,DependentOn,Disposable,ICommandService,IConfigService,IUniverInstanceService,ImageSourceType,Inject,Injector,Plugin,UnitModel,UniverInstanceType,generateRandomId,merge}from'@univerjs/core';
import{BehaviorSubject,Subject}from'rxjs';
import{UniverLicensePlugin}from'@univerjs-pro/license';
import { Uv } from "./pdfs-pdf-unit-data.js";
import { Ie } from "./pdfs-pdf-document.js";
import { Fe } from "./pdfs-pdf-page.js";
import { S } from "./pdfs-pt-to-emu.js";
function cy(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469065=generateRandomId(6),var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469066='Untitled\x20PDF'){return Uv({'id':var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469065,'name':var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469066,'document':Ie({'id':var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469065,'title':var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469066,'pages':[Fe({'id':var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469065+'-page-1','index':0,'size':{'width':S(595),'height':S(842)}})]})});}

export { cy as getPdfsEmptySnapshot };
