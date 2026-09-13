import { combineDrawingEffectFilter, createDrawingEffectFilter, expandDrawingEffectBounds } from '@univerjs/engine-render';
import { BooleanNumber, DependentOn, HorizontalAlign, IConfigService, ImageSourceType, Inject, Injector, JSONX, Plugin, RichTextBuilder, RichTextValue, TextX, Tools, UniverInstanceType, VerticalAlign, createIdentifier, generateRandomId, getSingleDataStreamChange, merge, toDisposable } from '@univerjs/core';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { HostExternalReferenceModel } from '@univerjs-pro/engine-formula';
function jp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611408, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611409) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611410;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611411 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611408.presentationShapes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611409];
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611411 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611411.textSource === "presentation" ? [] : ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611410 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611411.textBindings) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611410.length ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611411.textBindings : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611411.dataNodeIds["map"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465534, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465535) => ({
    'dataNodeId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465534,
    'paragraphIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465535
  }))).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465536 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611408.nodes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465536.dataNodeId] !== undefined).slice().sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465537, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465538) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465537.paragraphIndex - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465538.paragraphIndex);
}
export { jp as resolveSmartArtPresentationTextBindings };
