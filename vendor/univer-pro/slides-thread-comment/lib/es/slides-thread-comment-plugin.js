import { UniverLicensePlugin } from "@univerjs-pro/license";
import { UniverSlidesPlugin } from "@univerjs-pro/slides";
import { DependentOn, Disposable, IConfigService, IResourceManagerService, Inject, Injector, Plugin, UniverInstanceType, merge } from "@univerjs/core";
import { IThreadCommentDataSourceService, TC_PLUGIN_NAME, ThreadCommentModel, UniverThreadCommentPlugin, createThreadCommentResourceHook } from "@univerjs/thread-comment";
import { g, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB } from "./slides-thread-comment-plugin-config-key.js";
const S = "SLIDE_" + TC_PLUGIN_NAME;
let C = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466) {
    super(), this._resourceManagerService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464, this._threadCommentModel = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465, this._threadCommentDataSourceService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466, this.disposeWithMe(this._resourceManagerService["registerPluginResource"](createThreadCommentResourceHook(this._threadCommentModel, this._threadCommentDataSourceService, S, [UniverInstanceType.UNIVER_SLIDE])));
  }
};
let O = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4615, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616;
    let {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617
    } = merge({}, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB, this._config);
    this._configService["setConfig"](g, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617);
  }
  onStarting() {
    this._injector["add"]([C]), this._injector["get"](C);
  }
};
export { O as UniverSlidesThreadCommentPlugin };
export { C };
