import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { bv, fn_L0_core_endo_routine_pure_O1_zalloc_throws_SyntaxError_sigD23F, fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sig193F } from "./internal-core-endo.js";
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F22(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468449) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468450;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468451 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468449.history["undoBatchIds"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468449.history["undoBatchIds"].length - 1];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468451) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468449;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468452 = bv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468449, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468451),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468453 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468452 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468452.mutations["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461722 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461722.inverse).reverse();
  if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468453 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468453.every(xv))) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468449;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468454 = fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sig193F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468449.editState, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468453, !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468452 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468452.atomic));
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468454 ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468449,
    'editState': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468454,
    'selection': fn_L0_core_endo_routine_pure_O1_zalloc_throws_SyntaxError_sigD23F(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468450 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468449.history["selectionBeforeByBatchId"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468450[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468451]) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468449.selection),
    'history': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468449.history,
      'undoBatchIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468449.history["undoBatchIds"].slice(0, -1),
      'redoBatchIds': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468449.history["redoBatchIds"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468451]
    }
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468449;
}
function xv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468927) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468927 == 'object' && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468927 && 'kind' in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468927 && 'payload' in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468927;
}
export { fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F22 as undoPdfEditorSession };
