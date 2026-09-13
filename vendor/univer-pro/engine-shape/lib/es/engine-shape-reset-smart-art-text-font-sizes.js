import { combineDrawingEffectFilter, createDrawingEffectFilter, expandDrawingEffectBounds } from '@univerjs/engine-render';
import { BooleanNumber, DependentOn, HorizontalAlign, IConfigService, ImageSourceType, Inject, Injector, JSONX, Plugin, RichTextBuilder, RichTextValue, TextX, Tools, UniverInstanceType, VerticalAlign, createIdentifier, generateRandomId, getSingleDataStreamChange, merge, toDisposable } from '@univerjs/core';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { HostExternalReferenceModel } from '@univerjs-pro/engine-formula';
import { zp } from "./internal-core-endo.js";
function Rp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611482) {
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611482,
    'nodes': Object.fromEntries(Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611482.nodes).map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465563, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465564]) => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465563, {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465564,
      'fontSizeMode': "auto",
      'text': zp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465564.text, "auto")
    }]))
  };
}
export { Rp as resetSmartArtTextFontSizes };
