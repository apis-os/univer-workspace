import { combineDrawingEffectFilter, createDrawingEffectFilter, expandDrawingEffectBounds } from '@univerjs/engine-render';
import { BooleanNumber, DependentOn, HorizontalAlign, IConfigService, ImageSourceType, Inject, Injector, JSONX, Plugin, RichTextBuilder, RichTextValue, TextX, Tools, UniverInstanceType, VerticalAlign, createIdentifier, generateRandomId, getSingleDataStreamChange, merge, toDisposable } from '@univerjs/core';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { HostExternalReferenceModel } from '@univerjs-pro/engine-formula';
import { Rg } from "./engine-shape-shape-text-data.js";
import { Fg } from "./engine-shape-text-to-shape-text.js";
import { Lg } from "./engine-shape-document-to-shape-text.js";
function Ig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612766, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612767) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612768, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612769, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612770;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612771 = Rg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612766) ?? Fg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612766, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612766 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612766.text) ?? ''),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612772 = Tools.deepClone((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612768 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612771.dataModel) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612768.doc);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612772.documentStyle = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612772.documentStyle,
    'textStyle': {
      ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612769 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612772.documentStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612769.textStyle),
      ...Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612767)
    }
  }, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612770 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612772.body) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612770 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612770.textRuns) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612770.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466287 => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466287.ts = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466287.ts,
      ...Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612767)
    };
  }), Lg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612771, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612772);
}
export { Ig as applyShapeTextStyle };
