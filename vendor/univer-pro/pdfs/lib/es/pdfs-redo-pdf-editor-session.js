import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { bv, fn_L0_core_endo_routine_pure_O1_zalloc_throws_SyntaxError_sigD23F, fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sig193F } from "./internal-core-endo.js";
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F23(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468461) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468462;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468463 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468461.history["redoBatchIds"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468461.history["redoBatchIds"].length - 1];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468463) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468461;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468464 = bv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468461, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468463);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468464) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468461;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468465 = fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sig193F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468461.editState, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468464.mutations, !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468464.atomic);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468465 ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468461,
    'editState': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468465,
    'selection': fn_L0_core_endo_routine_pure_O1_zalloc_throws_SyntaxError_sigD23F(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468462 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468461.history["selectionAfterByBatchId"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468462[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468463]) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468461.selection),
    'history': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468461.history,
      'undoBatchIds': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468461.history["undoBatchIds"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468463],
      'redoBatchIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468461.history["redoBatchIds"].slice(0, -1)
    }
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468461;
}
export { fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F23 as redoPdfEditorSession };
