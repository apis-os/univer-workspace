import { HistorySessionService, HistorySessionStatus, UnitComparisonEntityType, UniverEditHistoryPlugin, getVersionComparison } from "@univerjs-pro/edit-history";
import { BooleanNumber, CellValueType, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, HorizontalAlign, ICommandService, IConfigService, IConfirmService, ILogService, Inject, Injector, LOCALE_META, LocaleService, Plugin, ThemeService, UniverInstanceType, VerticalAlign, WrapStrategy, dateKit, merge, registerDependencies, toDisposable } from "@univerjs/core";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { BuiltInUIPart, ComponentManager, IMessageService, ISidebarService, IUIPartsService, UniverUIPlugin, connectInjector, useDependency, useObservable } from "@univerjs/ui";
import { Button, MessageType, borderBottomClassName, clsx } from "@univerjs/design";
import { BehaviorSubject } from "rxjs";
import { AiAssistantMultiIcon, ArrowLeftIcon, LoadingMultiIcon, MoreDownIcon, MoreRightIcon } from "@univerjs/icons";
import { Fragment, useMemo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { IRenderManagerService, Rect } from "@univerjs/engine-render";
import { N } from "./edit-history-ui-unit-comparison-locale-key.js";
import { J, K, U, q, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501 } from "./edit-history-ui-edit-history-uiplugin.js";
import { B } from "./edit-history-ui-history-render-adapter-registry.js";
import { Y } from "./edit-history-ui-history-highlight.js";
import { Z } from "./edit-history-ui-history-canvas-highlight.js";
function I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322) {
  return {
    key: N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322.length ? {
      args: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322
    } : {})
  };
}
var ze = "@univerjs-pro/edit-history-ui",
  Be = "1.0.0-insiders.20260907-70fc579";
function R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325) {
  "@babel/helpers - typeof";

  return R = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4659;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661;
  }, R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325);
}
function Ve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328) {
  if (R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328 || "default");
    if (R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327);
}
function He(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336 = Ve(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335, "string");
  return R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336 + "";
}
function z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340 = He(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339;
}
function V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345);
  };
}
function H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354;
}
U = H([V(0, Inject(HistorySessionService)), V(1, Inject(B))], U);
K = H([V(0, Inject(ComponentManager))], K);
q = H([V(0, ICommandService), V(1, IConfigService)], q);
J = H([V(0, IConfigService), V(1, IConfirmService), V(2, ILogService), V(3, Inject(Injector)), V(4, Inject(LocaleService)), V(5, Inject(HistorySessionService)), V(6, Inject(U)), V(7, IMessageService), V(8, ISidebarService), V(9, IUIPartsService)], J);
Y = H([V(0, Inject(ThemeService))], Y);
Z = H([V(0, IRenderManagerService), V(1, Inject(Y))], Z);
z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501, "pluginName", "UNIVER_EDIT_HISTORY_UI_PLUGIN"), z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501, "packageName", ze), z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501, "version", Be), z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501, "type", UniverInstanceType.UNIVER_UNKNOWN), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501 = H([DependentOn(UniverLicensePlugin, UniverEditHistoryPlugin, UniverUIPlugin), V(1, Inject(Injector)), V(2, IConfigService), V(3, ILogService)], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501);
export { I, z };
