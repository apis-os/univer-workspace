import { combineDrawingEffectFilter, createDrawingEffectFilter, expandDrawingEffectBounds } from '@univerjs/engine-render';
import { BooleanNumber, DependentOn, HorizontalAlign, IConfigService, ImageSourceType, Inject, Injector, JSONX, Plugin, RichTextBuilder, RichTextValue, TextX, Tools, UniverInstanceType, VerticalAlign, createIdentifier, generateRandomId, getSingleDataStreamChange, merge, toDisposable } from '@univerjs/core';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { HostExternalReferenceModel } from '@univerjs-pro/engine-formula';
import { K } from "./engine-shape-connector-shape.js";
import { cg } from "./internal-core-endo.js";
import { Yh } from "./engine-shape-compute-connector-route-layout.js";
import { Vh } from "./engine-shape-route-connector-line-shape.js";
function og(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612606, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612607, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612608, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612609) {
  if (!K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612606.shapeType)) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612610 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612606.shapeType;
  return cg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612606, Yh(Vh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612607, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612608, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612610), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612610), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4612609);
}
export { og as buildConnectorEndpointUpdate };
