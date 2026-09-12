import{CommandType,DependentOn,Disposable,ICommandService,IConfigService,IUndoRedoService,IUniverInstanceService,Inject,Injector,Plugin,Tools,UniverInstanceType,merge,registerDependencies,toDisposable}from"@univerjs/core";
import{RevertRevisionMutation,UniverCollaborationPlugin,parseProtocolChangeset}from"@univerjs-pro/collaboration";
import{UniverLicensePlugin}from"@univerjs-pro/license";
import{HTTPService}from"@univerjs/network";
import{ErrorCode}from"@univerjs/protocol";
import{BehaviorSubject}from"rxjs";
import { Ke } from "./internal-glue.js";
let Z=class{constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291){this._commandService=var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291;}async restore(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293,var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294,var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295){return!!(await this._commandService["executeCommand"](Ke.id,{unitId:var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293,type:var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294,revision:var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46295}));}};

export { Z as HistoryRestoreService };
