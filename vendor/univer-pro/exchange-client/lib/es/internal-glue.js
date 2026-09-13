import { UniverLicensePlugin } from "@univerjs-pro/license";
import { DependentOn, Disposable, IConfigService, ILogService, IUniverInstanceService, Inject, Injector, LocaleService, Plugin, UniverInstanceType, createIdentifier, merge, registerDependencies, resolveWithBasePath, toDisposable, touchDependencies } from "@univerjs/core";
import { HTTPEventType, HTTPResponseError, HTTPService, UniverNetworkPlugin } from "@univerjs/network";
import { ClockIcon, CloseIcon, DirectExportIcon, DocsMultiIcon, ErrorIcon, ExportIcon, FolderIcon, LoadingMultiIcon, ShareRangeIcon, SheetsMultiIcon, SlidesMultiIcon, SuccessIcon } from "@univerjs/icons";
import { BuiltInUIPart, ComponentManager, IMessageService, IUIPartsService, IconManager, connectInjector, useDependency, useObservable } from "@univerjs/ui";
import { Button, MessageType, Radio, Select, Tooltip, clsx, scrollbarClassName } from "@univerjs/design";
import { useRef, useState } from "react";
import { ErrorCode, FileSource } from "@univerjs/protocol";
import { jsx, jsxs } from "react/jsx-runtime";
import { BehaviorSubject, Subject } from "rxjs";
import { ISnapshotServerService, SnapshotService, b64EncodeUnicode, textDecoder, textEncoder } from "@univerjs-pro/collaboration";
import { deflateSync } from "fflate";
import { G, K, Q, Y, Z, nt, q, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46617 } from "./exchange-client-plugin.js";
import { J } from "./exchange-client-iexchange-service.js";
var Pe = "@univerjs-pro/exchange-client",
  Fe = "1.0.0-insiders.20260907-70fc579";
function V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488) {
  "@babel/helpers - typeof";

  return V = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673;
  }, V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46488);
}
function Je(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491) {
  if (V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46492.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491 || "default");
    if (V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46493;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46491 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46490);
}
function Ye(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499 = Je(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498, "string");
  return V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499 + "";
}
function H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503 = Ye(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502;
}
function U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508);
  };
}
function W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46515);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46512[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46518(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46516 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46513, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46514, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46517;
}
G = W([U(0, IConfigService), U(1, Inject(HTTPService))], G);
K = W([U(0, Inject(IconManager)), U(1, Inject(ComponentManager))], K);
Y = W([U(0, IConfigService), U(1, Inject(HTTPService)), U(2, Inject(nt))], Y);
Z = W([U(0, Inject(IUniverInstanceService)), U(1, IMessageService), U(2, Inject(LocaleService)), U(3, Inject(J)), U(4, Inject(q)), U(5, ILogService)], Z);
Q = W([U(0, Inject(Injector)), U(1, IUIPartsService)], Q);
H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46617, "pluginName", "UNIVER_EXCHANGE_CLIENT_PLUGIN"), H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46617, "packageName", Pe), H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46617, "version", Fe), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46617 = W([DependentOn(UniverLicensePlugin, UniverNetworkPlugin), U(1, Inject(Injector)), U(2, IConfigService)], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46617);
export { H };
