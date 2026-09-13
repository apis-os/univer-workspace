import{IDialogService,IMenuManagerService,MenuItemType,RibbonStartGroup,getMenuHiddenObservable}from"@univerjs/ui";
import{ClientSnapshotServerService,EXPORT_FORMAT_DIALOG,ExchangeFormat,IExchangeOperateService,IExchangeService,UniverExchangeClientPlugin,isCurrentUnitLoadedFromServer,transformSheetBlockMetaToString,transformWorkbookSnapshotMetaToString}from"@univerjs-pro/exchange-client";
import{CommandType,DependentOn,Disposable,ICommandService,IConfigService,IResourceLoaderService,IUniverInstanceService,Inject,Injector,LocaleService,Plugin,UniverInstanceType,createIdentifier,merge}from"@univerjs/core";
import{b64DecodeUnicode,getSheetBlocksFromSnapshot,transformSnapshotToWorkbookData,transformWorkbookDataToSnapshot}from"@univerjs-pro/collaboration";
import{WorkbookExportPermission}from"@univerjs/sheets";
import{getCurrentRangeDisable$}from"@univerjs/sheets-ui";
import{UniverLicensePlugin}from"@univerjs-pro/license";
import { B, H, U } from "./internal-glue.js";
function W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163){return{id:U,type:MenuItemType.SUBITEMS,icon:"DirectExportIcon",tooltip:"sheets-exchange-client.file",hidden$:getMenuHiddenObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163,UniverInstanceType.UNIVER_SHEET),disabled$:getCurrentRangeDisable$(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163,{workbookTypes:[WorkbookExportPermission]})};}function G(){return{id:B.id,type:MenuItemType.BUTTON,title:"sheets-exchange-client.upload",icon:"FolderIcon"};}function K(){return{id:H.id,type:MenuItemType.BUTTON,title:"sheets-exchange-client.download",icon:"ExportIcon"};}const q={[RibbonStartGroup.OTHERS]:{[U]:{order:0.03,gridLayout:{row:1,column:2,rowSpan:2,showLabel:true},menuItemFactory:W,[B.id]:{order:0,menuItemFactory:G},[H.id]:{order:1,menuItemFactory:K}}}};

export { q as SheetsExchangeClientMenuSchema };
