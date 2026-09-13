import{BASE_TOOLBAR_EXTRA_ACTIONS,IBaseUIStateService,UniverBasesUIPlugin}from"@univerjs-pro/bases-ui";
import{ClientSnapshotServerService,EXPORT_FORMAT_DIALOG,ExchangeBaseExportMode,ExchangeBaseFormulaPolicy,ExchangeBaseImportMode,ExchangeFormat,IExchangeOperateService,IExchangeService,UniverExchangeClientPlugin,isCurrentUnitLoadedFromServer,transformSheetBlockMetaToString,transformWorkbookSnapshotMetaToString}from"@univerjs-pro/exchange-client";
import{UniverLicensePlugin}from"@univerjs-pro/license";
import{CommandType,DependentOn,Disposable,ICommandService,IConfigService,IResourceLoaderService,IUniverInstanceService,Inject,Injector,LocaleService,Plugin,UniverInstanceType,createIdentifier,merge}from"@univerjs/core";
import{IDialogService,IUIPartsService,connectInjector,useDependency}from"@univerjs/ui";
import{b64DecodeUnicode,getSheetBlocksFromSnapshot,transformBaseDataToSnapshot,transformSnapshotToBaseData}from"@univerjs-pro/collaboration";
import{Button,DropdownMenu,Tooltip}from"@univerjs/design";
import{DirectExportIcon,ExportIcon,FolderIcon,MoreDownIcon}from"@univerjs/icons";
import{jsx,jsxs}from"react/jsx-runtime";
const H=createIdentifier("bases-exchange-client.base-exchange.service");

export { H as IBaseExchangeService };
