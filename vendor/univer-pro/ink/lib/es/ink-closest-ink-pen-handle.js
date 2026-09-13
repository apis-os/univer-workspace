import { ShapeFillEnum, ShapeLineCapEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { CommandType, DependentOn, ICommandService, IConfigService, Inject, Injector, Plugin, UniverInstanceType, createIdentifier, merge, toDisposable } from '@univerjs/core';
import { E } from "./ink-pen-handle-visible.js";
import { fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1, x } from "./internal-core-endo.js";
function te(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135 === "anchor" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135] ?? null;
}
function se(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265 = null,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3 = ["anchor", 'in', "out"];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262.anchors['forEach']((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648) => {
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 => {
      if (!E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468)) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 = te(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 = x(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265.distance || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265 = {
        'handle': {
          'kind': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468,
          'anchorId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.id
        },
        'point': fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469),
        'distance': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610
      });
    });
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265;
}
export { se as findClosestInkPenHandle };
