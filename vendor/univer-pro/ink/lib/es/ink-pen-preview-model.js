import { ShapeFillEnum, ShapeLineCapEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeTypeEnum } from '@univerjs-pro/engine-shape';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { CommandType, DependentOn, ICommandService, IConfigService, Inject, Injector, Plugin, UniverInstanceType, createIdentifier, merge, toDisposable } from '@univerjs/core';
import { y } from "./internal-core-endo.js";
function ae(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250 = y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248);
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250.closed || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250.anchors["length"] === 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250.anchors["push"]({
    'id': "__ink-preview-anchor__",
    'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249.x,
    'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249.y,
    'pointType': 'corner'
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250;
}
export { ae as getInkPenPreviewModel };
