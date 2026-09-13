import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
function Am(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467151, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467152) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D371 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467151.length, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467152.length),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D372 = 0;
  for (; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D372 < var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D371 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467151[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D372] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467152[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D372];) var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D372 += 1;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467153 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467151.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467154 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467152.length;
  for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467153 > var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D372 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467154 > var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D372 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467151[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467153 - 1] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467152[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467154 - 1];) --var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467153, --var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467154;
  return {
    'range': {
      'start': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D372,
      'end': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467153
    },
    'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467152.slice(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D372, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467154)
  };
}
export { Am as derivePdfEditorTextEdit };
