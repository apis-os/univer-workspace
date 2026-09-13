import { combineDrawingEffectFilter, createDrawingEffectFilter, expandDrawingEffectBounds } from '@univerjs/engine-render';
import { BooleanNumber, DependentOn, HorizontalAlign, IConfigService, ImageSourceType, Inject, Injector, JSONX, Plugin, RichTextBuilder, RichTextValue, TextX, Tools, UniverInstanceType, VerticalAlign, createIdentifier, generateRandomId, getSingleDataStreamChange, merge, toDisposable } from '@univerjs/core';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { HostExternalReferenceModel } from '@univerjs-pro/engine-formula';
function wo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467440) {
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467440) {
    case 'all':
    case "list":
    case 'process':
    case "cycle":
    case 'hierarchy':
    case "relationship":
    case "matrix":
    case "pyramid":
    case "picture":
    case "timeline":
    case "team":
    case 'textCard':
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467440;
    default:
      return;
  }
}
export { wo as parseSmartArtCategory };
