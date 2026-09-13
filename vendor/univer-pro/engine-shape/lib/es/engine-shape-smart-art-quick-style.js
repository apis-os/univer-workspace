import { combineDrawingEffectFilter, createDrawingEffectFilter, expandDrawingEffectBounds } from '@univerjs/engine-render';
import { BooleanNumber, DependentOn, HorizontalAlign, IConfigService, ImageSourceType, Inject, Injector, JSONX, Plugin, RichTextBuilder, RichTextValue, TextX, Tools, UniverInstanceType, VerticalAlign, createIdentifier, generateRandomId, getSingleDataStreamChange, merge, toDisposable } from '@univerjs/core';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { HostExternalReferenceModel } from '@univerjs-pro/engine-formula';
import { hp, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB241 } from "./engine-shape-smart-art-quick-style-catalog.js";
import { vp } from "./internal-core-endo.js";
function xp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611328, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611329) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611330 = hp.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465517 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465517.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611329);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611330) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611328;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611331 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB241[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611330.key],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611332 = Object.fromEntries(Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611328.presentationShapes).map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465518, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465519]) => {
      if (!vp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465519.role)) return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465518, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465519];
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB90 = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465519.shapeData,
        'scene3d': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611331.scene3d,
        'shape3d': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611331.shape3d,
        'outerShadow': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611331.shadow,
        'stroke': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611331.stroke ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465519.shapeData["stroke"]
      };
      return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465518, {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465519,
        'shapeData': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB90
      }];
    }));
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611328,
    'style': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611328.style,
      'quickStyleId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611329
    },
    'presentationShapes': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611332
  };
}
export { xp as applySmartArtQuickStyle };
