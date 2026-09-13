import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { k } from "./internal-core-endo.js";
var ly = class {
    constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461827) {
      k(this, "_pages", undefined), k(this, '_pageOrder', undefined);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461828 = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461827.pages].sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46590.index - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46591.index);
      this._pages = new Map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461828.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46592])), this._pageOrder = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461828.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46593.id);
    }
    async getPage(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461831) {
      return this._pages["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461831);
    }
    async getPages(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461833) {
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A61 = [];
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46594 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461833) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164 = this._pages["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46594);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A61.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46164);
      }
      return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A61;
    }
    async getPageOrder() {
      return [...this._pageOrder];
    }
  },
  uy = class {
    constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461835, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461836 = {}) {
      k(this, '_assets', undefined), k(this, '_durableBindings', undefined), k(this, "_derivedBindings", new Map()), this._assets = dy(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461835), this._durableBindings = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461836
      };
    }
    async getAsset(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461839) {
      return this._assets["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461839);
    }
    async getBinding(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461841) {
      return this._durableBindings[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461841];
    }
    async getDerivedBinding(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461843) {
      return this._derivedBindings["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461843);
    }
    setDerivedBinding(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461845, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846) {
      this._derivedBindings["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461845, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846);
    }
    deleteDerivedBinding(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461849) {
      this._derivedBindings["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461849);
    }
    getDurableBindings() {
      return {
        ...this._durableBindings
      };
    }
  };
function dy(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469069) {
  let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5992 = new Map(),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A457 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469069.fonts, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469069.images, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469069.formXObjects, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469069.colorProfiles, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469069.patterns, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469069.shadings, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469069.attachments, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469069.streams];
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461851 of var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A457) for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461851)) var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5992.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46595, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46596);
  return var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5992;
}
export { ly as InMemoryPdfPageProvider, uy as InMemoryPdfResourceProvider };
