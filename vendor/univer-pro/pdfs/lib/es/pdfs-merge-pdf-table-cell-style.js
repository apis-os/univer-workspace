import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
function xu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465613, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465614) {
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465613,
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465614,
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465614.borders ? {
      'borders': {
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465613 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465613.borders),
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465614.borders
      }
    } : {})
  };
}
export { xu as mergePdfTableCellStyle };
