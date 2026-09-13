import { BASE_TOOLBAR_EXTRA_ACTIONS, IBaseUIStateService, UniverBasesUIPlugin } from "@univerjs-pro/bases-ui";
import { ClientSnapshotServerService, EXPORT_FORMAT_DIALOG, ExchangeBaseExportMode, ExchangeBaseFormulaPolicy, ExchangeBaseImportMode, ExchangeFormat, IExchangeOperateService, IExchangeService, UniverExchangeClientPlugin, isCurrentUnitLoadedFromServer, transformSheetBlockMetaToString, transformWorkbookSnapshotMetaToString } from "@univerjs-pro/exchange-client";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceLoaderService, IUniverInstanceService, Inject, Injector, LocaleService, Plugin, UniverInstanceType, createIdentifier, merge } from "@univerjs/core";
import { IDialogService, IUIPartsService, connectInjector, useDependency } from "@univerjs/ui";
import { b64DecodeUnicode, getSheetBlocksFromSnapshot, transformBaseDataToSnapshot, transformSnapshotToBaseData } from "@univerjs-pro/collaboration";
import { Button, DropdownMenu, Tooltip } from "@univerjs/design";
import { DirectExportIcon, ExportIcon, FolderIcon, MoreDownIcon } from "@univerjs/icons";
import { jsx, jsxs } from "react/jsx-runtime";
import { G, U, X, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46192 } from "./bases-exchange-client-exchange-client-plugin.js";
import { H } from "./bases-exchange-client-ibase-exchange.js";
var L = "@univerjs-pro/bases-exchange-client",
  R = "1.0.0-insiders.20260907-70fc579";
function B(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46110, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46111) {
  return function (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D467, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D468) {
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46111(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D467, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D468, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46110);
  };
}
function V(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46114, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46115, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46116, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46117) {
  var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46118 = arguments.length,
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46119 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46118 < 3 ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46115 : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46117 === null ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46117 = Object.getOwnPropertyDescriptor(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46115, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46116) : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46117,
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46120;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46119 = Reflect.decorate(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46114, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46115, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46116, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46117);else {
    for (var var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46114.length - 1; var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D >= 0; var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D--) (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46120 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46114[var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D]) && (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46119 = (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46118 < 3 ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46120(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46119) : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46118 > 3 ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46120(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46115, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46116, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46119) : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46120(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46115, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46116)) || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46119);
  }
  return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46118 > 3 && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46119 && Object.defineProperty(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46115, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46116, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46119), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46119;
}
U = V([B(0, Inject(IExchangeService)), B(1, IConfigService)], U);
G = V([B(0, Inject(H)), B(1, Inject(IExchangeOperateService)), B(2, IUniverInstanceService), B(3, IResourceLoaderService)], G);
X = V([B(0, ICommandService), B(1, Inject(Injector)), B(2, IUIPartsService)], X);
function Z(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46172) {
  "@babel/helpers - typeof";

  return Z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4696) {
    return typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4696;
  } : function (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4698) {
    return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4698 && typeof Symbol == "function" && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4698.constructor === Symbol && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4698 !== Symbol.prototype ? "symbol" : typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4698;
  }, Z(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46172);
}
function de(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46174, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46175) {
  if (Z(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46174) != "object" || !var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46174) return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46174;
  var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46176 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46174[Symbol.toPrimitive];
  if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46176 !== undefined) {
    var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46177 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46176.call(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46174, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46175 || "default");
    if (Z(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46177) != "object") return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46177;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46175 === "string" ? String : Number)(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46174);
}
function fe(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46182) {
  var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46183 = de(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46182, "string");
  return Z(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46183) == "symbol" ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46183 : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46183 + "";
}
function Q(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46186, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46187, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46188) {
  return (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46187 = fe(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46187)) in var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46186 ? Object.defineProperty(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46186, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46187, {
    value: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46188,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46186[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46187] = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46188, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46186;
}
Q(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46192, "pluginName", "BASES_EXCHANGE_CLIENT_PLUGIN"), Q(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46192, "packageName", L), Q(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46192, "version", R), Q(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46192, "type", UniverInstanceType.UNIVER_BASE), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46192 = V([DependentOn(UniverLicensePlugin, UniverBasesUIPlugin, UniverExchangeClientPlugin), B(1, Inject(Injector)), B(2, IConfigService)], var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46192);
