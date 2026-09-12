import{HistorySessionService,HistorySessionStatus,UnitComparisonEntityType,UniverEditHistoryPlugin,getVersionComparison}from"@univerjs-pro/edit-history";
import{BooleanNumber,CellValueType,ColorKit,CommandType,CustomCommandExecutionError,DependentOn,Disposable,HorizontalAlign,ICommandService,IConfigService,IConfirmService,ILogService,Inject,Injector,LOCALE_META,LocaleService,Plugin,ThemeService,UniverInstanceType,VerticalAlign,WrapStrategy,dateKit,merge,registerDependencies,toDisposable}from"@univerjs/core";
import{UniverLicensePlugin}from"@univerjs-pro/license";
import{BuiltInUIPart,ComponentManager,IMessageService,ISidebarService,IUIPartsService,UniverUIPlugin,connectInjector,useDependency,useObservable}from"@univerjs/ui";
import{Button,MessageType,borderBottomClassName,clsx}from"@univerjs/design";
import{BehaviorSubject}from"rxjs";
import{AiAssistantMultiIcon,ArrowLeftIcon,LoadingMultiIcon,MoreDownIcon,MoreRightIcon}from"@univerjs/icons";
import{Fragment,useMemo,useState}from"react";
import{jsx,jsxs}from"react/jsx-runtime";
import{IRenderManagerService,Rect}from"@univerjs/engine-render";
import { z } from "./internal-glue.js";
var B=class extends Disposable{constructor(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663){super(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663),z(this,"_adapters",new Map());}register(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665){if(this._adapters["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665.type))throw Error("[HistoryRenderAdapterRegistryService]:\x20Adapter\x20for\x20unit\x20type\x20"+var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665.type+" is already registered.");return this._adapters["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665.type,var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665),toDisposable(()=>{this._adapters["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665.type)===var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665&&this._adapters["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665.type);});}get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667){return this._adapters["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667);}dispose(){this._adapters["clear"](),super.dispose();}};

export { B as HistoryRenderAdapterRegistryService };
