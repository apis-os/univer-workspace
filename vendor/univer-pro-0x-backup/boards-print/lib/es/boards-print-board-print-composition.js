import{CommandType,DependentOn,Disposable,ICommandService,IConfigService,IImageIoService,IUniverInstanceService,ImageSourceType,Inject,Injector,LocaleService,Plugin,ThemeService,UniverInstanceType,delayAnimationFrame,generateRandomId,merge,registerDependencies,toDisposable}from"@univerjs/core";
import{MessageType}from"@univerjs/design";
import{BuiltInUIPart,ILocalFileService,IMessageService,IUIPartsService,connectInjector,useDependency,useObservable}from"@univerjs/ui";
import{BoardBackgroundType,BoardElementType,IBoardElementService,ResolveBoardCaptureBoundsCommand,UniverBoardsPlugin,resolveBoardElementParentChain}from"@univerjs-pro/boards";
import{BOARDS_UI_PLUGIN_CONFIG_KEY,BOARD_RENDER_LAYER_INDEX,BoardSettingsMenuContributionSubmenu,IBoardSettingsMenuContributionService,UniverBoardsUIPlugin,createBoardElementRenderObject,resolveBoardRenderAdapters}from"@univerjs-pro/boards-ui";
import{IShapeHostAdapterRegistry}from"@univerjs-pro/engine-shape";
import{IPrintPreparationService,PrintPreparationService}from"@univerjs-pro/print";
import{FormulaShapeResultStatus,ShapeFormulaService}from"@univerjs-pro/shape-editor";
import{CanvasRenderMode,Engine,ICanvasColorService,MAIN_VIEW_PORT_KEY,Scene,Viewport}from"@univerjs/engine-render";
import{BehaviorSubject}from"rxjs";
import{UniverLicensePlugin}from"@univerjs-pro/license";
import{DownloadImageIcon,LoadingMultiIcon,PrintIcon}from"@univerjs/icons";
import{jsx,jsxs}from"react/jsx-runtime";
import { R } from "./internal-glue.js";
var z=class{constructor(){R(this,"_transformers",new Set());}register(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690){return this._transformers["add"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690),toDisposable(()=>this._transformers["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690));}transform(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692,var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693){return Array.from(this._transformers).reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618,var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619)=>var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618,var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693),var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692);}};

export { z as BoardPrintCompositionService };
