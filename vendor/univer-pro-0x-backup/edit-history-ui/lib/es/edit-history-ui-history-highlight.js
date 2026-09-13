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
const et={insert:"green.800",delete:"red.800",update:"blue.800"};let Y=class extends Disposable{constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184){super(),this._themeService=var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184,z(this,"_styles",{insert:{fill:"",stroke:""},delete:{fill:"",stroke:""},update:{fill:"",stroke:""}}),this.disposeWithMe(this._themeService["currentTheme$"].subscribe(()=>this._refreshStyles()));}getStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186){return this._styles[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46186];}_refreshStyles(){this._styles={insert:this._createStyle("insert"),delete:this._createStyle("delete"),update:this._createStyle("update")};}_createStyle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188){let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189=this._themeService["getColorFromTheme"](et[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46188]);return{fill:new ColorKit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189).setAlpha(0.5).toRgbString(),stroke:new ColorKit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46189).setAlpha(0.9).toRgbString()};}};

export { Y as HistoryHighlightService };
