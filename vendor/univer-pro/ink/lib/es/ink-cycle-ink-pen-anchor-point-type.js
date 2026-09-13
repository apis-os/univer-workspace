import { ShapeFillEnum, ShapeLineCapEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { CommandType, DependentOn, ICommandService, IConfigService, Inject, Injector, Plugin, UniverInstanceType, createIdentifier, merge, toDisposable } from '@univerjs/core';
import { N } from "./ink-pen-anchor-point-type.js";
function P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312.anchors["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314.pointType) ?? 'corner';
  return N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2 === "corner" ? "smooth" : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2 === "smooth" ? "symmetric" : var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2 === "symmetric" ? "free" : "corner");
}
export { P as cycleInkPenAnchorPointType };
