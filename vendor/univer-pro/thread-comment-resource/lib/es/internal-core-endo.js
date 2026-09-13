import { UniverLicensePlugin } from "@univerjs-pro/license";
import { DependentOn, IConfigService, Inject, Injector, Plugin, merge } from "@univerjs/core";
import { IThreadCommentDataSourceService, UniverThreadCommentPlugin } from "@univerjs/thread-comment";
import { b, f, h } from "./thread-comment-resource-plugin.js";
var l = "@univerjs-pro/thread-comment-resource",
  u = "1.0.0-insiders.20260907-70fc579";
function p(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4624, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644);
  };
}
;
function m(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652 = ox312324,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651 = Object[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652(286)](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655;
  if (typeof Reflect == var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652(268) && typeof Reflect[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652(263)] == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 = Reflect[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652(263)](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652(248)] - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 && Object[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652(288)](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654;
}
h = m([p(0, Inject(f)), p(1, IThreadCommentDataSourceService)], h);
function g(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664) {
  "@babel/helpers - typeof";

  return g = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634;
  }, g(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664);
}
;
function fn_L0_core_endo_routine_pure_O1_zalloc_throws_TypeError_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667) {
  if (g(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 || "default");
    if (g(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 === "string" ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666);
}
;
function v(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675 = ox312324,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676 = fn_L0_core_endo_routine_pure_O1_zalloc_throws_TypeError_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675(259));
  return g(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676) == var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675(271) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676 + "";
}
;
function y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681 = v(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680;
}
y(b, "pluginName", "UniverThreadCommentResourcePlugin"), y(b, "packageName", l), y(b, "version", u), b = m([DependentOn(UniverLicensePlugin, UniverThreadCommentPlugin), p(1, Inject(Injector)), p(2, IConfigService)], b);
