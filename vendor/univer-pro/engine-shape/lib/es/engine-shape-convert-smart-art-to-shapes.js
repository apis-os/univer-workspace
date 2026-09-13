import { combineDrawingEffectFilter, createDrawingEffectFilter, expandDrawingEffectBounds } from '@univerjs/engine-render';
import { BooleanNumber, DependentOn, HorizontalAlign, IConfigService, ImageSourceType, Inject, Injector, JSONX, Plugin, RichTextBuilder, RichTextValue, TextX, Tools, UniverInstanceType, VerticalAlign, createIdentifier, generateRandomId, getSingleDataStreamChange, merge, toDisposable } from '@univerjs/core';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { HostExternalReferenceModel } from '@univerjs-pro/engine-formula';
import { Qp } from "./engine-shape-smart-art-presentation-shape-data.js";
function Sm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611812) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611812.presentationShapeOrder["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465635 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611812.presentationShapes[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465635]).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465636 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465636 !== undefined).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465637 => ({
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465637.id,
    'transform': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465637.transform
    },
    'shapeData': {
      ...(Qp(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611812, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465637.id) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465637.shapeData)
    }
  }));
}
export { Sm as convertSmartArtToShapes };
