import { combineDrawingEffectFilter, createDrawingEffectFilter, expandDrawingEffectBounds } from '@univerjs/engine-render';
import { BooleanNumber, DependentOn, HorizontalAlign, IConfigService, ImageSourceType, Inject, Injector, JSONX, Plugin, RichTextBuilder, RichTextValue, TextX, Tools, UniverInstanceType, VerticalAlign, createIdentifier, generateRandomId, getSingleDataStreamChange, merge, toDisposable } from '@univerjs/core';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { HostExternalReferenceModel } from '@univerjs-pro/engine-formula';
function Pg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612732, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612733) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612734, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612735;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612736 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612732 && "dataModel" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612732 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612732.dataModel : undefined,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612737 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612736 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612734 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612736.doc) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612734 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612734.documentStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612734.renderConfig,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612738 = Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612733.getData()),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612739 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612735 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612738.documentStyle) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612735.renderConfig;
  return {
    ...Ug(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612732),
    'isHorizontal': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612732 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612732.isHorizontal) ?? true,
    'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612733.toPlainText(),
    'dataModel': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612736,
      'doc': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612738,
      'ha': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612739 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612739.horizontalAlign) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612736 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612736.ha) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612737 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612737.horizontalAlign) ?? Vg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612732),
      'va': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612739 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612739.verticalAlign) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612736 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612736.va) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612737 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612737.verticalAlign) ?? Hg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612732)
    }
  };
}
function Vg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612802) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612803 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612802 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612802.horizontalAlign;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612803 === "center" ? HorizontalAlign.CENTER : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612803 === "right" ? HorizontalAlign.RIGHT : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612803 ? HorizontalAlign.LEFT : undefined;
}
function Hg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612806) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612807 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612806 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612806.verticalAlign;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612807 === 'middle' ? VerticalAlign.MIDDLE : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612807 === "bottom" ? VerticalAlign.BOTTOM : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612807 ? VerticalAlign.TOP : undefined;
}
function Ug(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612810) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB237 = {
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612810 ?? {})
  };
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466289 of ["dataModel", "text", "isRichText", "color", "fontFamily", "fontSize", "bold", 'italic', "underline", "horizontalAlign", "verticalAlign"]) delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB237[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466289];
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB237;
}
export { Pg as applyRichTextToShapeText };
