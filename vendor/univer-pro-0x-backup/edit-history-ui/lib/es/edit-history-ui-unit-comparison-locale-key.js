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
function N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285){return"edit-history-ui.comparison."+var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285;}

export { N as unitComparisonLocaleKey };
