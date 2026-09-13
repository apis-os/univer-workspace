import { combineDrawingEffectFilter, createDrawingEffectFilter, expandDrawingEffectBounds } from '@univerjs/engine-render';
import { BooleanNumber, DependentOn, HorizontalAlign, IConfigService, ImageSourceType, Inject, Injector, JSONX, Plugin, RichTextBuilder, RichTextValue, TextX, Tools, UniverInstanceType, VerticalAlign, createIdentifier, generateRandomId, getSingleDataStreamChange, merge, toDisposable } from '@univerjs/core';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { HostExternalReferenceModel } from '@univerjs-pro/engine-formula';
function ag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612602, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612603) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2006 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612603.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612602.x,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2007 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612603.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612602.y,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2008 = Math.abs(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2006) > Math.abs(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2007) ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2006 >= 0 ? 0 : 180 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2007 >= 0 ? 90 : 270;
  return {
    'point': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612603
    },
    'angle': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2008,
    'bounds': {
      'left': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612603.x,
      'top': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612603.y,
      'width': 0,
      'height': 0
    }
  };
}
export { ag as createFreeConnectorPointInfo };
