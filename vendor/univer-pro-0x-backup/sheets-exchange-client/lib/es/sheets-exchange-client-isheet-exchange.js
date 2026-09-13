import{IDialogService,IMenuManagerService,MenuItemType,RibbonStartGroup,getMenuHiddenObservable}from"@univerjs/ui";
import{ClientSnapshotServerService,EXPORT_FORMAT_DIALOG,ExchangeFormat,IExchangeOperateService,IExchangeService,UniverExchangeClientPlugin,isCurrentUnitLoadedFromServer,transformSheetBlockMetaToString,transformWorkbookSnapshotMetaToString}from"@univerjs-pro/exchange-client";
import{CommandType,DependentOn,Disposable,ICommandService,IConfigService,IResourceLoaderService,IUniverInstanceService,Inject,Injector,LocaleService,Plugin,UniverInstanceType,createIdentifier,merge}from"@univerjs/core";
import{b64DecodeUnicode,getSheetBlocksFromSnapshot,transformSnapshotToWorkbookData,transformWorkbookDataToSnapshot}from"@univerjs-pro/collaboration";
import{WorkbookExportPermission}from"@univerjs/sheets";
import{getCurrentRangeDisable$}from"@univerjs/sheets-ui";
import{UniverLicensePlugin}from"@univerjs-pro/license";
const F=createIdentifier("sheets-exchange-client.sheet-exchange.service");

export { F as ISheetExchangeService };
