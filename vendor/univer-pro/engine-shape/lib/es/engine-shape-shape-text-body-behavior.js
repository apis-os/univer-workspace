import { combineDrawingEffectFilter, createDrawingEffectFilter, expandDrawingEffectBounds } from '@univerjs/engine-render';
import { BooleanNumber, DependentOn, HorizontalAlign, IConfigService, ImageSourceType, Inject, Injector, JSONX, Plugin, RichTextBuilder, RichTextValue, TextX, Tools, UniverInstanceType, VerticalAlign, createIdentifier, generateRandomId, getSingleDataStreamChange, merge, toDisposable } from '@univerjs/core';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { HostExternalReferenceModel } from '@univerjs-pro/engine-formula';
import { fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F2, ge, ye } from "./internal-core-endo.js";
function be(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466376) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466376 == "number" && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466376) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466376 : undefined;
}
function xe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466378) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466379 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466378.shapeText;
  return {
    'isTextBox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466378.isTextBox === true,
    'autoFitType': ge(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466379),
    'textWrap': fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466379),
    'textRectPadding': ye(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466378),
    'fontScale': be(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466379 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466379.fontScale),
    'horizontalAnchor': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466379 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466379.horizontalAnchor,
    'lineSpaceReduction': be(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466379 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466379.lineSpaceReduction)
  };
}
export { xe as resolveShapeTextBodyBehavior };
