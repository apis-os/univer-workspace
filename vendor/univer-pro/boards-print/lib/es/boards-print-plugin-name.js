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
const Q="UNIVER_BOARDS_PRINT_PLUGIN";

export { Q as BOARDS_PRINT_PLUGIN_NAME };
