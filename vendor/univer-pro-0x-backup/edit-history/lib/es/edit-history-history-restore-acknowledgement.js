import{CommandType,DependentOn,Disposable,ICommandService,IConfigService,IUndoRedoService,IUniverInstanceService,Inject,Injector,Plugin,Tools,UniverInstanceType,merge,registerDependencies,toDisposable}from"@univerjs/core";
import{RevertRevisionMutation,UniverCollaborationPlugin,parseProtocolChangeset}from"@univerjs-pro/collaboration";
import{UniverLicensePlugin}from"@univerjs-pro/license";
import{HTTPService}from"@univerjs/network";
import{ErrorCode}from"@univerjs/protocol";
import{BehaviorSubject}from"rxjs";
function tt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46760,var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46761){return parseProtocolChangeset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46760.data).mutations["some"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343=>var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343.id===RevertRevisionMutation.id&&Reflect.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343.params,"revision")===var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46761);}

export { tt as isHistoryRestoreAcknowledgement };
