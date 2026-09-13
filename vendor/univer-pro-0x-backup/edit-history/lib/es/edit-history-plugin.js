import{CommandType,DependentOn,Disposable,ICommandService,IConfigService,IUndoRedoService,IUniverInstanceService,Inject,Injector,Plugin,Tools,UniverInstanceType,merge,registerDependencies,toDisposable}from"@univerjs/core";
import{RevertRevisionMutation,UniverCollaborationPlugin,parseProtocolChangeset}from"@univerjs-pro/collaboration";
import{UniverLicensePlugin}from"@univerjs-pro/license";
import{HTTPService}from"@univerjs/network";
import{ErrorCode}from"@univerjs/protocol";
import{BehaviorSubject}from"rxjs";
import { Ue, q } from "./edit-history-plugin-config-key.js";
import { Ke } from "./internal-glue.js";
import { Y } from "./edit-history-history-gateway.js";
import { X } from "./edit-history-history-mutation.js";
import { Z } from "./edit-history-history-restore.js";
import { J } from "./edit-history-history-unit-adapter-registry.js";
import { Q } from "./edit-history-history-session-status.js";
import { R } from "./edit-history-unit-comparison-adapter-registry.js";
import { K } from "./edit-history-unit-comparison.js";
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46764=class extends Plugin{constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333=q,var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334,var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335,var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336){super(),this._config=var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333,this._injector=var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334,this._configService=var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335,this._commandService=var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336;let{...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337}=merge({},q,this._config);this._configService["setConfig"](Ue,var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337);}onStarting(){this.disposeWithMe(this._commandService["registerCommand"](Ke)),registerDependencies(this._injector,[[Y],[X],[Z],[J],[Q],[R],[K]]);}};

export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46764 as UniverEditHistoryPlugin };
