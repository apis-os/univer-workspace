import { CollaborationEvent, parseProtocolChangeset } from "@univerjs-pro/collaboration";
import { CollaborationSessionService, SessionStatus, UniverCollaborationClientPlugin } from "@univerjs-pro/collaboration-client";
import { CommandType, DependentOn, Disposable, DisposableCollection, ICommandService, IConfigService, IUniverInstanceService, Inject, Injector, Plugin, RxDisposable, UniverInstanceType, merge, mergeOverrideWithDependencies, registerDependencies, toDisposable, touchDependencies } from "@univerjs/core";
import { InsertSheetMutation, SetWorksheetActiveOperation } from "@univerjs/sheets";
import { BehaviorSubject, Subject, defer, from, of } from "rxjs";
import { takeUntil, throttleTime } from "rxjs/operators";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { SetScrollOperation, SetZoomRatioOperation } from "@univerjs/sheets-ui";
import { BuiltInUIPart, IUIPartsService, connectInjector, useDependency, useObservable } from "@univerjs/ui";
import { Button, Dropdown } from "@univerjs/design";
import { LiveShareIcon } from "@univerjs/icons";
import { useMemo } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { K } from "./live-share-live-share.js";
import { J } from "./live-share-status.js";
import { Q, U, X, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197 } from "./live-share-plugin.js";
function z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125) {
  "@babel/helpers - typeof";

  return z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641;
  }, z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125);
}
function B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128) {
  if (z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128 || "default");
    if (z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127);
}
function V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136 = B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135, "string");
  return z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136 + "";
}
function H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140 = V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46141, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139;
}
function W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46146(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145);
  };
}
function G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46152);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46149[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46155(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46150, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46151, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46154;
}
K = G([W(0, IUniverInstanceService), W(1, Inject(Injector)), W(2, Inject(CollaborationSessionService))], K);
J = G([W(2, IConfigService), W(3, Inject(U)), W(4, ICommandService)], J);
var se = "@univerjs-pro/live-share",
  ce = "1.0.0-insiders.20260907-70fc579";
X = G([W(0, Inject(U))], X);
Q = G([W(0, Inject(Injector)), W(1, IUIPartsService)], Q);
H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197, "type", UniverInstanceType.UNIVER_UNKNOWN), H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197, "pluginName", "UNIVER_LIVE_SHARE_PLUGIN"), H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197, "packageName", se), H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197, "version", ce), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197 = G([DependentOn(UniverLicensePlugin, UniverCollaborationClientPlugin), W(1, Inject(Injector)), W(2, IConfigService)], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46197);
export { H };
