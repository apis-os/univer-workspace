import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
function Ue(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462223, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462224, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462225) {
  return {
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462223,
    'type': "stream",
    'storage': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462225 ? "external-file" : 'native-ref',
    'uri': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462225,
    'objectRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462224
  };
}
export { Ue as createNativeStreamAsset };
