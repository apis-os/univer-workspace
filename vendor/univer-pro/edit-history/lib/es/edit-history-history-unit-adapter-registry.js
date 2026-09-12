import{CommandType,DependentOn,Disposable,ICommandService,IConfigService,IUndoRedoService,IUniverInstanceService,Inject,Injector,Plugin,Tools,UniverInstanceType,merge,registerDependencies,toDisposable}from"@univerjs/core";
import{RevertRevisionMutation,UniverCollaborationPlugin,parseProtocolChangeset}from"@univerjs-pro/collaboration";
import{UniverLicensePlugin}from"@univerjs-pro/license";
import{HTTPService}from"@univerjs/network";
import{ErrorCode}from"@univerjs/protocol";
import{BehaviorSubject}from"rxjs";
import { L } from "./internal-glue.js";
var We="@univerjs-pro/edit-history",Ge="1.0.0-insiders.20260907-70fc579",J=class extends Disposable{constructor(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231){super(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231),L(this,"_adapters",new Map());}register(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233){if(this._adapters["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233.type))throw Error("[HistoryUnitAdapterRegistryService]:\x20Adapter\x20for\x20unit\x20type\x20"+var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233.type+" is already registered.");return this._adapters["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233.type,var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233),toDisposable(()=>{this._adapters["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233.type)===var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233&&this._adapters["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233.type);});}get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235){return this._adapters["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235);}dispose(){this._adapters["clear"](),super.dispose();}};

export { J as HistoryUnitAdapterRegistryService };

export { We, Ge };
