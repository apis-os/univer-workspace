import { combineDrawingEffectFilter, createDrawingEffectFilter, expandDrawingEffectBounds } from '@univerjs/engine-render';
import { BooleanNumber, DependentOn, HorizontalAlign, IConfigService, ImageSourceType, Inject, Injector, JSONX, Plugin, RichTextBuilder, RichTextValue, TextX, Tools, UniverInstanceType, VerticalAlign, createIdentifier, generateRandomId, getSingleDataStreamChange, merge, toDisposable } from '@univerjs/core';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { HostExternalReferenceModel } from '@univerjs-pro/engine-formula';
import { Dm } from "./internal-core-endo.js";
import { Ep } from "./engine-shape-smart-art-node.js";
function Dp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611380, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611381) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611382 = Dm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611380, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611381);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611382.parentId ? Ep(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611380, {
    'nodeId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611381,
    'targetNodeId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611382.parentId,
    'position': "after"
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611380;
}
export { Dp as promoteSmartArtNode };
