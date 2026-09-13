import{CommandType,DEFAULT_STYLES,DependentOn,Disposable,ICommandService,IConfigService,IUniverInstanceService,ImageSourceType,Inject,Injector,Plugin,UnitModel,UniverInstanceType,generateRandomId,merge}from'@univerjs/core';
import{BehaviorSubject,Subject}from'rxjs';
import{UniverLicensePlugin}from'@univerjs-pro/license';
import { ly, uy } from "./pdfs-in-memory-pdf-page-provider.js";
function Wy(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469265){return{'pages':new ly(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469265.document),'resources':new uy(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469265.document["assets"],var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469265.resourceBindings)};}

export { Wy as createInMemoryPdfDocumentProviders };
