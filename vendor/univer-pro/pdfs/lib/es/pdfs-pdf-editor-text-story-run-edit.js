import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { Rm } from "./internal-core-endo.js";
function km(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467141, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467142) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467143;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467144 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467143 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467142.runs) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467143[0];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467144 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467142.text === undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467142.range === undefined) return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467144,
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467141.id,
    'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467141.text
  };
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467145 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467141.text;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467142.text !== undefined) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467142.range) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467 = Rm(Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467142.range['start'], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467142.range["end"]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467145.length),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468 = Rm(Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467142.range['start'], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467142.range["end"]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467145.length);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467145 = '' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467145.slice(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467142.text + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467145.slice(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468);
    } else var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467145 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467142.text;
  }
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB216 = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467141,
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467144,
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467141.id,
    'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467145
  };
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467145 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467141.text && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467144 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467144.text) !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467145 && delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB216.glyphs, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB216;
}
export { km as applyPdfEditorTextStoryRunEdit };
