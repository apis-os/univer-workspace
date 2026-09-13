import { IMenuManagerService, MenuItemType, RibbonStartGroup, getMenuHiddenObservable } from "@univerjs/ui";
import { ClientSnapshotServerService, ExchangeFormat, IExchangeOperateService, IExchangeService, UniverExchangeClientPlugin, isCurrentUnitLoadedFromServer } from "@univerjs-pro/exchange-client";
import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceLoaderService, IUniverInstanceService, Inject, Injector, Plugin, UniverInstanceType, createIdentifier, merge } from "@univerjs/core";
import { b64EncodeUnicode, textDecoder, transformSlideDataToSnapshot, transformSnapshotToSlideData } from "@univerjs-pro/collaboration";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { F, I, L } from "./internal-glue.js";
function R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103) {
  return {
    id: L,
    type: MenuItemType.SUBITEMS,
    icon: "DirectExportIcon",
    tooltip: "slides-exchange-client.file",
    hidden$: getMenuHiddenObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103, UniverInstanceType.UNIVER_SLIDE)
  };
}
function z() {
  return {
    id: F.id,
    type: MenuItemType.BUTTON,
    title: "slides-exchange-client.upload",
    icon: "FolderIcon"
  };
}
function B() {
  return {
    id: I.id,
    type: MenuItemType.BUTTON,
    title: "slides-exchange-client.download",
    icon: "ExportIcon"
  };
}
const V = {
  [RibbonStartGroup.OTHERS]: {
    [L]: {
      order: 0.3,
      gridLayout: {
        row: 1,
        column: 3,
        rowSpan: 2,
        showLabel: true
      },
      menuItemFactory: R,
      [F.id]: {
        order: 0,
        menuItemFactory: z
      },
      [I.id]: {
        order: 1,
        menuItemFactory: B
      }
    }
  }
};
export { V as SlidesExchangeClientMenuSchema };
