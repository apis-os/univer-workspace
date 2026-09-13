import { IMenuManagerService, MenuItemType, RibbonStartGroup, getMenuHiddenObservable } from "@univerjs/ui";
import { ClientSnapshotServerService, ExchangeDocType, ExchangeFormat, IExchangeOperateService, IExchangeService, UniverExchangeClientPlugin, isCurrentUnitLoadedFromServer } from "@univerjs-pro/exchange-client";
import { CommandType, DependentOn, Disposable, DocumentFlavor, ICommandService, IConfigService, IResourceLoaderService, IUniverInstanceService, Inject, Injector, Plugin, UniverInstanceType, createIdentifier, merge, touchDependencies } from "@univerjs/core";
import { b64EncodeUnicode, textDecoder, transformDocumentDataToSnapshot, transformSnapshotToDocumentData } from "@univerjs-pro/collaboration";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { B, R, z } from "./internal-glue.js";
function V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113) {
  return {
    id: B,
    type: MenuItemType.SUBITEMS,
    icon: "DirectExportIcon",
    tooltip: "docs-exchange-client.file",
    hidden$: getMenuHiddenObservable(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113, UniverInstanceType.UNIVER_DOC)
  };
}
function H() {
  return {
    id: R.id,
    type: MenuItemType.BUTTON,
    title: "docs-exchange-client.upload",
    icon: "FolderIcon"
  };
}
function U() {
  return {
    id: z.id,
    type: MenuItemType.BUTTON,
    title: "docs-exchange-client.download",
    icon: "ExportIcon"
  };
}
const W = {
  [RibbonStartGroup.OTHERS]: {
    [B]: {
      order: 0.3,
      gridLayout: {
        row: 1,
        column: 2,
        rowSpan: 2,
        showLabel: true
      },
      menuItemFactory: V,
      [R.id]: {
        order: 0,
        menuItemFactory: H
      },
      [z.id]: {
        order: 1,
        menuItemFactory: U
      }
    }
  }
};
export { W as DocsExchangeClientMenuSchema };
