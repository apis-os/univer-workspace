import { IMenuManagerService, MenuItemType, RibbonStartGroup, getMenuHiddenObservable } from "@univerjs/ui";
import { ClientSnapshotServerService, ExchangeFormat, IExchangeOperateService, IExchangeService, UniverExchangeClientPlugin, isCurrentUnitLoadedFromServer } from "@univerjs-pro/exchange-client";
import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceLoaderService, IUniverInstanceService, Inject, Injector, Plugin, UniverInstanceType, createIdentifier, merge } from "@univerjs/core";
import { b64EncodeUnicode, textDecoder, transformSlideDataToSnapshot, transformSnapshotToSlideData } from "@univerjs-pro/collaboration";
import { UniverLicensePlugin } from "@univerjs-pro/license";
const j = createIdentifier("slides-exchange-client.slide-exchange.service");
export { j as ISlideExchangeService };
