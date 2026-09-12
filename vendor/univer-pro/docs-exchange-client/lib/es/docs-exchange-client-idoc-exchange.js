import{IMenuManagerService,MenuItemType,RibbonStartGroup,getMenuHiddenObservable}from"@univerjs/ui";
import{ClientSnapshotServerService,ExchangeDocType,ExchangeFormat,IExchangeOperateService,IExchangeService,UniverExchangeClientPlugin,isCurrentUnitLoadedFromServer}from"@univerjs-pro/exchange-client";
import{CommandType,DependentOn,Disposable,DocumentFlavor,ICommandService,IConfigService,IResourceLoaderService,IUniverInstanceService,Inject,Injector,Plugin,UniverInstanceType,createIdentifier,merge,touchDependencies}from"@univerjs/core";
import{b64EncodeUnicode,textDecoder,transformDocumentDataToSnapshot,transformSnapshotToDocumentData}from"@univerjs-pro/collaboration";
import{UniverLicensePlugin}from"@univerjs-pro/license";
const N=createIdentifier("docs-exchange-client.doc-exchange.service");

export { N as IDocExchangeService };
