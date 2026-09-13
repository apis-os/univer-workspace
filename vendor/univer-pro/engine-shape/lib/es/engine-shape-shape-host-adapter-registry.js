import { combineDrawingEffectFilter, createDrawingEffectFilter, expandDrawingEffectBounds } from '@univerjs/engine-render';
import { BooleanNumber, DependentOn, HorizontalAlign, IConfigService, ImageSourceType, Inject, Injector, JSONX, Plugin, RichTextBuilder, RichTextValue, TextX, Tools, UniverInstanceType, VerticalAlign, createIdentifier, generateRandomId, getSingleDataStreamChange, merge, toDisposable } from '@univerjs/core';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { HostExternalReferenceModel } from '@univerjs-pro/engine-formula';
import { W } from "./internal-core-endo.js";
import { lg } from "./engine-shape-shape-host-type.js";
var fg = class {
  constructor() {
    W(this, '_adapters', new Map()), W(this, "_adapterChangedListeners", new Set()), W(this, "adapterChanged$", {
      'subscribe': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461595 => (this._adapterChangedListeners['add'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461595), {
        'unsubscribe': () => this._adapterChangedListeners["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461595)
      })
    });
  }
  register(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466133) {
    return this._adapters["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466133.hostType) ? (console.warn("[Shape Facade]: An adapter is already registered for UniverInstanceType \"" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466133.hostType + '\x22.'), toDisposable(() => {})) : (this._adapters["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466133.hostType, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466133), this._emitAdapterChanged({
      'type': "registered",
      'adapter': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466133
    }), toDisposable(() => {
      this._adapters["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466133.hostType) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466133 && (this._adapters["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466133.hostType), this._emitAdapterChanged({
        'type': "unregistered",
        'adapter': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466133
      }));
    }));
  }
  get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466135) {
    return lg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466135) ? this._adapters['get'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466135) || (console.warn('[Shape\x20Facade]:\x20No\x20adapter\x20is\x20registered\x20for\x20UniverInstanceType\x20\x22' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466135 + '\x22.'), null) : (console.warn("[Shape Facade]: UniverInstanceType \"" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466135 + "\" does not support Shape."), null);
  }
  list() {
    return [...this._adapters['values']()];
  }
  _emitAdapterChanged(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466137) {
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461596 of [...this._adapterChangedListeners]) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461596(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466137);
  }
};
export { fg as ShapeHostAdapterRegistry };
