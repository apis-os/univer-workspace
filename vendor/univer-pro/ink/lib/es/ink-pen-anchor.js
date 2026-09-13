import { ShapeFillEnum, ShapeLineCapEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { CommandType, DependentOn, ICommandService, IConfigService, Inject, Injector, Plugin, UniverInstanceType, createIdentifier, merge, toDisposable } from '@univerjs/core';
import { y } from "./internal-core-endo.js";
function ue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294 = y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.anchors = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.anchors["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651.id !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.closed && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.anchors['length'] < 3 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.closed = false), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294;
}
export { ue as deleteInkPenAnchor };
