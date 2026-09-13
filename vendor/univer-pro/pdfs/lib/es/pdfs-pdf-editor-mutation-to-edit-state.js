import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sig193F } from "./internal-core-endo.js";
function fn_L0_core_endo_routine_pure_O1_zalloc_throws_RangeError_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468444) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468444.documentId !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468443.documentId) throw RangeError("Mutation batch " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468444.id + " targets a different PDF Unit.");
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468445 = fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sig193F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468444.mutations, !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468444.atomic, false);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468445) throw Error("Atomic mutation batch " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468444.id + '\x20could\x20not\x20apply\x20every\x20mutation.');
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468445;
}
export { fn_L0_core_endo_routine_pure_O1_zalloc_throws_RangeError_sigD23F as applyPdfEditorMutationBatchToEditState };
