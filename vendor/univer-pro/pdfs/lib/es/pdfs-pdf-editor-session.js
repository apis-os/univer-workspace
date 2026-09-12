import{CommandType,DEFAULT_STYLES,DependentOn,Disposable,ICommandService,IConfigService,IUniverInstanceService,ImageSourceType,Inject,Injector,Plugin,UnitModel,UniverInstanceType,generateRandomId,merge}from'@univerjs/core';
import{BehaviorSubject,Subject}from'rxjs';
import{UniverLicensePlugin}from'@univerjs-pro/license';
import { ct } from "./pdfs-pdf-editor-session-schema.js";
import { zv } from "./pdfs-pdf-editor-edit-state.js";
function Bv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468993){let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468994=var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468993.now??Date.now();return{'schema':ct,'schemaVersion':1,'id':var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468993.id,'documentId':var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468993.documentId,'status':var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468993.status??'active','mode':var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468993.mode??'select','baseDocumentRevision':var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468993.baseDocumentRevision??0,'editState':zv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468993.documentId),'mutationLog':{'documentId':var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468993.documentId,'batches':[],'pendingMutationIds':[],'acknowledgedMutationIds':{},'rejectedMutationIds':{}},'selection':{'anchors':[],'updatedAt':var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468994},'history':{'undoBatchIds':[],'redoBatchIds':[],'checkpointRevision':0},'drafts':{}};}

export { Bv as createPdfEditorSession };
