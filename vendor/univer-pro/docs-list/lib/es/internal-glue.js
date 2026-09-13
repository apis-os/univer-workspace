import { BuildTextUtils, CommandType, DOC_RANGE_TYPE, DependentOn, ICommandService, IConfigService, IUniverInstanceService, Inject, Injector, JSONX, ListGlyphType, PRESET_LIST_TYPE, Plugin, Tools, UniverInstanceType, getParagraphContentStartOffset, getParagraphContentStartOffsets, merge } from "@univerjs/core";
import { DocSelectionManagerService, RichTextEditingMutation, UniverDocsPlugin } from "@univerjs/docs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { q, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354 } from "./docs-list-plugin.js";
var pe = "@univerjs-pro/docs-list",
  J = "1.0.0-insiders.20260907-70fc579";
function X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316);
  };
}
function me(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325;
}
function Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334) {
  "@babel/helpers - typeof";

  return Z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648;
  }, Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334);
}
function he(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337) {
  if (Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337 || "default");
    if (Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336);
}
function ge(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345 = he(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344, "string");
  return Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345 + "";
}
function Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349 = ge(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348;
}
Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354, "pluginName", q), Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354, "packageName", pe), Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354, "version", J), Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354, "type", UniverInstanceType.UNIVER_DOC), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354 = me([DependentOn(UniverLicensePlugin, UniverDocsPlugin), X(1, Inject(Injector)), X(2, ICommandService), X(3, IConfigService)], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354);
