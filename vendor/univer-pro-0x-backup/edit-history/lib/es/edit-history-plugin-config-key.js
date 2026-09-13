import{CommandType,DependentOn,Disposable,ICommandService,IConfigService,IUndoRedoService,IUniverInstanceService,Inject,Injector,Plugin,Tools,UniverInstanceType,merge,registerDependencies,toDisposable}from"@univerjs/core";
import{RevertRevisionMutation,UniverCollaborationPlugin,parseProtocolChangeset}from"@univerjs-pro/collaboration";
import{UniverLicensePlugin}from"@univerjs-pro/license";
import{HTTPService}from"@univerjs/network";
import{ErrorCode}from"@univerjs/protocol";
import{BehaviorSubject}from"rxjs";
const Ue="edit-history.config",q={historyServerUrl:"/universer-api/history",pageSize:20};

export { Ue as EDIT_HISTORY_PLUGIN_CONFIG_KEY };

export { q };
