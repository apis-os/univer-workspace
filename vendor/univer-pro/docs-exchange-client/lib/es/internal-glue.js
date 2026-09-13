import { IMenuManagerService, MenuItemType, RibbonStartGroup, getMenuHiddenObservable } from "@univerjs/ui";
import { ClientSnapshotServerService, ExchangeDocType, ExchangeFormat, IExchangeOperateService, IExchangeService, UniverExchangeClientPlugin, isCurrentUnitLoadedFromServer } from "@univerjs-pro/exchange-client";
import { CommandType, DependentOn, Disposable, DocumentFlavor, ICommandService, IConfigService, IResourceLoaderService, IUniverInstanceService, Inject, Injector, Plugin, UniverInstanceType, createIdentifier, merge, touchDependencies } from "@univerjs/core";
import { b64EncodeUnicode, textDecoder, transformDocumentDataToSnapshot, transformSnapshotToDocumentData } from "@univerjs-pro/collaboration";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { J, L, P, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135 } from "./docs-exchange-client-plugin.js";
import { N } from "./docs-exchange-client-idoc-exchange.js";
function A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679);
  };
}
function j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688;
}
P = j([A(0, Inject(IExchangeService))], P);
const I = createIdentifier("docs-exchange-client.doc-exchange-operate.service");
L = j([A(0, Inject(N)), A(1, Inject(IExchangeOperateService)), A(2, IUniverInstanceService), A(3, IResourceLoaderService)], L);
const R = {
    id: "docs-exchange-client.operation.import-doc",
    type: CommandType.OPERATION,
    handler: async var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105.get(I);
      return isCurrentUnitLoadedFromServer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105, UniverInstanceType.UNIVER_DOC) ? await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106.importDocToUnitId() : await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106.importDocToSnapshot(), true;
    }
  },
  z = {
    id: "docs-exchange-client.operation.export-doc",
    type: CommandType.OPERATION,
    handler: async var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109.get(I);
      return isCurrentUnitLoadedFromServer(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109, UniverInstanceType.UNIVER_DOC) ? await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.exportDocByUnitId() : await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.exportDocBySnapshot(), true;
    }
  },
  B = "docs-exchange-client.operation.exchange";
var G = "@univerjs-pro/docs-exchange-client",
  K = "1.0.0-insiders.20260907-70fc579";
J = j([A(0, ICommandService), A(1, IMenuManagerService)], J);
function Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115) {
  "@babel/helpers - typeof";

  return Y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667;
  }, Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115);
}
function X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118) {
  if (Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118 || "default");
    if (Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117);
}
function Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126 = X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125, "string");
  return Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126 + "";
}
function Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129;
}
Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135, "pluginName", "DOC_EXCHANGE_CLIENT_PLUGIN"), Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135, "packageName", G), Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135, "version", K), Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135, "type", UniverInstanceType.UNIVER_DOC), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135 = j([DependentOn(UniverLicensePlugin, UniverExchangeClientPlugin), A(1, Inject(Injector)), A(2, IConfigService)], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135);
export { R, z, I, B };
