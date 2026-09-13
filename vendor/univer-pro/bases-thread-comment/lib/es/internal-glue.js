import { UniverBasesPlugin } from "@univerjs-pro/bases";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { DependentOn, Disposable, IConfigService, IResourceManagerService, Inject, Injector, Plugin, UniverInstanceType, merge } from "@univerjs/core";
import { IThreadCommentDataSourceService, TC_PLUGIN_NAME, ThreadCommentModel, UniverThreadCommentPlugin, createThreadCommentResourceHook } from "@univerjs/thread-comment";
import { C, O } from "./bases-thread-comment-thread-comment-plugin.js";
var v = "@univerjs-pro/bases-thread-comment",
  y = "1.0.0-insiders.20260907-70fc579";
function b(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4622, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4623) {
  return function (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D461) {
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4623(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D46, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D461, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4622);
  };
}
;
function x(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4626, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4627, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4628, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4629) {
  var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4630 = ox5814ec,
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4631 = arguments.length,
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4632 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4631 < 3 ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4627 : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4629 === null ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4629 = Object[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4630(337)](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4627, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4628) : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4629,
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4633;
  if (typeof Reflect == var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4630(306) && typeof Reflect[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4630(327)] == var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4630(319)) var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4632 = Reflect.decorate(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4626, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4627, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4628, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4629);else {
    for (var var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4626[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4630(320)] - 1; var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D >= 0; var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D--) (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4633 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4626[var_L0_db_endo_countVal_pure_O1_zalloc_nothrow_sig108D]) && (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4632 = (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4631 < 3 ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4633(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4632) : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4631 > 3 ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4633(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4627, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4628, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4632) : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4633(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4627, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4628)) || var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4632);
  }
  return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4631 > 3 && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4632 && Object[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4630(313)](var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4627, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4628, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4632), var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4632;
}
C = x([b(0, IResourceManagerService), b(1, Inject(ThreadCommentModel)), b(2, IThreadCommentDataSourceService)], C);
function w(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4642) {
  "@babel/helpers - typeof";

  return w = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4610) {
    return typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4610;
  } : function (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4612) {
    return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4612 && typeof Symbol == "function" && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4612.constructor === Symbol && var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4612 !== Symbol.prototype ? "symbol" : typeof var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4612;
  }, w(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4642);
}
;
function T(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4644, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4645) {
  if (w(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4644) != "object" || !var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4644) return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4644;
  var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4646 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4644[Symbol.toPrimitive];
  if (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4646 !== undefined) {
    var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4647 = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4646.call(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4644, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4645 || "default");
    if (w(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4647) != "object") return var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4647;
    throw TypeError("@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.");
  }
  return (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4645 === "string" ? String : Number)(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4644);
}
;
function E(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4652) {
  var var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4653 = ox5814ec,
    var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4654 = T(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4652, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4653(315));
  return w(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4654) == var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4653(333) ? var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4654 : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4654 + "";
}
;
function D(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4658, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4659, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4660) {
  return (var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4659 = E(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4659)) in var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4658 ? Object.defineProperty(var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4658, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4659, {
    value: var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4660,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4658[var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4659] = var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4660, var_L0_db_endo_value_pure_O1_zalloc_nothrow_sig0D4658;
}
D(O, "pluginName", "UNIVER_BASES_THREAD_COMMENT_PLUGIN"), D(O, "packageName", v), D(O, "version", y), D(O, "type", UniverInstanceType.UNIVER_BASE), O = x([DependentOn(UniverLicensePlugin, UniverThreadCommentPlugin, UniverBasesPlugin), b(1, Inject(Injector)), b(2, IConfigService)], O);
