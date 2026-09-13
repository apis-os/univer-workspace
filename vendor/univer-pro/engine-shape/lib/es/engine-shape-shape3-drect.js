import { combineDrawingEffectFilter, createDrawingEffectFilter, expandDrawingEffectBounds } from '@univerjs/engine-render';
import { BooleanNumber, DependentOn, HorizontalAlign, IConfigService, ImageSourceType, Inject, Injector, JSONX, Plugin, RichTextBuilder, RichTextValue, TextX, Tools, UniverInstanceType, VerticalAlign, createIdentifier, generateRandomId, getSingleDataStreamChange, merge, toDisposable } from '@univerjs/core';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { HostExternalReferenceModel } from '@univerjs-pro/engine-formula';
import { et } from "./engine-shape-shape3-dpoint.js";
function rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466482, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466483, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466484, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466485 = 0) {
  return {
    'topLeft': et({
      'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466482.left,
      'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466482.top,
      'z': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466485
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466483, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466484),
    'topRight': et({
      'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466482.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466482.width,
      'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466482.top,
      'z': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466485
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466483, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466484),
    'bottomRight': et({
      'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466482.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466482.width,
      'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466482.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466482.height,
      'z': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466485
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466483, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466484),
    'bottomLeft': et({
      'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466482.left,
      'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466482.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466482.height,
      'z': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466485
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466483, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466484)
  };
}
export { rt as projectShape3DRect };
