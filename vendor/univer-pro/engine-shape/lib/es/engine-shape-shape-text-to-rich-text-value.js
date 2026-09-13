import { combineDrawingEffectFilter, createDrawingEffectFilter, expandDrawingEffectBounds } from '@univerjs/engine-render';
import { BooleanNumber, DependentOn, HorizontalAlign, IConfigService, ImageSourceType, Inject, Injector, JSONX, Plugin, RichTextBuilder, RichTextValue, TextX, Tools, UniverInstanceType, VerticalAlign, createIdentifier, generateRandomId, getSingleDataStreamChange, merge, toDisposable } from '@univerjs/core';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { HostExternalReferenceModel } from '@univerjs-pro/engine-formula';
import { Bg, zg } from "./internal-core-endo.js";
function Ng(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612724) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612725;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612724) return null;
  if ("dataModel" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612724 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612725 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612724.dataModel) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612725.doc) return RichTextValue.create(Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612724.dataModel["doc"]));
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612724.text === undefined) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612726 = zg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612724) ? Bg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612724) : undefined,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612727 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612726 ? RichTextBuilder.create().span(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612724.text, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612726) : RichTextBuilder.create().text(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612724.text);
  return RichTextValue.create(Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612727.getData()));
}
export { Ng as shapeTextToRichTextValue };
