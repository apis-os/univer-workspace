import{CommandType,DependentOn,Disposable,ICommandService,IConfigService,IUndoRedoService,IUniverInstanceService,Inject,Injector,Plugin,Tools,UniverInstanceType,merge,registerDependencies,toDisposable}from"@univerjs/core";
import{RevertRevisionMutation,UniverCollaborationPlugin,parseProtocolChangeset}from"@univerjs-pro/collaboration";
import{UniverLicensePlugin}from"@univerjs-pro/license";
import{HTTPService}from"@univerjs/network";
import{ErrorCode}from"@univerjs/protocol";
import{BehaviorSubject}from"rxjs";
function et(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758){return{baseRevision:Math.max(0,var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758.startRevision-1),targetRevision:var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758.endRevision};}

export { et as getVersionComparison };
