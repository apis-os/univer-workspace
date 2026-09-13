import{CommandType,DependentOn,Disposable,ICommandService,IConfigService,IUndoRedoService,IUniverInstanceService,Inject,Injector,Plugin,Tools,UniverInstanceType,merge,registerDependencies,toDisposable}from"@univerjs/core";
import{RevertRevisionMutation,UniverCollaborationPlugin,parseProtocolChangeset}from"@univerjs-pro/collaboration";
import{UniverLicensePlugin}from"@univerjs-pro/license";
import{HTTPService}from"@univerjs/network";
import{ErrorCode}from"@univerjs/protocol";
import{BehaviorSubject}from"rxjs";
function T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544){return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544=="object"&&var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544&&!Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544)?var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46544:undefined;}

export { T as asRecord };
